import {connect} from 'react-redux';
import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';

import OptionsList from 'components/optionsList.jsx';
import Spinner from 'components/spinner.jsx';
import * as actions from 'actions/index.jsx';
import {getOptionsHash, getOptionsList} from '../reducers/index.jsx';


class OptionsListContainer extends Component {
    constructor() {
        super();

        this.handleSaveOptions = this.handleSaveOptions.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.props.fetchOptions();
    }

    handleSaveOptions() {
        console.log('Saving options...');

        const {saveOptionsRequest, saveOptionsSuccess} = this.props;

        saveOptionsRequest();

        fetch('/api/user_options', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.props.optionsHash),
        }).then(function (response) {
            if (response.ok) {
                saveOptionsSuccess();
            }
        });
    }

    render() {
        if (this.props.isLoading) {
            console.log('Spin right round...');
            return <Spinner />
        }

        return (
            <div className="options-container">
                <OptionsList
                    options={this.props.options}
                    setOption={this.props.setOption}
                />

                <Button
                    content="Save options"
                    loading={this.props.optionsSaved === "saving"}
                    icon={this.props.optionsSaved === "saved" ? "checkmark" : undefined}
                    onClick={this.handleSaveOptions}
                    color={this.props.optionsSaved === "dirty" ? "green" : undefined}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        optionsLoading: state.userOptions.optionsLoading,
        optionsSaved: state.userOptions.optionsSaved,
        options: getOptionsList(state),
        optionsHash: getOptionsHash(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // TODO: remove this?
        toggleOption: (name) => {
            dispatch(actions.toggleOption(name));
        },

        setOption: (name, value) => {
            dispatch(actions.setOption(name, value));
        },

        fetchOptions: actions.fetchOptions,

        saveOptionsRequest: () => {
            dispatch(actions.saveOptionsRequest());
        },

        saveOptionsSuccess: () => {
            dispatch(actions.saveOptionsSuccess());
        }
    }
};

OptionsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OptionsListContainer);

export default OptionsListContainer