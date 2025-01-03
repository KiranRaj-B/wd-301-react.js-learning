// Task.tsx
import React from "react";
import "./TaskCard.css";
import { TaskItem } from "./types";

interface TaskProp {
  title: string;
  description: string;
  dueDate: string;
}

const Task = (props: TaskItem) => {
  
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500 bold"><strong>Description:</strong> {props.description}</p>
      <p className="text-sm text-slate-500"><strong>Due Date:</strong> {props.dueDate}</p>

    </div>
  );
};


export default Task;