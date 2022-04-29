import React from 'react';
import { Story } from '@storybook/react';
import { DataTable, DataTableProps } from './DataTable';
import './DataTable.css';


export default {
    component: DataTable,
    title: 'DataTable',
  };


type Row = {
    id: string,
    title: string,
    content: string,
}

const Template: Story<DataTableProps<Row>> = (args: DataTableProps<Row>) => <DataTable {...args} />;

export const Default = Template.bind({});
Default.args = {
    columns: [
        {
            name: 'id',
            selector: (row: Row) => row.id
        },
        {
            name: 'title',
            selector: (row: Row) => row.title
        },
        {
            name: 'content',
            selector: (row: Row) => row.content
        },
    ],
    data: [
        {
            id: '1',
            title: 'Test Task',
            content: 'task content',
        },
        {
            id: '2',
            title: 'Test Task2',
            content: 'task content2',
        },
    ],
    keySelector: (row: Row) => row.id
};