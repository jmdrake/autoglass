<?php
require 'PHPMailerAutoload.php';

$emailtype = $_POST["emailtype"];
if($emailtype=="quote") {
    // $message = "Year: " . $_POST["year"] 
    $message = "Year: " . $_POST["year"] . "<br/>Make: " . $_POST["make"] . "<br/>Model: " . $_POST["model"] . "<br/>Name" . $_POST["name"] . "<br/>Email: " . $_POST["email"] . "<br/>Phone: " . $_POST["phone"] . "<br/>Window: " . $_POST["window"] . "<br/>Door type: " . $_POST["doortype"] . "<br/>VIN: " . $_POST["vin"];
    echo $message;
    $subject = "Quote Requested";
} else if($emailtype=="message") {
    $message = "Name" . $_POST["name"] . "<br/>Email: " . $_POST["email"] . "<br/>Phone: " . $_POST["phone"] . "<br/>Message: " . $_POST["message"];
    $subject = "Message from potential customer";
} else if($emailthype=="jobapp") {    
    $message = "Name" . $_POST["name"] . "<br/>Email: " . $_POST["email"] . "<br/>Phone: " . $_POST["phone"] .        
        "<br/>Job Experience 1: Start Date " . $_POST["startdate1"] . " End Date " . $_POST["enddate1"] . " Job Title " . $_POST["jobtitle1"] . " Employer Name " . $_POST["employername1"] . " Employer Phone " . $_POST["employerphone1"] .
        "<br/>Job Experience 2: Start Date " . $_POST["startdate2"] . " End Date " . $_POST["enddate2"] . " Job Title " . $_POST["jobtitle2"] . " Employer Name " . $_POST["employername2"] . " Employer Phone " . $_POST["employerphone2"] .
        "<br/>Job Experience 3: Start Date " . $_POST["startdate3"] . " End Date " . $_POST["enddate3"] . " Job Title " . $_POST["jobtitle3"] . " Employer Name " . $_POST["employername3"] . " Employer Phone " . $_POST["employerphone3"] .
        "<br/>Years Experience: " . $_POST["yearsexp"] . "<br/>Tools Used:" . $_POST['tools'];
    echo $message;
    $subject = "Submitted job application";
}

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

    
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.visionpartners.x10host.com';  // Specify main and backup SMTP servers
// $mail->Host = 'mail.fastbeeglass.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
// $mail->Username = 'info@fastbeeglass.com';                 // SMTP username
// $mail->Password = 'f@stB33!';                           // SMTP password
// $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Username = info@visionpartners.x10host.com;
$mail->Password = 'acespade';                           // SMTP password
// $mail->Port = 26;                                    // TCP port to connect to
$mail->Port = 26;                                    // TCP port to connect to

$mail->setFrom($_POST["email"], $_POST["name"]);
// $mail->addAddress('info@fastbeeglass.com', 'Manager');     // Add a recipient
$mail->addAddress('mlmnovice@mail.com', 'Manager');     // Add a recipient
$mail->addReplyTo($_POST["email"], $_POST["name"]);
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $subject;
$mail->Body    = $message;

if(!$mail->send()) {
    echo 'Error in sending message.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;    
} else {
    echo 'Message has been sent';
}
?>