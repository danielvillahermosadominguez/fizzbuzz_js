# Environment configuration
First of all you need to instal nodejs in your machine and create your virtual environment in
the folder where you are going to write the code.

```
node -v // to see the version of node js
npm install -g npm // to install the last version: global level
```

After this we need to create a file package.json where we are going to have dependencies.

```
npm init

```
## Jasmine configuration and the first test

```
npm install --save-dev jasmine

node .\node_modules\jasmine\bin\jasmine init

```
The package.json must include:
```
"scripts": {
    "test": "jasmine"
  },
```

Then, you must create a file, for example fizzbuzzSpec.js and a folder "src" with the code. Write the following code in the filebuzzspec.js
``` js
describe("Test suite", function() {
    it("test spec", function() {
        expect(true).toEqual(true);
    });
});
```
And now execute "npx jasmine"
NOTE: Remember, the test must be in the "spec" folder.
## Configuration of Visual Code.

Add a new configuration: Run->NodeJS

```
 "configurations": [

        {
            "type": "node",
            "request": "launch",
            "name": "Jasmine",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/node_modules/jasmine/bin/jasmine.js",
            "console": "integratedTerminal"
        }
    ]
```
With this, you could debug too.

# FizzBuzz Kata
Start with TDD and create a parametrized Test. The Kata is the following:
https://katalyst.codurance.com/fizzbuzz
## Introduction
This kata, taken from a popular children's maths game (or student drinking game), is the starting point on the TDD track. It's designed to be a semi-guided first stop for learning TDD from scratch.

We'll emphasise the following:

Start by writing a failing test for the simplest behaviour.
Implement the simplest amount of code needed to make the test pass.
As you add more tests, refactor to make the code more generic and more suitable.
## Instructions
Write a function that takes positive integers and outputs their string representation.

Your function should comply with the following additional rules:

If the number is a multiple of three, return the string "Fizz".
If the number is a multiple of five, return the string "Buzz".
If the number is a multiple of both three and five, return the string "FizzBuzz".
For example, given the numbers from 1 to 15 in order, the function would return:
```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```

# During the Kata...

* Interesting taking into account the styles guide for JS: https://google.github.io/styleguide/jsguide.html#:~:text=Source%20file%20basics-,2.1%20File%20name,js%20.
* You could need to installa jasmine test exporer