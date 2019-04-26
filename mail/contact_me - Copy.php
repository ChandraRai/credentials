<?php
// Check for empty fields

if(isset($_POST['submit'])){
   $name=$_POST['name'];
   $email=$_POST['email'];     
   $phone=$_POST['phone'];     
   $msg=$_POST['message'];
   
  // Create the email and send the message
	$to='nikhilrai.fourteen@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
	$email_subject = 'Website Contact Form:  $name';
	$email_body = "Name: ".$name."\n"."Phone: ".$phone."\n"."Wrote the following: "."\n\n".$msg;
	$headers .= "From: ".$email;   
	
	mail($to, $subject,$message, $header);         
?>
