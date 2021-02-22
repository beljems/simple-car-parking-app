import React from 'react';
import {
  View, 
  Text,
  SafeAreaView, 
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconIons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import styles from './Page.css';

const Page = ({
  showHeader,
  showSetting,
  children,
  showFooter,
  showBack,
  scrollView
}) => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <View style={styles.content}>
        {showHeader === true && (
        <View style={styles.headerWrap}>
          <SafeAreaView>
            <View>
              <Text style={styles.header}>ezParking</Text>
            </View>
            {showSetting === true && (<View style={styles.settingWrap}>
              {showBack === true && (
              <TouchableOpacity 
                onPress={() => navigation.pop()}
                style={styles.back}>
                <Icon name="arrow-back" size={30} color="#fff" />
              </TouchableOpacity>)}
              <TouchableOpacity 
                style={styles.menu}>
                <Text style={styles.menutext}>Menu</Text>
                {/* <IconIons name="settings-sharp" size={30} color="#fff" /> */}
              </TouchableOpacity>
            </View>)}
          </SafeAreaView>
        </View>)}
        {scrollView === true ? (
          <SafeAreaView>
            <ScrollView style={styles.scrollWrap}>
              <View style={[styles.inner, styles.innerScroll]}>
                {children}
              </View>
            </ScrollView>
          </SafeAreaView>
        ) : (
          <SafeAreaView style={styles.innerWrap}>
            <View style={styles.inner}>{children}</View>
          </SafeAreaView>
        )}
        {showFooter === true && (<View style={styles.footer}></View>)}
      </View>
    </KeyboardAvoidingView>
  );
};

Page.defaultProps = {
  showFooter: true,
  showHeader: true,
  showSetting: false,
  showBack: true,
};

Page.propTypes = {
  showFooter: PropTypes.bool,
  showHeader: PropTypes.bool,
  showSetting: PropTypes.bool,
  showBack: PropTypes.bool,
  scrollView: PropTypes.bool,
};

export default Page;
