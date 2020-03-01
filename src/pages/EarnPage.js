import React from 'react';

import InfoSection from '../components/InfoSection';
import ReferDemo from '../components/ReferDemo';
import staticData from '../staticData';

class EarnPage extends React.Component {
    render() {
        return (
            <div>
                <InfoSection data={staticData.earn} />
                <ReferDemo />
            </div>
        );
    }
}

export default EarnPage;