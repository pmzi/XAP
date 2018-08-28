import React from 'React';

class NavBar extends React.Component {

    constructor (props) {
        super();
    }

    render() {
        
        return (
            <nav className='navbar'>
                {this.props.children}
            </nav>
        )
    }
}

export default NavBar;