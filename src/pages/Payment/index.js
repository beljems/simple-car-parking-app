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
import styles from './Payment.css';

const messages = require('../../json/errors.json');

const Payment = ({route, navigation}) => {
  const {totalPrice} = route.params;
  const [isAgree, setIsAgree] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const cards = ["Credit Card", "Debit Card", "Prepaid Card"];
  const [values, setValues] = useState({
    cardOptions: '',
    cardNumber: '',
    accountName: '',
    totalPayment: totalPrice,
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
    if(!values.cardNumber) {
      Alert.alert(messages.card.number);
    }
    if(!values.accountName) {
      Alert.alert(messages.card.name);
    }
    else if(isAgree !== true) {
      Alert.alert(messages.agree.payment);
    }
    else {
      values.agree = true;
      console.log(values);
      setConfirm(true);

      setTimeout(() => {
        navigation.navigate('Home')
      }, 2000);
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
            <Text style={styles.heading}>Payment Details</Text>
          </View>
          {!confirm ? (
            <View>
              <View style={styles.form}>
                <View style={styles.inputGroup}>
                  <SelectField 
                    data={cards}
                    label={'Card Options'}
                    onChange={(txt) => handleChange('cardOptions', txt)}
                    style={styles.input} />
                </View>
                <View style={styles.inputGroup}>
                  <InputField 
                    label={'Card Number'}
                    onChange={(txt) => handleChange('cardNumber', txt)}
                    style={styles.input} />
                </View>
                <View style={styles.inputGroup}>
                  <InputField 
                    label={'Account Name'}
                    onChange={(txt) => handleChange('accountName', txt)}
                    style={styles.input} />
                </View>
                <View style={styles.total}>
                  <Text style={styles.totalText}>Total:</Text>
                  <Text style={[styles.totalText, styles.totalPrice]}>$ {totalPrice}</Text>
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
                    Please check this to confirm payment details.</Text>
                </View>
              </View>
              <View style={styles.buttonWrap}>
                <Button 
                  text={'Confirm'}
                  onPress={handleSubmit} />
              </View>
            </View>) : (
            <View>
              <Text style={styles.success}>Successully booked your parking slot.</Text>
              <Text style={styles.thankyou}>Thank you!</Text>
            </View>
            )}
        </View>
      </View>
    </Page>
  );
};

export default Payment;
