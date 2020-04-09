## Run on save:
https://marketplace.visualstudio.com/items?itemName=pucelle.run-on-save

## Add auto convert to typescript 
Add to settings.json in .vscode folder
```
{
    "runOnSave.commands": [
        {
            "match": ".*\\.(ts)$",
            "command": "tsc ./app.ts && node ./app.js",
            "runIn": "terminal",
            "runningStatusMessage": "Started",
            "finishStatusMessage": "Finished"
        }
    ]
}
```

## Install dependencies:
```
npm install
```

## Start lite-server so index.html auto updates:
```
npm start
```