# Schedule Typescript E2E Automation

## Package Installation

To install packages in this directory by using below command,

```
npm install
```

## How to build scripts

Build - To build the scripts compile from TS to JS

```
gulp scripts-gen
```

## How to start test

Test - To start the test process

```
gulp e2e-ci-test
```

### Supported Browsers

#### Desktop

In `config.json`, we can specify the browser name to run the test cases. The following supported browsers as follows:

* Google Chrome
* Mozilla Firefox
* Internet Explorer
* Microsoft Edge

```
"browsers": ['chrome', 'firefox', 'internet explorer', 'MicrosoftEdge']
```