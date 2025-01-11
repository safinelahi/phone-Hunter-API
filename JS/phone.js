const phoneData = async (searchPhone, isShowAll) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`)
    const data = await response.json()
    const phones = data.data
    // console.log(phones)
    displayPhones(phones, isShowAll)
}

const displayPhones = (phones, isShowAll) => {

    const phoneContainer = document.getElementById('phone-container')
    //console.log(phoneContainer)
    // remove before loaded data and add new searching data and load
    phoneContainer.textContent = ''

    // when only 6 data there is not required to show (show all button) and more then 6 data we need to show (show all button)
    const showAllContainer = document.getElementById('show-all-container')
    if(phones.length >= 6 && !isShowAll){
        showAllContainer.classList.remove('hidden')
    }
    else{
        showAllContainer.classList.add('hidden')
    }

    // slice of the phone array or length (display only 6 cart or array) in show all button click
    if(!isShowAll){
        phones = phones.slice(0,6)
    }
    

    phones.forEach(phone =>{
        console.log(phone)
        const phoneCard = document.createElement('div')
        phoneCard.classList = `card rounded-lg border border-inherit`
        phoneCard.innerHTML = `
        <figure class="bg-[#0d6efd0d] px-[58px] py-[35px] mt-[25px] mx-[25px]">
            <img
               src="${phone.image}"
               alt="phone" />
        </figure>
        <div class=" flex flex-col justify-center items-center mt-[25px]">
          <h2 class="text-[#403F3F] text-[25px] font-bold"> ${phone.phone_name} </h2>
          <p class="text-[#706F6F] text-[18px] w-[291px] text-center mt-5">There are many variations of passages of available, but the majority have suffered</p>
          <h2 class="text-[#403F3F] text-[25px] font-bold mt-2">$999</h2>
            <div class="card-actions justify-center">
             <button class="text-white text-xl font-semibold bg-[#0D6EFD] py-[10px] px-[25px] rounded-lg mt-[25px] mb-[25px]">Show Details</button>
            </div>
        </div>
        `
       phoneContainer.appendChild(phoneCard)
    })

    // hide loading progress when data is loading 
    toggleLoadingProgress(false)
}


// handleSearch function creating

const handleSearch = (isShowAll) => {
    toggleLoadingProgress(true)
    const searchField = document.getElementById('search-felid')
    const searchTextValue = searchField.value
    console.log(searchTextValue)
    phoneData(searchTextValue, isShowAll)
}


const toggleLoadingProgress = (isLoading) => {
    const loadingProgress = document.getElementById('loading-progress')

    if(isLoading){
        loadingProgress.classList.remove('hidden')
    }
    else {
        loadingProgress.classList.add('hidden')
    }
}

 // handel show all button

 const handelShowAll = () => {
    handleSearch(true)
 }
// phoneData();