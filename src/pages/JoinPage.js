import React from 'react';

import staticData from '../staticData';
import JoinCard from '../components/JoinCard';

class JoinPage extends React.Component {
    temp = 1;
    render() {
        return (
            <div className="row">
                {staticData.join.map(data => <JoinCard key={this.temp++} data={data} />)}
            </div>
        );
    }
}

export default JoinPage;