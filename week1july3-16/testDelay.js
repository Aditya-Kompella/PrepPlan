function delay(ms) {
  return new Promise((resolve) => {
    console.log(`Waiting for ${ms} milliseconds...`);
    setTimeout(resolve, ms);
  });
}
async function test() {
  console.log("Start");

  await delay(2000);

  console.log("After 2 seconds");
}

test();
