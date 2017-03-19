import React, {PropTypes} from 'react';

class Slider extends React.Component {
    render() {
        return (
            <div className="slider-container">
                <input type="range"
                       name={this.props.name}
                       value={this.props.value}
                       onChange={this.props.handleChange}
                       className="slider"
                       min={this.props.min}
                       max={this.props.max}
                       step={this.props.step}
                />
                <input type="number"
                       name={this.props.name}
                       value={this.props.value}
                       onChange={this.props.handleChange}
                       className="slider-input"
                       min={this.props.min}
                       max={this.props.max}
                       step={this.props.step}
                       pattern="\d{2}"
                />
            </div>
        )
    }
}

Slider.propTypes = {
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
    min: PropTypes.string,
    max: PropTypes.string,
    step: PropTypes.string,
};

Slider.defaultProps = {
    max: "100",
    min: "1",
    step: "1",
};

export default Slider