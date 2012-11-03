define(["jquery"],function($){

  describe("Farm Cloud App", function () {

    //Example tests, checking that jquery is defined ('required' above)
    describe("Jquery $ variable", function(){

      it("should not be undefined", function(){
        $.should.not.equal(undefined);
        $.should.not.equal('undefined');
      });

      it("should not be a string", function(){
        $.should.not.be.a("string");
      });

      it("should be a function", function(){
        $.should.be.a("function");
      });      

    });

  });

});
