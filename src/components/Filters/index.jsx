import { Row, Col, Typography, Input, Radio, Select, Tag } from 'antd'
import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { filterByPriority, filterByStatus, searchTodo } from '../../redux/actions';

const WrapperStyled = styled(Row)`
    .mb {
        margin-bottom: 16px;
    }
`

const ParagraphStyled = styled(Typography.Paragraph)`
    &&& {
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 2px;
    }
`

function Filter() {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')
    const [status, setStatus] = useState('all')
    const [priorities, setPriorities] = useState([])

    const handleSearchValue = (e) => {
        setSearchText(e.target.value)
        dispatch(searchTodo(e.target.value))
    }

    const handleChangeStatus = (e) => {
        setStatus(e.target.value)
        dispatch(filterByStatus(e.target.value))
    }

    const handleChangePriority = (value) => {
        setPriorities(value)
        dispatch(filterByPriority(value))
    }

    return (
        <WrapperStyled>
            <Col span={24} className="mb">
                <ParagraphStyled>Search</ParagraphStyled>
                <Input.Search placeholder='Seach todo' value={searchText} onChange={handleSearchValue}/>
            </Col>
            <Col span={24} className="mb">
                <ParagraphStyled>Filter By Status</ParagraphStyled>
                <Radio.Group 
                    value={status}
                    onChange={handleChangeStatus}
                >
                    <Radio value='all'>All</Radio>
                    <Radio value='completed'>Completed</Radio>
                    <Radio value='todo'>To do</Radio>
                </Radio.Group>
            </Col>
            <Col span={24} className="mb">
                <ParagraphStyled>Filter By Priority</ParagraphStyled>
                <Select
                    mode='multiple'
                    allowClear
                    placeholder="Select priority"
                    style={{width: '100%'}}
                    value={priorities}
                    onChange={handleChangePriority}
                >
                    <Select.Option value="high" label='high'>
                        <Tag color="red">High</Tag>
                    </Select.Option>
                    <Select.Option value="medium" label='medium'>
                        <Tag color="blue">Medium</Tag>
                    </Select.Option>
                    <Select.Option value="low" label='low'>
                        <Tag color="gray">Low</Tag>
                    </Select.Option>
                </Select>
            </Col>
        </WrapperStyled>
    );
}

export default Filter;