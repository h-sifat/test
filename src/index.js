import { typeNames, types } from "handy-types";
import getMessage from "./messages";

export function printMessage() {
  console.log(getMessage());
}

export function check(name, age) {
  if (!types.ne_string(name))
    console.log(`Name must be of type: "${typeNames.ne_string}"`);
  if (!types.natural_num(age))
    console.log(`Age must be of type: "${typeNames.natural_num}"`);
}
