import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ICategory, StateType } from '../types.js';


type CategoriesTableProps = {
    categories: Record<string, ICategory>,
}

const SummaryTable = ({ categories }: CategoriesTableProps) => {

    return (
        <div className="TableList container Summary ">
            <Table hover>
                <thead className='table-head'>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Active</th>
                        <th>Archived</th>
                    </tr>
                </thead>
                <tbody>
                {Object.values(categories).map(({id, title, iconName, activeNotes, archivedNotes}) => (
                    <tr key={id} className='table-tr'>
                        <th className='table-body-th'>
                            <i className={"bi " + iconName}></i>
                        </th>
                        <th className='table-body-th'>{title}</th>
                        <td>{activeNotes}</td>
                        <td>{archivedNotes}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );       
}

export default connect((state: StateType) => ({
    categories: state.categories,
  }))(SummaryTable);