let previuos = document.querySelector("#previuos")
let next = document.querySelector("#next")
let img = document.querySelector("img")
let imgs = [
    "pic/1200px-Wildlife_at_Maasai_Mara_(Lion).jpg",
    "pic/cargo_live_animals_parrot.jpg",
    "pic/Coyote-animal-sentience-research.jpg",
    "pic/download.jpg",
    "pic/idn1221teres_graphic_01_web.jpg"
]
let indexImg = 0

function nextFunc(){
    indexImg++
    img.setAttribute("src",imgs[indexImg])
    if (indexImg > 4){
        indexImg = 0
    }
    console.log(indexImg);
}
function previuosFunc() {  
    indexImg--
    img.setAttribute("src",imgs[indexImg])
    if (indexImg < 0){
        indexImg = 4
    }

    console.log(indexImg);

}
previuos.addEventListener("click",previuosFunc)
next.addEventListener("click",nextFunc)














