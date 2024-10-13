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
            <figure>
                <img
                src= ${video.thumbnail}
                alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `;
        videoContainer.append(card)
        
    })
    
}
loadVideos()
