# RemeDocs

Generate CSS documentation for
[CSS Remedy](https://github.com/mozdevs/cssremedy/),
using [Eleventy](https://www.11ty.io/)
as a static-site generator
and [Doxray](https://github.com/himedlooff/doxray)
to parse CSS comments.

We try to keep this build step minimal,
but we also want the docs to update automatically --
so that does require a few JavaScript dependencies.
Follow these steps to build the site locally.

## Install dependencies

You'll need NPM and access to a command-line terminal.

Open a command-line terminal
in the main `remedocs/` directory,
and run:

```
npm install
```

## Test setup

By default, we build
from the latest `npm` release of `cssremedy`
which installs to the `node_modules/` folder --
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

## Build the site

```
npm run build
```

## Run a development server

```
npm run serve
```

The site will be available
in your browser of choice
at `localhost:8080`,
and update when changes are detected.

## Update `remedy/reminders`

The documentation of CSS Remedy will happen automatically,
but we also use CSS Remedy to style the generated site.
Since the entire "reminders" file is commented-out by default,
any update will require copying and editing that file.

```
cp node_modules/cssremedy/css/reminders.css sass/remedy/_reminders.css
```

Remember to un-comment
the reminders that are desired
in the documentation.
