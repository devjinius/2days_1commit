// this is the test

const input = [
  {
    title: '슈퍼맨',
    year: '2005',
    cast: ['장동건', '권상우', '이동욱', '차승원']
  },
  {
    title: '스타워즈',
    year: '2013',
    cast: ['차승원', '신해균', '장동건', '김수현']
  },
  {
    title: '고질라',
    year: '1997',
    cast: []
  }
];
const key = 'cast';

const flatMapReducer = (acc, cur) => {
  cur[key].reduce((acc2, cur2) => {
    if (acc2.indexOf(cur2) === -1) acc2.push(cur2);
    return acc2;
  }, acc);

  return acc;
};
const flattenCastArray = input.reduce(flatMapReducer, []);
// ['장동건', '권상우', '이동욱', '차승원', '신해균', '김수현']

console.log(flattenCastArray);
