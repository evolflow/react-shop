function WorkoutList({ workouts, setWorkouts }) {
  const handleDelete = (index) => {
    const newList = workouts.filter((_, i) => i !== index);
    setWorkouts(newList);
  };

  const handleToggle = (index) => {
    const newList = workouts.map((item, i) => {
      if (i === index) {
        return { ...item, done: !item.done };
      }
      return item;
    });

    setWorkouts(newList);
  };

  return (
    <div>
      {workouts.map((workout, index) => (
        <div key={index} style={styles.item}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="checkbox"
              checked={workout.done}
              onChange={() => handleToggle(index)}
            />

            <span>{workout.text}</span>
          </div>

          <button onClick={() => handleDelete(index)}>❌</button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    border: "1px solid #ddd",
    marginBottom: "10px",
  },
};

export default WorkoutList;
