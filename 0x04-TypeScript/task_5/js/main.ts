interface MajorCredits {
  majorCreditBrand: 'Major';
  credits: number;
}

interface MinorCredits {
  minorCreditBrand: 'Minor';
  credits: number;
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    majorCreditBrand: 'Major',
    credits: subject1.credits + subject2.credits,
  };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    minorCreditBrand: 'Minor',
    credits: subject1.credits + subject2.credits,
  };
}