import React from 'react'
import PropTypes from 'prop-types'

export const Header = (props) => {
    return (
        <div id = "main-header">
            <div id = "main-title">{props.title}</div>
            <div id = "main-subtitle">{props.subtitle}</div>
        </div>
    )
}

Header.defaultProps = {
    title: "Let's get started",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header