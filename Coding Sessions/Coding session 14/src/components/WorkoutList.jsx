function WorkoutList({ workouts, setWorkouts }) {
  const handleDelete = (index) => {
    const newList = workouts.filter((_, i) => i !== index);
    setWorkouts(newList);
  };

  return (
    <div>
      {workouts.map((workout, index) => (
        <div key={index} style={styles.item}>
          <span>{workout}</span>
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
