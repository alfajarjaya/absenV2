const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
document.head.appendChild(script);
script.onload = () => {
    const btnChange = document.getElementById('btn-change');

    btnChange.addEventListener('click', async function (event) {
        event.preventDefault();

        const kelas = document.getElementById('class').value;
        const newPassword = document.getElementById('new_pw').value;

        try {
            const response = await fetch('/ubah-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    kelas: kelas,
                    newPassword: newPassword,
                }),
            });

            if (response.ok) {
                const responseData = await response.json();
                Swal.fire({
                    title: "Berhasil",
                    text: responseData.message,
                    icon: "success",
                    showCancelButton: false,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Oke",
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                });
            } else {
                const responseData = await response.json();
                Swal.fire({
                    title: "Gagal",
                    text: responseData.error || "Terjadi kesalahan, silakan coba lagi.",
                    icon: "error",
                    showCancelButton: false,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Oke",
                });
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                title: "Gagal",
                text: "Terjadi kesalahan, silakan coba lagi.",
                icon: "error",
                showCancelButton: false,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Oke",
            });
        }
    });
};
