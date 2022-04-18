import { ARCHIVE_NOTE, DELETE_NOTE, UPDATE_NOTE } from "../constants";
import { INote, NoteActionTypes } from "../types";

type stateNotes = INote[];

const CATEGORIES = {
  1: {
    id: 1,
    title: 'Task',
    iconName: 'bi-card-list',
    activeNotes: 3,
    archivedNotes: 0,
  },
  2: {
    id: 2,
    title: 'Random Thought',
    iconName: 'bi-shuffle',
    activeNotes: 1,
    archivedNotes: 0,
  },
  3: {
    id: 3,
    title: 'Idea',
    iconName: 'bi-lightbulb',
    activeNotes: 1,
    archivedNotes: 0,
  },
}; 


const NOTES: INote[] = [
    {
      id: 1,
      title: 'Shopping list',
      created: new Date(),
      category: CATEGORIES[1],
      content: 'Tomatoes, bread, ...',
      isActive: true,
    },
    {
      id: 2,
      title: 'The theory of evolution',
      created: new Date(),
      category: CATEGORIES[2],
      content: '',
      isActive: true,
    },
    {
      id: 3,
      title: 'Books list',
      created: new Date(),
      category: CATEGORIES[1],
      content: '',
      isActive: true,
    },
    {
      id: 4,
      title: 'New Future',
      created: new Date(),
      category: CATEGORIES[3],
      content: '',
      isActive: true,
    },
    {
      id: 5,
      title: 'Some Task',
      created: new Date(),
      category: CATEGORIES[1],
      content: 'some content',
      isActive: true,
    },
];

const initialState:stateNotes = NOTES;

const EMPTY_NOTE:INote = {      
  id: 0,
  title: '',
  created: new Date(),
  category: CATEGORIES[1],
  content: '',
  isActive: false,
};


const notes = (state = initialState, action:NoteActionTypes ): stateNotes => {

  const { type, payload } = action;
  //console.log('payload', payload);
  switch (type) {
    
      case UPDATE_NOTE : {

        const oldNote:INote = state.find(({ id }) => id === payload.id) || EMPTY_NOTE;

        const note:INote = {
          id: payload.id, 
          title: payload.title, 
          created: oldNote.created,
          category: payload.category,
          content: payload.content, 
          isActive: payload.isActive,
        };

        return state.map(item => item.id === payload.id ? note : item);
      }

      case ARCHIVE_NOTE : {
        const { id } = payload;
        return state.map(note => note.id === id ? {...note, isActive: false} : note);
      }

      case DELETE_NOTE : {
        const { id } = payload;
        return state.filter(note => note.id !== id);
      }
    
      default:
        return state;
  }
}
  
  export default notes;