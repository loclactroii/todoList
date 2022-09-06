import { Row, Col, Input, Select, Tag, Button } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { todosRemainingSelector } from "../../redux/useSeletor";
import todoListReducer from "./todoListReducer";
function TodoList() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [priority, setPriority] = useState("medium");

  const todoList = useSelector(todosRemainingSelector);

  const handleChangeInputValue = (e) => {
    setValue(e.target.value);
  };

  const handleChangeSelectValue = (value) => {
    setPriority(value);
  };

  const handleAddTodoButton = () => {
    dispatch(
      todoListReducer.actions.addTodo({
        id: uuidv4(),
        name: value,
        priority: priority,
        completed: false,
      })
    );

    setValue("");
    setPriority("medium");
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={value} onChange={handleChangeInputValue} />
          <Select
            defaultValue="medium"
            value={priority}
            onChange={handleChangeSelectValue}
          >
            <Select.Option value="high" name="high">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="medium" name="medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="low" name="low">
              <Tag color="grey">Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleAddTodoButton} type="primary">
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}

export default TodoList;
