import "./App.css";
import React, { useState } from "react";
import Background from "./components/Background";
import Countdown from "./components/Countdown";
import ChangeCountdown from "./components/ChangeCountdown";
import MyForm from "./components/MyForm";
// import "./"
// import "semantic-ui-css/semantic.min.css";

function App() {
    const [target, setTarget] = useState(+new Date(`01/01/2022 00:00`));
    return (
        <div className='App'>
            <Background />
            <MyForm setTarget={setTarget} />
            <ChangeCountdown />
            <Countdown target={target} />
        </div>
    );
}

export default App;
