import React from "react";

// Creating same component with stateless with prop
export const Header = (props) => {
    // console.log(props.greet(props.name));
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#">
                                {props.name}
                            </a>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-primary justify-content-between" onClick={props.greet}> Greet</button>
            </div>
        </nav>
    );
}

// This components is with state method
/*
    export class Header extends React.Component {
        render() {
            return (
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <ul className="nav navbar-nav">
                                <li>
                                    <a href="#">
                                        Home
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            );
        }
    }
*/