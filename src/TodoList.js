import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Button,Input,List,Typography} from 'antd';
import store from './store';

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
                    <Button type='primary'>Add</Button>
                </header>
                <main>
                <List
                    style={{paddingBottom:'50px'}}
                    dataSource={this.state.list}
                    renderItem={item => (
                        <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
                </main>
            </div>
         )
    }
}

export default TodoList;
