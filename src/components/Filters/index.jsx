import { Row, Col, Typography, Input, Radio, Select, Tag } from 'antd'
import styled from 'styled-components';

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
    return (
        <WrapperStyled>
            <Col span={24} className="mb">
                <ParagraphStyled>Search</ParagraphStyled>
                <Input.Search placeholder='Seach todo'/>
            </Col>
            <Col span={24} className="mb">
                <ParagraphStyled>Filter By Status</ParagraphStyled>
                <Radio.Group

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