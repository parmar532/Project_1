import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        if (Object.keys(props).length > 0)
            // this.newId = props.obj.id
            this.state ={
                newId : props.obj.id,
                name : props.initialName
            }
    }

    changeId() {
        if (Object.keys(this.props).length > 0) {
            this.setState({
                newId : this.state.newId*0+Math.floor(Math.random() * 10) //console.log(this.newId);
            })
        }
            
    }

    onChangeLinkName(){
        if (Object.keys(this.props).length > 0) 
            this.props.onChangeLinkName(this.state.name);
    }

    onEventChange(event){
        if (Object.keys(this.props).length > 0) 
            console.log('Inside Event Change : ', event.target.value);
            this.setState({
                name : event.target.value
            })
    }       

    render() {
        console.log('props : ', this.props);
        // console.log(this.state);
        let content = ""
        if (Object.keys(this.props).length > 0) {
            content = <div> 
                <ul>
                    <li> Id --{">"} {this.state.newId} </li>
                    <li> Username --{">"} {this.props.obj.username} </li>
                    <li> Email Id --{">"} {this.props.obj.email} </li>
                    <li> Following are the hobbies :-
                        <ul>
                            {
                                this.props.obj.hobbies.map((element, index) => {
                                    return <li key={index}> {element} </li>
                                })
                            }
                        </ul>
                    </li>
                </ul>
                <button className="btn btn-primary" type="button" onClick={this.changeId.bind(this,event)}>Change Id</button>
                <input className="offset-md-1" type="text" value={this.state.name} onChange={(event) => this.onEventChange(event)} />
                <button className="btn btn-primary offset-md-2" type="button" onClick={this.onChangeLinkName.bind(this)}> Change Header Name</button>
            </div>

        }
        else {
            content = <ul>
                <li> Nothing much found</li>
            </ul>
        }

        return (
            <div>
                <p> Parent element send the following data </p>
                {content}
            </div>
        );
    };
}

// Todo Task, 
// 1) put a condition to check the data types of props elements, 
// 2) Access the child element i.e., the content inside the tag written in Home through props