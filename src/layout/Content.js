import React from 'react';
import { NotesTable } from '../components/NotesTable.js';

const NOTES = [
    {
      id: 1,
      title: 'Learn ReactJS',
      content: '',
      isActive: true,
    },
    {
      id: 2,
      title: 'Learn Redux',
      content: '',
      isActive: true,
    },
    {
      id: 3,
      title: 'Learn React Router',
      content: '',
      isActive: true,
    }
];


export const Content = props => {
    return (<section><NotesTable items={NOTES} /></section>);
};

