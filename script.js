// Lucky Bus Ticket
function isLucky(ticket) {
  if (ticket.length === 6 && typeof Number(ticket) === 'number') {
    let digits = ticket.split('');

    let firstHalf = 0;
    let secondHalf = 0;

    for (let i = 0; i < digits.length / 2; i++) {
      firstHalf += Number(digits[i]);
    }
    for (let j = digits.length / 2; j < digits.length; j++) {
      secondHalf += Number(digits[j]);
    }

    return firstHalf === secondHalf;
  } else {
    return false;
  }
}

// Maximum Product
function adjacentElementsProduct(array) {
  let newArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArr.push(array[i] * array[i + 1]);
  }

  return Math.max(...newArr);
}

// Delete occurrences of an element if it occurs more than n times
function deleteNth(arr, n) {
  arr.map(el => {
    let arrOfDuplicates = arr.filter(num => num === el);
    if (arrOfDuplicates.length > n) {
      for (let i = 0; i < arrOfDuplicates.length - n; i++) {
        arr.splice(arr.lastIndexOf(el), 1);
      }
    }
  });

  return arr;
}

// Highest Scoring Word
function high(x) {
  const words = x.split(' ');
  const alphabetMap = {};
  for (let i = 'a'.charCodeAt(), j = 1; i <= 'z'.charCodeAt(); i++, j++) {
    alphabetMap[i] = j;
  }
  let highestScoringWord = { word: '', score: 0 };
  words.forEach(w => {
    const chars = w.split('');
    const sumOfChars = chars.reduce(
      (count, char) => count + alphabetMap[char.charCodeAt()],
      0
    );
    if (sumOfChars > highestScoringWord.score) {
      highestScoringWord = { word: w, score: sumOfChars };
    }
  });

  return highestScoringWord.word;
}

// Palindrome for your Dome
function palindrome(string) {
  const re = /[\W_]/g;
  const lowRegStr = string.toLowerCase().replace(re, '');
  const splittedStr = lowRegStr.split('');

  let reversedStrArr = [];

  for (let i = splittedStr.length - 1; i >= 0; i--) {
    reversedStrArr.push(splittedStr[i]);
  }

  const reversedStr = reversedStrArr.join('');

  return reversedStr === lowRegStr;
}

// Extract the domain name from a URL
function domainName(url) {
  return url
    .replace('www.', '')
    .replace('https', '')
    .replace('http', '')
    .replace('://', '')
    .split('.')[0];
}

// Split Strings
function solution(str) {
  const arr = str.split('');

  if (arr.length % 2 !== 0) {
    arr.push('_');
  }

  const subArr = [];

  for (let i = 0; i < arr.length; i += 2) {
    subArr.push(arr[i] + arr[i + 1]);
  }

  return subArr;
}

// Moving Zeros To The End
const moveZeros = arr => {
  const newArr1 = [];
  const newArr2 = [];

  arr.map(el => (el !== 0 ? newArr1.push(el) : newArr2.push(el)));

  return newArr1.concat(newArr2);
};

// Find The Parity Outlier
function findOutlier(integers) {
  const arrOfEven = [];
  const arrOfOdd = [];

  integers.map(integer =>
    integer % 2 === 0 ? arrOfEven.push(integer) : arrOfOdd.push(integer)
  );

  if (arrOfEven.length === 1) {
    return arrOfEven[0];
  } else {
    return arrOfOdd[0];
  }
}

// Who likes it?
function likes(names) {
  if (!Array.isArray(names)) return;

  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

// Convert string to camel case
function toCamelCase(str) {
  const newArr = [];

  const createNewStr = sign => {
    const splittedStr = str.split(sign);
    splittedStr.map(word => {
      splittedStr.indexOf(word) === 0
        ? newArr.push(word)
        : newArr.push(`${word.charAt(0).toUpperCase()}${word.slice(1)}`);
    });
  };

  if (str.includes('-')) {
    createNewStr('-');
    return newArr.join('');
  } else if (str.includes('_')) {
    createNewStr('_');
    return newArr.join('');
  } else {
    return str;
  }
}

// Peak array index
function peak(arr) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr.slice(0, i).reduce((total, el) => total + el, 0) ===
      arr.slice(i + 1).reduce((total, el) => total + el, 0)
    ) {
      index = i;
    }
  }
  return index;
}

