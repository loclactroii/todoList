import { Row, Checkbox, Tag } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import todoListReducer from '../TodoList/todoListReducer'

const colorPriority = {
    high: 'red',
    medium: 'blue',
    low: 'gray',
}

function Todo({name, priority, completed, id}) {
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(completed)

    const toggleCheckbox = () => {
        setChecked(!checked)
        dispatch(todoListReducer.actions.toggleTodoStatus(id))
    }

    const newPriority = priority.charAt(0).toUpperCase() + priority.slice(1)
    return (
        <Row
            justify='space-between'
            style={{
                marginBottom: '4px',
                ...(checked? { opacity: '0.5', textDecoration: 'line-through'}: {})
            }}
        >
            <Checkbox checked={checked} onChange={toggleCheckbox}>
                {name}
            </Checkbox>
            <Tag color={colorPriority[priority]}>
                {newPriority}
            </Tag>
        </Row>
    );
}

export default Todo;