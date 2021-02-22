import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import IconAwe from 'react-native-vector-icons/FontAwesome';
import Page from './../../components/Page';
import styles from './Notifications.css';

const Notifications = ({navigation}) => {
  const [items, setItems] = useState(Array(12).fill(''));

  return (
    <Page 
      showHeader={true}
      showSetting={true}
      showFooter={true}
      scrollView={true}>
      <View style={styles.content}>
        <View style={styles.inner}>
          <View style={styles.headingWrap}>
            <Text style={styles.heading}>Notifications</Text>
          </View>
          <View style={styles.list}>
            {items.map((item, value) => (
            <TouchableOpacity key={value} style={styles.item}>
              <Text style={styles.avatar}>
                <IconAwe name="user-circle-o" size={40} color="#fff" />
              </Text>
              <View>
                <Text style={styles.name}>Name </Text>
                <Text style={styles.react}>hearted your post </Text>
                <Text style={styles.title}>"Title of post..."</Text>
              </View>
            </TouchableOpacity>))}
            {items.map((item, value) => (
            <TouchableOpacity key={value} style={styles.item}>
              <Text style={styles.avatar}>
                <IconAwe name="user-circle-o" size={40} color="#fff" />
              </Text>
              <View>
                <Text style={styles.name}>Name </Text>
                <Text style={styles.react}>commented on your post </Text>
                <Text style={styles.title}>"Title of post..."</Text>
              </View>
            </TouchableOpacity>))}
            {items.map((item, value) => (
            <TouchableOpacity key={value} style={styles.item}>
              <Text style={styles.avatar}>
                <IconAwe name="user-circle-o" size={40} color="#fff" />
              </Text>
              <View>
                <Text style={styles.name}>Name </Text>
                <Text style={styles.react}>shared your post </Text>
                <Text style={styles.title}>"Title of post..."</Text>
              </View>
            </TouchableOpacity>))}
          </View>
        </View>
      </View>
    </Page>
  );
};

export default Notifications;
