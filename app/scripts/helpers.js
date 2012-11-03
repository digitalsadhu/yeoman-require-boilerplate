define([
  'handlebars'
], function(Handlebars){
  
  Handlebars.registerHelper('link', function(text, url) {
    return new Handlebars.SafeString(
      "<a href='" + url + "'>" + text + "</a>"
    );
  });

  return Handlebars;
  
});