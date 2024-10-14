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

// duplicate of video file
console.log('Added');
// Time convert
function getTimeString(time){
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minite = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour} h ${minite} m ${remainingSecond} s ago`;
}


// Create LoadCategories
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    // .then((data) => console.log(data.categories))
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
}

// Create LoadVideos
const loadVideos = (searchText = "") => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    .then((res) => res.json())
    // .then((data) => console.log(data.categories))
    .then((data) => displayVideos(data.videos))
    .catch((err) => console.log(err));
}

// Active button
const removeActiveClass = ()=> {
    const buttons = document.getElementsByClassName('category-btn');
    console.log(buttons);
    for (let btn of buttons) {
        btn.classList.remove('active');
    }
}

// Load CatagoriesVedon By 
const loadCategoryVideos = (id) => {
    // alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    // .then((data) => console.log(data.categories))

    .then((data) => {
        // Active class remove
        removeActiveClass();
        // active class add
        const activeBtn = document.getElementById(`btn-${id}`)
        activeBtn.classList.add('active')
        displayVideos(data.category)
    })
    .catch((err) => console.log(err));
}



// category: "Music"
// category_id: "1001"

// Button
// Create displayCatagories
const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories');

    categories.forEach((item)=> {
        console.log(item);
        
        // Create a button
        const buttonContainer = document.createElement('button');
        buttonContainer.innerHTML = `
            <button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn">
                ${item.category}
            </button>
        `

        // add button at category container
        categoriesContainer.appendChild(buttonContainer);
    });
    
}



loadCategories();



// authors: [{…}]
// category_id: "1001"
// description: "Dive journey."
// others: {views: '100K', posted_date: '16278'}
// thumbnail: "https://i.ibb.co/L1b6xSq/shape.jpg"
// title: "Shape of You"
// video_id: "aaaa"
const loadDetails = async (videoId) => {
    console.log(videoId);
    const uri = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
    const res = await fetch(uri);
    const data = await res.json();
    displayDetails(data.video)
}

const displayDetails = (video) => {
    console.log(video);
    
    const detailContainer = document.getElementById('modal-content');
    detailContainer.innerHTML = `
        <img src=${video.thumbnail} />
        <p>${video.description}</p>
    `;
    // // way-1
    // document.getElementById("showModalData").click();
    // way-1
    document.getElementById('customModal').showModal();
}

// Create loadVideos section
const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos')
    videoContainer.innerHTML = "";

    // No data
    if (videos.length == 0) {
        videoContainer.classList.remove("grid")
        videoContainer.innerHTML = `
            <div class=" min-h-[300px] w-full flex flex-col gap-5 justify-center items-center">
                <img src="./assets/icon.png"/>
                <h2 class=" text-center text-xl font-bold">No Content Here</h2>
            </div>
        `;
    }
    else{
        videoContainer.classList.add("grid")
    }

    videos.forEach((video) => {
        console.log(video);
        const card = document.createElement('div');
        card.classList = "card card-compact"
        card.innerHTML = `
            <figure class="h-[200px] relative">
                <img
                src= ${video.thumbnail} class="h-full w-full object-cover" alt="Shoes" />

                ${
                    video.others.posted_date?.length == 0? "" : `<span class=" absolute right-2 bottom-2 bg-black rounded p-2 text-white">${getTimeString(video.others.posted_date)}</span>`
                }
                
            </figure>
            <div class="px-0 py-2 flex gap-2">
                <div>
                    <img class="w-10 h-10 rounded-full object-cover" src= ${video.authors[0].profile_picture} />
                </div>
                <div>
                    <h2 class="font-bold">${video.title}</h2>
                    <div class="flex items-center gap-2">
                        <p class="text-gray-400">${video.authors[0].profile_name}</p>
                        ${video.authors[0].verified === true ? '<img class="w-5" src="https://img.icons8.com/?size=48&id=63760&format=png" />' : ""}
                    </div>
                    <p><button onclick="loadDetails('${video.video_id}')" class=" btn btn-sm btn-error">Details</button></p>
                </div>
            </div>
        `;
        videoContainer.append(card)
        
    })
    
}

document.getElementById('search-input').addEventListener('keyup', (e) => {
    loadVideos(e.target.value);
    
})
loadVideos()


