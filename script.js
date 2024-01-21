var istatus = document.querySelector("h5")

var btn = document.querySelector("#add")

var check = 0
// var removeFriend = document.querySelector("#remove")
//SINGLE BUTTON
btn.addEventListener("click",function(){
    if(check == 0)
    {
    istatus.innerText = "Friends"
    istatus.style.color = "green"
    // console.log("yes print");
    btn.innerText = "Remove Friend" 
    check = 1
    }else{
    istatus.innerText = "Stranger"
    istatus.style.color = "red"
    // console.log("yes print");
    btn.innerText = "Add Friend"
    check = 0
    }
})


//TWO BUTTONS REMOVE AND ADD FRIENDS
// removeFriend.addEventListener("click",function(){
//     istatus.innerText = "Stranger"
//     istatus.style.color = "red"
// })