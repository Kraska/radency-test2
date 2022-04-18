import { ArchiveNote } from './ArchiveNote';
import { EditNote } from './EditNote';
import { INote, NoteActionTypes } from '../types.js';
import { DeleteNote } from './DeleteNote';


type NoteTableTrProps = {
    note: INote,
    updateNote: (note:INote) => NoteActionTypes,
    archiveNote: (id:number) => NoteActionTypes,
    deleteNote: (id:number) => NoteActionTypes,
}

export const NotesTableTr = ({ note, updateNote, archiveNote, deleteNote }: NoteTableTrProps) => {
    const { title, created, category, content, dates } = note;
    return (<tr>
        <th></th>
        <th>{title}</th>
        <td>{created.toLocaleString()}</td>
        <td>{category.title}</td>
        <td>{content}</td>
        <td>{dates}</td>
        <td>
            <EditNote note={note} updateNote={updateNote} />
        </td>
        <td>
            <ArchiveNote note={note} archiveNote={archiveNote} />
        </td>
        <td>
            <DeleteNote note={note} deleteNote={deleteNote} />
            {/* // <i className="bi bi-trash-fill"></i> */}
        </td>
    </tr>);
}
