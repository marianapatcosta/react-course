import React from 'react';

const PortfolioDetailsPage = (props) => {
    return (
    <div>
        <h1>A Thing I've Done</h1>
        <p>This page is for the item with id {props.match.params.id}</p>
    </div>
)};

export default PortfolioDetailsPage;