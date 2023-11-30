const container = document.getElementsByClassName("container");

const dragginInfo = {
    sourceContainerId : null ,
    draggingElement: null ,
}

function onDragStart(){
    dragginInfo.sourceContainerId = event.target.getAttribute("data-container");
}

const onDragOver = (e) => {
    e.preventDefault();
}

const onDrop = () => {

}



for (let i = 0; i < container.length; i++) {
     container[i].addEventListener("dragover",onDragOver);
     container[i].addEventListener("drop",onDrop);
    
}