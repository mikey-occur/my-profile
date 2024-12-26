'use strict';

// Khai báo các biến liên quan đến trình chiếu
var testim = document.getElementById("testim"), // Phần chứa trình chiếu
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children), // Các chấm chuyển slide
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children), // Nội dung các slide
    testimleftArrow = document.getElementById("left-arrow"), // Nút mũi tên trái
    testimRightArrow = document.getElementById("right-arrow"), // Nút mũi tên phải
    testimSpeed = 4500, // Tốc độ tự động chuyển slide (4.5 giây)
    currentSlide = 0, // Slide hiện tại
    currentActive = 0, // Slide đang hoạt động
    testimTimer; // Bộ đếm thời gian cho tự động chuyển slide

// Khi trang được tải xong
window.onload = function () {
    // Hàm điều khiển trình chiếu
    function playSlide(slide) {
        // Xóa các class "active" và "inactive" khỏi tất cả các slide và chấm
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        // Kiểm tra nếu slide vượt giới hạn (cuối -> đầu hoặc đầu -> cuối)
        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1; // Quay lại slide cuối
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0; // Quay lại slide đầu tiên
        }

        // Nếu có sự thay đổi slide, đặt slide trước đó thành "inactive"
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }

        // Đặt slide hiện tại thành "active"
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        // Cập nhật giá trị slide đang hoạt động
        currentActive = currentSlide;

        // Đặt lại bộ đếm thời gian để tự động chuyển sang slide tiếp theo
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1); // Tự động chuyển sang slide tiếp theo
        }, testimSpeed);
    }

    // Thêm sự kiện khi nhấn nút mũi tên trái
    testimleftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1); // Chuyển sang slide trước
    });

    // Thêm sự kiện khi nhấn nút mũi tên phải
    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1); // Chuyển sang slide tiếp theo
    });

    // Thêm sự kiện khi nhấn vào các chấm để chọn slide
    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this)); // Chuyển đến slide được chọn
        });
    }

    // Bắt đầu trình chiếu từ slide đầu tiên
    playSlide(currentSlide);
};
