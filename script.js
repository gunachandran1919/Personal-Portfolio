const contactBtn=document.querySelector(".contact-btn");
const contactPage=document.querySelector(".contact-page");

contactBtn.addEventListener("click",()=>{
    contactPage.scrollIntoView({
        behavior:"smooth"
    });
});

// const ptfLink=document.querySelector("#ptf");

// ptfLink.addEventListener("click",()=>{
//     alert("In Progress, Thank You for Your Understanding")
// })


const getInTouchBtn=document.querySelector(".get-in-touch");

getInTouchBtn.addEventListener("click",()=>{
    contactPage.scrollIntoView({
        behavior:"smooth"
    });
});