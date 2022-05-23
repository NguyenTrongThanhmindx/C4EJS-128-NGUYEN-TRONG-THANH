let username = prompt(" Nhập tài khoản của bạn");
if (username== "Admin"){
  let password = prompt (" Nhập mật khẩu");
password == "mindX" ? alert("Chào mừng") : alert(" Mật khẩu sai")}
else if (username == "" || username == "Esc") {
  alert("Canceled");
} else {
  alert(" Tôi không biết bạn");
}