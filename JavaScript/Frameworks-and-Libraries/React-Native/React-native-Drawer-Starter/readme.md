Rename react-native-drawer-starter folder do folder you want.

Rename these in index.ios.js:
export class ReactNativeDrawer extends Component {

and 

AppRegistry.registerComponent('react-native-drawer', () => ReactNativeDrawer);

to match your project. the react-native-drawer is your folder name and the ReactNativeDrawer names have to match.

Run:
change package.json:
  "name": "react-native-drawer",
to match your folder name.

run npm install

run react-native upgrade 
to generate the ios and android folders.

Run:
react-native link
to link assets.

Run:
react-native run-ios 
to start in simulator.

