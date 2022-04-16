import { NotesTable } from '../components/NotesTable.js';
import { connect } from 'react-redux';
import { updateNote, archiveNote, deleteNote } from '../actions/actionCreator.js';

const Content = ({ notes, updateNote, archiveNote }) => {
  //console.log('notes', notes);
    const activeNotes = notes.filter(({isActive}) => isActive);
    return (<section>
        <NotesTable 
            items={activeNotes} 
            updateNote={updateNote} 
            archiveNote={archiveNote}
            />
      </section>);
};


export default connect(state => ({
  notes: state.notes,
}), { updateNote, archiveNote, deleteNote })(Content);
