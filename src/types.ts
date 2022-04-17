import { ADD_NOTE, ARCHIVE_NOTE, UPDATE_NOTE, DELETE_NOTE } from "./constants";


// Store

export interface INote {
    id: number,
    title: string,
    content: string,
    isActive: boolean,
}


// Actions

interface IUpdateNoteAction {
    type: typeof UPDATE_NOTE,
    payload: {
        id: number,
        title: string,
        content: string,
        isActive: boolean,
    },
}

interface IArchiveNoteAction {
    type: typeof ARCHIVE_NOTE,
    payload: {
        id: number,
    },
}

interface IDeleteNoteAction {
    type: typeof DELETE_NOTE,
    payload: {
        id: number,
    },
}

export type NoteActionTypes = IUpdateNoteAction | IArchiveNoteAction | IDeleteNoteAction;