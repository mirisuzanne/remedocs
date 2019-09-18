# remedocs

Generate CSS documentation for
[CSS Remedy](https://github.com/mozdevs/cssremedy/),
using [Eleventy](https://www.11ty.io/)
as a static-site generator
and [Doxray](https://github.com/himedlooff/doxray)
to parse CSS comments.

## Install dependencies

```
yarn
```

## Test setup

By default, we build
from the latest `npm` release of `cssremedy`
in `node_modules` --
but it may be useful to run test builds
based on un-released code.
If `cssremedy` is in a different location,
like a sibling directory,
you can edit `remeDir` in `src/_data/dox.js`:

```js
// relative path from the root directory of remedocs
// to the root directory of any package to be documented
const remeDir = '../cssremedy/';
```

If you want to try running `rermedocs` on another project,
you can also change `styleDir`
to match the internal structure of that project:

```js
// relative path from remeDir to CSS documents inside the project
const styleDir = path.join(remeDir, 'css/');
```

## Build the site

```
yarn build
```

## Run a development server

```
yarn serve
```

Your site will be available at `localhost:8080`

## Watch Sass files

Currently you have to run the server and watcher in separate terminals:

```
yarn watch
```
