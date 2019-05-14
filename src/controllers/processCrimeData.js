export const processCrimeData =(crimeData) =>{
    for (var key in crimeData){
        for(var city in crimeData[key]){
            crimeData[key][city]["crime_ratio"] = crimeData[key][city]["crime_ratio"] *100000
        }
    }
    return crimeData
}