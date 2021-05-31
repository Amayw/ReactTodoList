import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Button,Input,List,Typography} from 'antd';


const WrapperStyle={
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
}

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
class TodoList extends Component {

    render() { 
        return ( 
            <div style={WrapperStyle}>
                <header>
                    <Input placeholder='input' style={{width:'250px',margin:'20px 10px 20px 0'}}/>
                    <Button type='primary'>Add</Button>
                </header>
                <main>
                <List
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
                </main>
            </div>
         );
    }
}
 
export default TodoList;