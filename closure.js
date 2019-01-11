// closure

function add(nb) {
  return function(otherNb) {
    return nb + otherNb;
  };
}

var add5 = add(5); // add5 contains the definition of add

var add5 = function(otherNb) {
  return nb + otherNb;
};

var add25 = add(25);

console.log(add5(10));
