# Jest Cucumber example 

<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/githubagilesoftware.jpg" >	
</p>

[![Build Status](https://travis-ci.com/GeeksHubsAcademy/jest-cucumber-examples.svg?branch=master)](https://travis-ci.com/GeeksHubsAcademy/jest-cucumber-examples)

Install
```
typescript    https://www.typescriptlang.org/
Jest Runner   https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner
vscode-icons  https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons
ts-jest       https://github.com/kulshekhar/ts-jest 
auto-imports  https://marketplace.visualstudio.com/items?itemName=steoates.autoimport
cucumber      https://marketplace.visualstudio.com/items?itemName=stevejpurves.cucumber
cucumber-gen  https://marketplace.visualstudio.com/items?itemName=Piotr-Porzuczek.jest-cucumber-code-generator-extension
```

Command line
```
npm install --save-dev@types/jest @types/node jest ts-jest typescript
npm i -D jest jest-cucumber typescript-jest
```

Run Test
```
tsc
npm run jest --verbose o npm run build & jest --color
```

Result
```
 PASS  examples/typescript/specs/step-definitions/scenario-outlines.steps.ts
Debugger attached.
Waiting for the debugger to disconnect...
Debugger attached.
Waiting for the debugger to disconnect...

Test Suites: 12 passed, 12 total
Tests:       35 passed, 35 total
Snapshots:   0 total
Time:        6.257 s
Ran all test suites.
Waiting for the debugger to disconnect...
Waiting for the debugger to disconnect...
```
