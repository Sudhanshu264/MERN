// console.log('task 1')
// console.log('task 2')
// setTimeout(()=>{
//     console.log('task 3')
// }, 2000)

// console.log('task 4')
function notify(){
    console.log('Email sent!')
}

function uploadRecording(){
    // setTimeout(()=>{
    //     console.log('recording uploaded!')
    // }, 2000);
    // notify();
}

// uploadRecording();


//promise Syntax
// let test = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log('recording uploaded!');
//         resolve();
//     }, 2000);

// }).then(()=>{
//     notify();
// })

// random quotes



function fetchQuote(){
    
    fetch("https://type.fit/api/quotes")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let random = Math.floor(Math.random()*data.length);
        document.getElementById('quote').innerText = data[random].text;
        document.getElementById('author').innerText = data[random].author;
    });
}