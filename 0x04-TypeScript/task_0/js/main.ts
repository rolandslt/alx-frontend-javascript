// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two student objects
const student1: Student = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 25,
  location: 'Kinshasa',
};

const student2: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  location: 'Goma',
};

// 3. Make an array of the student objects
const studentsList: Student[] = [student1, student2];

// 4. Create a table and append it to the body
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
