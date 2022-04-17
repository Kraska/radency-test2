import { ArchiveNote } from './ArchiveNote';
import { EditNote } from './EditNote';
import { INote } from '../types.js';


type NoteTableTrProps = {
    note: INote,
    updateNote: any,
    archiveNote: any,
}

export const NotesTableTr = ({ note, updateNote, archiveNote }: NoteTableTrProps) => {
    const { title, content } = note;
    return (<tr>
        <th></th>
        <th>{title}</th>
        <td></td>
        <td></td>
        <td>{content}</td>
        <td></td>
        <td>
            <EditNote note={note} updateNote={updateNote} />
        </td>
        <td>
            <ArchiveNote note={note} archiveNote={archiveNote} />
        </td>
        <td>
            <i className="bi bi-trash-fill"></i>
        </td>
    </tr>);
}
