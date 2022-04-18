import { NotesTable } from '../components/NotesTable';
import { connect } from 'react-redux';
import { updateNote, archiveNote, deleteNote } from '../actions/actionCreator';
import { ICategory, INote, NoteActionTypes } from '../types';
import categories from '../reducers/categories';


type ContentProps = {
  notes: Array<INote>,
  categories: Record<string, ICategory>
  updateNote: (note:INote) => NoteActionTypes,
  archiveNote: (id:number) => NoteActionTypes,
  deleteNote: (id:number) => NoteActionTypes,
};

const Content = ({ notes, categories, updateNote, archiveNote, deleteNote }: ContentProps) => {
  
    const activeNotes = notes.filter(({isActive}) => isActive);
    return (<section>
        <NotesTable 
            notes={activeNotes} 
            categories={categories}
            updateNote={updateNote} 
            archiveNote={archiveNote}
            deleteNote={deleteNote}
            />
      </section>);
};

type StateType = {
    notes: Array<INote>,
    categories: Record<string, ICategory>,
}

export default connect((state: StateType) => ({
  notes: state.notes,
  categories: state.categories,
}), { updateNote, archiveNote, deleteNote })(Content);

