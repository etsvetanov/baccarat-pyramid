import React, {PropTypes} from 'react';
import Slider from './slider.jsx';
import Spinner from './spinner.jsx';
import { Checkbox } from 'semantic-ui-react';


class OptionsList extends React.Component {
    constructor(props) {
        super(props);
        this._handleChange = this._handleChange.bind(this);
        this._handleCheckboxChange = this._handleCheckboxChange.bind(this);
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

    _handleCheckboxChange(event, data) {
        const value = data.checked;
        const name = data.name;
        this.props.setOption(name, value);
    }

    _renderItem(option) {
        let optionControl;

        switch (typeof option.value) {
            case 'boolean':
                optionControl = (
                    <Checkbox
                        toggle={true}
                        name={option.id}
                        checked={option.value}
                        onChange={this._handleCheckboxChange}
                    />
                );
                break;
            case 'number':
                optionControl = (
                    <Slider
                        value={option.value}
                        name={option.id}
                        handleChange={this._handleChange}
                        min={option.min}
                        max={option.max}
                        step={option.step}
                    />
                );
        }

        // console.log('OptionsList._renderItem', option.label);

        return (
            <li key={option.label} className="option-container">
                <span className="inline-label"> {option.label} </span>
                {optionControl}
            </li>
        );
    }

    render() {
        console.log('OptionsList.render()', this.props.options);

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