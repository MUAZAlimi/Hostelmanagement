function addStudent() {
    var studentName = document.getElementById("studentName").value;
    var roomNumber = document.getElementById("roomNumber").value;

    if (studentName && roomNumber) {
        var studentList = document.getElementById("studentList");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(`Student Name: ${studentName}, Room Number: ${roomNumber}`));
        studentList.appendChild(li);

        // Clear input fields after adding student
        document.getElementById("studentName").value = "";
        document.getElementById("roomNumber").value = "";
    } else {
        alert("Please enter student name and room number.");
    }
}
