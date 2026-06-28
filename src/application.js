export async function getweatherdata(location){
    let url=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=275GCBS24MNHAQP7PZ4EZ9A9E`;
    try{
const response=await fetch(url);
if(!response) throw new Error("Could not fetch data");
let weatherdata=await response.json();
console.log(weatherdata);
}
catch{
console.error(error);
}
}