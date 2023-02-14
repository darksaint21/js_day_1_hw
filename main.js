// exersise one
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(arr, str){
    for (let i = 0; i < arr.length; i++) {
        if (str.toLowerCase().includes(arr[i].toLowerCase())) {
            console.log(`Matched ${arr[i]}`);
        } else {
            console.log("No match");
        }
    }
}
findWords(dog_names, dog_string)

// exersise two 
testArray = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];

function replaceEvens(arr) {

    for (let i = 0; i < arr.length; i += 2) {
        arr[i] = "even index";
    }

    return arr;
}

console.log(replaceEvens(testArray));