# js-game-engine
The simplest JavaScript game engine

## Installation
`git clone https://github.com/NikitaSyromiatnikov/js-game-engine.git`

`cd js-game-engine`

`yarn install`

Congrats! You are ready to go.

## CodeGen
To generate an HTML5 boilerplate for the game just run the following command in the root directory

`yarn generate`

Options:
 - `--path` - folder for your game __"game"__ by default
 - `--name` - game name __"game"__ by default
 - `--html` - index file __"index.html"__ by default
 
Run the following command to bundle your TypeScript files to main.js with `yarn build:dev` or `yarn build:prod`

#
__[WARNING]__ - There is no support for creation the bundled file in the root directory of the generated project, please do that yourself with configuring the [webpack.config.js](https://github.com/NikitaSyromiatnikov/js-game-engine/blob/main/webpack.config.js) file.

Alternatively you can generate your project using the following command

`yarn generate --path example --html index --name Example`
