import React, {PropTypes} from 'react';
// import Switch from '../components/Switch.jsx';
import OptionsListContainer from '../containers/optionsListContainer.jsx';

class OptionsPage extends React.Component {
    render() {
        return (
            <div className="main">
                <OptionsListContainer />
            </div>
        )
    }
}

export default OptionsPage