import React from "react";

export class Home extends React.Component {
    render() {
        console.log('props : ', this.props);
        let content = ""
        console.log(Object.keys(this.props).length);
        if (Object.keys(this.props).length > 0) {
            content = <ul>
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