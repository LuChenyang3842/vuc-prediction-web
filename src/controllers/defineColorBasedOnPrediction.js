export const defineColorBasedOnCrimeRate = (name, crimeData) => {
    if (crimeData.hasOwnProperty(name.toLowerCase())) {
        if (crimeData[name.toLowerCase()] < 1000) {
            console.log(crimeData[name.toLowerCase()])
            return "#cfd8dc"
        } else if (crimeData[name.toLowerCase()]< 1500) {
            return "#90a4ae"
        } else if ( crimeData[name.toLowerCase()] < 2000) {
            return "#607d8b"            } 
        else if (crimeData[name.toLowerCase()]< 2500) {
                return "#546e7a"
        } else if ( crimeData[name.toLowerCase()] < 3000) {
                return "#455a64"
        } else if ( crimeData[name.toLowerCase()] < 3500) {
            return "#37474f"
        } else {
            return "#263238"
        }
    } else {

        return "#cfd8dc"
    }

}

export const defineColorBasedOnEmployment = (name, unemploymentData) => {
if (unemploymentData.hasOwnProperty(name.toLowerCase())){
    if (unemploymentData[name.toLowerCase()] < 1) {
        return "#cfd8dc"
    } else if (unemploymentData[name.toLowerCase()] < 2) {
        return "#90a4ae"
    } else if ( unemploymentData[name.toLowerCase()] < 4) {
        return "#607d8b"            } 
    else if (unemploymentData[name.toLowerCase()] < 6) {
            return "#546e7a"
    } else if ( unemploymentData[name.toLowerCase()]< 8) {
            return "#455a64"
    } else if ( unemploymentData[name.toLowerCase()]< 10) {
        return "#37474f"
    } else {
        return "#263238"
    }
}else{
    return "#cfd8dc"
}

}


