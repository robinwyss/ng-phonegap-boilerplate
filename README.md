# [ng-phonegap-boilerplate](https://github.com/rowy/ng-phonegap-boilerplate)

A boilerplate template for new Phonegap projects with AngularJS.
It is based on a fork of the excellent [ng-boilerplate](https://github.com/ngbp/ng-boilerplate) by @joshdmiller



***

## Quick Start

Install Node.js and then:

```sh
$ git clone git://github.com/rowy/ng-phonegap-boilerplate
$ cd ng-boilerplate-boilerplate
$ sudo npm -g install grunt-cli karma bower cordova
$ npm install
$ bower install
$ cordova create phonegap com.example.yourPackageName YourPhonegapAppNAme
$ grunt watch
```
Finally, open `file:///path/to/ng-boilerplate/build/index.html` in your browser.

If you don't want to have the phoegap app in the phonegap folder, you have to change ```compile_dir``` property in the ```build.config.js``` file.

### Build phonegap app


Android
```sh
$ grunt android
```
IOS
```sh
$ grunt ios
```
BlackBerry
```sh
$ grunt blackberry
```


For more details see the [ng-boilerplate](https://github.com/ngbp/ng-boilerplate) project.
