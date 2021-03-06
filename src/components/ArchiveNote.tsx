import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { INote, NoteActionTypes } from '../types.js';


type ArchiveNoteProps = {
    note: INote,
    archiveNote: (id:string) => NoteActionTypes,
}

export const ArchiveNote = ({ note, archiveNote }: ArchiveNoteProps) => {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const handleArchive = () => {
            archiveNote(note.id);
            handleClose();
        }

        return (
        <>
            <div onClick={handleShow}>
                <i className="bi bi-arrow-down-square-fill"></i>
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
                    <Button variant="primary" onClick={handleArchive}>
                        Archive
                    </Button>
                </Modal.Footer>
            </Modal>
        </>);
    }