import React, { Component } from "react";
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest!",
            buttonText: "log in",
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('prev state', prevState)
            return {
                message: this.state.message === "Welcome back, user!" ? "Hello, guest!" : "Welcome back, user!",
                buttonText: this.state.buttonText === "log out" ? "log in" : "log out",
            }
        })
    }

    render() {
        return (
        <div className={css.NavBar}>
            <h1>My Gallery</h1>
            <div>
                <span>{this.state.message}</span>
                <button onClick={() => this.handleClick()}>
                    {this.state.buttonText}
                </button>
            </div>
        </div>
        )
    };
}

export default NavBarSimple;