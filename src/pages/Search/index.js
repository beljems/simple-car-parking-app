import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import IconAwe from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import Page from './../../components/Page';
import Button from './../../components/Button';
import InputField from './../../components/InputField';
import styles from './Search.css';

const Search = ({navigation}) => {
  const [items, setItems] = useState(Array(12).fill(''));
  return (
    <Page 
      showHeader={true}
      showSetting={true}
      showFooter={true}
      scrollView={true}>
      <View style={styles.content}>
        <View style={styles.inner}>
          <View style={styles.form}>
            <InputField
              style={styles.input}
              styleWrap={styles.inputWrap}
            />
            <Button
              text="Search"
              style={styles.button}
              size={styles.buttonSize}
            />
          </View>

          <View style={styles.list}>
          {items.map((item, value) => (
            <View key={value} style={styles.item}>
              <View style={styles.avatar}>
                <TouchableOpacity>
                  <IconAwe name="user-circle-o" size={40} color="#fff" />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={styles.name}>Name </Text>
                </TouchableOpacity>
                <Text style={styles.title}>"Latest post..."</Text>
              </View>

              <View style={styles.react}>
                <View style={styles.heart}>
                  <IconIon name="heart-circle" size={40} color="#d95965" />
                </View>
              </View>
            </View>))}
          </View>
        </View>
      </View>
    </Page>
  );
};

export default Search;
