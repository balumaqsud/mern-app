import { useState } from "react";
import { useWorkoutsContext } from "../components/hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    // now we use fatch api to sent post request to post the new data
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = await response.json();
    // checking if response was ok or not and sending error or setting to the default
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("new workout is added", json);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };
  // form that we are returning
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>create your favourite workouts with us</h3>
      <label>title:</label>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <label> load (in kg):</label>
      <input
        type="Number"
        onChange={(e) => {
          setLoad(e.target.value);
        }}
        value={load}
      />
      <label> reps:</label>
      <input
        type="Number"
        onChange={(e) => {
          setReps(e.target.value);
        }}
        value={reps}
      />
      <button>add workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
