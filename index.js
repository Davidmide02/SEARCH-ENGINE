

const Display = document.getElementById("result");
const Btn = document.getElementById("btn-search");





Btn.addEventListener("click", () => {
    let Inputword = document.getElementById("search-key").value;

    const options = {
	method: 'GET',
	headers: {
		'X-User-Agent': 'desktop',
		// 'X-Proxy-Location': 'EU',
		'X-RapidAPI-Key': '4a16996075mshfb6df8bf2c1fc32p10bb53jsnc07ebd0e0ff1',
		'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
	}
};
    

    fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${Inputword}`, options)
        .then(response => response.json())
        .then((data) => {
             console.log(data);
            let bring = `${data.results[1].title }`;
            console.log(bring);
           let come = JSON.stringify(bring);
           console.log(come);
            

             Display.innerHTML =  `
            <div class="result">
            <h1>Your Result</h1>
            <hr><hr><br>
            <div class="Results-contanier" >
                <h3>${data.results[1].title}</h3>
            <div class="details">
                <a>${data.results[1].link}</a>
            
                <p>${data.results[1].description}</p>
                <p>${data.results[1].cite.domain}</p>
            </div>
            </div>
            <div class="Results-contanier" >
                <h3>${data.results[0].title}</h3>
            <div class="details">
                <a>${data.results[0].link}</a>
                <p>${data.results[0].description}</p>
                <p>${data.results[0].cite.domain}</p>
            </div></div>

            <div class="Results-contanier" >
                <h3>${data.results[2].title}</h3>
            <div class="details">
                <a>${data.results[2].link}</a>
                <p>${data.results[2].description}</p>
                <p>${data.results[2].cite.domain}</p>
            </div></div>
            <div class="Results-contanier" >
                <h3>${data.results[3].title}</h3>
            <div class="details">
                <a>${data.results[3].link}</a>
                <p>${data.results[3].description}</p>
                <p>${data.results[3].cite.domain}</p>
            </div></div>
            `
                
        
           
    
     }).catch(() => {
        Display.innerHTML = `<h3 class="error">Opps!....Couldn't Find What you are looking fo</h3>`
    })  }) 
        
    
