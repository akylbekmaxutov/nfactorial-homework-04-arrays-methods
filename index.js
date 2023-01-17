function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function pow(x, n) {
    let mul = 1;
    for (let i = 1; i <= n; i++) {
        mul *= x;
    }
    return mul;
}

let res = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = [...users.name]

alert( names ); // Вася, Петя, Маша