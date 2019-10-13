<?php 	

$HostName = "localhost";

$DatabaseName = "baitapreact";

$HostUser = "root";

$HostPass = "";
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);
 
if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
} 
 
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 // Populate Student ID from JSON $obj array and store into $hoten.
 $id = $obj['id'];
 
 // Populate Student name from JSON $obj array and store into $hoten.
 $hoten = $obj['hoten'];
 
 // Populate Student Class from JSON $obj array and store into $lop.
 $lop = $obj['lop'];
 
 // Populate Student Phone Number from JSON $obj array and store into $masv.
 $masv = $obj['masv'];
 
 // Populate Email from JSON $obj array and store into $anh.
 $anh = $obj['anh'];
 
 // Creating SQL query and insert the record into MySQL database table.
 
 $Sql_Query = "UPDATE user SET hoten= '$hoten', lop = '$lop', masv = '$masv', anh = 'https://znews-photo.zadn.vn/w480/Uploaded/mdf_kxrxdf/2019_10_09/shuyingli______thumb_thumb.jpg' WHERE id = $id";

 //$Sql_Query = "UPDATE user SET hoten= 'Phan Van Vi', lop = 'CNTT K14 AG', masv = 'DTC156', anh = 'https://znews-photo.zadn.vn/w480/Uploaded/mdf_kxrxdf/2019_10_09/shuyingli______thumb_thumb.jpg' WHERE id = 14";

 if(mysqli_query($conn,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Update thanh cong !' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($conn);

 ?>