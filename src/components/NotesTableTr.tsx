import { ArchiveNote } from './ArchiveNote';
import { EditNote } from './EditNote';
import { INote, ICategory, NoteActionTypes, SummaryActionTypes, StateType } from '../types.js';
import { DeleteNote } from './DeleteNote';
import { connect } from 'react-redux';
import { updateSummary, updateNote, archiveNote, deleteNote } from '../actions/actionCreator';

type NoteTableTrProps = {
    note: INote,
    categories: Record<string, ICategory>,
    updateNote: (note:INote) => NoteActionTypes,
    archiveNote: (id:string) => NoteActionTypes,
    deleteNote: (id:string) => NoteActionTypes,
}

const NotesTableTr = ({ 
        note, 
        categories, 
        updateNote, 
        archiveNote, 
        deleteNote
    }: NoteTableTrProps) => {

    const { title, created, category, content, dates } = note;
    return (<tr>
        <th></th>
        <th>{title}</th>
        <td>{created.toLocaleString()}</td>
        <td>{category.title}</td>
        <td>{content}</td>
        <td>{dates}</td>
        <td>
            <EditNote note={note} categories={categories} updateNote={updateNote} />
        </td>
        <td>
            <ArchiveNote note={note} archiveNote={archiveNote} />
        </td>
        <td>
            <DeleteNote note={note} deleteNote={deleteNote} />
        </td>
    </tr>);
}

export default connect((state: StateType, ownProps: {note: INote}) => ({
    note: ownProps.note,
    categories: state.categories,
  }), { updateNote, archiveNote, deleteNote })(NotesTableTr);