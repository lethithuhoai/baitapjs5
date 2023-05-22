// // BAI TAP 3:
document.getElementById("btnCalcTax").onclick = function () {
  let taxName = document.getElementById("taxName").value;
  let incomeTotal = +document.getElementById("incomeTotal").value;
  let numDepend = +document.getElementById("numDepen").value;
  let tienThue = 0;
  let percentTax = 0;

  switch (true) {
    case incomeTotal <= 60e6:
      percentTax = 5 / 100;
      break;
    case incomeTotal <= 120e6:
      percentTax = 10 / 100;
      break;
    case incomeTotal <= 210e6:
      percentTax = 15 / 100;
      break;
    case incomeTotal <= 384e6:
      percentTax = 20 / 100;
      break;
    case incomeTotal <= 624e6:
      percentTax = 25 / 100;
      break;
    case incomeTotal <= 960e6:
      percentTax = 30 / 100;
      break;
    case incomeTotal > 960e6:
      percentTax = 35 / 100;
      break;
    default:
      break;
  }

  tienThue = (incomeTotal - 4e6 - numDepend * 16e5) * percentTax;
  document.getElementById(
    "totalTax"
  ).innerHTML = `Họ tên: ${taxName}; Tiền thuế thu nhập cá nhân: ${tienThue.toLocaleString()}`;
};