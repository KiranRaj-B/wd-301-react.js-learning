import "./TaskCard.css";

const TaskCard = (props) => {
  return (
    <div className="TaskItem border p-4 rounded-lg shadow-sm mb-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{props.title}</h2>
      {props.dueDate && (
        <p className="text-gray-700">
          <strong>Due on:</strong> {props.dueDate}
        </p>
      )}
      {props.completedAtDate && (
        <p className="text-gray-700">
          <strong>Completed on:</strong> {props.completedAtDate}
        </p>
      )}
      <p className="text-gray-700">
        <strong>Assignee:</strong> {props.assigneeName}
      </p>
    </div>
  );
};

export default TaskCard;
