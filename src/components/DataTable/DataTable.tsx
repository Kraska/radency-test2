import './DataTable.css';

export type ColumnType<R> = {
    name: string,
    selector: (row: R) => string,
};

export type DataTableProps<R> = {
    columns: ColumnType<R>[],
    data: R[],
    keySelector: (row: R) => string
}

export const DataTable = ({ columns, data, keySelector }: DataTableProps<any>) => {
    return (
    <table className="DataTable">
        <thead>
            {columns.map(col => (<th>{col.name}</th>))}
        </thead>
        <tbody>
            {data.map(row => (
                <tr key={keySelector(row)}>
                    {columns.map(({ selector }) => (<td>{selector(row)}</td>))}
                </tr>
            ))}
        </tbody>
    </table>);
}
