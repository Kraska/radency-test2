import { ARCHIVE_NOTE, DELETE_NOTE, UPDATE_NOTE } from '../constants';


export const updateNote = (id, title, content) => ({type: UPDATE_NOTE, id, title, content});

export const archiveNote = (id) => ({type: ARCHIVE_NOTE, id});

export const deleteNote = (id) => ({type: DELETE_NOTE, id});