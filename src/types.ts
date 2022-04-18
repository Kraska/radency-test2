import { ADD_NOTE, ARCHIVE_NOTE, UPDATE_NOTE, DELETE_NOTE, UPDATE_CATEGORY } from "./constants";


// Store

export interface INote {
    id: number,
    title: string,
    created: Date,
    category: ICategory,
    content: string,
    isActive: boolean,
    date?: Date,
    dates?: string
}

export interface ICategory {
    id: string,
    title: string,
    iconName: string,
    activeNotes: number,
    archivedNotes: number,
}


// Actions

interface IUpdateNoteAction {
    type: typeof UPDATE_NOTE,
    payload: {
        id: number,
        title: string,
        category: ICategory,
        content: string,
        isActive: boolean,
        date?: Date,
        dates?: string
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



interface IUpdateCategory {
    type: typeof UPDATE_CATEGORY,
    payload: {
        id: string,
    },
}

export type CategoryActionTypes = IUpdateCategory;