
// Phone Icon Click
document.getElementById("phoneIcon").addEventListener("click", function(event) {
    event.preventDefault();
    let phoneNumberDiv = document.getElementById("phoneNumber");
    let emailDiv = document.getElementById("email");

    // Xử lí hiện phone và ẩn email
    if (phoneNumberDiv.style.display === "none") {
        phoneNumberDiv.style.display = "block";  // Hiện phone
        emailDiv.style.display = "none";         // Ẩn email
    } else {
        phoneNumberDiv.style.display = "none";   // Ẩn phone
    }
});

// Email Icon Click
document.getElementById("emailIcon").addEventListener("click", function(event) {
    event.preventDefault();
    let emailDiv = document.getElementById("email");
    let phoneNumberDiv = document.getElementById("phoneNumber");

    // Xử lí hiện email và ẩn email
    if (emailDiv.style.display === "none") {
        emailDiv.style.display = "block";        // Hiện Email
        phoneNumberDiv.style.display = "none";   // Ẩn phone
    } else {
        emailDiv.style.display = "none";         // Ẩn email
    }
});

// Lấy nút và phần tử CV
const viewCVButton = document.getElementById('viewCVButton');
const cvElement = document.getElementById('cv');

// Thêm sự kiện click cho nút
viewCVButton.addEventListener('click', function() {
    // Kiểm tra nếu CV đang ẩn, thì hiển thị nó, ngược lại thì ẩn nó
    if (cvElement.style.display === "none") {
        cvElement.style.display = "block";
        viewCVButton.innerText = "Hide My CV"; // Thay đổi văn bản nút
    } else {
        cvElement.style.display = "none";
        viewCVButton.innerText = "View My CV"; // Thay đổi văn bản nút lại
    }
});