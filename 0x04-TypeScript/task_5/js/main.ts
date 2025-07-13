// Define MajorCredits with a brand
interface MajorCredits {
  credits: number;
  readonly __brand: "major";
}

// Define MinorCredits with a brand
interface MinorCredits {
  credits: number;
  readonly __brand: "minor";
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "major"
  };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "minor"
  };
}

const major1: MajorCredits = { credits: 3, __brand: "major" };
const major2: MajorCredits = { credits: 4, __brand: "major" };

const minor1: MinorCredits = { credits: 2, __brand: "minor" };
const minor2: MinorCredits = { credits: 1, __brand: "minor" };

console.log("Total Major Credits:", sumMajorCredits(major1, major2));
console.log("Total Minor Credits:", sumMinorCredits(minor1, minor2));
