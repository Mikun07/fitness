import React, { Component } from 'react'
import axios from 'axios'

export class CreateUser extends Component {

    state ={
        username: ''
    }

    setValues = ({target}) => {
        this.setState({
            [target.name]: target.value
        })
    }

    createUser = async (e) => {
        e.preventDefault()

        const user = {
            username: this.state.username
        }

        let url = "http://localhost:2500/users/add"
        const result = await axios.post(url, user)
        console.log(result.data);
    }

    render() {
        return (
            <div>
                <h3>Create and new user </h3>
                <form onSubmit={this.createUser}>
                    <div className="form-group">
                            <label> Username: </label>
                            <input className="form-control" type="text" name="username" value={this.state.username} onChange={this.setValues} />
                    </div>

                    <div className="form-group">
                        <input className="btn btn-sm btn-primary" type="submit" value="Create User"  />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateUser
