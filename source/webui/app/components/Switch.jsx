import React, {PropTypes} from 'react';


class Switch extends React.Component {
    render() {
        const inputId = `id_${this.props.id}`;

        return (
            <div>
                <div className="onoffswitch">
                    <input type="checkbox"
                           name={this.props.name}
                           className="onoffswitch-checkbox"
                           onChange={this.props.handleChange}
                           checked={this.props.checked}
                           id={inputId}
                    />
                    <label className="onoffswitch-label" htmlFor={inputId}>
                        <span className="onoffswitch-inner"> </span>
                        <span className="onoffswitch-switch"> </span>
                    </label>
                </div>
            </div>
        );
    }
}


Switch.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    handleChange: PropTypes.func,
};

export default Switch


//             {/*onChange={this.props.handleChange}*/}