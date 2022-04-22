import { ADD_NOTE, ARCHIVE_NOTE, DELETE_NOTE, UPDATE_NOTE } from "../constants";
import { ICategory, INote, NoteActionTypes } from "../types";
import { NOTES } from "./init-data";

type stateNotes = INote[];

const initialState:stateNotes = NOTES;

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
  date: null,
  dates: [],
  isActive: false,
};


const notes = (state = initialState, action:NoteActionTypes ): stateNotes => {

  const { type, payload } = action;
  //console.log('payload', payload);
  switch (type) {
    
    case ADD_NOTE : {

      const note:INote = {
        id: (Math.random() + 1).toString(36).substring(7), 
        title: payload.title, 
        created: new Date(),
        category: payload.category,
        content: payload.content, 
        date: payload.date,
        dates: payload.date ? [payload.date] : [],
        isActive: true,
      };
console.log('note', note);
      return [...state, note];
    }

    case UPDATE_NOTE : {

        const oldNote:INote = state.find(({ id }) => id === payload.id) || EMPTY_NOTE;

        const dates = [...oldNote.dates];
        if (payload.date && !isDatesEqual(payload.date, oldNote.date)) {
            dates.push(payload.date);
        }

        const note:INote = {
          id: payload.id, 
          title: payload.title, 
          created: oldNote.created,
          category: payload.category,
          content: payload.content, 
          date: payload.date,
          dates: dates,
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

const isDatesEqual = (date1:Date|null, date2:Date|null): boolean => {
  if (date1 === null)
      return date2 === null ? true : false;

  if (date2 === null)
      return false;

  return date1.toString() === date2.toString();    
}
  
export default notes;