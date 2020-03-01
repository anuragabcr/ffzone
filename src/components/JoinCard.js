import React from 'react';

const JoinCard = ({data}) => {
    return (
        <div className="col" style={{margin:5}}>
            <div className="card" style={{width: "20rem"}}>
                <img src={data.img} className="card-img-top" alt={data.title} />
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <button className="btn btn-outline-secondary">MAx win: {data.max}</button>
                    <button className="btn btn-outline-secondary">Per Kill: {data.per}</button>
                    <button className="btn btn-outline-secondary">Something</button>
                    <button href="#" className="btn btn-primary">Join</button>
                </div>
            </div>
        </div>
    );
}

export default JoinCard;