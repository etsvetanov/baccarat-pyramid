import React, {PropTypes} from 'react';
import Switch from './Switch.jsx';
import Slider from './slider.jsx';
import Spinner from './spinner.jsx';

class OptionsList extends React.Component {
    constructor(props) {
        super(props);
        this._handleChange = this._handleChange.bind(this);
        this._renderItem = this._renderItem.bind(this);
    }

    _getValue(event) {
        switch (event.target.type) {
            case 'checkbox':
                return event.target.checked;
            case 'range':
                return parseFloat(event.target.value);
            case 'number':
                const number = parseFloat(event.target.value);
                if (number > event.target.max) {
                    return parseFloat(event.target.max);
                }
                return parseFloat(event.target.value);
        }
    }

    _handleChange(event) {
        // const value = event.target.value;
        const value = this._getValue(event);
        const name = event.target.name;
        this.props.setOption(name, value)
    }

    _renderItem(option) {
        let optionControl;

        switch (typeof option.value) {
            case 'boolean':
                optionControl = (
                    <Switch
                        name={option.name}
                        checked={option.value}
                        id={option.id}
                        handleChange={this._handleChange}
                    />
                );
                break;
            case 'number':
                optionControl = (
                    <Slider
                        value={option.value}
                        name={option.name}
                        handleChange={this._handleChange}
                        min={option.min}
                        max={option.max}
                        step={option.step}
                    />
                );
        }

        return (
            <li key={option.name} className="option-container">
                <span className="inline-label"> {option.name} </span>
                {optionControl}
            </li>
        );
    }

    render() {
        return (
            <ul>
                {this.props.options.map(this._renderItem)}
            </ul>
        )
    }
}

OptionsList.propTypes = {
    options: PropTypes.array
};

export default OptionsList