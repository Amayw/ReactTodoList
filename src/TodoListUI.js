import React from 'react';
import {Button, Input, List} from 'antd';
import 'antd/dist/antd.css'
import Icon from './components/Icon';

const WrapperStyle={
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
}


function TodoListUI(props){

        return (
            <div style={WrapperStyle}>
                <header>
                    <Input
                        value={props.inputValue}
                        placeholder={props.inputValue}
                        style={{width:'250px',margin:'20px 10px 20px 0'}}
                        onChange={(e)=>props.changeInputValue(e)}
                    />
                    <Button type='primary' onClick={props.addTodo}>Add</Button>
                </header>
                <main>
                    <List
                        style={{paddingBottom:'500px',width:'318px'}}
                        dataSource={props.list}
                        renderItem={(item,index) => (
                            <List.Item>
                                <span style={{width:'280px'}}>{item}</span>
                                <Icon name='del3' onClick={()=>{props.deleteTodo(index)}}/>
                            </List.Item>
                        )}
                    />
                </main>
            </div>
        )
}

export default TodoListUI;
