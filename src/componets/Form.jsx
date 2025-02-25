import { useRef } from "react"

function TodoForm({ handleOnSubmit }) {
    const form = useRef(null)

    return <form
        ref={form}
        action=""
        className="todo"
        onSubmit={(e) => {
            e.preventDefault()
            handleOnSubmit({ type: "ADD", payload: form.current[0] })}}>
        <input type="text" />
        <input type="submit" />
    </form>
}

export default TodoForm