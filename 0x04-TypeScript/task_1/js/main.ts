// A build for the Teacher interface
interface Teacher {
  readonly firstName: string; // can only be modified at first initialized.
  readonly lastName: string; // can only be modified at f\
irst initialized.
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional
  location: string;
  [key: string]: any; //  allows for any additional attributes
}

// Extending the Teacher class
interface Directors extends Teacher {
  numberOfReports: number;
}


// Printing teachers
function printTeacher(firstName: string, lastName: string) {
    return `${firstName.charAt(0)}. ${lastName}`;
}
