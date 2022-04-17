import { NotesTable } from '../components/NotesTable';
import { connect } from 'react-redux';
import { updateNote, archiveNote, deleteNote } from '../actions/actionCreator';
import { INote, NoteActionTypes } from '../types';


type ContentProps = {
  notes: Array<INote>,
  updateNote: (note:INote) => NoteActionTypes,
  archiveNote: (id:number) => NoteActionTypes,
};

const Content = ({ notes, updateNote, archiveNote }: ContentProps) => {
  
    const activeNotes = notes.filter(({isActive}) => isActive);
    return (<section>
        <NotesTable 
            notes={activeNotes} 
            updateNote={updateNote} 
            archiveNote={archiveNote}
            />
      </section>);
};

type StateType = {
    notes: Array<INote>,
}

export default connect((state: StateType) => ({
  notes: state.notes,
}), { updateNote, archiveNote, deleteNote })(Content);

