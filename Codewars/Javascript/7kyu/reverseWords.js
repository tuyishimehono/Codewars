function reverseWords(str) {
    return str.split(" ").map(e=>e.split("").reverse().join("")).join(" ")
}
reverseWords("This is an example!") // output: "sihT si na !elpmaxe"
reverseWords("double  spaces") // ==> "elbuod  secaps"