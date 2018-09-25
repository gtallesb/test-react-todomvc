import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./components/TodoList";


ReactDOM.render(
    <div>
     <TodoList/>
    </div>,
    document.querySelector("#container")
);
