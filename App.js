import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Dimensions, 
  ScrollView,
  TextInput,
  Button
} from 'react-native';

export default function App() {
  return (
    // container start
    <ScrollView
      style={{flex: 1, backgroundColor: "#ffff"}} showsVerticalScrollIndicator={false} 
    >
      <View
        style={{backgroundColor: "purple", height: Dimensions.get('window').height / 2.5}}
      >
        <View style={styles.textView}>
          <Text style={{fontSize: 40, color: "#ffff", fontWeight: "bold"}}>
            Contact Us
          </Text>
        </View>
      </View>

      {/* bottom view */}
      <View style={styles.bottomView}>
        <View style={{padding: 40}}>
          {/* form input view */}
          <View style={{marginTop: 50}}>
            <TextInput textContentType="name" style={{borderWidth: 0.5, height: 50, padding: 5, borderRadius: 5, marginBottom: 10, fontSize: 20 }} placeholder="Name" />
            <TextInput textContentType="emailAddress" style={{borderWidth: 0.5, height: 50, padding: 5, borderRadius: 5, marginBottom: 10, fontSize: 20 }} placeholder="Email" />
            <TextInput textContentType="telephoneNumber" style={{borderWidth: 0.5, height: 50, padding: 5, borderRadius: 5, marginBottom: 10, fontSize: 20 }} placeholder="Mobile No" />
            <TextInput textContentType="none" style={{borderWidth: 0.5, height: 50, padding: 5, borderRadius: 5, marginBottom: 10, fontSize: 20 }} placeholder="Message" />
          </View>
          <View>
          <Button title="Submit" style={{height: 50, padding: 5, borderRadius: 5 }} onPress={() => {alert("Form Sumitted")}}></Button>
          </View>
        </View>
      </View>

    </ScrollView>
    // container end
  );
}

const styles = StyleSheet.create({
  textView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: "#ffff",
    bottom: 50,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40
  }
});
