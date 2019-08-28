import React from "react";

function Food({ favourite }) {
    console.log(favourite);
    return <h1>I Love {favourite}</h1>;
}

function App() {
    return (
        <div className="App">
            <h1>Hello</h1>
            <Food favourite="kimchi" />
            <Food favourite="ramen" />
            <Food favourite="samgipsal" />
            <Food favourite="chukumii" />
        </div>
    );
}

export default App;
