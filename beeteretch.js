function invert(gridSquare){
    for (let i = 0;i<gridSquare.length;i++){ 
        gridSquare[i].classList.toggle("change-background");
        console.log(gridSquare.classList);
    }
}
function clearScreen(gridSquare){
    for (let i = 0;i<gridSquare.length;i++){ 
        gridSquare[i].classList.remove("change-background");
        console.log(gridSquare.classList);
    }
}
function gridChange(container){
    container.style.display="none"
    main()
}
function createContainer(){
    const heading=document.querySelector(".heading");
    let container=document.createElement("div");
    container.style.display="grid";
    container.className="grid-container";
    heading.appendChild(container);
    return container
}
function gridTemplate(container){
    gridSize=prompt("enter grid size");
    document.documentElement.style.setProperty("--grid-size", gridSize);
    return gridSize;
}
function mkVisibleGrid(){
    for (let i = 0;i<gridSize*gridSize;i++){ 
    
        let gridSquare=document.createElement("div");
        gridSquare.className="pixel";
        container.appendChild(gridSquare);
    }  

}
function main(){
    container=createContainer();
    gridSize=gridTemplate(container);
    //making grid visible
    mkVisibleGrid(gridSize);
    const changegrid=document.querySelector("#grid-size")
    changegrid.addEventListener("click",()=>{
        gridChange(container)
    })

    const gridSquare=document.querySelectorAll(".pixel");
    for (let i = 0;i<gridSquare.length;i++){
        gridSquare[i].addEventListener("mouseover",(e)=>{
        gridSquare[i].classList.add("change-background");
        console.log(gridSquare.classList);
    })
    }

    const clearBtn=document.querySelector("#clear");
    clearBtn.addEventListener("click",()=>{
        clearScreen(gridSquare)
    })

    const invertbtn=document.querySelector("#invert");
    invertbtn.addEventListener("click",()=>{
        invert(gridSquare)
    })
    
}
main()
