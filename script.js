const createIssueButton = document.querySelector(".create-button");
const todoContainer = document.getElementById("todo");

const textArea = document.querySelector(".issue-input");

const onClickCreateIssue = () => {
 
    createIssueButton.classList.add("hide");
    textArea.classList.remove("hide");
    textArea.focus();
}

 function addNewIssue(cardTitle){
    const card = document.createElement("div");
    card.innerText = cardTitle;
    card.className = 'card'
    card.draggable = true;
    card.setAttribute("data-container", todoContainer.id);
    card.addEventListener("dragstart" , onDragStart);

    todoContainer.appendChild(card);
    createIssueButton.classList.remove("hide");
    textArea.classList.add("hide");
    textArea.value = "";
 }

textArea.addEventListener("keyup",(event) =>{
    if (event.keyCode===13) {
        const value = textArea.value;
        if (value==='') {
            alert("Please enter some value");
        } else {
            addNewIssue(value);
        }
    }
});

createIssueButton.addEventListener("click",onClickCreateIssue);