import { useState } from "react";

function WorkoutForm({ workouts, setWorkouts }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    setWorkouts([...workouts, text]);
    setText("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter workout..."
        style={{
          padding: "10px",
          width: "70%",
          fontSize: "16px",
        }}
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default WorkoutForm;
