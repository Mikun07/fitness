import React, { Component } from 'react'
import axios from 'axios'
import Datepicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export class CreateExercise extends Component {
    

    state = {
        username: '', 
        description: '',
        duration: '',
        date: new Date(),  
        users: []
    }

    setValues = ({target}) => {
        this.setState({
            [target.name] : target.value
        })
    }

    setDate = (date) => {
        this.setState({
            date
        })
    }

    createExercise = async (e) => {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        const url = 'http://localhost:2500/exercises/add'
        const result = await axios.post(url, exercise) 

        console.log(result.data);


    }

    componentDidMount() {
        let url = "http://localhost:2500/users"
        
        axios.get(url)
             .then(response => {
                if(response.data){
                    this.setState({
                        users: response.data.map(user => user.username), 
                        username: response.data[0].username
                    })
                }
             })
             .catch(err => {
                console.log(err);
             });
    }


    render() {
        return (
            <div>
                
                <h3>New Exercise log</h3>

                <form onSubmit={this.createExercise}>

                    <div className="form-group">
                        <label> Username: </label>
                        <select 
                            required
                            className="form-control"
                            name="username"    
                            value={this.state.username}
                            onChange={this.setValues}
                        >
                                {
                                    this.state.users.map(user => {
                                        return (
                                        <option key={user} value={user}> {user} </option>
                                        )
                                    })
                                }
                        </select>
                    </div>

                    <div className="form-group">
                        <label> Description: </label>
                        <input className="form-control" type="text" name="description" value={this.state.description} onChange={this.setValues} />
                    </div>

                    <div className="form-group">
                        <label> Duration (in minutes)</label>
                        <input className="form-control" type="text" name="duration" value={this.state.duration} onChange={this.setValues} />
                    </div>

                    <div className="form-group">
                        <label> Date: </label>
                        <div>
                            <Datepicker selected={this.state.date} onChange={this.setDate} />
                        </div>
                    </div>
                    <br />
                    
                    <div className="form-group">
                        <input className="btn btn-sm btn-primary" type="submit" value="Create Exercise"  />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateExercise
