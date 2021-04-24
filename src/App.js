import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import { Endpoint } from 'react-native-pjsip'

export class App extends PureComponent {

  handleSIP = async () => {
    let endpoint = new Endpoint();
    let configuration = {
      "name": "101",
      "username": "101",
      "domain": "pbx.trendsjo.com",
      "password": "sa1234qq",
      "proxy": null,
      "transport": null, // Default TCP
      "regServer": null, // Default wildcard
      "regTimeout": null, // Default 3600
      "regHeaders": {
        "X-Custom-Header": "Value"
      },
      "regContactParams": ";unique-device-token-id=XXXXXXXXX"
    };

    endpoint.createAccount(configuration).then((account) => {
      console.log("Account created", account);
    })
      .catch(error => console.log("ERRORRRR", error));

  }
  componentDidMount() {
    this.handleSIP()
  }
  render() {
    return (
      <View>
        <Text> SIP TESTING </Text>
      </View>
    )
  }
}

export default App
