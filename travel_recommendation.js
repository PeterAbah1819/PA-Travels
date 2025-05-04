function thankyou() {
    alert('Thank you for contacting us!');
    // Optionally reset form
    document.querySelector('form').reset();
}


document.addEventListener('DOMContentLoaded', function () {
document.getElementById('btnReset').addEventListener('click', function() {
    document.getElementById('results').innerHTML = '';
});

    });












let datas;

fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(jsonData => {
        datas = jsonData;
        console.log(datas);

        // Enable buttons
        document.getElementById('btnSearch').disabled = false;
        document.getElementById('btnReset').disabled = false;

        // Setup search button click AFTER data is available
        document.getElementById('btnSearch').addEventListener('click', function() {
            const input = document.getElementById('conditionInput').value.toLowerCase();
            let results = [];

            if (input === "beach" || input === "beaches") {
                results = datas.beaches;
            } else if (input === "temple" || input === "temples") {
                results = datas.temples;
            } else if (input === "park" || input === "parks") {
                results = datas.parks;
            } else if (input === "garden" || input === "gardens") {
                results = datas.gardens;




            } else if (input === "country" || input === "countries") {
                datas.countries.forEach(country => {
                    country.cities.forEach(city => {
                        results.push(city);
                    });
                });
            }

            console.log('Search input:', input);
            console.log('Matching results:', results.length);
            displayResults(results);
        });

    })
    .catch(error => console.error('Error fetching data:', error));


document.getElementById('btnSearch').addEventListener('click', function() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    
    let results = [];

    if (!data) {
        console.error('Data not yet fetched');
        return;
    }

    if(input == "beach" || input == "beaches"){
        data.beaches.forEach(beach => {
            results.push(beach)
        });
    }else if(input == "temples" || input == "temple"){
        data.temples.forEach(temple => {
            results.push(temple);
        });
    }else if(input == "country" || input == "countries"){
        data.countries.forEach(country => {
            country.cities.forEach(city => {
                results.push(city);
            });
        });
    }

    console.log(results)
    displayResults(results);
});


function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (results.length === 0) {
        resultsDiv.innerHTML = 'No results found.';
        return;
    }

    results.forEach(result => {
        const item = document.createElement('div');
        item.classList.add('result-item');
        item.innerHTML = `
            <h2>${result.name}</h2>
            <img src="${result.imageUrl}" alt="${result.name}">
            <p>${result.description}</p>
            <a href=\"${result.imageUrl}\"><button>Visit</button></a>
        `;
        resultsDiv.appendChild(item);
    });
}


    const options = { timeZone: 'Africa/Lagos', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const LagosTime = new Date().toLocaleTimeString('en-US', options);
    console.log("Current time in Lagos:", LagosTime);


// console.log('Search input:', input);
// console.log('Results:', results);










const data = {
  "countries": [
    {
      "id": 1,
      "name": "Australia",
      "cities": [
        {
          "name": "Sydney, Australia",
          "imageUrl": "sydney.jpg",
          "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
        },
        {
          "name": "Melbourne, Australia",
          "imageUrl": "melbourne.jpg",
          "description": "A cultural hub famous for its art, food, and diverse neighborhoods."
        }
      ]
    },
    {
      "id": 2,
      "name": "Japan",
      "cities": [
        {
          "name": "Tokyo, Japan",
          "imageUrl": "tokyo.jpg",
          "description": "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
        },
        {
          "name": "Kyoto, Japan",
          "imageUrl": "kyoto.jpg",
          "description": "Known for its historic temples, gardens, and traditional tea houses."
        }
      ]
    },
    {
      "id": 3,
      "name": "Brazil",
      "cities": [
        {
          "name": "Rio de Janeiro, Brazil",
          "imageUrl": "rio.jpg",
          "description": "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
        },
        {
          "name": "São Paulo, Brazil",
          "imageUrl": "sao-paulo.jpg",
          "description": "The financial hub with diverse culture, arts, and a vibrant nightlife."
        }
      ]
    }
  ],
  "temples": [
    {
      "id": 1,
      "name": "Angkor Wat, Cambodia",
      "imageUrl": "angkor-wat.jpg",
      "description": "A UNESCO World Heritage site and the largest religious monument in the world."
    },
    {
      "id": 2,
      "name": "Taj Mahal, India",
      "imageUrl": "taj-mahal.jpg",
      "description": "An iconic symbol of love and a masterpiece of Mughal architecture."
    }
  ],
  "beaches": [
    {
      "id": 1,
      "name": "Bora Bora, French Polynesia",
      "imageUrl": "bora-bora.jpg",
      "description": "An island known for its stunning turquoise waters and luxurious overwater bungalows."
    },
    {
      "id": 2,
      "name": "Copacabana Beach, Brazil",
      "imageUrl": "copacabana.jpg",
      "description": "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
    }
  ]
};