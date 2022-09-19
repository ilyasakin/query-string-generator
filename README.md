# query-stringify

## Features
* Yet another query stringifier that is fast, dead simple, and reliable.

## Usage

### Installation
```bash
npm install query-stringify
```
or
```bash
yarn add query-stringify
```

Import query-stringify and start using it however you want

```js
import { stringify } from 'query-stringify'; // or const { stringify } = require('query-stringify');

const URL = 'https://ilyasakin.dev';

const params = [
    { key: 'foo', value: 'bar' },
    { key: 'qux', value: 2 },
    { key: 'qwe', value: null, },
    { key: 'ehe', value: true, },
    { key: 'oho', value: [1, 2, 3, 4] },
];

const SUBERB_URL = `${URL}/${stringify(params)}` // https://ilyasakin.dev?foo=bar&qux=2&qwe=null&ehe=true&oho=1,2,3,4
```

MIT License

Copyright (c) 2022 ilyas akın

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
