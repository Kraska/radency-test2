import { NotesTableTr } from './NotesTableTr';
import { Table } from 'react-bootstrap';
import './NotesTable.css';
import { INote, ICategory, NoteActionTypes } from '../types.js';


type NoteTableProps = {
    notes: Array<INote>,
    categories: Record<string, ICategory>,
    updateNote: (note:INote) => NoteActionTypes,
    archiveNote: (id:number) => NoteActionTypes,
    deleteNote: (id:number) => NoteActionTypes,
}

export const NotesTable = ({ notes, categories, updateNote, archiveNote, deleteNote }: NoteTableProps) => {

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
            {notes.map((note) => (
                <NotesTableTr 
                    key={note.id} 
                    note={note} 
                    categories={categories}
                    updateNote={updateNote} 
                    archiveNote={archiveNote} 
                    deleteNote={deleteNote} 
                    />))}
            </tbody>
        </Table>
        </div>
    );       
}