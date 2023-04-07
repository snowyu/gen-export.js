Generate the index.js for ESM(export)

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g gen-export
$ gen-export-js COMMAND
running command...
$ gen-export-js (--version)
gen-export/0.0.0 linux-x64 node-v18.15.0
$ gen-export-js --help [COMMAND]
USAGE
  $ gen-export-js COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gen-export-js DIR`](#gen-export-js-dir)
* [`gen-export-js autocomplete [SHELL]`](#gen-export-js-autocomplete-shell)
* [`gen-export-js help [COMMANDS]`](#gen-export-js-help-commands)

## `gen-export-js DIR`

Generate export index.js of ESM on a directory

```
USAGE
  $ gen-export-js DIR [-d] [-i <value>]

ARGUMENTS
  DIR  [default: .] the directory to export

FLAGS
  -d, --dryRun             print it instead of saving file.
  -i, --ignore=<value>...  the file patterns to ignore

DESCRIPTION
  Generate export index.js of ESM on a directory

EXAMPLES
  $ gen-export-js . -d
  export * from './a.js'
  export * from './b.js'
```

_See code: [dist/commands/index.ts](https://github.com/snowyu/gen-export.js/blob/v0.0.0/dist/commands/index.ts)_

## `gen-export-js autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ gen-export-js autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  display autocomplete installation instructions

EXAMPLES
  $ gen-export-js autocomplete

  $ gen-export-js autocomplete bash

  $ gen-export-js autocomplete zsh

  $ gen-export-js autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v2.1.8/src/commands/autocomplete/index.ts)_

## `gen-export-js help [COMMANDS]`

Display help for gen-export-js.

```
USAGE
  $ gen-export-js help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for gen-export-js.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.8/src/commands/help.ts)_
<!-- commandsstop -->
