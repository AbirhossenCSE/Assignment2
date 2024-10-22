const loadPhone = async (searchText = '13', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll);
}


const displayPhones = (phones, isShowAll) => {
    // console.log(phones)

    const phoneContainer = document.getElementById('phone-container');
    // clear phone container cards before adding new cards
    phoneContainer.textContent = '';

    // display show all button if there are more than 12 phones
    const showAllContainer = document.getElementById('show-all-container')
    if (phones.length > 12 && !isShowAll) {
        showAllContainer.classList.remove('hidden');
    }
    else {
        showAllContainer.classList.add('hidden');
    }
    // console.log('is show all', isShowAll)
    // display only first 12 phones if not show All
    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }

    phones.forEach(phone => {
        // console.log(phone);
        // 2 create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
        // 3: set inner html
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
                <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `;
        // 4 append child
        phoneContainer.appendChild(phoneCard);
    });

    // hide loading spinner
    toggleLoadingSpinner(false);
}

// 
const handleShowDetail = async (id) => {
    // console.log('clicked show details', id)
    // load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;

    showPhoneDetails(phone)

}

const showPhoneDetails = (phone) => {
    console.log(phone);
    const phoneName = document.getElementById('show-detail-phone-name');
    phoneName.innerText = phone.name;

    const showDetailContainer = document.getElementById('show-detail-container');

    showDetailContainer.innerHTML = `
        <img src="${phone.image}" alt="" />
        <p><span>Storage:</span>${phone?.mainFeatures?.storage}</p>
        <p><span>GPS:</span>${phone.others?.GPS || 'No GPS available'}</p>
        <p><span>GPS:</span>${phone.others?.GPS ? phone.others.GPS : 'No GPS available in this device'}</p>
    `

    // show the modal
    show_details_modal.showModal();
}


// handle search button
const handleSearch = (isShowAll) => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText, isShowAll);
}
// handle search recap
// const handleSearch2 = () =>{
//     toggleLoadingSpinner(true);
//     const searchField = document.getElementById('search-field2');
//     const searchText = searchField.value;
//     loadPhone(searchText);
// }

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden')
    }
    else {
        loadingSpinner.classList.add('hidden');
    }
}

// handle show all
const handleShowAll = () => {
    handleSearch(true);
}

loadPhone();





// const loadPets = (searchText = "") => {
//     fetch(`https://openapi.programming-hero.com/api/peddy/pets?title=${searchText}`)
//     .then((res) => res.json())
//     // .then((data) => console.log(data.categories))
//     .then((data) => displayPets(data.pets))
//     .catch((err) => console.log(err));
// }


// const displayPets = (pets) => {
//     const petContainer = document.getElementById('pets')
//     petContainer.innerHTML = "";

//     // Sort pets by price in descending order
//     pets.sort((a, b) => b.price - a.price);

//     // No data
//     if (pets.length == 0) {
//         petContainer.classList.remove("grid")
//         petContainer.innerHTML = `
//             <div class=" min-h-[300px] w-full flex flex-col gap-5 justify-center items-center">
//                 <img src="./images/error.webp" />
//                 <h2 class=" text-center text-xl font-bold">No Information Available</h2>
//             </div>
//         `;
//     }
//     else{
//         petContainer.classList.add("grid")
//     }

//     pets.forEach((pet) => {
//         console.log(pet);
//         const card = document.createElement('div');
//         card.classList = "card card-compact";
//         card.innerHTML = `
//             <figure class="">
//                 <img
//                 src= ${pet.image} class="h-full w-full object-cover" alt="Shoes" />

                
                
//             </figure>
//             <div class="px-0 py-2 w-full">
                
//                 <div>
//                     <h2 class="font-bold">${pet.pet_name}</h2>
//                     <div class="items-center gap-2">
//                         <p class="text-gray-400">Bread: ${pet.breed}</p>
//                         <p class="text-gray-400">Birth Date: ${pet.date_of_birth}</p>
//                         <p class="text-gray-400">Gender: ${pet.gender}</p>
//                         <p class="text-gray-400">Price: ${pet.price}</p>
                    
//                     </div>
//                     <div class="flex justify-between items-center w-full p-3">
                        
//                         <button class="btn btn-sm text-[#0E7A81]">
//                             <img src="https://img.icons8.com/?size=40&id=82788&format=png&color=000000" class="h-full w-full p-1 object-cover" alt="Shoes" >
//                         </button>
//                         <button onclick="adoptPets()" class="btn btn-sm text-[#0E7A81] mx-auto">Adopt</button>
//                         <button onclick="loadDetails(${pet.petId})" class="btn btn-sm text-[#0E7A81]">Details</button>
//                     </div>
//                 </div>
//             </div>
//         `;
//         petContainer.append(card)
        
//     })
    
// }


// Global array to store fetched pets
