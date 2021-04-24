import { Endpoint } from 'react-native-pjsip'
let endpoint = new Endpoint();
// let state = await endpoint.start(); // List of available accounts and calls when RN context is started, could not be empty because Background service is working on Android
// let { accounts, calls, settings, connectivity } = state;

//  asterik socket wss://pbx.kartk.online:8089/ws
// extension 10056
// password T9zPvD1gqOL
//webphone  https://kartk.online/deep4/

// sip domain:pbx.trendsjo.com
// sip server address:["wss://pbx.kartk.online:8089/ws"]
// stunserver:["74.125.140.127:19302","74.125.143.127:19302"]
// username:101
// displayname:101
// password:sa1234qq
// authname:101


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
export const createAccount = endpoint.createAccount(configuration).then((account) => {
	console.log("Account created", account);
}).catch(error => console.log("ERRORRRR", error));