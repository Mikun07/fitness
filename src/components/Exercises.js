import React, { Component } from 'react'
import axios from 'axios'

export class Exercises extends Component {

    state = {
        exercises: []
    }

    deleteExercise =  (id) => {
        axios.delete('', )
    }

    render() {
        return (
            <div>
                <p> Exercises page</p>
            </div>
        )
    }
}

export default Exercises
