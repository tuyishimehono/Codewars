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
    .catch((err) => {
      return "rejected";
    });
}
