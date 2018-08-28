import React from 'React';
import SubItem from './SubItem';

class CollapsableItem extends React.Component {

    constructor (props) {
        super();
    }

    render() {
        
        return (
            <div className='flatSideBar__collapsableItem'>
                <div className='flatSideBar__collapsableItemDetails'>
                    <a href={this.props.link}>
                        <i className='material-icons'>
                            {this.props.icon}
                        </i>
                        <span>
                            {this.props.text}
                        </span>
                    </a>
                </div>
                <div className='flatSideBar__collapseSection'>
                    {this.subItems}
                </div>
            </div>
        )
    }

    get subItems(){

        let subItems = [];

        for(let subItem of this.props.children){
            subItem.push(<SubItem text={subItem.text} />);
        }

        return subItems;

    }

}

export default CollapsableItem;