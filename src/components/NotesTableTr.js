import { ArchiveNote } from './ArchiveNote.js';
import { EditNote } from './EditNote.js';



export const NotesTableTr = ({ item, updateItem, archiveNote }) => {
    const { id, title, content } = item;
    return (<tr>
        <th></th>
        <th>{title}</th>
        <td></td>
        <td></td>
        <td>{content}</td>
        <td></td>
        <td>
            <EditNote note={item} updateNote={updateItem} />
        </td>
        <td>
            <ArchiveNote note={item} archiveNote={archiveNote} />
        </td>
        <td>
            <i className="bi bi-trash-fill"></i>
        </td>
    </tr>);
}
