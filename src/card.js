import React from "react";

const Card = (props) => {
    const {id, name, emeil} = props;
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"><h1>Robooots</h1><div>
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robot" />
            <div>
                <h2>{name}</h2>
                <p>{emeil}</p>
            </div>
        </div></div>
    );
}

export default Card;