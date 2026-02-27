import React, { useState, useRef } from "react";
import styles from "./Todo.module.css"
import { useAutoAnimate } from '@formkit/auto-animate/react'

let TodoApp = () => {

    const dragItem = useRef(null);
    const dragOverItem = useRef(null);

    const handleDragSort = () => {
        let updatedTasks = [...tasks];

        const draggedItemContent = updatedTasks.splice(dragItem.current, 1)[0];

        updatedTasks.splice(dragOverItem.current, 0, draggedItemContent);

        dragItem.current = null;
        dragOverItem.current = null;

        setTasks(updatedTasks);
    };

    const [parent] = useAutoAnimate()
    const [tasks, setTasks] = useState(["Prepare for assignment", "Go to the gym", "Check emails"]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }
    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    const deleteTask = (index) => {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    }

    const moveTaskUp = (index) => {

        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    const moveTaskDown = (index) => {

        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    return (
        <div className={styles.toDoList}>
            <h1>To do list</h1>

            <div className={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Enter new task..."
                    value={newTask}
                    onChange={handleInputChange}
                    className={styles.taskInput}
                />
                <button className={styles.addBtn} onClick={addTask}>
                    Add
                </button>
            </div>

            <ol ref={parent}>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        draggable
                        onDragStart={() => (dragItem.current = index)}
                        onDragEnter={() => (dragOverItem.current = index)}
                        onDragEnd={handleDragSort}
                        onDragOver={(e) => e.preventDefault()}>

                        <span className={styles.task}>{task}</span>

                        <button className={styles.deleteBtn} onClick={() => deleteTask(index)}>Delete</button>
                        {/* <button className={styles.moveUpBtn} onClick={() => moveTaskUp(index)}>👆</button>
                        <button className={styles.moveDownBtn} onClick={() => moveTaskDown(index)}>👇</button> */}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default TodoApp