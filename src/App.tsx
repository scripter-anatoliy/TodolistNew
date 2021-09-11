import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

function App() {

    const tasks1 = [
        {id: 1, title: "RaectJS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "CSS", isDone: false}
    ]

    const tasks2 = [
        {id: 1, title: "Angular", isDone: true},
        {id: 2, title: "Storybook", isDone: false},
        {id: 3, title: "Vue", isDone: false}
    ]

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1}/>
            <Todolist title="For acquaintance" tasks={tasks2}/>
        </div>
    );
}
export default App

