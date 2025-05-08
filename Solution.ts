function formatString(input: string, toUpper: boolean = true): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}
const books = [
  { title: "Math Book", rating: 6.5 },
  { title: "English Book", rating: 3.5 },
  { title: "Bangla Book", rating: 4.5 },
  { title: "Physics", rating: 5.5 },
];
filterByRating(books);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((combined, currentArray) => {
    return combined.concat(currentArray);
  }, []);
}
concatenateArrays([1, 2], [3, 4], [5]);

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  public getInfo(): string {
    return `make ${this.make}, year ${this.year}`;
  }
}
class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  public getModel(): string {
    return `model: ${this.model}`;
  }
}
const myCar = new Car("Toyota", 2000, "Corolla");

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }
  let highestPriceProducts = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > highestPriceProducts.price) {
      highestPriceProducts = products[i];
    }
  }
  return highestPriceProducts;
}

const products = [
  { name: "Pens", price: 20 },
  { name: "Notebooks", price: 25 },
  { name: "Bags", price: 50 },
];
getMostExpensiveProduct(products);

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

async function squareAsync(num: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(num * num);
      }
    }, 1000);
  });
}
squareAsync(4)
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

squareAsync(-3)
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
