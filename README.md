# Rapid Shrink Package

This package provides functionality to shorten and  generate redirect URLs. It is designed to be simple and easy to integrate into any Node.js application.

## Installation

You can install the package using npm:

```sh
npm install rapid-shrink
```

## Usage 

### Generating a Shortened URL in Node.js
To generate a shortened URL, you can use the generate function provided by the package:

```sh
const { generate } = require('rapid-shrink');

(async () => {
  try {
    const link = 'https://example.com';
    const redirectUrl = await generate(link);
    console.log('Redirect URL:', redirectUrl);
  } catch (error) {
    console.error('Error:', error);
  }
})();
```


### Generating a Shortened URL in Bash
You can use Node.js to run a JavaScript file from the command line:

Create a JavaScript file , for example : shorten.js:

```sh
const { generate } = require('rapid-shrink');

(async () => {
  try {
    const link = 'https://example.com';
    const redirectUrl = await generate(link);
    console.log('Redirect URL:', redirectUrl);
  } catch (error) {
    console.error('Error:', error);
  }
})();

```

Run the script using Node.js:

```sh
node shorten.js
```


## Visit the URL

#### You can Visit the URL logged in the Terminal