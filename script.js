//Object to hold the phrases
const phrases = {
    partOne: ['The grind calls your name', 'The day rises like a challenge', 'Your spirit steps into the arena', 'The pressure sharpens the blade', 'The struggle cracks open a new dawn'],
    partTwo: ['your discipline hardens into armor', 'your focus becomes a weapon', 'your heart beats like a war drum', 'your mind cuts through doubt', 'your will refuses to break'],
    partThree: ['and victory shifts closer.', 'and the world feels your movement.', 'and nothing will stand in your way.', 'and your future trembles with potential.', 'and the weak fall behind.']
};
//console.log(phrases);

const getRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

//console.log(getRandom(phrases.partOne));
const generateMessage = () => {

let finalMessage = '';

for (let part in phrases) { 
    switch (part) {
        case 'partOne':
            finalMessage += getRandom(phrases[part]) + ', ';
            break;
        case 'partTwo':
            finalMessage += getRandom(phrases[part]) + ', ';
            break;
        case 'partThree':
            finalMessage += getRandom(phrases[part]);
            break;
    }
}

console.log(finalMessage);
}