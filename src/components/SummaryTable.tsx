import { Table } from 'react-bootstrap';
import { ICategory } from '../types.js';


type CategoriesTableProps = {
    categories: Record<string, ICategory>,
}

export const SummaryTable = ({ 
    categories, 
}: CategoriesTableProps) => {

    return (
        <div className="TableList container Summary ">
            <Table hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Active</th>
                        <th>Archived</th>
                    </tr>
                </thead>
                <tbody>
                {Object.values(categories).map(({id, title, activeNotes, archivedNotes}) => (
                    <tr key={id}>
                        <th></th>
                        <th>{title}</th>
                        <td>{activeNotes}</td>
                        <td>{archivedNotes}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );       
}