import React,{Component} from 'react';
import '../../icons/1.svg';
import '../../icons/2.svg';
import '../../icons/3.svg';

const iconStyle={
    width: '1em',
    height: '1em',
    verticalAlign: '-0.15em',
    fill: 'currentColor',
    overflow: 'hidden',
}
class Icon extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <>
                <svg style={iconStyle} className="icon" aria-hidden="true">
                    <use xlinkHref={this.props.name}/>
                </svg>
            </>
        )
    }
}

export default Icon;
