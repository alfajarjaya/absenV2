const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
document.head.appendChild(script);
script.onload = () => {
    const xhr = new XMLHttpRequest();
    const btnChange = document.getElementById('btn-change');

    btnChange.addEventListener('click', function(event) {
        event.preventDefault();

        const kelas = document.getElementById('class').value;
        const newPassword = document.getElementById('new_pw').value;

        const data = JSON.stringify({
            kelas: kelas,
            newPassword: newPassword,
        });

        xhr.open("POST", "/ubah-password", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                const response = JSON.parse(xhr.responseText);
                if (xhr.status === 200) {
                    Swal.fire({
                        title: "Berhasil",
                        text: response.message,
                        icon: "success",
                        showCancelButton: false,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Oke",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.reload();
                        } else {
                            const Toast = Swal.mixin({
                                showConfirmButton: false,
                                timerProgressBar: true,
                                timer: 1000,
                            });
                            Toast.fire({
                                icon: "warning",
                                title: "Mohon tunggu halaman sedang di reload.",
                            });
                            setTimeout(() => {
                                window.location.reload();
                            }, 1000);
                        }
                    });
                } else {
                    Swal.fire({
                        title: "Gagal",
                        text: "Terjadi kesalahan, silahkan coba lagi.",
                        icon: "error",
                        showCancelButton: false,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Oke",
                    });
                }
            }
        };
        xhr.send(data);
    });
};
