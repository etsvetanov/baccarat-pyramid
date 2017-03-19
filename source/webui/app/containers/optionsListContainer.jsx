import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import OptionsList from 'components/optionsList.jsx';
import Spinner from 'components/spinner.jsx';
import { setOption, toggleOption } from 'actions/index.jsx';

class OptionsListContainer extends Component {
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        console.log('will fetch data...');
        const { requestOptions } = this.props;
        fetch('/api/user_options', {credentials: 'include'})
            .then(function(response) {
                console.log('DA RESPONSE', response);
            });
    }

    render() {
        if (this.props.isLoading) {
            return <Spinner />
        }

        return (
            <OptionsList
                options={this.props.options}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        options: state.userOptions
    }
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
    }
};

OptionsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OptionsListContainer);

export default OptionsListContainer