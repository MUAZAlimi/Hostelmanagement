function addStudent() {
    var studentName = document.getElementById("studentName").value;
    var roomNumber = document.getElementById("roomNumber").value;

    if (studentName && roomNumber) {
        var studentList = document.getElementById("studentList");
        var li = document.createElement("li");

        // Create a delete icon (you can use any icon library or custom icon here)
        var deleteIcon = document.createElement("span");
        deleteIcon.className = "delete-icon";
        deleteIcon.innerHTML = "&#x1F5D1"; // Unicode for a delete icon (you can customize this)

        // Create text node with student information
        var studentInfo = document.createTextNode(`Student Name: ${studentName}, Room Number: ${roomNumber}`);

        // Append delete icon and student information to the list item
        li.appendChild(deleteIcon);
        li.appendChild(studentInfo);

        // Append the list item to the student list
        studentList.appendChild(li);

        // Clear input fields after adding student
        document.getElementById("studentName").value = "";
        document.getElementById("roomNumber").value = "";

        // Attach click event to the delete icon to remove the corresponding list item
        deleteIcon.addEventListener("click", function() {
            studentList.removeChild(li);
        });
    } else {
        alert("Please enter student name and room number.");
    }
}
