function getState(promise) {
  const pending = { state: "pending" };
  return Promise.race([promise, Promise.resolve(pending)])
    .then((value) => {
      if (value === pending) {
        return "pending";
      } else {
        return "fulfilled";
      }
    })
    .catch(() => {
      return "rejected";
    });
}
console.log(getState(Promise.resolve()));
