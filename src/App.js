import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import ExerciseList from "./components/Exercises"
import EditExercises from "./components/EditExercise"
import CreateExercise from "./components/CreateExercise"
import CreateUser from "./components/CreateUser"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path='/' exact component={ExerciseList}></Route>
        <Route path='/edit/:id' component={EditExercises}></Route>
        <Route path='/create' component={CreateExercise}></Route>
        <Route path='/user' component={CreateUser}></Route>
      </div>
    </Router>
  );
}

export default App;
