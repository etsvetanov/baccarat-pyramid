import {line as Line} from 'zingchart-react';
import React, { Component } from 'react';
import { Input, Icon } from 'semantic-ui-react';

class Chart extends Component {
    render() {
        const series =  [
                {
                    values: [35,42,67,89,25,34,67,85],
                }
        ];

        const config = {

        };


        return (
            <div className="chart-container">
                <Line id="iterationsChart" height="300" width="600" data={config} series={series} theme="dark"/>
                <div className="iteration-input-container">
                    <Icon name="chevron left" size="big"/>
                    <Input className="iteration-input" />
                    <Icon name="chevron right" size="big"/>
                </div>
            </div>
        );
    }
}

export default Chart