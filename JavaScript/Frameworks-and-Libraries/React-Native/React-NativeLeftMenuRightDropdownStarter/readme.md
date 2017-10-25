Rename rootfolder do folder you want.

Rename these in index.ios.js:
export class YourClassNameHERE extends Component {

and 

AppRegistry.registerComponent('your-file-name-here', () => YourClassNameHERE);

to match your project. the your-file-name-here is your folder name and the YourClassNameHERE names have to match.

Run:
change package.json:
  "name": "your-file-name-here",
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