// Valid Braces
function validBraces(braces) {
  let tracer = [];

  for (let brace of braces) {
    if (brace === '(' || brace === '{' || brace === '[') {
      tracer.push(brace);
    } else {
      if (tracer.length === 0) return false;

      let lastBrace = tracer[tracer.length - 1];
      if (
        (brace === ']' && lastBrace === '[') ||
        (brace === '}' && lastBrace === '{') ||
        (brace === ')' && lastBrace === '(')
      ) {
        tracer.pop();
      } else {
        break;
      }
    }
  }

  return tracer.length === 0;
}

// Santa wish list form in ReactJS
const React = require('react');

class WishlistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', wish: '', priority: 1 };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleWishChange = this.handleWishChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleWishChange(e) {
    this.setState({ wish: e.target.value });
  }

  handlePriorityChange(e) {
    this.setState({ priority: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.send(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          id='name'
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <textarea
          id='wish'
          value={this.state.wish}
          onChange={this.handleWishChange}
        />
        <select
          value={this.state.priority}
          id='priority'
          onChange={this.handlePriorityChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </form>
    );
  }
}

// Control the Beast (controlled components in ReactJS)
const React = require('react');

class Beast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name === undefined ? 'Yeti' : props.name,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <input
        type='text'
        value={this.state.name}
        onChange={this.handleChange}
        id='controlledName'
      />
    );
  }
}

// Find the Order Breaker
function orderBreaker(input) {
  for (let i = 0; i < input.length; i++) {
    const [prevItem, currentItem, nextItem] = [
      input[i - 1],
      input[i],
      input[i + 1],
    ];
    if (
      (prevItem <= nextItem &&
        (prevItem > currentItem || currentItem > nextItem)) ||
      (!prevItem && currentItem > nextItem) ||
      (!nextItem && prevItem > currentItem)
    ) {
      return currentItem;
    }
  }
}

// Sort the odd
function sortArray(array) {
  const tempArr = [];
  const arrOfOdds = [];
  const sortedArray = [];

  array.map(el => {
    if (el % 2 === 0) {
      tempArr.push(el);
    } else {
      tempArr.push('');
      arrOfOdds.push(el);
    }
  });

  tempArr.map(el => sortedArray.push(el));
  arrOfOdds.sort((a, b) => a - b);

  sortedArray.map(el => {
    if (el === '') {
      for (let elem of arrOfOdds) {
        sortedArray.splice(sortedArray.indexOf(el), 1, elem);
      }
    }
  });

  return sortedArray;
}

// The maximum sum value of ranges
function maxSum(arr, range) {
  let sum = -Infinity;
  let currentSum = 0;

  range.forEach(([from, to]) => {
    for (let i = from; i <= to; i++) {
      currentSum += arr[i];
    }

    currentSum > sum && (sum = currentSum);
    currentSum = 0;
  });

  return sum;
}

// Pair of gloves
function numberOfPairs(gloves) {
  const obj = gloves.reduce((acc, glove) => {
    !acc[glove] && (acc[glove] = 0);
    acc[glove]++;

    return acc;
  }, {});

  let count = 0;

  for (let item in obj) {
    count += Math.floor(obj[item] / 2);
  }

  return count;
}

// zipWith
function zipWith(fn, a0, a1) {
  const arr = [];

  const minLength = Math.min(a0.length, a1.length);

  for (let i = 0; i < minLength; i++) {
    arr.push(fn(a0[i], a1[i]));
  }

  return arr;
}

// Product of consecutive Fib numbers
function productFib(prod) {
  const res = [];
  const sequence = [0, 1];

  for (let i = 2; i <= Math.sqrt(prod); i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }

  for (let j = 0; j < sequence.length; j++) {
    if (sequence[j] * sequence[j + 1] === prod) {
      res.push(sequence[j], sequence[j + 1], true);
    }
    if (
      sequence[j - 1] * sequence[j] < prod &&
      sequence[j] * sequence[j + 1] > prod
    ) {
      res.push(sequence[j], sequence[j + 1], false);
    }
  }

  return res;
}

// Sum of Intervals
function sumIntervals(intervals) {
  const newIntervals = [];
  let topInterval = null;
  let sum = 0;

  const sortedIntervals = intervals.sort((prev, next) => prev[0] - next[0]);

  newIntervals.push(sortedIntervals[0]);

  for (let i = 1; i < sortedIntervals.length; i++) {
    topInterval = newIntervals[newIntervals.length - 1];

    if (topInterval[1] < sortedIntervals[i][0]) {
      newIntervals.push(sortedIntervals[i]);
    } else if (topInterval[1] < sortedIntervals[i][1]) {
      topInterval[1] = sortedIntervals[i][1];
    }
  }

  newIntervals.forEach(([start, end]) => (sum += end - start));

  return sum;
}
