import { ADD_NOTE, ARCHIVE_NOTE, DELETE_NOTE, UPDATE_NOTE } from "../constants";
import { ICategory, INote, NoteActionTypes } from "../types";
import { extractDates } from "../utils";
import { NOTES } from "./init-data";



const EMPTY_CATEGORY:ICategory = {
  id: '0',
  title: '',
  iconName: '',
  activeNotes: 0,
  archivedNotes: 0,
};

const EMPTY_NOTE:INote = {      
  id: '0',
  title: '',
  created: new Date(),
  category: EMPTY_CATEGORY,
  content: '',
  dates: [],
  isActive: false,
};


const calculateDates = (note:INote): INote => ({...note, dates: extractDates(note.content)})

const initialState:INote[] = NOTES.map(note => calculateDates(note));


const notes = (state = initialState, action:NoteActionTypes ): INote[] => {

  const { type, payload } = action;
  
  switch (type) {
    
    case ADD_NOTE : {

      const note:INote = {
        id: (Math.random() + 1).toString(36).substring(7), 
        title: payload.title, 
        created: new Date(),
        category: payload.category,
        content: payload.content, 
        dates: extractDates(payload.content),
        isActive: true,
      };

      return [...state, note];
    }

    case UPDATE_NOTE : {

        const oldNote:INote = state.find(({ id }) => id === payload.id) || EMPTY_NOTE;

        const note:INote = {
          id: payload.id, 
          title: payload.title, 
          created: oldNote.created,
          category: payload.category,
          content: payload.content, 
          dates: extractDates(payload.content),
          isActive: payload.isActive,
        };

        return state.map(item => item.id === payload.id ? note : item);
      }

    case ARCHIVE_NOTE : {
      const { id } = payload;
      const newState = state.map(note => note.id === id ? {...note, isActive: false} : note);
      
      return newState;
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