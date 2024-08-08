// in this file we are creating consumer, with use context

import { WorkoutsContext } from "../context/workoutContext";
import { useContext } from "react";

// let's create hook function
export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error(
      "this useWorkoutsContext must be used in WorkoutsContextProvider"
    );
  }

  return context;
};
