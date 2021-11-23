import React from 'react';
import PropTypes from 'prop-types';

const AppButton = ({ children, className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

AppButton.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default AppButton;
