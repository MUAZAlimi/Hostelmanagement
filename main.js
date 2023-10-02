function addStudent() {
    const studentName = document.getElementById("studentName").value;
    const roomNumber = document.getElementById("roomNumber").value;

    if (studentName && roomNumber) {
        const studentList = document.getElementById("studentList");
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`Student Name: ${studentName}, Room Number: ${roomNumber}`));
        studentList.appendChild(li);

        // Clear input fields after adding student
        document.getElementById("studentName").value = "";
        document.getElementById("roomNumber").value = "";
    } else {
        alert("Please enter student name and room number.");
    }
}
