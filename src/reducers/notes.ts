import { ARCHIVE_NOTE, DELETE_NOTE, UPDATE_NOTE } from "../constants";
import { INote, NoteActionTypes } from "../types";
import { NOTES, CATEGORIES } from "./init-data";

type stateNotes = INote[];

const initialState:stateNotes = NOTES;

const EMPTY_NOTE:INote = {      
  id: 0,
  title: '',
  created: new Date(),
  category: CATEGORIES['1'],
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