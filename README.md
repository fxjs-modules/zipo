# @fxjs/zipo

[![Build Status](https://travis-ci.org/fxjs-modules/zipo.svg)](https://travis-ci.org/fxjs-modules/zipo)
[![NPM version](https://img.shields.io/npm/v/@fxjs/zipo.svg)](https://www.npmjs.org/zipoage/@fxjs/zipo)

## Pre-requisite

- `fibjs >= 0.26.0`

## Usage

```javascript
const zipo = require('@fxjs/zipo');

zipo.loaders.directoryAsZip(__dirname, { dist: path.resolve(__dirname, '../result.zip') });
```

## License

[GPL-3.0](https://opensource.org/licenses/GPL-3.0)

Copyright (c) 2018-present, Richard

[FibJS]:https://github.com/fibjs/fibjs
