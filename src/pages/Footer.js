import React from 'react';

const Footer = props => {
    return (
        <div style={{minHeight:200,backgroundColor:"#203b50",color:"white", padding:20, margin: 10, fontSize:15}}>
            <div className="d-flex justify-content-center">
                <i className="fa fa-youtube fa-3x" style={{padding:10}}></i><i className="fa fa-facebook fa-3x" style={{padding:10}}></i>
                <i className="fa fa-twitter fa-3x" style={{padding:10}}></i><i className="fa fa-instagram fa-3x" style={{padding:10}}></i>
            </div>
            <div className="d-flex justify-content-center">Copyrights © 2020 All Rights Reserved by FFZone.</div>
            <div className="d-flex justify-content-center">All the Logos, Trademarks and Images belongs to their Respective Owners.</div>
        </div>
    );
}

export default Footer;