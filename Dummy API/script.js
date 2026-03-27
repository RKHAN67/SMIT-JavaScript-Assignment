const dummyApiData = async () => {
  try {
    const data = await fetch('https://fakestoreapi.com/products');
    const jsonData = await data.json();
    let allCardsData = '';
    for (let i = 0; i < jsonData.length; i++) {
      allCardsData += `
    <div class="card">
                    <div class="image-box">
            <img src="${jsonData[i].image}" alt="">
          </div>
      
          <div class="content">
            <p class="title">
              ${jsonData[i].title}
            </p>
      
            <p class="desc">
                ${jsonData[i].description}
            </p>
      
            <p class="price">${jsonData[i].price}</p>
      
            <button class="btn">Buy Now</button>
          </div>
      
        </div>
    `;
    }
    document.getElementById('cardContainer').innerHTML = allCardsData;
  } catch (error) {
    console.log('Err', error);
  }
};

dummyApiData();
