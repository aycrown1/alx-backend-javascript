// Create a function getListStudentIds
// that returns an array of ids from a list of object.
function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.map(student => student.id);
}

export default getListStudentIds;
