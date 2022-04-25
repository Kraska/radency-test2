import { extractDates } from '../src/utils';

describe('testing utils.ts', () => {

  test('empty string => []', () => {
    expect(extractDates('')).toEqual([]);
  });
  
  test('Check 22/01/2022', () => {
    expect(extractDates('asdad 22/01/2022 sdf '))
        .toEqual(['22/01/2022']);
  });

  test('Check 22/21/2022 - not valid', () => {
    expect(extractDates('asdad 22/21/2022 sdf '))
        .toEqual([]);
  });

  test('Check two dates: 22/01/2022, 23/01/22', () => {
    expect(extractDates('asdad 22/01/2022 sdf 23/01/22'))
        .toEqual(['22/01/2022', '23/01/22']);
  });

  test('Check two dates: 22.01.2022, 23.01.22', () => {
    expect(extractDates('asdad 22.01.2022 sdf 23.01.22'))
        .toEqual(['22.01.2022', '23.01.22']);
  });

  test('Check two dates: 3/5/2021, 5/5/2021', () => {
    expect(extractDates('I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021'))
        .toEqual(['3/5/2021', '5/5/2021']);
  });

});