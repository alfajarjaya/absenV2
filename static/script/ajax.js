
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
document.head.appendChild(script);
script.onload = () => {

    const scriptURL =
        "https://script.google.com/macros/s/AKfycbxtZex5F3-GYhYMkiX4MQm4SDu6atdUOsrmxpqNJc2_vNW98BbJ4tArm20d-nlvSZVNdg/exec";
    const form = document.getElementById("my-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("nama");
        const name = nameInput.value.trim();

        if (!validateForm()) {
            return;
        }

        const approvedNames = [
            "Chelsa",
            "Aviva",
            "Fachri",
            "Fely",
            "Tiara",
            "Nanda",
            "Renggi",
            "Nicholas",
            "Ikrar",
            "Rangga",
            "Felix",
            "Bagus",
            "Gentar",
            "Bayu",
            "Nadhin",
            "Dika",
            "Bintari",
            "Nadia",
            "Greta",
            "Putri",
            "Bagas",
            "Syahrul",
            "Azmi",
            "Fauzan",
        ];
        if (!approvedNames.includes(name)) {
            Swal.fire({
                title: "Kesalahan nama!",
                text: "Perhatikan besar & kecilnya HURUF! Lihat daftar nama di atas",
                icon: "error",
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "OK"
            });
            nameInput.style.backgroundColor = "red";
            nameInput.style.color = "white";
            nameInput.style.border = "1px solid black";
            return;
        } else {
            nameInput.style.backgroundColor = "green";
            nameInput.style.color = "white";
        }

        fetch(scriptURL, { method: "POST", body: new FormData(form) })
            .then((response) => {
                form.reset();
                Swal.fire({
                    title: "Berhasil!",
                    text: "Terima kasih telah mengisi formulir absensi!",
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "OK"
                })
            })
            .catch((error) => console.error("Error!", error.message));
    });

    function validateForm() {
        var rules = {
            Chelsa: "X DPIB 1",
            Aviva: "X DPIB 1",
            Fachri: "X DPIB 2",
            Fely: "X DPIB 2",
            Renggi: "X DPIB 3",
            Nanda: "X DPIB 3",
            Tiara: "X DPIB 3",
            Nicholas: "X DPIB 3",
            Ikrar: "X TKR 1",
            Syahrul: "X TKR 3",
            Rangga: "X TKR 3",
            Felix: "X TBSM 1",
            Bagus: "X TBSM 1",
            Fauzan: "X TBSM 2",
            Gentar: "X TBSM 2",
            Bagas: "X TBSM 2",
            Bayu: "X TKJ 1",
            Nadhin: "X TKJ 2",
            Dika: "X TKJ 2",
            Nadia: "X TKJ 3",
            Bintari: "X TKJ 3",
            Azmi: "X DKV 1",
            Greta: "X DKV 2",
            Putri: "X DKV 3",
        };
        var nama = document.getElementById("nama").value;
        var kelas = document.getElementById("kelas").value;

        if (rules.hasOwnProperty(nama)) {
            if (kelas !== rules[nama]) {
                Swal.fire({
                    title: "Kesalahan kelas!",
                    text: `Nama ${nama} harus memilih ${rules[nama]} !`,
                    icon: "error",
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "OK"
                })
                return false;
            }
        }
        return true;
    }
}