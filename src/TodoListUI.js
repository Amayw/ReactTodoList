import React,{Component} from 'react';
import {Button, Input, List} from 'antd';
import 'antd/dist/antd.css'
import Icon from './components/Icon';

const WrapperStyle={
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
}


class TodoListUI extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div style={WrapperStyle}>
                <header>
                    <Input
                        placeholder={this.props.inputValue}
                        style={{width:'250px',margin:'20px 10px 20px 0'}}
                        onChange={(e)=>this.props.changeInputValue(e)}
                    />
                    <Button type='primary' onClick={this.props.addTodo}>Add</Button>
                </header>
                <main>
                    <List
                        style={{paddingBottom:'50px',width:'318px'}}
                        dataSource={this.props.list}
                        renderItem={(item,index) => (
                            <List.Item>
                                <span style={{width:'280px'}}>{item}</span>
                                <Icon name='del3' onClick={(index)=>{this.props.deleteTodo(index)}}/>
                            </List.Item>
                        )}
                    />
                </main>
            </div>
        )
    }
}

export default TodoListUI;
