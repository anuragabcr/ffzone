import React from 'react';

const InfoSection = ({data}) => {
    return (
        <div className="jumbotron" style={{margin:10}}>
            <div className="row">
                <div className="col-12 col-sm-8">
                    <div className="d-flex justify-content-center">
                        <h2><b>{data.title}</b></h2>
                    </div>
                    <div>
                        <p>{data.description}</p>            
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success">{data.button}</button>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <img src={data.img} style={{height:300}} alt="Join page images" />
                </div>
            </div>
        </div>
    );
}

export default InfoSection;