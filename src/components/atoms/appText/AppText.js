import React from 'react';
import PropTypes from 'prop-types';

const AppText = ({ children, className }) => {
    return <p className={className}>{children}</p>;
};

AppText.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.node.isRequired,
        PropTypes.array.isRequired
    ])
};

export default AppText;
