import React from "react";
import { TaskItem } from "./types"; // Ensure this path is correct
import TaskForm from "./TaskForm"; // Ensure this path is correct
import TaskList from "./TaskList"; // Ensure this path is correct
import { useLocalStorage } from "./hooks/useLocalStorage"; // Ensure this path is correct

interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = () => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>("tasks", {
    tasks: [],
  });

  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };

  const deleteTask = (taskToDelete: TaskItem) => {
    setTaskAppState({
      tasks: taskAppState.tasks.filter(task => task !== taskToDelete),
    });
  };

  return (
    <div className="container py-15 max-w-7xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">
        Smarter Tasks
      </h1>
      <h1 className="text-lg mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Desining by React.js and node.js
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
            Pending
          </h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskAppState.tasks} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default TaskApp;