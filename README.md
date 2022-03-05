## Typescript Server Boilerplate

Includes typescript, eslint, and prettier setup.

### ESlint
`Extends` uses a config file which applies a set of rules when you add that to the extends options. 

`Plugins` on the other hand provide you with a set of rules that you can individually apply depending on your need. Just having a plugin does not enforce any rule. You have to choose which rules you need.

`@typescript-eslint/parser` parses Typescript files for you. ESlint by default doesn't know how to parse Typescript.

### Prettier
`eslint-plugin-prettier` turns Prettier rules into ESLint rules.

`eslint-config-prettier` turns off all ESLint rules that have the potential to interfere with Prettier rules (required by [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration)).

