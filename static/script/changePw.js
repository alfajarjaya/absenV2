const script = document.createElement("script");
script.src = "./static/script/modules/alert.js";
document.head.appendChild(script);

const emailJS = document.createElement("script");
emailJS.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
document.head.appendChild(emailJS);
emailJS.onload = function () {
    script.onload = () => {
        const btnChange = document.getElementById("btn-change");

        btnChange.addEventListener("click", async function (event) {
            event.preventDefault();

            const kelas = document.getElementById("class").value;
            const newPassword = document.getElementById("new_pw").value;

            try {
                const response = await fetch("/ubah-password", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        kelas: kelas,
                        newPassword: newPassword,
                    }),
                });

                if (response.ok) {
                    const responseData = await response.json();
                    emailjs.init("2scKh8gUYI0k4s7MC");
                    emailjs.send('pasbraska', 'pasbraska', {
                        kelas: kelas,
                        password: newPassword,
                    }).then(
                        (emailResponse) => {
                            Swal.fire({
                                title: "Berhasil",
                                text: responseData.message,
                                icon: "success",
                                confirmButtonColor: "#3085d6",
                                confirmButtonText: "Oke",
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    window.location.reload();
                                }
                            });
                        },
                        (error) => {
                            console.log("FAILED...", error);
                        }
                    );
                } else {
                    const responseData = await response.json();
                    Swal.fire({
                        title: "Gagal",
                        text: responseData.error || "Terjadi kesalahan, silakan coba lagi.",
                        icon: "error",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Oke",
                    });
                }
            } catch (error) {
                console.error("Error:", error);
                Swal.fire({
                    title: "Gagal",
                    text: "Terjadi kesalahan, silakan coba lagi.",
                    icon: "error",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Oke",
                });
            }
        });
    };
};

