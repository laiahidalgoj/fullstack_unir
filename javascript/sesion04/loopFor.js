// loop repeat a code block a determinate number of times

//i++ = i = i + 1
for(let i = 10; i >= 1; i--){
  console.log(i);
}

consolemlog('-----')

for(let i = 1; i <= 1000; i++){
  if(i % 2 === 0){
    console.log(i);
  }
}

consolemlog('-----')

// i want sum all numbers from 1 to 100
let sum = 0;
for(let i = 1; i <= 100; i++){
  sum = sum + i;
  console.log(sum);
}