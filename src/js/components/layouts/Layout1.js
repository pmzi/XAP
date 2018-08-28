import React from 'React';

class Layout1 extends React.Component {

    constructor (props) {
        super();
    }

    render() {
        console.log(this.props.children)
        return (
            <div id="wrapper">
                {this.props.children}
            </div>
        )
    }
}

export default Layout1