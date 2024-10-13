const isVerified = true;
if (isVerified == true) {
    console.log("verified");
    
} else {
    console.log("Not verified");
    
}


console.log(`${isVerified === true ? "Verified" : "Not verified"}`);


function getTimeString(time){
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minite = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour} hour ${minite} miniute ${remainingSecond} second ago`;
}

console.log(getTimeString(4505));

// Create displayCatagories
const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories');

    categories.forEach((item)=> {
        console.log(item);
        
        // Create a button
        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category;

        // Buttin onClick
        // button.onclick = alert('Hello')

        // add button at category container
        categoriesContainer.appendChild(button);
    });
    
}