import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { INote, NoteActionTypes } from '../types.js';


type ArchiveNoteProps = {
    note: INote,
    deleteNote: (id:number) => NoteActionTypes,
}

export const DeleteNote = ({ note, deleteNote }: ArchiveNoteProps) => {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const handleDelete = () => {
            deleteNote(note.id);
            handleClose();
        }

        return (
        <>
            <div onClick={handleShow}>
                <i className="bi bi-trash-fill"></i>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Archiving Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure, you want to archive note "{note.title}"
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>);
    }