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

  describe('multiples of five', function(){

    it("should return buzz if number divisible by five", function(){
      expect(fizzBuzz.output(5)).toEqual('buzz');

  });
});

describe('multiples of three and five', function(){

  it("should return FizzBuzzbuzz if number divisible by both three and five", function(){
    expect(fizzBuzz.output(15)).toEqual('fizzbuzz');

});
});

describe('returns number', function() {
  it("should return number if not divisible by three of five", function(){
    expect(fizzBuzz.output(13)).toEqual(13);
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
