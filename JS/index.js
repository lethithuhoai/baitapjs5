//BAI TAP 1:
function calAreaGrade(area) {
  if (area === "A") return 2;
  if (area === "B") return 1;
  if (area === "C") return 0.5;
  return 0;
}
function calcTypeGrade(type) {
  if (type === "1") return 2.5;
  if (type === "2") return 1.5;
  if (type === "3") return 1;
  return 0;
}
function exercise1() {
  var benchmark = +document.getElementById("benchmarkInput").value;
  var subject1 = +document.getElementById("subject1Input").value;
  var subject2 = +document.getElementById("subject2Input").value;
  var subject3 = +document.getElementById("subject3Input").value;
  var areaVal = document.getElementById("areaSelect").value;
  var typeVal = document.getElementById("typeSelect").value;

  var areaGrade = calAreaGrade(areaVal);
  var typeGrade = calcTypeGrade(typeVal);
  var total = subject1 + subject2 + subject3 + areaGrade + typeGrade;
  let result = "";
  if (
    total >= benchmark &&
    subject1 !== 0 &&
    subject2 !== 0 &&
    subject3 !== 0
  ) {
    result = "Đậu";
    console.log("Đậu");
  } else {
    result = "Rớt";
    console.log("Rớt");
  }
  console.log("total", total);
  document.getElementById(
    "result"
  ).innerHTML = `Điểm: ${total}. Kết quả: ${result}`;
}
document.getElementById("btnSubmit").onclick = exercise1;
