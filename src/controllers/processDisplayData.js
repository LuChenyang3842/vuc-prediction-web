const cityList = ['banyule', 'bayside', 'boroondara', 'brimbank', 'cardinia', 'casey', 'darebin', 'frankston', 'glen eira', 'greater dandenong', 'greater geelong', 'hobsons bay', 'hume', 'kingston', 'knox', 'macedon ranges', 'manningham', 'maribyrnong', 'maroondah', 'melbourne', 'melton', 'mitchell', 'monash', 'moonee valley', 'moorabool', 'moreland', 'mornington peninsula', 'nillumbik', 'port phillip', 'stonnington', 'whitehorse', 'whittlesea', 'wyndham', 'yarra', 'yarra ranges']


export const retrunTable = (twitter,crime,unemployment) => {
    console.log(twitter)
    console.log(crime)
    console.log(unemployment)

    let outputData = []
    for (var year in twitter){
        if (year === "2014" || year === "2015" || year === "2016" ){
        for (var city in twitter[year]){
            if(cityList.includes(city)){
                outputData.push([city,twitter[year][city]["negative_rate"].toFixed(3),crime[year][city]["crime_ratio"].toFixed(4),unemployment[city][year.substring(2, 4)].toFixed(2),crime[year][city]["lga_erp"], year])
            }
        }
    }
}
return outputData
}

// export const crimeAndTwitter(twitter,crime,unemployment){

// }


