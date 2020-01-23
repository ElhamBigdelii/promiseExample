//Write a function that make 10 number between 0 and 20 as exam's mark
// Promise if the student passes all the test, the teacher will buy a gift for him
//
//exam's mark are generated in random order
//If you want to see the result if the student passes all the exams
//You must set the score generation between 10 and 20
//In that case the student will be awarded a gift!!

var makeMarks =[];
for(var i=0; i<10; i++){
    makeMarks.push(Math.floor((Math.random() * 20) + 0));
}

var promisesArray=[];
makeMarks.forEach((mark) => {
    promisesArray.push(
                new Promise((resolve,reject) => {
                if(mark >= 10){
                    resolve({
                        status:'pass the exam',
                        mark:mark
                    });
                }
                else{
                    reject({
                        status:'fail the exam',
                        mark: mark
                    });
                }
            })
        )
    });

var handleAllPromises = Promise.all(promisesArray);
console.log('handleAllPromises'+handleAllPromises);
handleAllPromises.then((result) =>{
    console.log('you pass all your exams so teacher buys a gift for you');
});
handleAllPromises.catch((result) =>{
   console.log('you fail some or all your exams so teacher doesnt buy a gift for you');
});
handleAllPromises.finally(() =>{
    console.log('you should come back home');
});

