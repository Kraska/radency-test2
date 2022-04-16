import { ARCHIVE_NOTE, UPDATE_NOTE } from "../constants";

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

const notes = (state = NOTES, { id, title, content, isActive, type }) => {
  //console.log('id, title', id, title);
    switch (type) {
      
        case UPDATE_NOTE :
          return state.map(note => note.id === id ? {id, title, content, isActive} : note);
  
        case ARCHIVE_NOTE :
          return state.map(note => note.id === id ? {...note, isActive: false} : note);
      
        default:
          return state;
    }
  }
  
  export default notes;