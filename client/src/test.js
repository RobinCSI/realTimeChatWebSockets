function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

var x = 10;

function foo() {
  var y = 20; // free variable
  function bar() {
    var z = 15; // free variable
    return x + y + z;
  }
  return bar;
}

var test = foo();

test(); // 45



function secretPassword() {
    const password = 'xh38sk';
    return {
      guessPassword: function(guess) {
        if (guess === password) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
  
  var passwordGame = secretPassword();
  console.log(passwordGame.guessPassword('heyisthisit?'))
  console.log(passwordGame.guessPassword('xh38sk'))


  let counter = 0;

// Function to increment counter
function add() {
  let counter = 0;
  counter += 1;
}

// Call add() 3 times
console.log(add())
console.log(add())
console.log(add())


// Outer function
function outer() {
	let arr = [];
	// let i;
	for (let i = 0; i < 4; i++) {
		// storing anonymous function
		arr[i] = function () { return i; }
	}

	// returning the array.
	return arr;
}

let get_arr = outer();

console.log(get_arr[0]()); //4
console.log(get_arr[1]()); //4
console.log(get_arr[2]()); //4
console.log(get_arr[3]()); //4


console.log(12==`12`)


const listOfIngredients = [];

doSomething()
  .then((url) => {
    // I forgot to return this
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      });
  })
  .then(() => {
    console.log(listOfIngredients);
    // Always [], because the fetch request hasn't completed yet.
  });

  doSomething()
  .then((url) => fetch(url))
  .then((res) => res.json())
  .then((data) => {
    listOfIngredients.push(data);
  })
  .then(() => {
    console.log(listOfIngredients);
  });


  Promise.resolve().then(() => console.log(2));
console.log(1);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1);


console.log(Array(10).fill().map((_, i) => i + 1))


console.log(new Date(Date.now()).getMinutes())

console.log(new Date().toLocaleTimeString())
