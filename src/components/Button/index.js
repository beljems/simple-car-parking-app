import React from 'react';
import {
  View, 
  Text,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = ({
  text,
  onPress,
  style,
  size
}) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={style ? [styles.button, style] : styles.button}>
      <Text style={size ? [styles.text, size] : styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  onPress: () => {},
  text: 'Submit',
  style: {}
};

Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object,
  size: PropTypes.object
};

export default Button;
