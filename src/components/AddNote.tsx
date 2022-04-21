import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { ICategory, NoteActionTypes } from '../types.js';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';


type AddNoteProps = {
    categories: Record<string, ICategory>,
    addNote: (        
        title:string, 
        category:ICategory, 
        content:string, 
        date?:Date
    ) => NoteActionTypes,
}

export const AddNote = ({ categories, addNote }: AddNoteProps) => {

        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const [title, setTitle] = useState('');
        const handleTitleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
            setTitle(value);
        }

        const initCategoryId = Object.values(categories)[0].id;
        const [categoryId, setCategoryId] = useState(initCategoryId);
        const handleCategoryChange = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
            setCategoryId(value);
        }

        const [content, setContent] = useState('');
        const handleContentChange = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
            setContent(value);
        }

        const [date, setDate] = useState<moment.Moment | null>(moment());
        const handleDateChange = (date: moment.Moment | null) => {
            setDate(date);
        }
        const [dateFocused, setDateFocused] = useState<boolean>(false);
        const handleDateFocused = ({ focused }: { focused:boolean }) => {
            setDateFocused(focused);
        }

        const handleSave = () => {
            addNote(title, categories[categoryId], content);
            handleClose();
            setTitle('');
            setCategoryId(initCategoryId);
            setContent('');
            setDate(null);
        }
        
        const handleKeyPress = ({ code }: KeyboardEvent<HTMLInputElement>) => {
            if (code === 'Enter') {
                handleSave();
            }
        }

        return (
        <>
            <div className="container">
                <button 
                    type="button" 
                    onClick={handleShow}
                    className="btn float-end">
                        Create Note
                </button>
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
                    <Form.Group className="mb-3">
                        <div><Form.Label>Date</Form.Label></div>
                        <SingleDatePicker 
                            date={date}
                            onDateChange={handleDateChange}
                            focused={dateFocused}
                            onFocusChange={handleDateFocused}
                            id={`{note.id}_date`}
                        />
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