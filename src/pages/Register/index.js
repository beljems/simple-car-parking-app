import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Page from './../../components/Page';
import InputField from './../../components/InputField';
import SelectField from './../../components/SelectField';
import Button from './../../components/Button';
import * as theme from '../../theme';
import styles from './Register.css';

const messages = require('../../json/errors.json');

const Register = ({navigation}) => {
  const [isAgree, setIsAgree] = useState(true);
  const [confirm, setConfirm] = useState(false);
  // const gender = ["Male", "Female"];
  const [values, setValues] = useState({
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    agree: ''
  });

  const handleAgree = () => {
    setIsAgree(prevState => !prevState)
  }

  const handleChange = (e, value) => {
    setValues(prevState => ({
      ...prevState,
      [e]: value
    }));
  } 

  const handleSubmit = () => {
    if(!values.email 
      && !values.mobile
      && !values.password
      && !values.confirmPassword) {
      Alert.alert(messages.all.required);
    }
    else if(!values.email) {
      Alert.alert(messages.email.required);
    }
    else if(!values.mobile) {
      Alert.alert(messages.mobile.required);
    }
    else if(!values.password) {
      Alert.alert(messages.password.required);
    }
    else if(!values.confirmPassword) {
      Alert.alert(messages.password.confirm.required);
    }
    else if(values.password !== values.confirmPassword) {
      Alert.alert(messages.password.confirm.match);
    }
    else if(isAgree !== true) {
      Alert.alert(messages.agree.required);
    }
    else {
      values.agree = true;
      setConfirm(true);
      // console.log(values);
      setTimeout(() => {
        navigation.navigate('Login')
      }, 1500);
    }
  }

  return (
    <Page 
      showHeader={true}
      showFooter={true}
      scrollView={false}>
      <View style={styles.content}>
        <View style={styles.inner}>
          <View style={styles.headingWrap}>
            <TouchableOpacity
              onPress={() => navigation.pop()}>
              <Text style={styles.back}>
                <Icon name="arrowleft" size={theme.SIZES.icon30} color={theme.COLORS.white} />
              </Text>
            </TouchableOpacity>
            <Text style={styles.heading}>Sign Up</Text>
          </View>
          {!confirm ? (
            <View>
              <View style={styles.form}>
                <View style={styles.inputGroup}>
                  <InputField 
                    label={'Email Address'}
                    onChange={(txt) => handleChange('email', txt)}
                    style={styles.input} />
                </View>
                <View style={styles.inputGroup}>
                  <InputField 
                    label={'Mobile Number'}
                    onChange={(txt) => handleChange('mobile', txt)}
                    style={styles.input} />
                </View>
                <View style={styles.inputGroup}>
                  <InputField 
                    type={'password'}
                    label={'Password'}
                    onChange={(txt) => handleChange('password', txt)}
                    style={styles.input} />
                </View>
                <View style={styles.inputGroup}>
                  <InputField 
                    type={'password'}
                    label={'Confirm Password'}
                    onChange={(txt) => handleChange('confirmPassword', txt)}
                    style={styles.input} />
                </View>
                <View style={[styles.inputGroup, styles.inputGroupTerms]}>
                  {isAgree && (
                    <Text style={styles.agree}>
                      <Icon name="checksquare" size={theme.SIZES.icon} color={theme.COLORS.white} />
                    </Text>
                  )}
                  <Text 
                    onPress={() => handleAgree()}
                    style={styles.check}></Text>
                  <Text style={styles.terms}>
                    By clicking this box, you agree with our terms of service.</Text>
                </View>
              </View>
              <View style={styles.buttonWrap}>
                <Button 
                  text={'Sign Up'}
                  onPress={handleSubmit} />
              </View>
              
              <View style={styles.create}>
                <Text style={styles.createText}>Already have an account?</Text> 
                <TouchableOpacity 
                  onPress={() => navigation.navigate('Login')}
                  style={styles.createLink}>
                  <Text style={styles.createLinkText}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>) : (<Text style={styles.success}>Successfully registered.</Text>)}
        </View>
      </View>
    </Page>
  );
};

export default Register;
