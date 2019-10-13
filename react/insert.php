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
 
 // Populate Student name from JSON $obj array and store into $hoten.
 $hoten = $obj['hoten'];
 
 // Populate Student Class from JSON $obj array and store into $lop.
 $lop = $obj['lop'];
 
 // Populate Student Phone Number from JSON $obj array and store into $masv.
 $masv = $obj['masv'];
 
 // Populate Email from JSON $obj array and store into $S_Email.
 //$anh = $obj['anh'];

 //$anh = 'https://photo-atm-baomoi.zadn.vn/w200_r1x1/adtima-media.zadn.vn/2019/10/a3643bb4-6a38-4296-abe8-f8eb5196644c.png';


 
 // Creating SQL query and insert the record into MySQL database table.
 $Sql_Query = "insert into user (hoten,lop,masv,anh) values ('$hoten','$lop','$masv','https://photo-atm-baomoi.zadn.vn/w200_r1x1/adtima-media.zadn.vn/2019/10/a3643bb4-6a38-4296-abe8-f8eb5196644c.png')";
 
 //$Sql_Query = "insert into user (hoten,lop,masv,anh) values ('A','CNTT','D08','https://photo-atm-baomoi.zadn.vn/w200_r1x1/adtima-media.zadn.vn/2019/10/a3643bb4-6a38-4296-abe8-f8eb5196644c.png')";
 
 if(mysqli_query($conn,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Them thanh cong !' ;
 
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