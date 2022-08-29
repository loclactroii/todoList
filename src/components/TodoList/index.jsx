import { Row, Col, Input, Select, Tag, Button } from 'antd'
import Todo from '../Todo';

function TodoList() {


    return (
        <Row style={{height: 'calc(100% - 40px)'}}>
            <Col span={24}  style={{height: 'calc(100% - 40px)', overflowY: 'auto'}}>
                <Todo name='Learn Redux' priority='high'/>
                <Todo name='Learn React' priority='medium'/>
                <Todo name='Learn Javascript' priority='low'/>
            </Col>
            <Col span={24}>
                <Input.Group style={{display: 'flex'}} compact>
                    <Input />
                    <Select defaultValue="medium">
                        <Select.Option value='high' name='high'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='medium' name='medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='low' name='low'>
                            <Tag color='grey'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary'>Add</Button>
                </Input.Group>
            </Col>
        </Row>
    );
}

export default TodoList;