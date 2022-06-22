import React, { Component } from "react";
import css from "./css/NavBarForm.module.css"

class NavBarForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonText: "Login",
            isLoggedIn: false
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('prev state', prevState)
            return {
                isLoggedIn: this.state.isLoggedIn === "false" ? "true" : "false",
                buttonText: this.state.buttonText === "log out" ? "log in" : "log out",
            }
        })
    }

    render() {
        return (
        <div className={css.NavBar}>
            <h1>My Gallery</h1>
            {
                this.state.isLoggedIn ? (
                    <div>
                        <form>
                            <label>Username:</label>
                            <input placeholder="username"></input>
                            <label>Password:</label>
                            <input placeholder="password"></input>                                
                            <button onClick={() => this.handleClick()}>Submit</button>
                        </form>
                    </div>
                ) : (
                    <div>
                        <span>{this.state.message}</span>
                        <button onClick={() => this.handleClick()}>
                            {this.state.buttonText}
                        </button>
                    </div>
                )
            }
        </div>
        )
    };
}

export default NavBarForm;

