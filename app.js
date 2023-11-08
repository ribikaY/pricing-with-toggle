document.addEventListener("DOMContentLoaded", function(){
    const toggleCheckbox = document.getElementById("toggleCheckbox");

    const basicPrice = document.getElementById("basic-price");
    const profPrice = document.getElementById("prof-price");
    const masterPrice = document.getElementById("master-price");

    toggleCheckbox.addEventListener("change", function(){
        if(toggleCheckbox.checked){
            basicPrice.textContent = "19.99";
            profPrice.textContent = "24.99";
            masterPrice.textContent = "39.99";
        }
        else{
            basicPrice.textContent = "199.99";
            profPrice.textContent = "249.99";
            masterPrice.textContent = "399.99";
        }
    })
})