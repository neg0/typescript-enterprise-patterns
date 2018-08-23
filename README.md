# Typescript Enterprise Patterns
TypeScript is designed for development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side (Node.js) execution.

In software engineering, a software design pattern is a general, reusable solution to a commonly occurring problem within a given context in software design. Object-oriented design patterns typically show relationships and interactions between classes or objects, without specifying the final application classes or objects that are involved.

Design patterns may be viewed as a structured approach to computer programming intermediate between the levels of a programming paradigm and a concrete algorithm.

## Run using Docker (_docker composer_)
Please enter docker folder and run following:
```terminal
$: docker-compose up --build -d
```

### Run Tests
Whilst inside docker folder, enter the docker container and run the test through npm.
```terminal
$ docker-compose exec node bash
$ npm run test
```

#### Further configuration for dependencies
* [Configuration for Karma](https://karma-runner.github.io/latest/config/configuration-file.html)
* [Configuration for Karma-TypeScript](https://github.com/monounity/karma-typescript/blob/master/cookbook.md)
* [Configuration for Jasmine](https://jasmine.github.io/setup/nodejs.html)
