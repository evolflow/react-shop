import { useState } from "react";
import WorkoutForm from "./components/WorkoutForm.jsx";
import WorkoutList from "./components/WorkoutList.jsx";

function App() {
  const [workouts, setWorkouts] = useState([]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Workout Tracker💪 </h1>

      <WorkoutForm workouts={workouts} setWorkouts={setWorkouts} />
      <WorkoutList workouts={workouts} setWorkouts={setWorkouts} />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
};

export default App;
