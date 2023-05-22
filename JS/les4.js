//BAI TAP 4:
const handleChange = (evt) => {
  let select = document.getElementById("numConnect");

  if (evt.target.value === "resident") {
    select.style.display = "none";
  } else {
    select.style.display = "unset";
  }
};

document.getElementById("btnTotalCab").onclick = function () {
  //Value for resident
  const processBillFee = 4.5;
  const basicServiceFee = 20.5;
  const hirePremiumChanel = 7.5;

  //Value for business
  const processBillFeeB = 15;
  const basicServiceFeeB = 75;
  const hirePremiumChanelB = 50;

  const codeCustomer = document.getElementById("codeCustomer").value;
  const numPremium = +document.getElementById("numPremium").value;
  const numConnect = +document.getElementById("numConnect").value;
  const select = document.getElementById("select");
  const customerType = select.options[select.selectedIndex].value;
  let result = 0;

  if (customerType === "resident") {
    result = processBillFee + basicServiceFee + numPremium * hirePremiumChanel;
  }

  if (customerType === "business") {
    let moreConnect = 0;
    if (numConnect > 10) {
      moreConnect = numConnect - 10;
    }

    result =
      processBillFeeB +
      basicServiceFeeB +
      moreConnect * 5 +
      hirePremiumChanelB * numPremium;
  }
  let resultCab = document.getElementById("resultCab");

  if (customerType !== "resident" && customerType !== "business") {
    resultCab.style.color = "red";
    resultCab.innerHTML = "Vui lòng chọn loại khách hàng";
  } else {
    resultCab.style.color = "green";
    resultCab.innerHTML = `Mã khách hàng ${codeCustomer} có hóa đơn: $${result}`;
  }
};