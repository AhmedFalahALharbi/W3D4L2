function changeBox() {
    let box = document.getElementById("box1")
    let randomWidth = Math.floor(Math.random() *100 ) 
    let randomHeight = Math.floor(Math.random() *100 ) 
    let randommarginTop = Math.floor(Math.random() *100 ) 
    let randommarginLeft = Math.floor(Math.random() *100 ) 
    let colorRandom = Math.floor(Math.random() *1000 ) 
    box.style.backgroundColor = `#${colorRandom}`
    box.style.width = `${randomWidth}vw`
    box.style.height = `${randomHeight}vh`
    box.style.marginLeft = `${randommarginLeft}vw`
    box.style.marginTop = `${randommarginTop}vh`
    box.style.opacity = Math.random()


    
}

let box1 = document.getElementById("box1")
box1 = setInterval(changeBox, 2000)

