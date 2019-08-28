import React from "react";

function Food(props) {
    console.log(props.fav);
    return <h1>I Love Potato</h1>;
}

function App() {
    return (
        <div className="App">
            <h1>Hello</h1>
            <Food fav="kimchi" />
        </div>
    );
}

export default App;
