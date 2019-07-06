express backend test
-----


# Status

[![Build Status](https://travis-ci.com/TheYakuza/express-backend.svg?branch=develop)](https://travis-ci.com/TheYakuza/express-backend)
[![Dependencies Status](https://david-dm.org/TheYakuza/express-backend.svg)](https://david-dm.org/TheYakuza/express-backend)
[![Coverage Status](https://coveralls.io/repos/github/TheYakuza/express-backend/badge.svg?branch=develop)](https://coveralls.io/github/TheYakuza/express-backend?branch=develop)

# TOC
<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Status](#status)
- [TOC](#toc)
- [About](#about)
- [Develop](#develop)
	- [Components](#components)
		- [with propmts](#with-propmts)
		- [one line](#one-line)
	- [Full Component](#full-component)
- [Deploy](#deploy)
	- [Database](#database)
	- [Install Packages](#install-packages)
	- [Live Develop](#live-develop)
	- [Build Binary](#build-binary)
- [API](#api)
- [Tests](#tests)
	- [MOCHA](#mocha)
	- [Coveralls](#coveralls)

<!-- /TOC -->

# About
Backend Stack

# Develop

## Components
You  can create new components whit `plop`, so if you want to create a new component you only have to use the next example:

the types to create are:
- **model**: database schema
- **route**: api route, they are available right next to the creation
- **controller**: controller with buissnes logic
- **util**: tools to use across the app.
- **test**: a template test to make

### with propmts

```bash
$ yarn component #this is an alias of plop

```
*you only have to answer the question you can use space to name the component*

**Example**:

```bash
$ yarn component
yarn run v1.17.0
$ plop
? [PLOP] Please choose a generator. route - Create New Route
? What is your new route name? api users
✔  ++ /routes/apiUsers.js
✔  +- /routes/index.js
✔  +- /routes/index.js
✨  Done in 3.85s.
```

### one line

```bash
$ yarn component [type] --name [name]
```

**Example**:

```bash
➜ yarn component model --name test user
yarn run v1.17.0
$ plop model --name test user
✔  ++ /models/userModel.js
✔  +- /models/index.js
✔  +- /models/index.js
✨  Done in 0.55s.
```

## Full Component

If you feel like don't want to do the component make like "three" (or four times), you can create the `model`, `controller` and `route` in a single command, also the test for the API

# Deploy
## Database

## Install Packages


## Live Develop


## Build Binary
There's a way to have binaries on the project,

# API

# Tests
all the tests to the api are available on the `test/` directory on the root o the project, you can call it like this:

## MOCHA

```bash
npm run test
```
## Coveralls

```bash
npm run afterScript
```
