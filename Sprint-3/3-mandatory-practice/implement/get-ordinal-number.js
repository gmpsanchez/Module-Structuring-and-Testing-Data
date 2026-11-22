function getOrdinalNumber(num) {
    let ord = 'th'

    if (num % 10 === 1 && num != 11)
    ord = 'st';

    else if (num % 10 === 2 && num != 12)
    ord = 'nd';

    else if (num % 10 === 3 && num != 13)
    ord = 'rd';

    return `${num}${ord}`
}

const output=getOrdinalNumber(35)
console.log(output)

module.exports = getOrdinalNumber;

/*
const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

const output=formatTimeDisplay(61)
console.log (output);*/