// Báo lỗi dữ liệu trống
function validValue(x) {
  var inputValue = document.getElementsByClassName("form-group")[x].getElementsByTagName("input");
  for (var i = 0; i < inputValue.length; i++) {
    if (inputValue[i].value == "") {
      return false;
    }  }
  return true;
}
function intValidation(number, x) {
  if (Math.floor(number) !== parseFloat(number)) {
    result[x].style.color = "red";
    return false;
  } else {
    result[x].style.color = "green";
    return true;
  }
}

/*
Bài 1. Sắp xép thứ tự 3 số nguyên
INPUT: 3 số nguyên

PROCESS
1. Lấy giá trị dãy số nguyên
2. Xác thực giá trị là số nguyên
3. Tạo mảng giá trị
4. Sắp xếp các giá trị trong mảng
  4.1. Tìm số nhỏ nhất trong mảng --> lấy giá trị min và indexMin
  4.2. Xoá indexMin khỏi mảng giá trị
--> Tiếp tục vòng lặp với mảng giá trị mới --> đến khi mảng giá trị rỗng

OUTPUT: 3 số nguyên theo thứ tự từ nhỏ đến lớn
*/

function exercise1() {
  var rangeNumber = document.querySelectorAll("#rangeNumber__ex1 input");
  var arrayValue = [];
  var min;
  var indexMin;
  var resultNoti = "Thứ tự 3 số từ nhỏ đến lớn là: ";

  for (var i = 0; i < rangeNumber.length; i++) {
    //Kiểm tra số nguyên
    if (intValidation(rangeNumber[i].value, 0)) {
    } else {
      return "Số được nhập phải là số nguyên";
    }
    //Tạo mảng value
    arrayValue[i] = parseInt(rangeNumber[i].value);
  }

  while (arrayValue.length > 0) {
    min = 9999999;
    for (var j = 0; j < arrayValue.length; j++) {
      if (arrayValue[j] < min) {
        min = arrayValue[j];
        indexMin = j;
      }
    }
    arrayValue.splice(indexMin, 1);
    resultNoti += min + " ";
  }
  return resultNoti;
}


/*
Bài 2. Gửi lời chào
INPUT: Danh tính thành viên

PROCESS
1. Nhập danh tính thành viên
2. Gửi câu chào - theo danh tính
Dad --> Chào bố ạ!
Mom --> Chào mẹ ạ!
Sister --> Chào em gái nhé!
Brother --> Chào anh trai nhé!
Other --> Chào người lạ
3. Xuất câu chào
OUTPUT: Câu chào
*/

function exercise2() {
  var member = document.getElementById("member").value;
  var greeting = "";
  switch (member) {
    case "dad":
      greeting = "Xin chào Bố ạ!";
      break;
    case "mom":
      greeting = "Xin chào Mẹ ạ!";
      break;
    case "sister":
      greeting = "Chào Em gái nhé!";
      break;
    case "brother":
      greeting = "Chào Anh trai nhé!";
      break;
    case "other":
      greeting = "Chào ai đó nhé!";
      break;
  }
  return greeting;
}

/*
Bài 3. Kiểm tra chẵn lẻ
INPUT: 3 số nguyên

PROCESS
1. Nhập các số nguyên
2. Đếm số chẵn
- Nếu số đó chia hết cho 2 --> count +=1
3. Xuất kết quả
- Số chữ số chẵn = count;
- Số chữ số lẻ = tổng các số - count
OUTPUT: Số chữ số chẵn, số chữ số lẻ
*/

function exercise3() {
  var rangeNumber = document
    .getElementById("rangeNumber__ex3")
    .getElementsByTagName("input");
  var count = 0;

  for (var i = 0; i < rangeNumber.length; i++) {
    //Kiểm tra số nguyên
    if (intValidation(rangeNumber[i].value, 2)) {
    } else {
      return "Số được nhập phải là số nguyên";
    }
    if (parseInt(rangeNumber[i].value) % 2 == 0) {
      count++;
    }
  }
  switch (count) {
    case 0:
      return "Có tất cả: "+ (rangeNumber.length) + " chữ số lẻ.";
    case rangeNumber.length:
      return "Có tất cả: "+(rangeNumber.length) + " chữ số chẵn.";
    default:
      return (
        "Có tất cả: " + count + " chữ số chẵn - " + (rangeNumber.length - count) + " chữ số lẻ."
      );
  }
}


