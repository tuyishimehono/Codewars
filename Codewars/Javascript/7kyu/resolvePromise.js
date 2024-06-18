function promiseHelloWorld() {
  return new Promise((resolve) => {
    resolve("Hello World!");
  });
}
console.log(promiseHelloWorld());