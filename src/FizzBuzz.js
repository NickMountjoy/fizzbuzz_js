function FizzBuzz(){

};

FizzBuzz.prototype.output = function(n){
  console.log(n);
  if (n % 3 == 0){
    return 'fizz';
  };
};
