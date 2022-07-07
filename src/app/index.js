import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";


class App extends React.Component {

    constructor(){
        super()
        this.state = {
            name : "Home"
        }
    }

    customAlertForHeader(){
        alert(this.state.name);        
    }

    onGreet () {
        alert("Hello!");
    }

    onChangeLinkName(newName) {
        this.setState({
            name : newName
        })
    }

    render() {
        let userObj = {
            id: 1,
            username: 'gp532',
            email: 'acb@xyz.com',
            hobbies: ['Dancing', 'Reading']
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header name={this.state.name} greet={this.customAlertForHeader.bind(this)}/>
                    </div>
                </div>
                <p> test </p>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home 
                            obj={userObj} 
                            onChangeLinkName={this.onChangeLinkName.bind(this)}
                            initialName={this.state.name}
                        />
                        <Home />
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById("app"));