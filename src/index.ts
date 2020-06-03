import { curry } from "ramda";
import { F } from "ts-toolbelt";

function person(age: number, name: string, happy: boolean) {
  return { age, name, happy };
}
const person3 = curry(person);

let person1: F.Curry<(happy: boolean) => {age: number, name: string, happy: boolean}>;

person1 = person3(99, 'Bob');   // tsc doesn't like this assignment "Excessive stack depth", assuming that checking the types match is too much for tsc to handle??

console.log(person1(true));   // {age: 99, name: 'Bob', happy: true}