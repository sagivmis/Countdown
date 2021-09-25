import "./App.css";
import React, { useState } from "react";
import Background from "./components/Background";
import Countdown from "./components/Countdown";
import Header from "./components/Header";

function App() {
    const [target, setTarget] = useState(+new Date(`01/01/2022 00:00`));
    return (
        <div className='App'>
            <Background />
            <Header setTarget={setTarget} />
            <Countdown target={target} />
        </div>
    );
}

export default App;
