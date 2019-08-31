import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
    state = {
        count: 0
    };
    render() {
        return <h1>Now count : {this.state.count}</h1>;
    }
}

export default App;
