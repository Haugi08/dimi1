const myName = "Hallo"
const div = document.getElementById("nameDiv")

function changeText(div) {
        div.innerText = `Hello my Name is ${myName}`
}

changeText(div);
   
function buttonClicked() {
        const currentTime = new Date();
        const newElement =document.createElement("div");
        newElement.innerText =` Created at ${currentTime}`;
        document.body.appendChild(newElement);

} 