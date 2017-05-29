<?php 
function contact_me() {
//	$session_id = str_replace(".","",$_SERVER['SERVER_NAME']);
	
		$spam_check =  strip_tags($_POST['url']);
		switch ($spam_check) {
			case "":
     // get my e-mail addy
        $to = "mwolanski@" . preg_replace( "/.*\.misti/", "misti", $_SERVER['SERVER_NAME']);
     // set HTML tags allowed in e-mailed message
        $allowed_tags = array(
          "<i>","</i>","<em>","</em>",
          "<b>","</b>","<strong>","</strong>",
          "<p>","</p>","<br>","<br />",
      //		"<>","</>",
          );
		 // set variables
				$cf_name =  strip_tags($_POST['cf_name']);
				$cf_email =  strip_tags($_POST['cf_email']);
				$cf_message =  strip_tags($_POST['cf_message'],$allowed_tags);
				$headers = "From: " . $cf_name . " <" . $cf_email . ">" . "\r\n"
								 . "Reply-To: " . $cf_email . "\r\n"
								 . "Return-path: " . $cf_email . "\r\n"
								 . "MIME-Version: 1.0" . "\r\n"
								 . "Content-type:text/html;charset=UTF-8" . "\r\n";
				$subject = "E-mail sent from GitHub!";
		 // send form
				mail($to, $subject, $cf_message, $headers);
				break;
			default: // send the contact form
				// someone filled in a hidden field! uh-oh
				break;
		} // end switch
	} // end function contact_me

  // run function
	   contact_me();
?>