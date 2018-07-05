import React from 'react';
import PropTypes from 'prop-types';

const CustomizedLable = (props) => (
    <div>
        <label className="form-label"  name={props.name}>{props.title}</label>
    </div>
);

CustomizedLable.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
};

export default CustomizedLable;