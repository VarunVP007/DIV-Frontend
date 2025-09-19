//Task-4: Closure with secret string

function secretKeeper(secret) {
  return function() {
    return secret;
  };
}

const getSecret = secretKeeper("MyPassword123");
console.log(getSecret()); // Reveals only when called
