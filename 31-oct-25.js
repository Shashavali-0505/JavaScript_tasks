// 31-0ct-25------------------------------------------------------------------------------------
// Part 1: Functional Scope vs Block Scope (let, var, const) — 10 Output Based Questions

        function test() {
        var x = 10;
        if (true) {
            var x = 20;
            console.log(x);
        }
        console.log(x);
        }
        test(); // 20 20

        function example() {
        let y = 5;
        if (true) {
            let y = 10;
            console.log(y);
        }
        console.log(y);
        }
        example(); // 10 5


        function run() {
        if (true) {
            var a = 100;
            let b = 200;
            const c = 300;
        }
        console.log(a);
        console.log(typeof b);
        }
        run(); // 100 undefined

        var x = 1;
        function outer() {
        console.log(x);
        var x = 2;
        }
        outer(); // undefined

        let x = 10;
        {
        let x = 20;
        {
            let x = 30;
            console.log(x); // 30
        }
        console.log(x); // 20
        }
        console.log(x);// 10

        {
        var a = 1;
        let b = 2;
        const c = 3;
        }
        console.log(a); // 1
        console.log(typeof b); // undefined
        console.log(typeof c); // undefined

        for (var i = 0; i < 3; i++) {}
        console.log(i); // 3

        for (let j = 0; j < 3; j++) {}
        console.log(typeof j); // undefined

        function demo() {
        console.log(a); // undefined
        var a = 50;
        console.log(a); // 50
        }
        demo();

        function blockTest() {
        const value = 5;
        if (true) {
            const value = 10;
            console.log(value); // 10
        }
        console.log(value); // 5
        }
        blockTest();

        function testScope() {
        if (true) {
            var x = "var inside";
            let y = "let inside";
        }
        console.log(x); // var inside
        console.log(typeof y); // undefined
        }
        testScope();

    // Part 2: if, else if, and switch case — Practice Tasks
    /* 1.Write a program that checks a student's marks and prints:
        "Grade A" if marks > 80
        "Grade B" if marks between 60–80
        "Grade C" if marks between 40–60
        "Fail" otherwise
    */
    let marks = +prompt('enter your marks:')
    if (marks>=80){
        console.log('Grade A')
    }
    else if (marks>=60 && marks<80){
        console.log('Grade B')
    }
    else if (marks>=40 && marks<60){
        console.log('Grade C')
    }
    else{
        console.log('Fail')
    }

    /*2.Using if...else if, check a person’s age group:
        below 13 → "Child"
        13–19 → "Teen"
        20–59 → "Adult"
        60+ → "Senior"
    */
    let persons_age = +prompt('enter your age:')
    if(persons_age<=13){
        console.log('Child');
    }
    else if (persons_age>13 && persons_age<=19){
        console.log('Teen');
    }
    else if (persons_age>=20 && persons_age<=59){
        console.log('Adult');
    }
    else{
        console.log('Senior');
    }

    // 3. Use a switch case to print the day name when given a number (1–7).

    let value = +prompt('enter value range between 1-7:')
    switch (value){
        case 1:
            console.log('Sunday');
            break;
        case 2:
            console.log('Monday');
            break;
        case 3:
            console.log('Tuesday');
            break;
        case 4:
            console.log('Wednesday');
            break;
        case 5:
            console.log('Thursday');
            break;
        case 6:
            console.log('Friday');
            break;
        case 7:
            console.log('Saturday');
            break;
        default:
            console.log('enter valid number in given range');
    }

    // 5. Create a simple calculator using switch case (add, sub, mul, div).

    let op = prompt('enter your operation:')
    switch (op){
        case 'add':
            console.log('Addition');
            break;
        case 'sub':
            console.log('Subtraction');
            break;
        case 'mul':
            console.log('Multiplication');
            break;
        case 'div':
            console.log('Division');
            break;
        default:
            console.log('enter valid operation');
    }

    // 4. Use switch to print a message for traffic 
    // light colors (red → stop, yellow → wait, green → go).

    let signal = prompt('enter your signal-color:')
    switch (signal){
        case 'red':
            console.log('Stop');
            break;
        case 'yellow':
            console.log('Wait');
            break;
        case 'green':
            console.log('Go');
            break;
        default:
            console.log('enter valid operation');
    }
