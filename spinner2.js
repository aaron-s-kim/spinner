
let delay = 100;
const spinner = ['|', '/', '-', '\\'];

for (let i = 0; i < 9; i++) {
  for (let s of spinner) {
    setTimeout(() => process.stdout.write(`\r${s}   `), delay);
    delay += 200;
  }
}
