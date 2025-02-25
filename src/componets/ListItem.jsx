import { useReducer, useRef } from "react"
import "../App.css"


function ListItem({ index, state, dispatch}) {
    const task = useRef(null)

    return <div>
        <input type="checkbox"
        checked={state.completed} 
        onChange={()=>dispatch({type:"COMPLETED", index: index})} />
        {!state.edit ? <>
            <label htmlFor="">{state.title}</label>
            <button onClick={()=>dispatch({type:"EDIT", index: index})}>Edit</button>
            <button onClick={()=>dispatch({type:"DELETE", index: index})}
            disabled={!state.completed}>Delete</button>
        </> : <>
            <input ref={task} type="text" />
            <button onClick={()=>dispatch({type:"SAVE", index:index, payload: task.current.value})}>
                Save
            </button>
        </>}
    </div>
}

export default ListItem