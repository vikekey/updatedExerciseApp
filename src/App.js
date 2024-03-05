import "./App.css";
import { useCallback, useState } from "react";
import DurationExercise from "./components/DurationExercise";
import MapsExercise from "./components/Maps";
import RepetitionExercise from "./components/RepetitionExercise";
import RunningExercise from "./components/RunningExercise";

const MENU_SCREEN = "menu";
const EXERCISE_SCREEN = "exercise";
const DURATION_EXERCISE = "duration";
const REPETITION_EXERCISE = "repetition";
const MAP_EXERCISE = "maps";
const RUNNING_EXERCISE = "running";

let exerciseList = [
  { type: DURATION_EXERCISE, name: "Running" },
  { type: DURATION_EXERCISE, name: "Rowing" },
  { type: DURATION_EXERCISE, name: "Swimming" },
  { type: REPETITION_EXERCISE, name: "Push Ups" },
  { type: REPETITION_EXERCISE, name: "Sit Ups" },
  { type: MAP_EXERCISE, name: "Maps" },
  { type: RUNNING_EXERCISE, name: "Running Exercise" },
];

function App() {
  let [currentScreen, setCurrentScreen] = useState(MENU_SCREEN);
  let [currentExercise, setCurrentExercise] = useState(exerciseList);
  let screenComponent = undefined;
  let buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise);
    setCurrentScreen(EXERCISE_SCREEN);
  }, []);
  if (currentScreen === MENU_SCREEN) {
    screenComponent = (
      <div>
        <h1>Exercise menu</h1>
        <ul>
          {exerciseList.map((exercise) => {
            return (
              <li key={exercise.name}>
                <button
                  style={{ fontSize: "1.25em" }}
                  onClick={() => buttonClick(exercise)}
                >
                  {exercise.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else if (currentScreen === EXERCISE_SCREEN) {
    switch (currentExercise.type) {
      case DURATION_EXERCISE:
        screenComponent = (
          <DurationExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
        break;
      case REPETITION_EXERCISE:
        screenComponent = (
          <RepetitionExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
        break;
      case MAP_EXERCISE:
        screenComponent = (
          <MapsExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
        break;
      case RUNNING_EXERCISE:
        screenComponent = (
          <RunningExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
        break;
      default:
        screenComponent = undefined;
    }
  }
  return (
    <div className="App">
      <header className="App-header">{screenComponent}</header>
    </div>
  );
}

export default App;
