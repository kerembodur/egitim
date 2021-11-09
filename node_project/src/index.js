import "./styles/style.css";
import { sayHello } from "./js/app";
sayHello();

console.log("Hello webpack!");

import React, { useState } from "react";
import { render } from "react-dom";

function App() {
    const [state, setState] = useState("CLICK ME");

    return <button onClick={() => setState("CLICKED")}>{state}</button>;
}

render(<App />, document.getElementById("root"));