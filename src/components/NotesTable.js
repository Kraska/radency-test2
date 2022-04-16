import { NotesTableTr } from './NotesTableTr.js';
import { Table } from 'react-bootstrap';
import './NotesTable.css';

export const NotesTable = ({ items, updateItem }) => {

    return (
        <div className="TableList container">
        <Table hover>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Created</th>
                    <th>Category</th>
                    <th>Content</th>
                    <th>Dates</th>
                    <th></th>
                    <th><i className="bi bi-arrow-down-square-fill"></i></th>
                    <th><i className="bi bi-trash-fill"></i></th>
                </tr>
            </thead>
            <tbody>
            {items.map((note) => (<NotesTableTr key={note.id} item={note} updateItem={updateItem} />))}
            </tbody>
        </Table>
        </div>
    );       
}