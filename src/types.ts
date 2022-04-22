import { ADD_NOTE, ARCHIVE_NOTE, UPDATE_NOTE, DELETE_NOTE, UPDATE_SUMMARY } from "./constants";


// Store

export interface INote {
    id: string,
    title: string,
    created: Date,
    category: ICategory,
    content: string,
    isActive: boolean,
    date: Date | null,
    dates: Date[]
}

export interface ICategory {
    id: string,
    title: string,
    iconName: string,
    activeNotes: number,
    archivedNotes: number,
}


export type StateType = {
    notes: Array<INote>,
    categories: Record<string, ICategory>,
}

// Actions

interface IAddNoteAction {
    type: typeof ADD_NOTE,
    payload: {
        title: string,
        category: ICategory,
        content: string,
        date: Date | null,
    },
}

interface IUpdateNoteAction {
    type: typeof UPDATE_NOTE,
    payload: {
        id: string,
        title: string,
        category: ICategory,
        content: string,
        isActive: boolean,
        date: Date | null,
    },
}

interface IArchiveNoteAction {
    type: typeof ARCHIVE_NOTE,
    payload: {
        id: string,
    },
}

interface IDeleteNoteAction {
    type: typeof DELETE_NOTE,
    payload: {
        id: string,
    },
}

export type NoteActionTypes = IAddNoteAction | IUpdateNoteAction | IArchiveNoteAction | IDeleteNoteAction;



export interface IUpdateSummaryAction {
    type: typeof UPDATE_SUMMARY,
    payload: {
        notes: INote[],
    },
}


export type SummaryActionTypes = IUpdateSummaryAction;