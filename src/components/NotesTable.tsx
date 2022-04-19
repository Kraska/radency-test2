import NotesTableTr  from './NotesTableTr';
import { Table } from 'react-bootstrap';
import { INote, ICategory, NoteActionTypes, StateType, SummaryActionTypes } from '../types.js';
import { AddNote } from './AddNote';
import { connect } from 'react-redux';
import { addNote, updateSummary } from '../actions/actionCreator';
import { useEffect } from 'react';


type NoteTableProps = {
    notes: Array<INote>,
    categories: Record<string, ICategory>,
    addNote: (
        title:string, 
        category:ICategory, 
        content:string, 
        date?:Date
    ) => NoteActionTypes,
    updateSummary: (notes:INote[]) => SummaryActionTypes,
}


const NotesTable = ({ notes, categories, addNote, updateSummary}: NoteTableProps) => {

    const activeNotes = notes.filter(({isActive}) => isActive);

    useEffect(() => {
        updateSummary(notes);
    }, [notes]);

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
            {activeNotes.map((note) => (<NotesTableTr key={note.id} note={note} />))}
            </tbody>
        </Table>    
        <AddNote categories={categories} addNote={addNote} />
        </div>
    );       
}

export default connect((state: StateType) => ({
    notes: state.notes,
    categories: state.categories,
  }), { addNote, updateSummary })(NotesTable);