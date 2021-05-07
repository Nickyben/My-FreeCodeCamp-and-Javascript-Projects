//async 
const onOneAndHalfSeconds = callbackFunc => {
    setTimeout(() => {
        callbackFunc('After 1.5 seconds');
    }, 1500);
};

const value = setTimeout(() => {
    console.log('Timer after 2 seconds');
    onOneAndHalfSeconds(text => {
        console.log(text);
    });
}, 2000);

console.log(value);