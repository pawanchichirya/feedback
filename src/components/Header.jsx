import React from "react";
import PropTypes from "prop-types";

function Header({ text }) {
  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
}

Header.defaultProps = {
  text: "FEEDBACK",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
