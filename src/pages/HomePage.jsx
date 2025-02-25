import data from '../initialState'
import TodoForm from '../componets/Form'
import ListItem from '../componets/ListItem'
import "../App.css"
import { useRef, useReducer } from 'react'


function toggle(state, action) {
    let newState = [...state]

    switch (action.type) {
        case "ADD":            
            const addNew = newState[state.length - 1]
            newState.push({
                "userId": addNew.userId,
                "id": addNew.id + 1,
                "title": action.payload.value,
                "edit": false,
                "completed": false
            })
            action.payload.value = ""
            return newState
        case "EDIT":
            newState[action.index].edit = !newState[action.index].edit
            return newState
        case "SAVE":
            newState[action.index].edit = !newState[action.index].edit
            newState[action.index].title = action.payload
            return newState
        case "DELETE":
            newState.splice(action.index,1)
            return newState
        case "COMPLETED":
            newState[action.index].completed = !newState[action.index].completed
            return newState
        default:
            return state
    }
}


function HomePage() {

    const [listData, dispatch] = useReducer(toggle, data)

    return <div className='homePage'>
        <h1>Todo List</h1>
        <TodoForm handleOnSubmit={dispatch} />
        <div className="scrollableView">
            {
                listData.map((list, index) => {
                    return <ListItem
                        key={list.id}
                        index={index}
                        state={listData[index]}
                        dispatch={dispatch}
                    />
                })
            }
        </div>
    </div>
}

export default HomePage