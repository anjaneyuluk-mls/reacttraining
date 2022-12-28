var arr = [
  { id: 1, date: 2021 },
  { id: 2, date: 2021 },
  { id: 3, date: 2022 },
  { id: 4, date: 2023 },
];

const dateMapiing = {};
arr.forEach((item) => {
  const date = item.date;
  if (dateMapiing[date]) {
    dateMapiing[date].push(item);
  } else {
    dateMapiing[date] = [item];
  }
});
console.log(dateMapiing);
