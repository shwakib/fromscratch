//Real Life

//Promise -> Pending
//Pending - Successful => Fulfilled
//Pending - Failur => Failure

//Javascript Promise

//Promise -> Async Operation (Initial State: Pending)
//Pending -> Successful => Resolved
//Pending -> Failure => Rejected

const p = new Promise((resolve, reject) => {
    //Async Operation => result
    setTimeout(() => {
        resolve("The promise is successful");
    }, 2000)
    //reject("The promise is rejected");
})

//console.log(p);

p.then((result) => { console.log(result); }).catch((err) => { console.log(err); })

console.log("After");