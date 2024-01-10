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