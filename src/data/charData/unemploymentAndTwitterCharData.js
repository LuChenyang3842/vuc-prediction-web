// x axis is the wrath twitter
// y axis is the unemployment rate
// Z axis is the population


const dataPoints2014 = [
  { label: 'Bayside', x: 0.268, y: 3.85, z: 99914 },
  { label: 'Greater Dandenong', x: 0.312, y: 11.45, z: 149466 },
  { label: 'Melton', x: 0.328, y: 7.1, z: 127638 },
  { label: 'Brimbank', x: 0.339, y: 9.65, z: 197637 },
  { label: 'Yarra Ranges', x: 0.341, y: 5.83, z: 150036 },
  { label: 'Greater Geelong', x: 0.342, y: 6.97, z: 224906 },
  { label: 'Darebin', x: 0.347, y: 8.2, z: 148675 },
  { label: 'Hume', x: 0.35, y: 10.03, z: 188669 },
  { label: 'Whitehorse', x: 0.352, y: 6.5, z: 163646 },
  { label: 'Whittlesea', x: 0.355, y: 8.13, z: 186843 },
  { label: 'Glen Eira', x: 0.36, y: 5.1, z: 144009 },
  { label: 'Moonee Valley', x: 0.361, y: 5.9, z: 117297 },
  { label: 'Macedon Ranges', x: 0.372, y: 3.8, z: 44702 },
  { label: 'Nillumbik', x: 0.372, y: 3.03, z: 62849 },
  { label: 'Moreland', x: 0.376, y: 7.85, z: 163331 },
  { label: 'Melbourne', x: 0.378, y: 5, z: 122167 },
  { label: 'Banyule', x: 0.385, y: 5.22, z: 125451 },
  { label: 'Stonnington', x: 0.396, y: 4.17, z: 105946 },
  { label: 'Maribyrnong', x: 0.398, y: 6.63, z: 81831 },
  { label: 'Moorabool', x: 0.398, y: 5.1, z: 30911 },
  { label: 'Boroondara', x: 0.4, y: 4.25, z: 172551 },
  { label: 'Manningham', x: 0.401, y: 6.6, z: 118485 },
  { label: 'Port Phillip', x: 0.402, y: 5.55, z: 104813 },
  { label: 'Mornington Peninsula', x: 0.405, y: 5.43, z: 153749 },
  { label: 'Maroondah', x: 0.41, y: 6.38, z: 111185 },
  { label: 'Monash', x: 0.412, y: 3.58, z: 184977 },
  { label: 'Casey', x: 0.414, y: 7, z: 283215 },
  { label: 'Wyndham', x: 0.422, y: 6.47, z: 199645 },
  { label: 'Hobsons Bay', x: 0.428, y: 5.45, z: 91118 },
  { label: 'Yarra', x: 0.432, y: 7.65, z: 86377 },
  { label: 'Cardinia', x: 0.433, y: 6, z: 87034 },
  { label: 'Frankston', x: 0.437, y: 7.45, z: 134899 },
  { label: 'Knox', x: 0.441, y: 5.6, z: 155279 },
  { label: 'Kingston', x: 0.443, y: 3.45, z: 153034 },
  { label: 'Mitchell', x: 0.487, y: 6.3, z: 38393 },
    ]
    
    const dataPoints2015 = [
      { label: 'Bayside', x: 0.246, y: 3.72, z: 101321 },
      { label: 'Greater Dandenong', x: 0.301, y: 11.92, z: 152739 },
      { label: 'Macedon Ranges', x: 0.321, y: 3.43, z: 45308 },
      { label: 'Brimbank', x: 0.322, y: 10.15, z: 199432 },
      { label: 'Greater Geelong', x: 0.339, y: 7.55, z: 229420 },
      { label: 'Yarra Ranges', x: 0.339, y: 5.5, z: 150661 },
      { label: 'Whittlesea', x: 0.342, y: 7.93, z: 195397 },
      { label: 'Melton', x: 0.344, y: 7.88, z: 132752 },
      { label: 'Darebin', x: 0.348, y: 7.55, z: 150881 },
      { label: 'Wyndham', x: 0.348, y: 7.13, z: 209847 },
      { label: 'Maribyrnong', x: 0.353, y: 6.95, z: 83515 },
      { label: 'Knox', x: 0.356, y: 5.13, z: 155681 },
      { label: 'Glen Eira', x: 0.359, y: 4.88, z: 146303 },
      { label: 'Whitehorse', x: 0.36, y: 6.15, z: 165557 },
      { label: 'Manningham', x: 0.361, y: 6.15, z: 119442 },
      { label: 'Kingston', x: 0.366, y: 4.27, z: 154477 },
      { label: 'Nillumbik', x: 0.375, y: 2.83, z: 62602 },
      { label: 'Hume', x: 0.377, y: 9.05, z: 194006 },
      { label: 'Moreland', x: 0.377, y: 7.03, z: 166770 },
      { label: 'Banyule', x: 0.381, y: 5.03, z: 126232 },
      { label: 'Hobsons Bay', x: 0.383, y: 5.78, z: 92761 },
      { label: 'Yarra', x: 0.391, y: 6.97, z: 89151 },
      { label: 'Cardinia', x: 0.392, y: 6.63, z: 90884 },
      { label: 'Moonee Valley', x: 0.396, y: 5.47, z: 119583 },
      { label: 'Port Phillip', x: 0.396, y: 5.08, z: 107127 },
      { label: 'Boroondara', x: 0.399, y: 4.03, z: 174787 },
      { label: 'Casey', x: 0.401, y: 7.75, z: 292211 },
      { label: 'Stonnington', x: 0.409, y: 3.88, z: 107941 },
      { label: 'Melbourne', x: 0.419, y: 4.7, z: 128980 },
      { label: 'Maroondah', x: 0.421, y: 5.63, z: 112310 },
      { label: 'Moorabool', x: 0.422, y: 5.83, z: 31496 },
      { label: 'Frankston', x: 0.424, y: 7.73, z: 135971 },
      { label: 'Mornington Peninsula', x: 0.441, y: 5.45, z: 155015 },
      { label: 'Monash', x: 0.463, y: 3.88, z: 187286 },
      { label: 'Mitchell', x: 0.5, y: 7.55, z: 39143 },
    ]
    
    const dataPoints2016 = [
      { label: "Mercury", x: 36, y: 452, z: 3031 },
      { label: "Venus", x: 67.2, y: 726, z: 7521 },
      { label: "Earth", x: 93, y: 285, z: 7926 },
      { label: "Mars", x: 141.6, y: 230, z: 4222 },
      { label: "Jupiter", x: 483.6, y: 120, z: 88729 },
      { label: "Saturn", x: 886.7, y: 88, z: 74600 },
      { label: "Uranus", x: 1784.0, y: 59, z: 32600 },
      { label: "Neptune", x: 2794.4, y: 48, z: 30200 },
    ]
  
  
  export const unemploymentNtwitter2014 = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light1", // "light1", "light2", "dark1", "dark2"
      title:{
        text: "Unemployment rate versues wrath twitter 2014",
      fontSize: 26
      },
      axisX: {
        title: "Wrath Twitter Ratio (Wrath TWitter/Total Twitter)",
      // logarithmic: true
      },
      axisY: {
        title: "unemployment rate (%)",
        includeZero: true,
      },
      data: [{
        type: "bubble",
        indexLabel: "{label}",
        toolTipContent: "<b>{label}</b><br>Wrath Twitter Ratio{x}<br>Unemployment Rate: {y} <br>Population: {z} ",
        dataPoints: dataPoints2014
      }]
    }
  
    export const unemploymentNtwitter2015 = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light1", // "light1", "light2", "dark1", "dark2"
      title:{
        text: "Unemployment rate versues wrath twitter 2015",
      fontSize: 26
      },
      axisX: {
        title: "Wrath Twitter Ratio (Wrath TWitter/Total Twitter)",
      logarithmic: true
      },
      axisY: {
        title: "unemployment rate(%)"
      },
      data: [{
        type: "bubble",
        indexLabel: "{label}",
        toolTipContent: "<b>{label}</b><br>Wrath Twitter Ratio{x}<br>Unemployment Rate: {y} <br>Population: {z} ",
        dataPoints: dataPoints2015
      }]
    }
  
    export const unemploymentNtwitter2016 = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light1", // "light1", "light2", "dark1", "dark2"
      title:{
        text: "Unemployment rate versues wrath twitter 2016",
      fontSize: 26
      },
      axisX: {
        title: "Wrath Twitter Ratio (Wrath TWitter/Total Twitter)",
        suffix: "°C",
      logarithmic: true
      },
      axisY: {
        title: "unemployment rate(%)"
      },
      data: [{
        type: "bubble",
        indexLabel: "{label}",
        toolTipContent: "<b>{label}</b><br>Wrath Twitter Ratio: {x}<br>Unemployment Rate: {y} <br>Population: {z} ",
        dataPoints: dataPoints2016
      }]
    }