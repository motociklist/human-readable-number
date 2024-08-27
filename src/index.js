module.exports = function toReadable (number) {
  let numberToString = number.toString()
  let Anser = []
  if (number < 21) {
    switch (number) {
      case 0:
        return 'zero';
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      case 6:
        return 'six';
      case 7:
        return 'seven';
      case 8:
        return 'eight';
      case 9:
        return 'nine';
      case 10:
        return 'ten';
      case 11:
        return 'eleven';
      case 12:
        return 'twelve';
      case 13:
        return 'thirteen';
      case 14:
        return 'fourteen';
      case 15:
        return 'fifteen';
      case 16:
        return 'sixteen';
      case 17:
        return 'seventeen';
      case 18:
        return 'eighteen';
      case 19:
        return 'nineteen';
      case 20:
        return 'twenty';
      default:
        return ("ERROR");
    }
  }
  if (number >= 21 && number < 100){
    let numberSplit = numberToString.split('')
    switch (numberSplit[0]) {
      case '2':
        Anser.push('twenty')
        break;;
      case '3':
        Anser.push('thirty')
        break;
      case '4':
        Anser.push('forty')
        break;
      case '5':
        Anser.push('fifty')
        break;
      case '6':
        Anser.push('sixty')
        break;
      case '7':
        Anser.push('seventy')
        break;
      case '8':
        Anser.push('eighty')
        break;
      case '9':
        Anser.push('ninety')
        break;
    }

    switch (numberSplit[1]) {
      case '1':
        Anser.push('one')
        break;
      case '2':
        Anser.push('two')
        break; ;
      case '3':
        Anser.push('three')
        break;
      case '4':
        Anser.push('four')
        break;
      case '5':
        Anser.push('five')
        break;
      case '6':
        Anser.push('six')
        break;
      case '7':
        Anser.push('seven')
        break;
      case '8':
        Anser.push('eight')
        break;
      case '9':
        Anser.push('nine')
        break;
    }
  }
  if(number>=100){
    let numberSplit = numberToString.split('')
    switch (numberSplit[0]) {
      case '1':
        Anser.push('one hundred')
        break;
      case '2':
        Anser.push('two hundred')
        break;
      case '3':
        Anser.push('three hundred')
        break;
      case '4':
        Anser.push('four hundred')
        break;
      case '5':
        Anser.push('five hundred')
        break;
      case '6':
        Anser.push('six hundred')
        break;
      case '7':
        Anser.push('seven hundred')
        break;
      case '8':
        Anser.push('eight hundred')
        break;
      case '9':
        Anser.push('nine hundred')
        break;
    }

    switch (numberSplit[1]) {
      case '1':
        switch ((numberSplit[1] + numberSplit[2])) {
          case '10':
            Anser.push('ten') 
            break;
          case '11':
            Anser.push('eleven') 
            break;
          case '12':
            Anser.push('twelve')
            break;
          case '13':
            Anser.push('thirteen') 
            break;
          case '14':
            Anser.push('fourteen') 
            break;
          case '15':
            Anser.push('fifteen') 
            break;
          case '16':
            Anser.push('sixteen') 
            break;
          case '17':
            Anser.push('seventeen') 
            break;
          case '18':
            Anser.push('eighteen') 
            break;
          case '19':
            Anser.push('nineteen') 
            break;
        }
        break;
      case '2':
        Anser.push('twenty')
        break;
      case '3':
        Anser.push('thirty')
        break;
      case '4':
        Anser.push('forty')
        break;
      case '5':
        Anser.push('fifty')
        break;
      case '6':
        Anser.push('sixty')
        break;
      case '7':
        Anser.push('seventy')
        break;
      case '8':
        Anser.push('eighty')
        break;
      case '9':
        Anser.push('ninety')
        break;
    }
    if (numberSplit[1]!=1){
    switch (numberSplit[2]) {
      case '1':
        Anser.push('one')
        break;
      case '2':
        Anser.push('two')
        break;;
      case '3':
        Anser.push('three')
        break;
      case '4':
        Anser.push('four')
        break;
      case '5':
        Anser.push('five')
        break;
      case '6':
        Anser.push('six')
        break;
      case '7':
        Anser.push('seven')
        break;
      case '8':
        Anser.push('eight')
        break;
      case '9':
        Anser.push('nine')
        break;
    }
  }
  }
  return Anser.join(' ')
}
