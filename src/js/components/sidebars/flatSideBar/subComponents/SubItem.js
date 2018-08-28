import React from 'React';

class SubItem extends React.Component {

    constructor (props) {
        super();
    }

    render() {
        
        return (
            <div className='flatSideBar__items-subItem'>
                <span>
                    {/* {this.props.text} */}
                </span>
            </div>
        )
    }
}

export default SubItem;