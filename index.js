//BT 1

const mark = {
    mass : 78,
    height : 1.69
}

const john = {
    mass : 92,
    height : 1.95
}

function calBMI(mass, height){
    return mass/(height*height);
}

let markHigherBMI = calBMI(mark.mass, mark.height) > calBMI(john.mass, john.height) ? true : false

console.log(markHigherBMI)

// BT2

console.log(markHigherBMI ? 'Mark\'s BMI is higher than John\'s' : 'John\'s BMI is higher than Mark\'s!')

//BT3
const dolphins = [96,108,89]
const koalas = [88,91,110]


//1.
function calAvgScore(scores){
    return scores.reduce((cal, cur) => cal+= cur,0)/scores.length
}


function winner(){
    if(calAvgScore(dolphins)>calAvgScore(koalas)){
        calAvgScore(dolphins) >= 100 ?  console.log('Dolphins win') : console.log('No team wins trophy')
    }else if(calAvgScore(dolphins) < calAvgScore(koalas)){
        calAvgScore(koalas) >= 100 ?  console.log('Koalas win') : console.log('No team wins trophy')
    }else{
        calAvgScore(dolphins) >= 100 ? console.log('Draw') : console.log('Did not reach minimum score')
    }
}

winner()

//BT4

let bill = 30

console.log(bill>50 & bill<300 ? `The bill was ${bill}, the tips was ${bill*0.15}` : `The bill was ${bill}, the tips was ${bill*0.2}`)

//BT 5 
const team1 = [44,23,71]
const team2 = [65,54,49]

function checkWin(){
    if(calAvgScore(team1) > calAvgScore(team2) && calAvgScore(team1)/calAvgScore(team2)>=2){
        console.log(`Team 1 win (${calAvgScore(team1)} vs ${calAvgScore(team2)})`)
    }else if(calAvgScore(team2) > calAvgScore(team1) && calAvgScore(team2)/calAvgScore(team1)>=2){
        console.log(`Team 2 win (${calAvgScore(team2)} vs ${calAvgScore(team1)})`)
    }else{
        console.log('No team wins')
    }
}

checkWin()


