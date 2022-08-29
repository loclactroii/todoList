import { Row, Col, Checkbox, Tag } from 'antd'
import { useState } from 'react'

const colorPriority = {
    high: 'red',
    medium: 'blue',
    low: 'gray',
}

function Todo({name, priority}) {
    const [checked, setChecked] = useState(false)

    const toggleCheckbox = () => {
        setChecked(!checked)
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