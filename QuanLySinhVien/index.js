class Student {
    constructor(id, fullName, email, phone, hometown, gender) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.hometown = hometown;
        this.gender = gender;
    }
}

let students = [
    new Student(1, "Dương An Hiền", "hien.duong@gmail.com", "0123456789", "Hà Nội", 1),
    new Student(2, "Nguyễn Minh Châu", "chau.nguyen@gmail.com", "0987654321", "TP.HCM", 0),
    new Student(3, "Trần Văn Sơn", "son.tran@gmail.com", "0912345678", "Đà Nẵng", 1),
    new Student(4, "Lê Phương Thảo", "thao.le@gmail.com", "0934567890", "Huế", 0)
];
let editingIndex = null;


function displayStudentList(filteredStudents = students) {
    const table = document.getElementById("tblStudentInfoList");
    table.innerHTML = ""; // Xóa nội dung cũ

    let header = "<tr>" +
        "<th>STT</th>" +
        "<th>Họ và Tên</th>" +
        "<th>Email</th>" +
        "<th>Số điện thoại</th>" +
        "<th>Quê quán</th>" +
        "<th>Giới tính</th>" +
        "<th>Hành động</th>" +
        "</tr>";
    table.innerHTML += header;


    filteredStudents.forEach((student, index) => {
        let gender = student.gender === 1 ? "Nam" : "Nữ";
        let row = `<tr>
                        <td>${index + 1}</td>
                        <td>${student.fullName}</td>
                        <td>${student.email}</td>
                        <td>${student.phone}</td>
                        <td>${student.hometown}</td>
                        <td>${gender}</td>
                        <td>
                            <button onclick="editStudent(${index})">Sửa</button>
                            <button onclick="deleteStudent(${index})">Xóa</button>
                        </td>
                   </tr>`;
        table.innerHTML += row;
    });
}


function addOrUpdateStudent() {
    const fullName = document.getElementById("txtFullName").value;
    const email = document.getElementById("txtEmailAddress").value;
    const phone = document.getElementById("txtPhoneNumber").value;
    const hometown = document.getElementById("txtHomeTown").value;
    const gender = document.querySelector('input[name="gender"]:checked') ?
        document.querySelector('input[name="gender"]:checked').value : null;

    if (fullName && email && phone && hometown && gender) {
        if (editingIndex !== null) {

            students[editingIndex].fullName = fullName;
            students[editingIndex].email = email;
            students[editingIndex].phone = phone;
            students[editingIndex].hometown = hometown;
            students[editingIndex].gender = parseInt(gender);
            alert("Cập nhật sinh viên thành công");
            editingIndex = null;
        } else {

            const newId = students.length ? students[students.length - 1].id + 1 : 1;
            const newStudent = new Student(newId, fullName, email, phone, hometown, parseInt(gender));
            students.push(newStudent);
            alert("Thêm sinh viên thành công");
        }

        displayStudentList();
        clearForm();
    } else {
        alert("Vui lòng nhập đầy đủ thông tin sinh viên");
    }
}

function deleteStudent(index) {
    let isDelete = confirm(`Bạn có chắc muốn xóa sinh viên ${students[index].fullName}?`);
    if (isDelete) {
        students.splice(index, 1);
        displayStudentList();
        alert("Xóa thành công");
    }
}

function editStudent(index) {
    const student = students[index];
    document.getElementById("txtFullName").value = student.fullName;
    document.getElementById("txtEmailAddress").value = student.email;
    document.getElementById("txtPhoneNumber").value = student.phone;
    document.getElementById("txtHomeTown").value = student.hometown;
    document.querySelector(`input[name="gender"][value="${student.gender}"]`).checked = true;

    editingIndex = index;
    document.getElementById("btnSaveStudentInfo").innerText = "Cập nhật";
}


function searchStudent() {
    const keyword = document.getElementById("txtKeywordSearch").value.toLowerCase();
    const filteredStudents = students.filter(student => {
        return student.fullName.toLowerCase().includes(keyword) ||
            student.email.toLowerCase().includes(keyword) ||
            student.phone.includes(keyword);
    });
    displayStudentList(filteredStudents);
}


function clearForm() {
    document.getElementById("txtFullName").value = "";
    document.getElementById("txtEmailAddress").value = "";
    document.getElementById("txtPhoneNumber").value = "";
    document.getElementById("txtHomeTown").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("btnSaveStudentInfo").innerText = "Thêm mới";
}


document.getElementById("btnFilterSearch").onclick = searchStudent;


document.getElementById("btnSaveStudentInfo").onclick = addOrUpdateStudent;


displayStudentList();
