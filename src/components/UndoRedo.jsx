import React, { Component } from 'react'

const UndoRedo = (props) => {
    return (
    <div className="UndoRedo">
        <button onClick={props.undoHandler}>Undo</button>
        <button onClick={props.redoHandler}>Redo</button>
    </div>
)}

export default UndoRedo;