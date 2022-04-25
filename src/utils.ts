import moment from "moment";


export type ParsingRule = {
    regExp: RegExp,
    dateFormats: string[]
}

const PARSING_RULES: ParsingRule[] = [
    {
        regExp: new RegExp(/\d{2}\/\d{2}\/\d{2,4}/, 'g'),
        dateFormats: ["DD/MM/YY", "DD/MM/YYYY"]
    },
    {
        regExp: new RegExp(/\d{2}\.\d{2}\.\d{2,4}/, 'g'),
        dateFormats: ["DD.MM.YY", "DD.MM.YYYY"]
    },
];


const getMatches = ( 
    target : string, 
    rExp : RegExp, 
    matches : Array<RegExpExecArray> = []
) => {
    const matchIfAny = rExp.exec(target);
    matchIfAny && matches.push(matchIfAny) && getMatches(target, rExp, matches);
    return matches;
}


export const extractDates = (str:string, dateFormats:ParsingRule[] = PARSING_RULES): string[] => {

    const dates = dateFormats
            .map(rule => 
                getMatches(str, rule.regExp)
                    .map(item => item[0])
                    .filter(dateStr => rule.dateFormats
                        .find(format => moment(dateStr, format, true).isValid())))
            .flatMap(item => item);

    return dates;
}