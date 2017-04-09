import {connect} from 'react-redux';
import React, {Component, PropTypes} from 'react';

import OptionsList from 'components/optionsList.jsx';
import Spinner from 'components/spinner.jsx';
import {setOption, toggleOption, requestOptions, receiveOptions} from 'actions/index.jsx';

class OptionsListContainer extends Component {
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        console.log('will fetch data...');
        const {requestOptions, receiveOptions} = this.props;

        requestOptions();

        fetch('/api/user_options', {credentials: 'include'})
            .then(function (response) {
                return response.json()
            })
            .then(function (options) {
                receiveOptions(options);
            });
    }

    render() {
        if (this.props.isLoading) {
            console.log('Spin right round...');
            return <Spinner />
        }

        return (
            <div>
                <OptionsList
                    options={this.props.options}
                    setOption={this.props.setOption}
                />

                <div className="button" onClick={this.handleSaveOptions}>
                    Create
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        options: state.userOptions.optionsList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // TODO: remove this?
        toggleOption: (name) => {
            dispatch(toggleOption(name));
        },

        setOption: (name, value) => {
            dispatch(setOption(name, value));
        },

        requestOptions: () => {
            dispatch(requestOptions());
        },

        receiveOptions: (options) => {
            dispatch(receiveOptions(options));
        }
    }
};

OptionsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OptionsListContainer);

export default OptionsListContainer