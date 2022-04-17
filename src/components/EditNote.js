import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


export const EditNote = ({ note, updateNote }) => {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const [title, setTitle] = useState(note.title);
        const handleTitleChange = ({ target: { value } }) => {
            setTitle(value);
        }

        const [content, setContent] = useState(note.content);
        const handleContentChange = ({ target: { value } }) => {
            setContent(value);
        }

        const handleSave = () => {
            updateNote({...note, title, content});
            handleClose();
        }

        const handleKeyPress = ({ code }) => {
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
                        <Form.Select>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
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