// 1. Simple Nested Loop
for(let i = 1; i <= 2; i++){
  for(let j = 1; j <= 3; j++){
    console.log(i, j);
  }
}
/* o/p: 1,1
        1,2
        1,3
        2,1
        2,2
        2,3
*/

// 2. Inner Loop Depends on Outer Loop
for(let i = 1; i <= 3; i++){
  for(let j = 1; j <= i; j++){
    console.log(i, j);
  }
}
/*
    o/p: 1,1
         2,1
         2,2
         3,1
         3,2
         3,3
        
*/

// 3. Skipping with continue
for(let i = 1; i <= 3; i++){
  for(let j = 1; j <= 3; j++){
    if(j === 2) continue;
    console.log(i, j);
  }
}
/*
    o/p: 1,1
         1,3
         2,1
         2,3
         3,1
         3,3
*/

// 4. Breaking Inner Loop
for(let i = 1; i <= 3; i++){
  for(let j = 1; j <= 3; j++){
    if(j === 2) break;
    console.log(i, j);
  }
}
/*
    o/p: 1,1
         2,1
         3,1
*/

// 5. Tricky Condition (typo-like)
for(let i = 2; i < 3; i++){
  for(let j = 0; i < 3; j++){
    console.log(i, j);
  }
}
/*
    o/p: 2,0
         2,1
         2,2.....infinite loop
*/

// 6. Reverse Loop
for(let i = 3; i > 0; i--){
  for(let j = i; j > 0; j--){
    console.log(i, j);
  }
}
/*
    o/p: 3,3
         3,2
         3,1
         2,2
         2,1
         1,1  
*/

// 7. Outer Increment Inside Inner Loop
for(let i = 0; i < 3; i++){
  for(let j = 0; j < 2; j++){
    console.log(i, j);
    i++;
  }
}
/*
    o/p: 0,0
         1,1
*/

// 8. Nested Loop with Multiplication
for(let i = 1; i <= 3; i++){
  for(let j = 1; j <= 3; j++){
    console.log(i * j);
  }
}
/*
    o/p: 1
         2
         3
         2
         4
         6
         3
         6
         9
*/

// 9. Dependent Inner Start
for(let i = 1; i <= 3; i++){
  for(let j = i; j <= 3; j++){
    console.log(i, j);
  }
}
/*
    o/p: 1,1
         1,2
         1,3
         2,2
         2,3
         3,3
*/

// 10. Complex Mixed Condition
for(let i = 1; i <= 3; i++){
  for(let j = 1; j <= 3; j++){
    if(i + j > 3) console.log(i, j);
  }
}
/*
    o/p: 1,3
         2,2
         2,3
         3,1
         3,2
         3,3
*/







// loops------------------------------------
/* step1: first enni rows enni colms kavali
    step2:first row enni colms unnay
    step3:colums incre/decrease
    step4:space enni kavali
    step5: spaces increase/decrease
*/

for (let i=0;i<5;i++){
    stars=''
    for (let j=0;j<1+i;j++){
        stars+=' *'
    }
    console.log(stars)
}

//  *
//  * *
//  * * *
//  * * * *
//  * * * * *

for (let i=0;i<5;i++){
    stars = ''
    for (let j=0;j<5-i;j++){
        stars+=' *'
    }
    console.log(stars)
}

//  * * * * *
//  * * * *
//  * * *
//  * *
//  *

for (let i=0;i<5;i++){
    stars=''
    for (let k=0;k<4-i;k++){
        stars+=' '
    }
    for (let j=0;j<1+i;j++){
        stars+=' *'
    }
    console.log(stars)
}

//      *
//     * *
//    * * *
//   * * * *
//  * * * * *

for (let i=0;i<5;i++){
    stars = ''
    for (let k=0;k<0+i;k++){
        stars+=' '
    }
    for (let j=0;j<5-i;j++){
        stars+=' *'
    }
    console.log(stars)
}

//  * * * * *
//   * * * *
//    * * *
//     * *
//      *