import React from 'react';
import { connect } from 'react-redux';
import { Button, Progress, Grid } from 'semantic-ui-react';

import IterationTable  from '../components/iterationTable.jsx';
import Chart from '../components/chart.jsx';
import * as actions from '../actions/index.jsx';

class SimulationPage extends React.Component {
    constructor() {
        super();

        this.handleStartSimulation = this.handleStartSimulation.bind(this);
        // this.pollForProgress = this.pollForProgress.bind(this);
    }

    pollForProgress() {
        const self = this;

        const timeoutId = window.setTimeout(function() {
            fetch('/api/simulation_status', {credentials: 'include'})
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    if (data.progress !== '100') {
                        self.pollForProgress();
                    }
                    self.props.setProgress(data.percentage);
                })
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.simulationState === 'requested' && this.props.simulationState === 'running') {
            this.pollForProgress()
        }
    }

    handleStartSimulation() {
        const {startSimulation, requestSimulation} = this.props;

        requestSimulation();

        fetch('/api/start_simulation', {credentials: 'include'})
            .then(function (response) {
                if (response.ok) {
                    startSimulation();
                }
            });
    }

    renderBeginButton () {
        return (
            <div className="main">
                <Button
                    content="Begin"
                    onClick={this.handleStartSimulation}
                    loading={this.props.simulationState === 'requested'}
                />
            </div>
        )
    }

    renderProgressBar() {
        return (
            <Grid columns='equal'>
                <Grid.Column/>
                <Grid.Column width={8}>
                    <Progress percent={this.props.simulationProgress} autoSuccess progress={true}/>
                </Grid.Column>
                <Grid.Column/>
            </Grid>
        );
    }

    renderResults() {
        return (
            <Grid columns='equal'>
                <Grid.Row>
                    <Grid.Column width={16} className="main">
                            <Chart />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column />
                    <Grid.Column width={8}>
                        <IterationTable />
                    </Grid.Column>
                    <Grid.Column />
                </Grid.Row>
            </Grid>
        )
    }

    render() {

        switch (this.props.simulationState) {
            case 'idle':
            case 'requested':
                return this.renderBeginButton();
            case 'running':
                return this.renderProgressBar();
            case 'finished':
                return this.renderResults();
        }
    }
}

const mapStateToProps = (state) => {
    return {
        simulationState: state.simulation.simulationState,
        simulationProgress: state.simulation.simulationProgress,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startSimulation: () => {
            dispatch(actions.startSimulation());
        },
        setProgress: (percentage) => {
            dispatch(actions.setProgress(percentage));
        },
        requestSimulation: () => {
            dispatch(actions.requestSimulation());
        },
        simulationFinished: () => {
            dispatch(actions.simulationFinished());
        },
    };
};

SimulationPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SimulationPage);

export default SimulationPage