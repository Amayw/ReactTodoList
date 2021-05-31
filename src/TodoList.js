import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Button,Input,List} from 'antd';
import store from './store';
import Icon from './components/Icon'

const WrapperStyle={
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
}

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state=store.getState();
    }

    componentDidMount(){
        store.subscribe(this.storeChange)
    }

    changeInputValue=(e)=>{
        const action={
            type:'changeInput',
            value:e.target.value
        }
        store.dispatch(action);
    }

    addTodo=()=>{
        const action={
            type:'addTodo'
        }
        store.dispatch(action);
    }

    storeChange=()=>{
        this.setState(store.getState());
    }

    render() {
        return (
            <div style={WrapperStyle}>
                <header>
                    <Input
                        value={this.state.inputValue}
                        placeholder={this.state.inputValue}
                        style={{width:'250px',margin:'20px 10px 20px 0'}}
                        onChange={this.changeInputValue}
                    />
                    <Button type='primary' onClick={this.addTodo}>Add</Button>
                </header>
                <main>
                <List
                    style={{paddingBottom:'50px',width:'318px'}}
                    dataSource={this.state.list}
                    renderItem={item => (
                        <List.Item>
                         <span style={{width:'280px'}}>{item}</span>
                         <Icon name='del3' />
                        </List.Item>
                    )}
                />
                </main>
            </div>
         )
    }
}

export default TodoList;
