import { NotesTable } from '../components/NotesTable.js';
import { connect } from 'react-redux';
import { updateNote, archiveNote, deleteNote } from '../actions/actionCreator.js';

const Content = ({ notes, updateNote }) => {
  //console.log('notes', notes);
    return (<section><NotesTable items={notes} updateItem={updateNote} /></section>);
};


export default connect(state => ({
  notes: state.notes,
}), { updateNote, archiveNote, deleteNote })(Content);

