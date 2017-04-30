#Globally install:
##Install Gulp and Eslint:
```
npm install -g gulp
npm install -g eslint
```

#In project root:
##1. Create a package.json file:
```
npm init
```

##2. Install dependancies:
```
npm install
```

##Directory Structure:
All es6 code goes in the main es6 directory and the public/es6 directory:
So for test.js you would put a copy of each in those folders.

##Generating es5 code from your es6 source:
At Terminal in project root run:
gulp
A corresponding test.js es5 version of the code will be placed in the folder.

