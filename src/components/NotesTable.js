import React, { Component } from 'react';
import { NotesTableTr } from './NotesTableTr.js';
import { Table } from 'react-bootstrap';
import './NotesTable.css';

export class NotesTable extends Component {

    constructor({ items }) {
        super();

        this.items = items;
    }

    render = () => (
        <section>
        <div class="TableList container">
        <Table hover>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Created</th>
                    <th>Category</th>
                    <th>Content</th>
                    <th>Dates</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {this.items.map((note) => (<NotesTableTr item={note}/>))}
            </tbody>
        </Table>
        </div>
        </section>
    )
}