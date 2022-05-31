let p = new Promise((resolve, project) =>{
  let a = 1+1
  if(a == 2){
    resolve('Success')
  }else{
    reject('Failed')
  }
})

//anything inside 'then' going to run for resolve 
p.then((message) =>{
  console.log('This is in the then ' + message)
}).catch((message) =>{
  console.log('This is in the catch' +message)
})

output
//This is in the then Success

//Promosie all
/* Suppose after recording we need to runc these videos at the same time
so don't need to wait for start one after another

const recordVideoOne = new Promise((resolve, reject) ={
  resolve('Vid 1 recoreded')
})


const recordVideoTwo = new Promise((resolve, reject) ={
  resolve('Vid 2 recoreded')
})


const recordVideoThree = new Promise((resolve, reject) ={
  resolve('Vid 3 recoreded')
})

promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages) =>{
  console.log(messages)
})


/* return the first one instead of waiting for others to be completed */

promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages) =>{
  console.log(messages)
})
// Reference https://www.youtube.com/watch?v=DHvZLI7Db8E

