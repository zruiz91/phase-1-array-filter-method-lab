// Code your solution here
//take in array and a string
//return a matching list of drivers (case-sensitive)

function findMatching(drivers, str) {
    const answer = drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());
    return answer;
}

// takes in a na array and str 
// returns all drivers whose names start with string 
function fuzzyMatch(drivers, str) {
    const answer = drivers.filter(driver => driver.slice(0, 2) === str)
    return answer
}

// takes in array and string 

function matchName (drivers, str) {
    const answer = drivers.filter(driver => driver.name === str)
    return answer
}