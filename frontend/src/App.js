import React, {Component} from 'react';
import './App.css';
import Header from "./component/Header";
import axios from "axios";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

export default App;