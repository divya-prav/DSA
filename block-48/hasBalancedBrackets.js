function hasBalancedBracket(input) {
  if (input === null || input.length === 1) return false;

  let stack = [];
  let check;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(" || input[i] === "[" || input[i] === "{") {
      stack.push(input[i]);

      continue;
    }

    switch (input[i]) {
      case ")":
        check = stack.pop();
        if (check === "}" || check === "]") return false;

        break;
      case "]":
        check = stack.pop();
        if (check === ")" || check === "}") return false;

        break;
      case "}":
        check = stack.pop();
        if (check === ")" || check === "]") return false;

        break;
      default:
        break;
    }
  }

  return stack.length === 0;
}

console.log(hasBalancedBracket("[]"));
