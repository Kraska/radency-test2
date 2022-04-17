import { ARCHIVE_NOTE, UPDATE_NOTE } from "../constants";
import { INote, NoteActionTypes } from "../types";

type stateNotes = INote[];

const NOTES = [
    {
      id: 1,
      title: 'Learn ReactJS2',
      content: '',
      isActive: true,
    },
    {
      id: 2,
      title: 'Learn Redux2',
      content: '',
      isActive: true,
    },
    {
      id: 3,
      title: 'Learn React Router2',
      content: '',
      isActive: true,
    }
];

const initialState:stateNotes = NOTES;

const notes = (state = initialState, action:NoteActionTypes ): stateNotes => {

  const { type, payload } = action;
  //console.log('payload', payload);
    switch (type) {
      
        case UPDATE_NOTE : {
          
          const note:INote = {
            id: payload.id, 
            title: payload.title, 
            content: payload.content, 
            isActive: payload.isActive,
          };

          return state.map(item => item.id === payload.id ? note : item);
        }
  
        case ARCHIVE_NOTE : {
          const { id } = payload;
          return state.map(note => note.id === id ? {...note, isActive: false} : note);
        }
      
        default:
          return state;
    }
  }
  
  export default notes;