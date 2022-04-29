import { Story } from '@storybook/react';
import { DataTable, DataTableProps } from './DataTable';
import './DataTable.css';
import "../../icons/bootstrap-icons.css";


export default {
    component: DataTable,
    title: 'DataTable',
};


type Row = {
    id: string,
    title: string,
    created: Date,
    category: string,
    content: string,
    dates: string,
}

const Template: Story<DataTableProps<Row>> = (args: DataTableProps<Row>) => <DataTable {...args} />;

const DATE_FORMAT: Intl.DateTimeFormatOptions = 
    { day:"numeric", year:"numeric", month:"short"};

export const Default = Template.bind({});
Default.args = {
    columns: [
        {
            name: 'Id',
            selector: (row: Row) => row.id
        },
        {
            name: 'Name',
            selector: (row: Row) => row.title
        },
        {
            name: 'Created',
            selector: (row: Row) => row.created
                .toLocaleDateString('en-us', DATE_FORMAT)
        },
        {
            name: 'Category',
            selector: (row: Row) => row.title
        },
        {
            name: 'Content',
            selector: (row: Row) => row.content
        },
        {
            name: 'Dates',
            selector: (row: Row) => row.dates
        },
        {
            name: 'Edit',
            selector: (row: Row) => (<i className="bi bi-pencil-fill"></i>)
        },
     ],
    data: [
        {
            id: '1',
            title: 'Test Task',
            created: new Date(),
            category: '',
            content: 'task content',
            dates: ''
        },
        {
            id: '2',
            title: 'Test Task2',
            created: new Date(),
            category: '',
            content: 'task content2',
            dates: ''
        },
    ],
    keySelector: (row: Row) => row.id
};
