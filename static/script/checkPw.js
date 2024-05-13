function checkPassword() {
    var password = document.getElementById("password").value;

    if (password === "7628") {
        document.getElementById("passwordForm").style.display = "none";
        document.querySelector(".main").style.display = "block";
    } else {
        alert("Kata sandi salah. Coba lagi.");
    }
}
