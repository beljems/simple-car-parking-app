import React, {useState} from 'react';
import {
  View, 
  Text,
  ActionSheetIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import styles from './SelectField.css';

const SelectField = ({
  label,
  data
}) => {
  const [value, setValue] = useState('Choose...');
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
          <Icon name="arrow-drop-down" size={30} color="#fff" />
        </Text>
      </View>
    </View>
  );
};

SelectField.defaultProps = {
};

SelectField.propTypes = {
  label: PropTypes.string,
  data: PropTypes.array
};

export default SelectField;
