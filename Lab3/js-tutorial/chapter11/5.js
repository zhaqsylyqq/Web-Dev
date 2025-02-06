const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }

  throw new HttpError(response);

}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
  while (true) {
    let name;
    rl.question(`What's your name? `, input => {
      name = input;
      rl.close();
    });
    try {
      let user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        console.error("No such user, please reenter.");
      } else {
        throw err;
      }
    }
    console.log(`Full name: ${user.name}`);
    return user;
  }
}

demoGithubUser();
