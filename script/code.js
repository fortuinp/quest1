let thePromise=new Promise(adds)

function adds(resolve,reject) {
    let numb1= prompt('enter the first number')
    let numb2= prompt('enter the second number')
    let sum=+numb1+ +numb2
    if ((typeof numb1=='number') && (typeof numb2=='number')){
        resolve(` ${numb1} + ${numb2} = ${sum}`)}
    else{
        reject(`both, or either ${numb1} or ${numb2} (is or are) not number(s)`)
    }
} 

thePromise.then(
    (correct) => {console.log(correct)},
    (incorrect)=>{console.log(incorrect)}
    
 ).catch(incorrect=> {
    console.log(incorrect);
})