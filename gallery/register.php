
<?php
if(count($_POST)>0) {
	/* Form Required Field Validation */
	foreach($_POST as $key=>$value) {
	if(empty($_POST[$key])) {
	$message = ucwords($key) . " field is required";
	break;
	}
	}
	/* Password Matching Validation */
	/* Email Validation */
	if(!isset($message)) {
	if (!filter_var($_POST["userEmail"], FILTER_VALIDATE_EMAIL)) {
	$message = "Invalid UserEmail";
	}
	}

	/* Validation to check if gender is selected */

	/* Validation to check if Terms and Conditions are accepted */

	if(!isset($message)) {
		require_once("dbcontroller.php");
		$db_handle = new DBController();
		$query = "INSERT INTO registered_users (user_name, branch, city, college, Mobile_no, email) VALUES
		('" . $_POST["userName"] . "', '" . $_POST["firstName"] . "', '" . $_POST["lastName"] . "', '" . ($_POST["college"]) . "', '" . $_POST["mobile"] . "', '" . $_POST["userEmail"] . "')";
		$result = $db_handle->insertQuery($query);
         if(!$query)
        {
            $err="Email already exists!!<br>Please try different Email id ";
        }
        else
        {
	 
			$message = "You have registered successfully!";
			unset($_POST);
		} 
            }
	}
?>




<!DOCTYPE html>
<html>
<head>   
		<link rel="stylesheet" href="../css/materialize.min.css">
		<link rel="stylesheet" href="../css/style.css">
		<link href="https://fonts.googleapis.com/css?family=Exo" rel="stylesheet">
		  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<link rel="icon" href="../images/logo.png">
    <link rel="stylesheet" href="css/form.css">
		<title>
			Resurgence 2K17 | SMVDU Katra
		</title>
    <link rel="stylesheet" href="../css/demo.css">
	<link rel="stylesheet" href="../css/footer-distributed-with-address-and-phones.css">
	
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">

	<link href="http://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css">
    <style>
    .run-animation {color: greenyellow;font-size: 25px; font-weight: bold;text-align: center;width: 100%;padding: 10;}
    </style>
	</head>
	<body>
		<div class="background"></div>
		<div class="blacky"></div>
		<div class="patterns"></div>
		<div class="navbar-fixed">
			<nav class="transparent">
				<div class="nav-wrapper">
					<a href="#" class="brand-logo center" style="width:18%;"><img src="../images/logo.png" style="margin-top:-10px;width:70%"></a>
					<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
					<ul id="nav-mobile" class="left hide-on-med-and-down" style="width:41%;">
						<li   style="width:23%;"><a href="../index.html" class="sec1" style="color:#FFFFFF;">Home</a></li>   
						<li   style="width:23%;"><a href="../about.html" class="sec1" style="color:#FFFFFF;" >About</a></li>
						<li  style="width:40%;"><a href="../team.html" target="_blank" class="sec1" style="color:#FFFFFF;">Organising Team</a></li>
                        
					</ul>
					<ul id="nav-mobile" class="right hide-on-med-and-down" style="width:40%;">
                        <li   style="width:23%;"><a href="../event.html" class="sec1" style="color:#FFFFFF;">Events</a></li>
						<li  style="width:50%;"><a href="../faculty.html" class="sec1" style="color:#FFFFFF;">Faculty Co-ordinator</a></li>
						<li  style="width:25%;"><a href="index.html" class="sec1" style="color:#FFFFFF;">Gallery</a></li>
						
					</ul>
					<ul class="side-nav" id="mobile-demo">
						<li style="margin-top:40px;"><a href="../index.html" class="sec1">Home</a></li>
						<li><a href="../about.html" class="sec2">About</a></li>
                        <li><a href="../team.html">Organising Team</a></li>
						<li><a href="../event.html" class="sec4">Events</a></li>
                        <li><a href="../faculty.html" class="sec4">Faculty Co-ordinator</a></li>
						<li><a href="index.html">Gallery</a></li>
						
					</ul>
				</div>
			</nav>
		</div>
        
        
        <br><br><br>
