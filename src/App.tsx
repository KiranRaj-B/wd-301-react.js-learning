import React from "react";
import TaskCard from "./TaskCard.jsx";

function App() {
  return (
    <div className="p-5">
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-4">Pending</h1>
        <TaskCard
          title="Build the websiclearte"
          dueDate="10th April"
          assigneeName="Rohit S"
        />
        <TaskCard
          title="Add a blog"
          dueDate="22nd March"
          assigneeName="Rohit M"
        />
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-4">Done</h1>
        <TaskCard
          title="Design a mock"
          completedAtDate="10th April"
          assigneeName="Rohit M"
        />
        <TaskCard
          title="Get Appointment by principal"
          completedAtDate="20th April"
          assigneeName="Ajay S"
        />
      </div>
    </div>
  );
}

export default App;
