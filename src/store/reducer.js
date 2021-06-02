import {CHANGE_INPUT,ADD_TODO,DELETE_TODO} from './actionTypes'

const defaultSate={
    inputValue:'Do Something~',
    list : [
        'Racing car sprays burning fuel into crowdRacing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
        'moonwanger',
        'moonwanger',
        'moonwanger',
        'moonwanger',
        'moonwanger',
        'moonwanger',
      ]
};

const fn=(state=defaultSate,action)=>{
    if(action.type===CHANGE_INPUT){
        //不能更改state
        const newState={
            ...state
        }
        newState.inputValue=action.value
        return newState;
    }
    if(action.type===ADD_TODO){
        const newState={...state};
        newState.list.push(state.inputValue);
        newState.inputValue='';
        return newState
    }
    if(action.type===DELETE_TODO){
        const newState={...state};
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}
export default fn;
