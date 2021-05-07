//async 
const onOneAndHalfSeconds = () => {
    const myPromise = new Promise((resolveFunc, rejectFunc) => {
        setTimeout(() => {
            resolveFunc('After 1.5 seconds');
        }, 1500);
    });
    return myPromise;
};

const value = setTimeout(() => {
    console.log('Timer after 2 seconds');
    onOneAndHalfSeconds()
        .then(text => {//resolve func
            console.log(text);
            return onOneAndHalfSeconds();//<- this is an e.g it can be any other func that returns a promise. this is useful  for the next then
        })
        .then(text2 => {//another resolve func
            console.log(text2);
        });//we can use .catch(the error/reject func goes inside here) here
}, 2000);

console.log(value);