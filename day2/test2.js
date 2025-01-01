let obj = {
    1 : "a",
    2 : "b",
    3 : "c"
}

let obj1 = {
    4: "aa",
    5: "bb",
    6: "cc"
}

let ans = {...obj , ...obj1};

console.log(ans);
