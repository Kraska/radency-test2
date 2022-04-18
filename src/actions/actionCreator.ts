import { ARCHIVE_NOTE, DELETE_NOTE, UPDATE_NOTE, UPDATE_CATEGORY } from '../constants';
import { NoteActionTypes, INote, CategoryActionTypes, ICategory } from '../types';


export const updateNote = (note:INote): NoteActionTypes => ({
    type: UPDATE_NOTE, 
    payload: {...note}
});

export const archiveNote = (id:number): NoteActionTypes => ({
    type: ARCHIVE_NOTE, 
    payload: {id}
});

export const deleteNote = (id:number): NoteActionTypes => ({
    type: DELETE_NOTE, 
    payload: {id}
});



export const updateCategory = (category:ICategory): CategoryActionTypes => ({
    type: UPDATE_CATEGORY, 
    payload: {...category}
});