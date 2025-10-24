import React, { useState } from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState([]);

    function inputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") { 
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }

    }

    function removeTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks);
    }

    function taskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function taskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function keyPress(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    }

    return (
        <div className="todolist">
            <h1>To Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Ievadi tekstu..."
                    value={newTask}
                    onChange={inputChange}
                    onKeyDown={keyPress}
                />
                <button
                    className="add_button"
                    onClick={addTask}
                >
                    Pievienot
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}
                            <button
                                onClick={() => removeTask(index)}
                            >
                                Dzēst
                            </button>
                            <button
                                onClick={() => taskUp(index)}
                            >
                                Pacelt
                            </button>
                            <button
                                onClick={() => taskDown(index)}
                            >
                                Nolaist
                            </button>
                        </span>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList