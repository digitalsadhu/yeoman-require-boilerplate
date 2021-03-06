// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["app"],

  paths: {
    
    // Libraries.
    jquery: "../components/jquery/jquery",
    handlebars: "../components/require-handlebars-plugin/handlebars",
    text: "../components/text/text",

    //path to client side templates
    templates: "../templates",

    // Application folders
    models: "../scripts/models",
    views: "../scripts/views"
    
  }

});