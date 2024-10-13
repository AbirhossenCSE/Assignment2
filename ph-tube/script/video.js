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

// Create LoadVideos
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json())
    // .then((data) => console.log(data.categories))
    .then((data) => displayVideos(data.videos))
    .catch((err) => console.log(err));
}

// authors: [{…}]
// category_id: "1001"
// description: "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// others: {views: '100K', posted_date: '16278'}
// thumbnail: "https://i.ibb.co/L1b6xSq/shape.jpg"
// title: "Shape of You"
// video_id: "aaaa"

// Create loadVideos section
const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos')
    videos.forEach((video) => {
        console.log(video);
        const card = document.createElement('div');
        card.classList = "card card-compact"
        card.innerHTML = `
            <figure class="h-[200px]">
                <img
                src= ${video.thumbnail} class="h-full w-full object-cover" alt="Shoes" />
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
                    <p></p>
                </div>
            </div>
        `;
        videoContainer.append(card)
        
    })
    
}
loadVideos()
