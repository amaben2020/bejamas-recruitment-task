import React from 'react';
import '../styles/buttonstyle.css';

// Reusable button that renders google color if the button prop isGoogleSignIn is true
const CustomButton = ({
  children,
  isGoogleSignIn,
  signin,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? null : 'inverted'}  ${signin ? 'signin' : null}  ${
      isGoogleSignIn ? 'google-sign-in' : 'custom-button'
    } "custom-buttonn"`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
