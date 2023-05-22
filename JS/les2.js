// BAI TAP 2:
document.getElementById("btnKw").onclick = function () {
    console.log("test");
    var nameInput = document.getElementById("nameInput").value;
    var kwInput = +document.getElementById("kwInput").value;
    var name = "";
    var tienDien = 0;
    if (kwInput <= 50) {
      tienDien = kwInput * 500;
    } else if (kwInput <= 100) {
      tienDien = 50 * 500 + (kwInput - 50) * 650;
    } else if (kwInput <= 200) {
      tienDien = 50 * 500 + 50 * 650 + (kwInput - 100) * 850;
    } else if (kwInput <= 350) {
      tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (kwInput - 200) * 1100;
    } else {
      tienDien =
        50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kwInput - 350) * 1300;
    }
    console.log({ tienDien });
    document.getElementById("tien__dien").innerHTML =
      "Họ và tên: " + nameInput + "; Tiền điện: " + tienDien.toLocaleString();
  };