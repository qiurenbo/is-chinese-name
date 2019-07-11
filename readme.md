# is-chinese-name [![npm version](https://badge.fury.io/js/is-chinese-name.svg)](https://badge.fury.io/js/is-chinese-name)[![Build Status](https://travis-ci.com/qiurenbo/is-chinese-name.svg?token=YfiBLf3wyKtUxRiBhQan&branch=master)](https://travis-ci.com/qiurenbo/is-chinese-name)

> Identify whether a string is chinese name or not.

## Install

```
$ npm install is-chinese-name
```


## Usage

```js
const isChineseName = require('is-chinese-name');

isChineseName('陈晨');
//=> 'true'

isChineseName('');
//=> 'false'

isChineseName({});
//=> throw new Error('Could not accept non-string type.');

isChineseName('陈晨开行的');
//=> 'false'

isChineseName('陈');
//=> 'false'
```


## API

### isChineseName(input)

#### input

Type: `string`

#### return
Type: `bolean`