/*
Bài 4. Kiểm tra dạng tam giác
INPUT: 3 cạnh của tam

PROCESS
1. Nhập 3 cạnh của tam giác
2. Kiểm tra giá trị hợp lệ của 3 cạnh
- 3 cạnh phải là số dương --> Xuất ra màn hình: cạnh phải là số dương
- Tổng 2 cạnh phải lớn hơn cạnh còn lại 
    + Tìm cạnh lớn nhất
    + Tổng 3 cạnh - max *2 >0;
    + Xuất ra màn hình: tổng 2 cạnh phải lớn hơn cạnh còn lại

3. Kiểm tra tam giác cân
  3.1 Xét điều kiện tam giác cân
  - Kiểm tra điều kiện tam giác đều (cả 3 cạnh bằng nhau)
  - Kiểm tra điều kiện tam giác vuông cân (thoả định lý pytago)
  - Còn lại (suy ra dạng tam giác cân)

  3.2 Nếu không phải là tam giác cân (không thoả 2 cạnh bằng nhau)
  - Kiểm tra phải là tam giác vuông hay không (thoả định lí pytago)
  - Tam giác thường (không thoả định lý pytago)
OUTPUT: Số chữ số chẵn, số chữ số lẻ
*/

function exercise4(){
  var a = parseFloat(document.getElementById("edgeFirst").value);
  var b = parseFloat(document.getElementById("edgeSecond").value);
  var c = parseFloat(document.getElementById("edgeThird").value);
  var rangeEdge = [a, b, c];
  var max = 0;
  
  // KIỂM TRA TÍNH HỢP LỆ CỦA TAM GIÁC
  for (var i = 0; i < rangeEdge.length; i++) {
    // CẠNH PHẢI LÀ SỐ DƯƠNG
    if (rangeEdge[i] <= 0) {
      result[3].style.color = "red";
      return "Cạnh của tam giác phải là số dương";
    }
    //  TÌM CẠNH LỚN NHẤT
    if (rangeEdge[i] > max) {
      max = rangeEdge[i];
    }
  }
  
  // TỔNG 2 CẠNH PHẢI LỚN HƠN CẠNH CÒN LẠI
  if (a + b + c - max * 2 <= 0) {
    result[3].style.color = "red";
    return "Đây không phải là 3 cạnh của 1 tam giác";
  }


  result[3].style.color = "green";
  //KIỂM TRA TAM GIÁC ĐIỀU KIỆN HAI CẠNH BẰNG NHAU
  if (a == b || a == c || b == c) {
    
    //KIỂM TRA ĐIỀU KIỆN 3 CẠNH BẰNG NHAU
    if (a == b && a == c) {
      return "Đây là tam giác đều";

      //KIỂM TRA ĐIỀU KIỆN ĐỊNH LÝ PYTAGO
    } else if (
      2 * Math.pow(max, 2) ==  Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)
    ) {
      return "Đây là tam giác vuông cân";

    } else {
      return "Đây là tam giác cân";
    }

  //TRƯỜNG HỢP KHÔNG PHẢI LÀ TAM GIÁC CÂN
    //KIỂM TRA ĐỊNH LÝ PYTAGO
  } else if (
    2 * Math.pow(max, 2) ==
    Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)
  ) {
    return "Đây là tam giác vuông";
  } 
  else return "Đây là tam giác thường";
}


//Thêm số
function addOneInput(x){
  var rangeNumber_ = document.getElementsByClassName("rangeNumber")[x];
  var inputObject=rangeNumber_.getElementsByTagName("input");
  rangeNumber_.innerHTML+='<input type="number" placeholder="Nhập số thứ '+(inputObject.length+1)+'" class="form-control col-2">';
}
// Xoá số
function removeOneInput(x){
  var rangeNumber_ = document.getElementsByClassName("rangeNumber")[x].getElementsByTagName("input");
  var lastInputObject=rangeNumber_[rangeNumber_.length-1];
  lastInputObject.remove();
  
}


var btnSubmit = document.getElementsByClassName("btn-success");
var result = document.getElementsByClassName("result");
var alert = document.getElementsByClassName("alert");
for (var i = 0; i < btnSubmit.length; i++) {
  btnSubmit[i].addEventListener("click", function (e) {
    e.preventDefault();
    var x = $(btnSubmit).index(this);
    if (validValue(x)) {
      result[x].innerHTML = window["exercise" + (x + 1)]();
      result[x].style.display = "block";
      alert[x].style.display = "none";
    } else {
      alert[x].style.display = "block";
      result[x].style.display = "none";
    }
  });
}
