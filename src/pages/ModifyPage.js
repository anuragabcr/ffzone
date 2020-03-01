import React from 'react';

import CreateMatch from '../components/CreateMatch';
import UpdateMatch from '../components/UpdateMatch';
import RemoveMatch from '../components/RemoveMatch';
import ResultMatch from '../components/ResultMatch';

class ModifyPAge extends React.Component {
    state = { action: '' };

    componentDidMount() {
        console.log(this.props);
        this.setState({ action: this.props.match.params.action });
    }

    render() {
        switch (this.state.action) {
            case 'create':
                return <CreateMatch />;
            case 'update':
                return <UpdateMatch />;
            case 'remove':
                return <RemoveMatch />;
            case 'result':
                return <ResultMatch />;
            default:
                return null;
        }
    }
}

export default ModifyPAge;