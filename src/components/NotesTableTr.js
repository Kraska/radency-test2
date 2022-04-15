import React, { Component } from 'react';
import { EditNote } from './EditNote.js';



export class NotesTableTr extends Component {

    constructor({ item }) {
        super();

        this.item = item;
    }

    render = () => {
        const { id, title, content } = this.item;
        return (<tr>
            <th></th>
            <th>{title}</th>
            <td></td>
            <td></td>
            <td>{content}</td>
            <td></td>
            <td>
                <EditNote note={this.item} />
            </td>
            <td>
                <i className="bi bi-arrow-down-square-fill"></i>
            </td>
            <td>
                <i className="bi bi-trash-fill"></i>
            </td>
        </tr>);
    }
}
