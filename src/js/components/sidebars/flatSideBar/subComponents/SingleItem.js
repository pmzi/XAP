import React from 'React';

class SingleItem extends React.Component {

    constructor (props) {
        super();
    }

    render() {
        
        return (
            <div className='flatSideBar__singleItem'>
                <a href={this.props.link}>
                    <i className='material-icons'>{this.props.icon}</i>
                    <span>{this.props.text}</span>
                </a>
            </div>
        )
    }
}

export default SingleItem;