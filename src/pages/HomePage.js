import React from 'react';

import InfoSection from '../components/InfoSection';
import ImgCarousel from '../components/ImgCarousel';
import staticData from '../staticData';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <InfoSection data={staticData.home} />
                <ImgCarousel />
            </div>
        );
    }
}

export default HomePage;