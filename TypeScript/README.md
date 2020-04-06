## Run on save:
https://marketplace.visualstudio.com/items?itemName=pucelle.run-on-save

## Add to settings.json in .vscode folder
```
    "runOnSave.commands": [
        {
            "match": ".*\\.(ts)$",
            "command": "tsc Typescript/testing.ts && node Typescript/testing.js",
            "runIn": "terminal",
            "runningStatusMessage": "Started",
            "finishStatusMessage": "Finished"
        }
    ]
```