import "./App.css";
import React, { useState } from "react";
import Background from "./components/pages/Background";
import Countdown from "./components/pages/Countdown";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";

function App() {
    const [target, setTarget] = useState(+new Date(`01/01/2022 00:00`));
    return (
        <div className='App'>
            <Background />
            <Header setTarget={setTarget} />
            <Countdown target={target} />
            <Footer />
        </div>
    );
}

export default App;
