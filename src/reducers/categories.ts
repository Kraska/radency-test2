import { UPDATE_SUMMARY } from "../constants";
import { ICategory, SummaryActionTypes } from "../types";
import { CATEGORIES } from "./init-data";

type StateCategories = Record<string, ICategory>;


const categories = (state = CATEGORIES, action:SummaryActionTypes ): StateCategories => {

  const { type, payload } = action;

  switch (type) {
    
      case UPDATE_SUMMARY : {

        const { notes } = payload;

        const newState:StateCategories = Object.values(state)
            .map(cat => ({...cat, activeNotes: 0, archivedNotes: 0}))
            .reduce((accumulator, cat) => ({...accumulator, [cat.id]: cat}), {})

        notes.forEach(({category, isActive}) => {
          if(isActive) {
            newState[category.id].activeNotes++;
          } else {
            newState[category.id].archivedNotes++;
          }
        })

        //console.log('newState', newState);
        return newState;
      }
    
      default:
        return state;
  }
}
  
  export default categories;