yeoman-require-boilerplate
==========================

A boilerplate for creating html5 web apps. Project originally generated as a base yeoman project which has then been tweaked.

Mocha headless phantom js tests can be run with yeoman etc. 

Differences from yeomans default require generator

1. Mocha tests have been configured to work properly both in browser and headless with requirejs
2. Specific preferred tech stack

Included technology stack
1. handlebars
2. requirejs
3. requirejs text plugin 
4. requirejs async plugin
5. handlebars-require plugin
6. jquery

Boilerplate Layout explanation
1. Require js entrypoint is scripts/config.js where paths and shims etc are configured
2. scripts/config.js loads scripts/app.js which serves as the main app entry point
3. Models are stored in scripts/models
4. Views are stored in scripts/views
5. Handlebars helpers can be defined in scripts/helpers.js
6. Vendor libs are all stored in components/
7. Test entry point is test/index.html -> test/config.js
8. test/config.js defines paths and such for tests and loads test/test.js which sets up everything and loads spec
9. The reqular runner/mocha.js file has been wrapped in a require js define

Symbolic Links
There are symbolic links in the test/ folder to app/scripts, app/components and app/templates directories
This is to allow loading project require modules for testing