import React,{Component} from 'react';

const iconStyle={
    width: '1em',
    height: '1em',
    verticalAlign: '-0.15em',
    fill: 'currentColor',
    overflow: 'hidden',
}
class Icon extends Component{

    render(){
        return (
            <>
                <svg style={iconStyle} className="icon" aria-hidden="true">
                    <use xlinkHref={`#icon-${this.props.name}`}/>
                </svg>
            </>
        )
    }
}

export default Icon;
