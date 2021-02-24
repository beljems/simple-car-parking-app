import React, {useState} from 'react';
import {
  View, 
  Text,
  ActionSheetIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import * as theme from '../../theme';
import styles from './SelectField.css';

const SelectField = ({
  label,
  data,
  onChange
}) => {
  const [value, setValue] = useState(data[0]);
  const options = data;

  const onPress = () => {

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [...options, "Cancel"],
        //destructiveButtonIndex: 2,
        cancelButtonIndex: options.length
      },
      buttonIndex => {
        if (options[buttonIndex]) {
          setValue(options[buttonIndex]);
          // console.log(options[buttonIndex]);
          if (onChange) {
            onChange(options[buttonIndex]);
          }
        } 
      }
    );
  }

  return (
    <View>
      {label ? (<Text style={styles.label}>{label}</Text>) : null}
      <View style={styles.selectWrap}>
        <Text 
          style={styles.select}
          onPress={onPress}>
            {value}
        </Text>
        <Text 
          style={styles.arrow}
          onPress={onPress}>
          <Icon name="arrow-drop-down" size={theme.SIZES.icon30} color={theme.COLORS.white} />
        </Text>
      </View>
    </View>
  );
};

SelectField.defaultProps = {};

SelectField.propTypes = {
  label: PropTypes.string,
  data: PropTypes.array,
  onChange: PropTypes.func
};

export default SelectField;
