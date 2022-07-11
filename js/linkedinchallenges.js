const double = x => x * 2;
const subtractTwenty = x => x - 20;
const triple = x => x * 3;
const addFive = x => x + 5;

const arrayOfFunctions = [double, subtractTwenty, triple, addFive, Math.abs];

const initialValue = 3;
let result = initialValue;

arrayOfFunctions.forEach(func => (result = func(result)));

console.log(result);

const calcResultOfAllEquations = (arr, initialValue) =>
  arr.reduce((acc, func) => func(acc), initialValue);

result = calcResultOfAllEquations(arrayOfFunctions, initialValue);

console.log(result);

const arrOfWords = ['bike', 'backpack', 'destination', 'lake'];

const testLength = minLength => word => word.length > minLength;

const longWords = arrOfWords.filter(testLength(5));

console.log(longWords);

const countOccurrences = word =>
  word.reduce(
    (acc, char) => ({ ...acc, [char]: acc[char] ? acc[char] + 1 : 1 }),
    {}
  );

const hasSameLetterCount = (word_1, word_2) => {
  const word_1Count = countOccurrences([...word_1]);
  const word_2Count = countOccurrences([...word_2]);

  return (
    Object.keys(word_1Count).length === Object.keys(word_2Count).length &&
    Object.keys(word_1Count).every(
      char => word_1Count[char] === word_2Count[char]
    )
  );
};

const findAnagrams = (word, allWords) => {
  return allWords
    .filter(entry => hasSameLetterCount(word, entry))
    .filter(anagram => anagram !== word);
};

const words = ['cinema', 'iceman', 'anemic', 'mood', 'life', 'file'];

console.log(findAnagrams('cinema', words));
console.log(findAnagrams('doom', words));
console.log(findAnagrams('file', words));

const validateFirstName = name =>
  name.length >= 2 ? '' : 'First name must be at least 2 chars long';

const validateLastName = name =>
  name.length >= 2 ? '' : 'Last name must be at least 2 chars long';

const validateZipCode = code =>
  code.length === 5 ? '' : 'Zip code must be exactly 5 chars long';

const validateCity = city =>
  city.length >= 3 ? '' : 'City must be at least 3 chars long';

const inputCriteria = inputValues => ({
  firstName: validateFirstName(inputValues.firstName),
  lastName: validateLastName(inputValues.lastName),
  zipCode: validateZipCode(inputValues.zipCode),
  city: validateCity(inputValues.city),
});

const currentInputValues = {
  firstName: 'Leo',
  lastName: 'Z',
  zipCode: '2103',
  city: 'Vinnytsia',
};

console.log(inputCriteria(currentInputValues));

const getErrorMessages = (inputs, criteria) =>
  Object.values(criteria(inputs)).filter(value => value);

console.log(getErrorMessages(currentInputValues, inputCriteria));