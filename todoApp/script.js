import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './components/main'

var tasksList = ["Task 1", "Task 2", "Task 3"];

var tasks = localStorage.getItem('storedTasks');

if(tasks) {
	tasksList = JSON.parse(tasks);
}

ReactDOM.render(
	<Todo tasks={tasksList} />,
	document.getElementById('todo')
);