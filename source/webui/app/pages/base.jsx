import React, { PropTypes } from 'react';
import NavBar from 'components/NavBar.jsx';

class BasePage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                {this.props.children}
            </div>
        )
    }
}

export default BasePage;