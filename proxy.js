const user = {
  firstName: "John",
  lastName: "Doe",
  email: "doe@example.com",
};

const handler = {
  get(target, property) {
    const key = "firstName";
    return property === key
      ? `${target[key]} ${target.lastName}`
      : target[property];
  },
};

const proxyUser = new Proxy(user, handler);
// Object.defineProperty(proxyUser, "fullName", {
//   value: `${user.firstName} ${user.lastName}`,
//   writable: false,
// });

console.log(Object.getOwnPropertyNames(proxyUser));
console.log(proxyUser.firstName);

function task(message) {
  // emulate time consuming task
  console.time();
  let n = 1e10;
  while (n > 0) {
    n--;
  }
  console.log(message);
  console.timeEnd();
}

console.log("-".repeat(30));

console.log("Start script...");
task("Download an file.");
console.log("Done!");

console.log("-".repeat(30));

console.log("Start script...");
setTimeout(() => task("Download an file no-blocking."), 1000);
console.log("Done!");
