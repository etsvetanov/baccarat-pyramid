import React, { PropTypes } from 'react';
import MenuItem from './MenuItem.jsx';

const Menu = ({ menuItems, onMenuClick }) => (
    <ul className="nav nav-tabs">
        {
            menuItems.map(item =>
                <MenuItem
                    key={item.text}
                    onClick={() => onMenuClick(item.text)}
                    text={item.text}
                    active={item.active}
                />
            )
        }
    </ul>
);

Menu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isrequired,
        active: PropTypes.bool.isrequired
    }).isRequired).isRequired,
    onMenuClick: PropTypes.func.isRequired
};

export default Menu;