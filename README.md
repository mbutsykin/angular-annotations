# angular-annotations [![Build Status](https://travis-ci.org/mbutsykin/angular-annotations.svg?branch=master)](https://travis-ci.org/mbutsykin/angular-annotations)
#### AngularJS 1.x ES7 decorators

## Get Started
- **[NPM](https://www.npmjs.com/)** `npm install -S angular-annotations`
- **[JSPM](http://jspm.io/)** `jspm install npm:angular-annotations`

## Available Decorators
### Module

```js
import {Module} from 'angular-annotations';

@Module('someAngularModuleName')
class MyClass {
}
```

### Inject

```js
import {Inject, Module} from 'angular-annotations';

@Inject('$someService')
@Module('someAngularModuleName')
class MyClass {
    @Inject('$http')
    static someStaticMethod($http) {}
}
// will add
MyClass.$inject = ['$someService'];
MyClass.someStaticMethod.$inject = ['$http'];
```

### InjectAsProperty

```js
import {Service, InjectAsProperty, Module} from 'angular-annotations';

@Service('someService')
@Module('someAngularModuleName')
class MyClass {
    @InjectAsProperty('$http')
    $http;
}
```

### Config
 
```js
import {Inject, Module, Config} from 'angular-annotations';

@Config
@Module('someAngularModuleName')
@Inject('$someProvider')
class MyConfig {
    constructor($someProvider) {}
}
// is equal to
angular
    .module('someAngularModuleName')
    .config(['$someProvider', $someProvider => new MyConfig($someProvider)]);
```

### Constant
 
```js
import {Module, Constant} from 'angular-annotations';

@Constant('SOME_CONSTANT')
@Module('someAngularModuleName')
class MyConstant {
    constant1 = 'constant1';
}
// is equal to
angular
    .module('someAngularModuleName')
    .constant('SOME_CONSTANT', new MyConstant());
```

### Controller
 
```js
import {Inject, Module, Controller} from 'angular-annotations';

@Controller
@Module('someAngularModuleName')
@Inject('$rootScope')
class MyController {
    constructor($rootScope) {}
}
// is equal to
angular
    .module('someAngularModuleName')
    .controller('MyController', ['$rootScope', MyController]);
```

### Decorator

```js
import {Inject, Module, Decorator} from 'angular-annotations';

@Decorator('$someService')
@Module('someAngularModuleName')
@Inject('$delegate')
class MyDecorator {
    constructor($delegate) {}
}
// is equal to
angular
    .module('someAngularModuleName')
    .decorator('$someService', ['$delegate', $delegate => new MyDecorator($delegate)]);
```

### Directive

```js
import {Inject, Module, Directive} from 'angular-annotations';

@Directive('some-selector')
@Module('someAngularModuleName')
class MyDirective {
    restrict = 'EA';
    controllerAs = 'vm';
    scope = {};
    
    link() {}
    
    @Inject('someService')
    controller(someService) {}
}
// is equal to
angular
    .module('someAngularModuleName')
    .directive('someSelector', new MyDirective());
```


### Component

```js
import {Inject, Module, Component} from 'angular-annotations';

@Component('some-selector')
@Module('someAngularModuleName')
class MyComponent {
    restrict = 'EA';
    controllerAs = 'vm';
    scope = {};

    link() {}

    @Inject('someService')
    controller(someService) {}
}
// is equal to
angular
    .module('someAngularModuleName')
    .component('someSelector', new MyComponent());
```

### Factory

```js
import {Inject, Module, Factory} from 'angular-annotations';

@Factory('someFactory')
@Module('someAngularModuleName')
@Inject('$http')
class MyFactory {
    constructor($http) {}
}
//is equal to
angular
    .module('someAngularModuleName')
    .factory('someFactory', ['$http', $http => new MyFactory($http)]);
```

### Filter

```js
import {Inject, Module, Filter} from 'angular-annotations';

@Filter('someFilter')
@Module('someAngularModuleName')
@Inject('someFactory')
class MyFilter {
    constructor($http) {}
}
// is equal to
angular
    .module('someAngularModuleName')
    .filter('someFilter', ['someFactory', someFactory => new MyFilter(someFactory)]);
```

### Provider

```js
import {Inject, Module, Provider} from 'angular-annotations';

@Provider('someService')
@Module('someAngularModuleName')
@Inject('$http')
class MyProvider {
    constructor($http) {}
}
// is equal to
angular
    .module('someAngularModuleName')
    .provider('someService', ['$http', MyProvider]);
```

### Run

```js
import {Inject, Module, Run} from 'angular-annotations';

@Run
@Module('someAngularModuleName')
@Inject('someService')
class MyRun {
    constructor(someService) {}
}
// is equal to
angular
    .module('someAngularModuleName')
    .run(['someService', someService => new MyRun(someService)]);
```

### Service

```js
import {Inject, Module, Service} from 'angular-annotations';

@Service('someService')
@Module('someAngularModuleName')
@Inject('$http')
class MyService {
    constructor($http) {}
}
// is equal to
angular
    .module('someAngularModuleName')
    .service('someService', ['$http', MyService]);
```

### Value

```js
import {Module, Value} from 'angular-annotations';

@Value('someValue')
@Module('someAngularModuleName')
class MyValue {
    value1 = 'a';
}
// is equal to
angular
    .module('someAngularModuleName')
    .value('someValue', new MyValue());
```
