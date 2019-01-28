var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastKitten() {
  kittens.pop()
}
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
var kittens = ["Milo", "Otis", "Garfield"]
function appendKitten(name) {
  return [...kittens, name]
}
var kittens = ["Milo", "Otis", "Garfield"]
function prependKitten(name) {
  return []
}