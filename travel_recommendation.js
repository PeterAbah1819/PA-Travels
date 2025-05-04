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

//     if(input == "beach" || input == "beaches"){
//         data.beaches.forEach(beach => {
//             results.push(beach)
//         });
//     }else if(input == "temples" || input == "temple"){
//         data.temples.forEach(temple => {
//             results.push(temple);
//         });
//     }else if(input == "country" || input == "countries"){
//         data.countries.forEach(country => {
//             country.cities.forEach(city => {
//                 results.push(city);
//             });
//         });
//     }

//     console.log(results)
//     displayResults(results);
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










