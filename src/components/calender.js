import React, { Component } from 'react';
import MDBFullCalendar from 'mdb-react-calendar';
import { addHours, addDays, addWeeks, startOfWeek } from 'date-fns';

const today = new Date();

class Calen extends Component {
  state = {
    tasks: [
      {
        id: 'task1',
        title: 'Today',
        startDate: new Date().setHours(0, 0, 0),
        endDate: new Date().setHours(23, 59, 59),
        color: 'danger',
        dark: true,
        link: true,
        to: 'test',
      },
      {
        id: 'task2',
        title: 'Today',
        startDate: new Date().setDate(2),
        endDate: new Date().setDate(15),
        color: 'info',
        link: true,
        to: 'test1',
      },
      {
        id: 'task3',
        title: 'Task name',
        startDate: new Date().setDate(2),
        endDate: new Date().setDate(15),
        color: 'warning',
        dark: true,
        link: true,
        to: 'test2',
      },
    ],
  };

  render() {
    const arrOfObjects = [
      { color: 'elegant-color', title: 'Test', dark: true },
      { color: 'danger-color', title: 'Test1', dark: false },
      { color: 'warning-color', title: 'Meeting', dark: false },
      { color: 'success-color', title: 'Home', dark: false },
      { color: 'info-color', title: 'Lunch', dark: false },
      { color: 'default-color', title: 'Something', dark: false },
      { color: 'primary-color', title: 'Pool', dark: false },
      { color: 'secondary-color', title: 'Footbal', dark: true },
    ];

    return <MDBFullCalendar colors={arrOfObjects} tasks={this.state.tasks} btnSizes='sm' />;
  }
}


export default Calen;