const phoneData = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await response.json()
    console.log(data)
}

phoneData()