function timeConversion (s) {
    s.split('');
    let hours = parseInt(s[0] + s[1]);
    let minutes = s[3] + s[4];
    let seconds = s[6] + s[7];
    let ampm = s[8] + s[9];
        
    if(hours >= 12 && ampm === 'AM') {
        hours -= 12;
    } else if (hours < 12 && ampm === 'PM') {
        hours += 12;
    }
    
    if(hours < 10) {
        hours = '0' + hours
    }
    
    return `${hours}:${minutes}:${seconds}`
}

console.log(timeConversion('06:40:03PM'))
console.log(timeConversion('06:40:03AM'))
console.log(timeConversion('12:30:57AM'))
console.log(timeConversion('12:00:00AM'))
console.log(timeConversion('07:05:45PM'))