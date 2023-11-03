async function fetchData(){
    console.log("async function executed")
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log("async function complete",data)
}


// function fetchData(){
//     console.log("hello")
//     let d = null;
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(function(data) {
//         console.log("promise success",data); 
//         return data.json()
// })
// .then(function(data){
//     console.log("final Data[0].username",data[0].username);
   
//    let para = document.getElementById('username')
//    for(let i = 0 ; i < data.length; i++){
//    let eachuser = document.createElement('h6');
//    eachuser.innerHTML = "Welcome " + data[i].username.toUpperCase()
//    para.appendChild(eachuser)
//    }
//        para.style.color = "green"
//        para.style.fontSize = "25px"
//        para.style.background = " lightgray"
//        para.style.fontStyle = "italic"
//        para.style.textAlign = "center"
       
      

//    d = data;
// })
// .catch(function(error){
//     console.log("promise failed",error)
// });
// console.log(d)
// }
//    //timebomb implmention
//     let timerInsecond = 10; //second
//     function updateTimer(){
//         const minutes = math.floor(timerInsecond/60);
//         const second =  timerInsecond % 60;

//         const formattedTime = (minutes + ":" + second);
//         document.getElementById('timebomb').innerHTML = formattedTime;
//         document.getElementById('timebomb').style.color = 'red';
       
//         if(timerInsecond <= 0){
//             clearInterval(updateTimer); //stop the timer
//             alert('Bom!!!')
//         }
//         timerInsecond = timerInsecond-1;
//     }
 
// setInterval(updateTimer,1000);  //call every second.(1000ms)

