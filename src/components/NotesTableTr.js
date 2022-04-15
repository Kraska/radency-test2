import React, { Component } from 'react';



export class NotesTableTr extends Component {

    constructor({ item }) {
        super();

        this.item = item;
    }

    render = () => {
        const { id, title, content } = this.item;
        return (<tr key={id}>
            <th></th>
            <th>{title}</th>
            <td></td>
            <td></td>
            <td>{content}</td>
            <td></td>
            <td>
                <i class="bi bi-pencil-fill"></i>
            </td>
            <td>
                <i class="bi bi-arrow-down-square-fill"></i>
            </td>
            <td>
                <i class="bi bi-trash-fill"></i>
            </td>
        </tr>);
    }
}