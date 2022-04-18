import { getByTitle } from '@testing-library/react';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { ICategory, INote, NoteActionTypes } from '../types.js';


type ArchiveNoteProps = {
    note: INote,
    categories: Record<string, ICategory>,
    updateNote: (note:INote) => NoteActionTypes,
}

export const EditNote = ({ note, categories, updateNote }: ArchiveNoteProps) => {

        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const [title, setTitle] = useState(note.title);
        const handleTitleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
            setTitle(value);
        }

        const [categoryId, setCategory] = useState(note.category.id);
        const handleCategoryChange = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
            setCategory(value);
        }

        const [content, setContent] = useState(note.content);
        const handleContentChange = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
            setContent(value);
        }

        const handleSave = () => {
            updateNote({...note, title, category: categories[categoryId], content});
            handleClose();
        }
        
        const handleKeyPress = ({ code }: KeyboardEvent<HTMLInputElement>) => {
            if (code === 'Enter') {
                handleSave();
            }
        }

        return (
        <>
            <div onClick={handleShow}>
                <i className="bi bi-pencil-fill"></i>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editing Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={title}
                            onChange={handleTitleChange}
                            onKeyPress={handleKeyPress}
                            placeholder="Note title" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select 
                            value={categoryId}
                            onChange={handleCategoryChange} >
                            {Object.values(categories)
                                .map(({id, title}) => (<option key={id} value={id}>{title}</option>))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Content</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            value={content}
                            onChange={handleContentChange}
                            rows={3} />
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>);
    }