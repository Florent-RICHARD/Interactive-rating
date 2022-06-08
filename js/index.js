let lstButtons = document.querySelectorAll(".note");
let buttonSubmit = document.querySelector("#button-submit");
let result = document.querySelector(".result-span");
let lstContainer = document.querySelectorAll(".container");

let note = null;

for (let index = 0; index < lstButtons.length; index++) {
    let button = lstButtons[index];
    button.addEventListener("click", () => {
        console.log(button.id);
        activeButton();
        button.classList.add("active")
        note = button.innerHTML;
    })
}

function activeButton(){
    for (let index = 0; index < lstButtons.length; index++) {
        let button = lstButtons[index];
        if(button.classList.contains("active")){
            button.classList.remove("active");
        }
    }
}

if(buttonSubmit != null){
    buttonSubmit.addEventListener("click", () =>{
        for (let index = 0; index < lstContainer.length; index++) {
            let container = lstContainer[index];
            container.classList.toggle("none")
            result.innerHTML = `You selected ${note} out of 5`
        }
    })
}



