import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  InputAccessoryView,
  Button,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
const placeHolder = 'What do you want to check today?';
const inputAccessoryViewID = "searchId";
export default class SearchView extends React.Component {

  state = {
    text: ''
  }
  render(){

  /*  return (
      <View>
        <ScrollView keyboardDismissMode="interactive">
          <TextInput
            style={{
              padding: 10,
              paddingTop: 50,
            }}
            inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />
        </ScrollView>
        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <Button
            onPress={() => this.setState({text: placeHolder})}
            title="Reset"
          />
        </InputAccessoryView>
      </View>
    );*/
    return (
      <View><ScrollView keyboardDismissMode="interactive"><Text>Hloe there </Text>
      <TextInput
        style={{
          padding: 10,
          paddingTop: 20,
        }}
        placeholder={placeHolder}
        clearButtonMode='while-editing'
        inputAccessoryViewID={inputAccessoryViewID}
        onChangeText={text => this.setState({text})}
        value={this.state.text}
      />
    </ScrollView>
    </View>
    )
  }
}
