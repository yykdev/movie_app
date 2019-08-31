import React from "react";

class App extends React.Component {
    constructor(props) {
        // 컴포넌트가 생성 될 때 실행 됨
        super(props);
        console.log("hello");
    }

    state = {
        count: 0
    };

    add = () => {
        this.setState(current => ({
            count: current.count + 1
        }));
    };
    minus = () => {
        this.setState(current => ({
            count: current.count - 1
        }));
    };

    componentDidMount() {
        // 처음 렌더링 될 때에만 호출 됨
        console.log("component rendered");
    }
    componentDidUpdate() {
        // render 함수가 호출 되어 렌더링이 완료 된 이후 호출 됨
        console.log("I just Update");
    }

    render() {
        // 렌더링 될 때마다 실행 됨
        console.log("I'm rendering");
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
