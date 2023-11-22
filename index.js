// Iteration 1: Names and Input
let hacker1 = 'Haris'
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Joshua'
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longer name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

// 3.1 

let result = "";
for (i = 0; i < hacker1.length; i++) {
   result += hacker1[i].toUpperCase() + ' '
}

console.log(result);



// 3.2 

function reverse(str){
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--){
       reversedString = reversedString + str[i];
}
return reversedString;
}

console.log(reverse('John'));

// 3.3

if (hacker1 < hacker2) {
    console.log("The Driver's name goes first.")
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first, definitely")
} else if (hacker1 == hacker2) {
    console.log("What?! You both have the same name?")
}

// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper augue a nisl placerat lacinia a ut ex. Donec diam arcu, rutrum porttitor mi ut, laoreet varius turpis. Mauris pellentesque quam tortor, sed euismod libero efficitur non. In facilisis tortor nec dui tincidunt, eget volutpat ligula aliquet. Ut ut varius justo, sit amet tincidunt justo. Nunc blandit nulla eu bibendum porttitor. Pellentesque bibendum, odio at tincidunt tincidunt, nisi nunc volutpat lectus, ut mattis nulla mi quis lectus. Morbi mollis augue in lobortis scelerisque. Nullam porta venenatis dolor, a tincidunt mi feugiat ut. Donec at risus mi. Pellentesque placerat id nisi id aliquet. Duis aliquet est facilisis, finibus tellus laoreet, auctor est. Pellentesque tempus augue ut est consequat, quis dictum metus luctus. Sed tellus tortor, tempor ac laoreet in, lacinia vitae mauris. Ut sagittis ipsum est, nec pulvinar sapien scelerisque nec. Vivamus sit amet odio risus.

Duis dignissim felis eu neque scelerisque, eu blandit massa lobortis. Ut faucibus luctus nulla, at placerat quam bibendum ultricies. Curabitur interdum mollis risus nec faucibus. Mauris quis malesuada orci. Aenean posuere finibus egestas. Mauris sed fringilla nunc. Vivamus at convallis purus, sit amet convallis orci. Vestibulum sed erat vestibulum, tristique sem mollis, feugiat ipsum. Nam ullamcorper risus at malesuada vestibulum. Vivamus placerat, ante ut tempus rutrum, sem mi blandit urna, quis congue risus erat a nisl. Curabitur vestibulum lorem id ipsum blandit, ac interdum dolor bibendum. Sed vehicula nunc vel dui placerat, id ornare sapien porta.

Suspendisse elementum mattis erat. Aenean dapibus, augue sed scelerisque feugiat, neque massa mollis lectus, non cursus nulla libero sed risus. Etiam ligula mi, cursus ac tellus in, euismod interdum sem. Nullam efficitur aliquet ipsum, sed dictum augue ultrices quis. Proin eu dapibus tortor, ultricies ornare justo. In quis venenatis sem, sed posuere arcu. Phasellus mi magna, commodo fermentum imperdiet a, viverra at ipsum. Vivamus ornare libero et mi semper, eget dignissim lectus pulvinar. Phasellus semper eros vel nulla feugiat consequat. Duis at interdum lorem, eu hendrerit arcu.`


console.log(longText);

let wordsArray = longText.split(' ');

let wordCount = wordsArray.length;

console.log(`The number of words in this string is:", ${wordCount}`);

let etCount = 0;

for ( let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === "et") {
        etCount++;
    }
}

console.log("The word 'et' appears " + etCount + " times in the string.");