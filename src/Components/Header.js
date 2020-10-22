import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="jason wrapper">
                    <h1>“IS THIS THE REAL LIFE?<div className="title">IS THIS JUST FANTASY?"</div></h1>
                    <h2>Ever curious to learn about other people's favourite songs? Now's your chance! Share your favourite song below and scroll down to see it posted along with other entries!</h2>
                <div className="icon">
                    <i className="bounce far fa-caret-square-down"></i>
                </div>
            </div>
        </header>
        )
    }
}

export default Header;