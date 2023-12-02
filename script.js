let button=document.getElementById("but")
let dogImg=document.createElement("div")
dogImg.setAttribute("class","dogimage")
document.body.append(dogImg)

//! eventlistener for button to display image
button.addEventListener("click",async()=>{
    
    const url="https://dog.ceo/api/breeds/image/random";
    const res= await fetch(url);
    const data=await res.json();   
    // console.log(data.message);
    dogImg.innerHTML=`<h3 id="style">Its Me..🥹</h3>
    <img src="${data.message}" alt="Booklogo" id="main-image"></img>`
    
})









