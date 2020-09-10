import React from "react";
import './_MenuItem.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
    return (
        <div onClick={() => history.push(`${match.url}${linkUrl}`)} className={`${size} menu-item`}>
            <div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image">
            </div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>)


};

export default withRouter(MenuItem);