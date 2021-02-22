import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import IconAwe from 'react-native-vector-icons/FontAwesome';
import Page from './../../components/Page';
import Button from './../../components/Button';
import styles from './Message.css';

const Message = ({navigation}) => {
  const [isMessage, setIsMessage] = useState(false);

  return (
    <Page 
      showHeader={true}
      showSetting={true}
      showFooter={true}>
      <View style={styles.content}>
        <View style={styles.inner}>
          {isMessage ?
          (<View style={styles.headingWrap}>
            <Text style={styles.heading}>Message</Text>
          </View>) : (
          <View style={styles.innerWrap}>
            <Text style={[styles.text, styles.textBig]}>Send a message, get a message</Text>
            <Text style={styles.text}>Direct message are private conversations between you and other people on FriendsZone.</Text>
            <TouchableOpacity style={styles.buttonWrap}>
              <Button 
                text="Write a message" />
            </TouchableOpacity>
          </View>
          )}
        </View>
      </View>
    </Page>
  );
};

export default Message;
