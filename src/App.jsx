import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="app-container">
      <h2>Task Tracker</h2>

      <div className="input-box">
        <input
          type="text"
          value={task}
          placeholder="Enter a task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((t, index) => (
          <li
            key={index}
            className={`task-item ${t.completed ? "completed" : ""}`}
          >
            <span>{t.text}</span>
            <button
              className={t.completed ? "" : "pending"}
              onClick={() => toggleTask(index)}
            >
              {t.completed ? "Completed" : "Pending"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
