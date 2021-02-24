import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Page from './../../components/Page';
import InputField from './../../components/InputField';
import Button from './../../components/Button';
import * as theme from '../../theme';
import styles from './Login.css';

const messages = require('../../json/errors.json');

const Login = ({navigation}) => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e, value) => {
    setValues(prevState => ({
      ...prevState,
      [e]: value
    }));
  } 

  const handleSubmit = () => {
    // console.log(values);

    if(!values.email && !values.password) {
      Alert.alert(messages.all.required);
    }
    else if(!values.email) {
      Alert.alert(messages.email.required);
    }
    else if(!values.password) {
      Alert.alert(messages.password.required);
    }
    else {
      navigation.navigate('Overview');
    }
  }

  return (
    <Page 
      showHeader={false}
      showFooter={true}>
      <View style={styles.content}>
        <View style={styles.inner}>
          <Text style={styles.heading}>ezParking</Text>
          
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.icon}>
                <Icon name="user" size={theme.SIZES.icon} color={theme.COLORS.white} />
              </Text>
              <InputField 
                label={'Email'}
                style={styles.input}
                onChange={(txt) => handleChange('email', txt)} />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.icon}>
                <Icon name="key" size={theme.SIZES.icon} color={theme.COLORS.white} />
              </Text>
              <InputField 
                type={'password'}
                label={'Password'}
                style={styles.input}
                onChange={(txt) => handleChange('password', txt)} />
            </View>
            <TouchableOpacity style={styles.forgotLink}>
              <Text 
                onPress={() => navigation.navigate('ForgotPassword')}
                style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonWrap}>
            <Button 
              text={'Login'}
              onPress={handleSubmit} />
          </View>
          
          <View style={styles.create}>
            <TouchableOpacity 
              onPress={() => navigation.push('Register')}
              style={styles.createLink}>
              <Text style={styles.createLinkText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Page>
  );
};

export default Login;
