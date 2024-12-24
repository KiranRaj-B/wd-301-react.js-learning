import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTask: (task: TaskItem) => void; // Add deleteTask prop
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <li key={idx} className="flex justify-between items-center">
      <Task
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
      />
      <button
        className="deleteTaskButton ml-2 bg-red-700 hover:bg-red-800 text-white-600"
        onClick={() => props.deleteTask(task)} // Call deleteTask on button click
      >
        Delete
      </button>
    </li>
  ));

  return <ul>{list}</ul>; // Wrap the list in <ul>
};

export default TaskList;