import React from 'React';
import SingleItem from './subComponents/SingleItem';
import CollapsableItem from './subComponents/CollapsableItem';

class FlatSideBar extends React.Component {

    constructor (props) {
        super();
    }

    render() {
        return (
            <aside className='flatSideBar'>
                <div className='flatSideBar__logoWrapper'>
                    <img src={this.props.logo} />
                </div>
                <div className='flatSideBar__items'>
                    {this.items}
                </div>
            </aside>
        )
    }

    get items(){

        let items = [];

        for(let item of this.props.items){
            if(item.hasOwnProperty('children')){
                items.push(<CollapsableItem  link={item.link} icon={item.icon} text={item.text} children={item.children} />);
            }else{
                items.push(<SingleItem link={item.link} icon={item.icon} text={item.text} />);
            }
        }

        return items;
        
    }

}

export default FlatSideBar;