import React from "react";
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
import {Foo} from "./Foo";

export class Hello extends React.Component{
    render() {
        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <Foo/>
            </div>
        );
    }
}