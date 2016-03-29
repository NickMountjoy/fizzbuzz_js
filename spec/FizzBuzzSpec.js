describe("FizzBuzz", function(){
  var fizzBuzz;
  beforeEach(function(){
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of three', function(){

    it("should return fizz if number divisible by three", function(){

      expect(fizzBuzz.output(3)).toEqual('fizz');

    });
  });
  /*

  it("should return error if number less than 1 or greater than 100", function({



  }));

  it("should return buzz if number divisible by five", function({

  }));

  it("should return fizzbuzz if number divisible by three and five", function({

  }));

  it("should return number otherwise", function({

  }));
  */
});