<section id="workshop">  

   	<div class="row section-intro">
        <h1  id="logo" class="animation" style="color:#FFFFFF;">Registration are closed</h1>
   		<div id="logo" class="run-animation">
			<form method="post" name="reg" id="reg" action="">
                <div id="logo"class="run-animation"><?php if(isset($message)) echo $message; ?></div>
   		  
                    <input type="text" name="userName" id="name" required="required" placeholder="Name" autocomplete="off"><br>
               
                    <input type="text" name="firstName" id="clg" placeholder="Branch"style=""required="required" autocomplete="off"><br>
             
                    <input type="text" name="lastName" id="br"placeholder="Gender"style=""required="required" autocomplete="off"><br>
                 
                    <input type="text" name="college" id="sem"placeholder="College"style=""required="required" autocomplete="off"><br>
                 <input type="number" name="mobile" id="mob"placeholder="Mobile number"style=""required="required" autocomplete="off"><br>
				 <input type="email" name="userEmail" id="mail"placeholder="Email ID"style=""required="required" autocomplete="off"><br>
              
                   <center> <input type="submit" name="Submit" value="Submit">
					<input type="reset" value="Clear"></center>
              
          </form>
	      <p>&nbsp;</p>
   		    <p class="lead" align="justify"></p>
	  </div>   			

	  </div>   		
 <!-- /section-intro -->

   	<div class="row about-content"></div>
   	<div class="row button-section"></div>

</section>
      <footer class="footer-distributed">

			<div class="footer-left">
				<h3>Shri <span>Mata</span> Vaishno <span>Devi</span> University</h3>
                	<div class="footer-icons">

					<a href="https://www.facebook.com/resurgence.SMVDUniversity/?fref=ts" target="_blank"><i class="fa fa-facebook"></i></a>
					<a href="https://twitter.com/SMVDU_KATRA" target="_blank"><i class="fa fa-twitter"></i></a>
					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/"  target="_blank"><i class="fa fa-linkedin"></i></a>
					<a href="https://github.com/amit12nig96" target="_blank"><i class="fa fa-github"></i></a>

				</div>
				<p class="footer-company-name">SMVDU &copy; 2017</p>
			</div>

			<div class="footer-center">

				<!--<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Kakrayal</span> Katra, Jammu & Kashmir</p>
				</div>-->

				<div>
					<i class="fa fa-phone"></i>
					<p>+91-9419911696, +91-9622885588 </p><br>
                    <i class="fa fa-envelope"></i>
					<p><a href="mailto:resurgence@smvdu.ac.in">resurgence@smvdu.ac.in</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About SMVDU</span>
					Shri Mata Vaishno Devi University has been established in 1999. The University is approved by UGC under Section 2(F) & Section 12(B) of UGC Act of 1956. 
				</p>

			</div>

		</footer>
        <div class="amit"><center>Design By : <a href="http://amit12nig96.github.io/" target="_blank" class="amit1" >AMIT KUMAR YADAV</a></center></div>
		<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
		<script src="js/materialize.min.js"></script>
		<script>
			$(".button-collapse").sideNav({menuWidth: 500,closeOnClick: true});
			$("nav a").click(function (e) 
		    {     
		        $("#" + $(this).attr("class")).show().siblings('div').hide();
		    });

			$(document).ready(function(){
				$('.modal-trigger').leanModal();
				$('ul.tabs').tabs();
			});
                (function(d, t) {
                        var g = d.createElement(t),
                        s = d.getElementsByTagName(t)[0];
                       g.src = "http://resurgence.smvdu.ac.in/js/integrate.js";
                        s.parentNode.insertBefore(g, s);
                }(document, "script"));
		</script>
        
        <script src="js/shrimata1.js"></script>
        <script src="js/shrimata.js"></script>
    </body>
</html>



