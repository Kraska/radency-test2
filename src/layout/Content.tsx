import { NotesTable } from '../components/NotesTable';
import { connect } from 'react-redux';
import { addNote, updateNote, archiveNote, deleteNote } from '../actions/actionCreator';
import { ICategory, INote, NoteActionTypes } from '../types';
import { SummaryTable } from '../components/SummaryTable';


type ContentProps = {
  notes: Array<INote>,
  categories: Record<string, ICategory>,
  addNote: (
    title:string, 
    category:ICategory, 
    content:string, 
    date?:Date
  ) => NoteActionTypes,
  updateNote: (note:INote) => NoteActionTypes,
  archiveNote: (id:string) => NoteActionTypes,
  deleteNote: (id:string) => NoteActionTypes,
};

const Content = ({ notes, categories, addNote, updateNote, archiveNote, deleteNote }: ContentProps) => {
  
    const activeNotes = notes.filter(({isActive}) => isActive);
    return (<section>

        <NotesTable 
            notes={activeNotes} 
            categories={categories}
            addNote={addNote}
            updateNote={updateNote} 
            archiveNote={archiveNote}
            deleteNote={deleteNote}
            />

          <SummaryTable categories={categories} />
          
      </section>);
};

type StateType = {
    notes: Array<INote>,
    categories: Record<string, ICategory>,
}

export default connect((state: StateType) => ({
  notes: state.notes,
  categories: state.categories,
}), { addNote, updateNote, archiveNote, deleteNote })(Content);

