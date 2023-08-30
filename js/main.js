let listOfOptions = document.querySelectorAll(`.listOfOptions div`);
let pageAbout = document.querySelector(`.pageAbout`);
let pageHome = document.querySelector(`.pageHome`);
let pageContcat = document.querySelector(`.pageContcat`);
let pagePortfolio = document.querySelector(`.pagePortfolio`);

let page = [pageHome , pageAbout , pagePortfolio , pageContcat];

listOfOptions.forEach((e , i)=>{
    e.addEventListener("click" , ()=>{
        console.log(pageAbout[0]);
        page.map((e)=>{
            e.classList.add("d-none");
        })
        page[i].classList.remove("d-none");
    }
    )
})

