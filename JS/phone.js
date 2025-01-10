const phoneData = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await response.json()
    const phones = data.data
    // console.log(phones)
    displayPhones(phones)
}

const displayPhones = phones => {

    const phoneContainer = document.getElementById('phone-container')
    console.log(phoneContainer)

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
          <h2 class="text-[#403F3F] text-[25px] font-bold mt-2">Price!</h2>
            <div class="card-actions justify-center">
             <button class="text-white text-xl font-semibold bg-[#0D6EFD] py-[10px] px-[25px] rounded-lg mt-[25px] mb-[25px]">Show Details</button>
            </div>
        </div>
        `
       phoneContainer.appendChild(phoneCard)
    })
}

phoneData();