const defaultSate={
    inputValue:'input',
    list : [
        'Racing car sprays burning fuel into crowd.',
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
    if(action.type==='changeInput'){
        //不能更改state
        const newState={
            ...state
        }
        newState.inputValue=action.value
        return newState;
    }
    if(action.type==='addTodo'){
        const newState={...state};
        newState.list.push(state.inputValue);
        newState.inputValue='';
        return newState
    }
    return state;
}
export default fn;
