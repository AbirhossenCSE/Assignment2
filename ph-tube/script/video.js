console.log('Added');


// Create LoadCategories
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    // .then((data) => console.log(data.categories))
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
}

// category: "Music"
// category_id: "1001"


// Create displayCatagories
const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories');

    categories.forEach((item)=> {
        console.log(item);
        
        // Create a button
        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category;

        // add button at category container
        categoriesContainer.appendChild(button);
    });
    
}

loadCategories();