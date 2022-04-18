import { UPDATE_CATEGORY } from "../constants";
import { ICategory, CategoryActionTypes } from "../types";

type StateCategories = Record<string, ICategory>;

const CATEGORIES:StateCategories = {
  '1': {
    id: '1',
    title: 'Task',
    iconName: 'bi-card-list',
    activeNotes: 3,
    archivedNotes: 0,
  },
  '2': {
    id: '2',
    title: 'Random Thought',
    iconName: 'bi-shuffle',
    activeNotes: 1,
    archivedNotes: 0,
  },
  '3': {
    id: '3',
    title: 'Idea',
    iconName: 'bi-lightbulb',
    activeNotes: 1,
    archivedNotes: 0,
  },
}; 


const initialState:StateCategories = CATEGORIES;


const categories = (state = initialState, action:CategoryActionTypes ): StateCategories => {

  const { type, payload } = action;
  //console.log('payload', payload);
  switch (type) {
    
      case UPDATE_CATEGORY : {

        // const oldNote:INote = state.find(({ id }) => id === payload.id) || EMPTY_NOTE;

        // const note:INote = {
        //   id: payload.id, 
        //   title: payload.title, 
        //   created: oldNote.created,
        //   category: payload.category,
        //   content: payload.content, 
        //   isActive: payload.isActive,
        // };

        // return state.map(item => item.id === payload.id ? note : item);

        return state;
      }
    
      default:
        return state;
  }
}
  
  export default categories;