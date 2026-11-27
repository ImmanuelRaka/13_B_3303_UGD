const navigasi = {
  tampilkanRute(data) {
    console.log(`${this.nama} menampilkan rute ke ${data}.`);
  },
};

const autopilot = {
  aktifkanAutopilot(data) {
    console.log(`${this.nama} mengaktifkan autopilot menuju ${data}.`);
  },
};

const hiburan = {
  putarMusik(data) {
    console.log(`${this.nama} memutar musik ${data}.`);
  },
};

function applyCapabilities(Kelas, ...kemampuan) {
  Object.assign(Kelas.prototype, ...kemampuan);
}

class MobilPremium {
  constructor(nama) {
    this.nama = nama;
  }
}

class MobilKota {
  constructor(nama) {
    this.nama = nama;
  }
}

applyCapabilities(MobilPremium, navigasi, autopilot, hiburan);
applyCapabilities(MobilKota, navigasi);

function jalankanTugas(perangkat, tugas, data) {
  if (typeof perangkat[tugas] !== "function") {
    throw new Error(`${perangkat.nama} tidak mendukung ${tugas}()`);
  }
  perangkat[tugas](data);
}

const premium = new MobilPremium("Premium_3303");
const kota = new MobilKota("MobilKota_3303");

const uji = [
  [premium, "tampilkanRute", "Kampus"],
  [premium, "aktifkanAutopilot", "Bandara"],
  [kota, "tampilkanRute", "Kampus"],
  [kota, "aktifkanAutopilot", "Bandara"],
  [kota, "putarMusik", "Lagu Santai"],
];

for (const [perangkat, tugas, data] of uji) {
  try {
    jalankanTugas(perangkat, tugas, data);
  } catch (error) {
    console.log("[GAGAL] " + error.message);
  }
}