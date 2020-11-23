export const doBasicCurry = (fnToCurry) => {
  let args = [];
  const fnLength = fnToCurry.length;

  return function makeCurry(arg) {
    args = [...args, arg];
    
    if (args.length < fnLength) {
      return makeCurry;
    } else return fnToCurry.apply(null, args);
  }
}

export const shouldPair = (firstPart, secondPart) => !firstPart.complete && !secondPart.complete; 

export const generateCorrectPair = (firstPart, secondPart) => ({
  name: `${firstPart.name} ${secondPart.name}`,
  artist: `${firstPart.artist} ${secondPart.artist}`,
});

export const generateWrongPair = (firstPart, secondPart) => `${firstPart.artist} ${secondPart.artist} - ${firstPart.name} ${secondPart.name} is not an existing song`

export const songsGenerator = ({ shouldPair, generateCorrectPair, generateWrongPair }) => (firstPart, secondPart) => {
  if (shouldPair(firstPart, secondPart)) {
    return generateCorrectPair(firstPart, secondPart);
  }
  return generateWrongPair(firstPart, secondPart);
}