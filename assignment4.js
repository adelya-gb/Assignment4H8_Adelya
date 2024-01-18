const getData = async() => {
    // console.log(e, "==> E");
    // e.preventDefault();
    try {
        let inputan = document.getElementById("inputCountry").value;
        const fetchUrl = await fetch(`https://covid-193.p.rapidapi.com/statistics?country=${inputan}`, {
            
        })

        // console.log(inputan);
        const dataJson = await fetchUrl.json();
        const data = dataJson.response[0];
        console.log(data);

        let activeCases = ifNull(data.cases.active)
        let newCases = ifNull(data.cases.new)
        let recoveredCases = ifNull(data.cases.recovered)
        let totalDeaths = ifNull(data.deaths.total)
        let totalTests = ifNull(data.tests.total)
        let totalCases = ifNull(data.cases.total)
        
        document.getElementById("activeCases").innerHTML = activeCases;
        document.getElementById("newCases").innerHTML = newCases;
        document.getElementById("recoveredCases").innerHTML = recoveredCases;
        document.getElementById("totalDeaths").innerHTML = totalDeaths;
        document.getElementById("totalTests").innerHTML = totalTests;
        document.getElementById("totalCases").innerHTML = totalCases;

    } catch (err) {
        console.log(err);
    }

    console.log("HALO");
}

function ifNull(num) {
    return num ?? 0;
}