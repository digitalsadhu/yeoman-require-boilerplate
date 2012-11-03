define(["require","chai","mocha","runner"],function(require, chai, m, runner){

  // Chai
  assert = chai.assert;
  should = chai.should();
  expect = chai.expect;

  // Mocha
  mocha.setup('bdd');

  


  // Require base tests before starting
  require(['spec/farmcloud.spec'], function(farmcloud){
    
    //run headless from shell with phantomjs
    runner.init(mocha);
    
  });


});