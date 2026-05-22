function formatLocalISO(date: Date) {
  const pad = (num: number) => String(num).padStart(2, "0");
  return (
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ` +
    `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
  );
}

function parseLocalISO(str: string) {
  const parts = str.match(/(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+)/);
  if (!parts) return new Date();
  return new Date(
    parseInt(parts[1], 10),
    parseInt(parts[2], 10) - 1,
    parseInt(parts[3], 10),
    parseInt(parts[4], 10),
    parseInt(parts[5], 10),
    parseInt(parts[6], 10),
  );
}

export type Item = {
  interval: number;
  repetition: number;
  efactor: number;
};

export default function supermemo(
  item: Item,
  grade: number,
  review_datetime = null,
) {
  let nextInterval;
  let nextRepetition;
  let nextEfactor;

  if (grade >= 3) {
    if (item.repetition === 0) {
      nextInterval = 1;
      nextRepetition = 1;
    } else if (item.repetition === 1) {
      nextInterval = 6;
      nextRepetition = 2;
    } else {
      nextInterval = Math.ceil(item.interval * item.efactor);
      nextRepetition = item.repetition + 1;
    }
  } else {
    nextInterval = 1;
    nextRepetition = 0;
  }

  nextEfactor =
    item.efactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));

  if (nextEfactor < 1.3) nextEfactor = 1.3;

  const currentReviewDate = review_datetime
    ? parseLocalISO(review_datetime)
    : new Date();
  currentReviewDate.setMilliseconds(0);

  currentReviewDate.setDate(currentReviewDate.getDate() + nextInterval);
  const nextReviewDatetime = formatLocalISO(currentReviewDate);
  // ----------------------------------------------

  return {
    interval: nextInterval,
    repetition: nextRepetition,
    efactor: nextEfactor,
    review_datetime: nextReviewDatetime,
  };
}

// Testing
let item = {
  interval: 0,
  repetition: 0,
  efactor: 2.5,
};

console.log("First review:");
item = supermemo(item, 3);
console.log(item);

console.log("2nd Review:");
item = supermemo(item, 3);
console.log(item);

console.log("3rd Review:");
item = supermemo(item, 1);
console.log(item);

console.log("4th Review:");
item = supermemo(item, 3);
console.log(item);

console.log("5th Review:");
item = supermemo(item, 3);
console.log(item);
