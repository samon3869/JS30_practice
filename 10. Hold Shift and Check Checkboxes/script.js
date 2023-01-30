const checkboxes = document.querySelectorAll(".item input[type='checkbox']");
console.log(checkboxes);
let lastChecked;

function handleCheck(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === lastChecked || checkbox === this) {
                inBetween = !inBetween;
                console.log('Starting to check thme in between!');
            }
            
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => {checkbox.addEventListener("click", handleCheck)});