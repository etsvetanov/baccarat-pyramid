import React, { PropTypes } from 'react';

const MenuItem = ({ onClick, text, active=false }) => (
    <li role="presentation"
        className={active ? "active" : ""}
        onClick={onClick}
    >
        <a href="#"> { text } </a>
    </li>
);

MenuItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default MenuItem