
let data = [
    { firstName: "Rani", lastName: "Patil", age: 30, email: "rani@example.com", gender: "Female" },
    { firstName: "Kranti", lastName: "Sable", age: 25, email: "kranti@example.com", gender: "Female" },
    { firstName: "Nilesh", lastName: "Gorhe", age: 21, email: "nilesh@example.com", gender: "Male" },
    { firstName: "Manisha", lastName: "Shete", age: 23, email: "mani@example.com", gender: "Female" },
    { firstName: "Kunal", lastName: "Chavan", age: 22, email: "kunal@example.com", gender: "Male" },
    { firstName: "Pallavi", lastName: "Arote", age: 24, email: "pallavi@example.com", gender: "Female" },
    { firstName: "Pranav", lastName: "Kulkarni", age: 23, email: "pranav@example.com", gender: "Male" }
];

function getData() {
    const tableBody = document.getElementById("data-output");
    tableBody.innerHTML = ""; 

    data.forEach((record, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${record.firstName}</td>
            <td>${record.lastName}</td>
            <td>${record.age}</td>
            <td>${record.email}</td>
            <td>${record.gender}</td>
            <td>
                <button class="update" onclick="showUpdateForm(${index})">Update</button>
                <button class="delete" onclick="deleteRecord(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function addRecord() {
    const firstName = document.querySelector(".firstName").value;
    const lastName = document.querySelector(".lastName").value;
    const age = document.querySelector(".age").value;
    const email = document.querySelector(".email").value;
    const gender = document.querySelector(".gender:checked").value;

    const newRecord = { firstName, lastName, age, email, gender };
    data.push(newRecord);
    document.querySelector(".create-form").style.display = "none";
    getData(); 
}

function showUpdateForm(index) {
    const record = data[index];
    document.querySelector(".ufirstName").value = record.firstName;
    document.querySelector(".ulastName").value = record.lastName;
    document.querySelector(".uage").value = record.age;
    document.querySelector(".uemail").value = record.email;
    document.querySelector(`input[name="ugender"][value="${record.gender}"]`).checked = true; 
    document.querySelector(".update-form").style.display = "block";
    document.querySelector(".update-form button").onclick = function() {
     updateRecord(index);
    };
}

function updateRecord(index) {
    const firstName = document.querySelector(".ufirstName").value;
    const lastName = document.querySelector(".ulastName").value;
    const age = document.querySelector(".uage").value;
    const email = document.querySelector(".uemail").value;
    const gender = document.querySelector(".ugenderr:checked").value;

    data[index] = { firstName, lastName, age, email, gender };

    document.querySelector(".update-form").style.display = "none";

    getData(); 
}


function showCreateForm() {
    document.querySelector(".create-form").style.display = "block";
}

function deleteRecord(index) {
    data.splice(index, 1); 
    getData(); 
}

