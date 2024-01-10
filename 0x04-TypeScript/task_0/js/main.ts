interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Student 1
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 17,
  location: "United States"
};

// Student 2
const student2: Student = {
  firstName: "Mike",
  lastName: "Smith",
  age: 18,
  location: "San Francisco"
};

const studentsList: Student[] = [student1, student2];

// Function to render a table
function renderTable() {
  const table = document.createElement("table");
  
  for (let i = 0; i < studentsList.length; i++) {
    const row = table.insertRow();
    const name = row.insertCell();
    const location = row.insertCell();
    name.innerHTML = studentsList[i].firstName;
    location.innerHTML = studentsList[i].location;
  }

  document.body.appendChild(table);
}

// Call the renderTable function
renderTable();