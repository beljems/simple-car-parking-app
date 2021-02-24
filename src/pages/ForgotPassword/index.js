import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Page from './../../components/Page';
import InputField from './../../components/InputField';
import Button from './../../components/Button';
import * as theme from '../../theme';
import styles from './ForgotPassword.css';

const messages = require('../../json/errors.json');

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [confirm, setConfirm] = useState(false);

  const handleChangeEmail = (txt) => {
    setEmail(txt);
  } 

  const handleSubmit = () => {
    // console.log(email);

    if(!email) {
      Alert.alert(messages.email.required);
    } else {
      setConfirm(true)

      setTimeout(() => {
        navigation.navigate('Login');
      }, 1500)
    }
  }

  return (
    <Page 
      showHeader={true}
      showFooter={true}>
      <View style={styles.content}>
        <View style={styles.inner}>
          <View style={styles.headingWrap}>
            <TouchableOpacity
              onPress={() => navigation.pop()}>
              <Text style={styles.back}>
                <Icon name="arrowleft" size={theme.SIZES.icon30} color={theme.COLORS.white} />
              </Text>
            </TouchableOpacity>
            <Text style={styles.heading}>Forgot Password?</Text>
          </View>
          {!confirm ? (
          <View>
            <Text style={styles.desc}>Enter the email address associated with your account.</Text>
            <View style={styles.form}>
              <View style={styles.inputGroup}>
                <InputField 
                  label={'Email Address'}
                  onChange={(txt) => handleChangeEmail(txt)}
                  style={styles.input} />
              </View>
            </View>
            <View style={styles.buttonWrap}>
              <Button 
                onPress={handleSubmit} />
            </View>
          </View>
          ) : (<Text style={styles.desc}>Please check your email to reset password.</Text>)}
        </View>
      </View>
    </Page>
  );
};

export default ForgotPassword;
