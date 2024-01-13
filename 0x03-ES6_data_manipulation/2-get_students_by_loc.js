// Create a function getStudentsByLocation that returns
// an array of objects who are located in a specific city.
function getStudentsByLocation(students, city) {
  return students.filter(student => student.location === city);
}

export default getStudentsByLocation;
