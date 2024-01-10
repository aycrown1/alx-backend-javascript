// A build for the Teacher interface
interface Teacher {
  readonly firstName: string; // can only be modified at first initialized.
  readonly lastName: string; // can only be modified at first initialized.
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



// Writing a class
interface StudentClass {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

class StudentClass implements StudentClass {
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
    return "Currently working";
   }

    displayName(): string {
    return this.firstName;
   }
}
