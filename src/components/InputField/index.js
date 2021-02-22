import React, {useState, useEffect} from 'react';
import {
  View, 
  Text,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './InputField.css';

const InputField = ({
  type,
  label,
  keyboardType,
  multiline,
  onChange,
  autoFocus,
  disabled,
  onFocus,
  //value,
  style,
  styleWrap,
  placeholder
}) => {
  const [value, onChangeText] = useState(placeholder);

  return (
    <View style={styleWrap}>
      {label ? (<Text style={styles.label}>{label}</Text>) : null}
      <TextInput
        textAlignVertical={multiline ? 'top' : 'auto'}
        keyboardType={keyboardType}
        returnKeyType="done"
        secureTextEntry={type === 'password' ? true : false}
        multiline={multiline}
        value={value}
        onChangeText={text => onChangeText(text)}
        onFocus={onFocus}
        style={multiline
          ? [styles.textarea, style]
          : [styles.input, style]}
        editable={!disabled}
      />
    </View>
  );
};

InputField.defaultProps = {
  type: 'none',
  multiline: false,
  keyboardType: 'default',
  onChange: (text) => {},
  autoFocus: true,
  disabled: false,
  onFocus: () => {},
  placeholder: ''
};

InputField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  keyboardType: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  onFocus: PropTypes.func,
  style: PropTypes.object,
  styleWrap: PropTypes.object,
  placeholder: PropTypes.string,
};

export default InputField;
