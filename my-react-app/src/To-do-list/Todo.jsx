import { useState, useRef } from "react";
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
    const [tasks, setTasks] = useState(["Go to the gym", "Eat breakfast", "Check emails", "Prepare for the interview", "Hang out with friends"]);
    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editTaskText, setEditTaskText] = useState(""); 

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }
    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    const editTask = (index) => {
        setEditIndex(index);
        setEditTaskText(tasks[index]);
    };

    const saveEdit = (index) => {
        if (editTaskText.trim() !== "") {
            const updatedTasks = [...tasks];
            updatedTasks[index] = editTaskText;
            setTasks(updatedTasks);
            
            setEditIndex(null);
            setEditTaskText("");
        }
    };

    const cancelEditing = () => {
        setEditIndex(null);
        setEditTaskText("");
    };

    const deleteTask = (index) => {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
        if (editIndex === index) {
            cancelEditing();
        }
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
        <div className="baseCard">

             <h1 className="banner">To do list</h1>

            <div className="join w-full mb-8">
                <input
                    type="text"
                    placeholder="Enter new task..."
                    value={newTask}
                    onChange={handleInputChange}
                    className="input input-bordered join-item w-full focus:outline-none focus:border-primary transition-all duration-300" 
                    onKeyDown={(e) => e.key === 'Enter' && addTask()}
                />
                <button 
                    className="btn btn-primary join-item" 
                    onClick={addTask}
                >
                    Add
                </button>
            </div>

            <ol ref={parent} className="space-y-4">
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        draggable={editIndex !== index}
                        onDragStart={() => (dragItem.current = index)}
                        onDragEnter={() => (dragOverItem.current = index)}
                        onDragEnd={handleDragSort}
                        onDragOver={(e) => e.preventDefault()}>

                        {editIndex === index ? (
                            // Edit UI
                            <div className="edit-UI">
                                <input
                                    type="text"
                                    value={editTaskText}
                                    onChange={(e) => setEditTaskText(e.target.value)}
                                    className="input input-bordered join-item w-full focus:outline-none focus:border-primary transition-all duration-300" 
                                    autoFocus
                                    onKeyDown={(e) => e.key === 'Enter' && saveEdit(index)}
                                />
                                <div className="flex gap-1">
                                    <button className="btn btn-ghost btn-sm btn-success" onClick={() => saveEdit(index)}>Save</button>
                                    <button className="btn btn-ghost btn-sm btn-error" onClick={cancelEditing}>Cancel</button>
                                </div>
                            </div>
                        ) : (
                            // Default UI 
                            <>
                                 <div className="default-UI">
                                    <span className="font-medium">{task}</span>
                                    <div className="flex gap-1">
                                        <button className="btn btn-ghost btn-sm btn-primary" onClick={() => editTask(index)}>Edit</button>
                                        <button className="btn btn-ghost btn-sm btn-error" onClick={() => deleteTask(index)}>Delete</button>
                                        {/* <button className={styles.moveUpBtn} onClick={() => moveTaskUp(index)}>👆</button>
                                        <button className={styles.moveDownBtn} onClick={() => moveTaskDown(index)}>👇</button> */}
                                    </div>
                                 </div>
                            </>
                        )}
                    </li>
                ))}
         </ol>
    </div>
    )
}

export default TodoApp