import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
    state = {
        count: 0
    };

    add = () => {
        console.log("+");
    };
    minus = () => {
        console.log("-");
    };

    render() {
        return (
            <div>
                <h1>Now count : {this.state.count}</h1>
                <button onClick={this.add}>+</button>
                <button onClick={this.minus}>-</button>
            </div>
        );
    }
}

export default App;
