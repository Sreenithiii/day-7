//Get all the countries from Asia continent /region using Filter function

const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true),
request.send();
request.onload=function(){
    var data   = request.response;
    var result = JSON.parse(data)
    var res = result.filter((ele)=>ele.region==="Asia")
    var final=res.map((ele)=>console.log(ele.name.common))
    
}
//Get all the countries with a population of less than 2 lakhs using Filter function

const request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload = function() {
    var data = request1.response;
    var result = JSON.parse(data);
    var pop = result.filter(country => country.population < 200000);
    var countries = pop.map(country => ({
        name: country.name.common,
        population: country.population
    }));
    console.log(countries);
};

//Print the following details Name, capital, flag, using forEach function

const request2 = new XMLHttpRequest();
request2.open("GET", "https://restcountries.com/v3.1/all", true);
request2.send();
request2.onload = function() {
    const data = JSON.parse(request2.response);
    data.forEach(country => {
        if (country.capital && country.flags) {
            console.log("Name:", country.name.common);
            console.log("Capital:", country.capital[0]);
            console.log("Flag:", country.flags.svg);
            
        }
    });
};

//Print the total population of countries using reduce function

const request3 = new XMLHttpRequest();
request3.open("GET", "https://restcountries.com/v3.1/all", true);
request3.send();
request3.onload = function() {
    const data = JSON.parse(request3.response);
    const totalPopulation = data.reduce((total, country) => total + country.population, 0);
    console.log (totalPopulation);
};
//Print the country that uses US dollars as currency.

const request4 = new XMLHttpRequest();
request4.open("GET", "https://restcountries.com/v3.1/all", true);
request4.send();
request4.onload = function() {
    const data = JSON.parse(request4.responseText);
    const countriesWithUSD = data.filter(country => country.currencies && country.currencies.hasOwnProperty("USD"));
    console.log(countriesWithUSD.map(country => country.name.common));
};