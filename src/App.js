import React from "react";

class App extends React.Component {
    state = {
        count: 0
    };

    add = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
    minus = () => {
        this.setState({
            count: this.state.count - 1
        });
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
