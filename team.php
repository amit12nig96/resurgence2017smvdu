<!DOCTYPE html>
<html>

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="css/materialize.min.css">
		<link rel="stylesheet" href="css/style.css">
		<link href="https://fonts.googleapis.com/css?family=Exo" rel="stylesheet">
		  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<link rel="icon" href="images/logo.png">
		<title>
			Resurgence 2K17 | SMVDU Katra
		</title>
    <link rel="stylesheet" href="css/demo.css">
	<link rel="stylesheet" href="css/footer-distributed-with-address-and-phones.css">
	
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">

	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    
    <script type="text/javascript" src="assets/js/jquery-2.1.1.min.js"></script>
    <script type="text/javascript" src="assets/js/semantic.min.js"></script>
    <link rel="stylesheet" type="text/css" href="assets/css/semantic.min.css">

    <style type="text/css">
    	body {  
            background:url('/images/gif.gif');
    		background-repeat: repeat;
    	}
    	.body_overlay {
            color: white;
		    width: 100vw;
		    height: 100vh;
		    position: fixed;
		    /*background-color: rgba(0, 0, 0, 0.05);
		    background-color: rgba(255, 255, 255, 0.45);*/
    	}
    	.empty-card {
    		visibility: hidden;
    	}
    	.main_heading {
    		text-align: center;
		    font-size: 50px;
		    margin-top: 10px;
    	}
    	.sub_heading {
    		text-align: center;
		    font-size: 30px;
		    margin-top: 30px;
    	}
	    .image_original {
    		opacity: 1;
    		display: block;
    		position: absolute;
    	}
    	.image_hover {
    		opacity: 1;
    		display: none;
    		position: absolute;
    	}
    	.member_name {
    		color: black;
		    text-align: center;
		    z-index: 10;
		    position: relative;
		    top: 310px;
		    cursor: pointer;
		    background-color: rgb(239, 240, 226);
		    font-size: 20px;
    	}
    	.member_details p {
    		text-align: center;
		    color: white;
		    z-index: 10;
		    margin-bottom: 5px;
		    margin-top: 10px;
    	}
    	.member_details {
    		display: none;
    		opacity: 0;
    		z-index: 10;
    		position: absolute;
    		width: 100%;
    		top: 0px;
    		background-color: rgba(0, 0, 0, 0.8);
    		cursor: pointer;
		    height: 90px;
    	}
    	.linkedin_icon {
		    font-size: 40px;
		    float: left;
		    color: white;
		    z-index: 100;
		    top: -15px;
		    position: relative;
    	}
    	.fb_icon {
		    font-size: 40px;
		    float: right;
		    color: white;
		    z-index: 100;
		    top: -15px;
		    position: relative;
    	}
    	.linkedin_icon a, .fb_icon a{
    		color: white;
    	}
    	.image {
    		cursor: pointer;
    		background-color: rgba(0, 0, 0, 0) !important;
    	}
    	.coordinator {
	        color: white;
		    text-align: center;
		    width: 100%;
		    top: 200px;
		    position: absolute;
		    padding: 5px;
		    font-size: 15px;
		    z-index: 10;
		    background-color: rgba(0,0,0,0.7);
    	}
    	.three_set .card{
		    width: 266px !important;
		    height: 340px;
		    margin: auto !important;
    	}
    	.three_set .image{
    		width: 266px;
    		margin-left: auto;
    		margin-right: auto;
    	}
    	.card {
    		box-shadow: none !important;
    		position: relative;
    		height: 340px;
    		background-color: rgba(0, 0, 0, 0) !important;
    	}

    	#toast{
			display: none;
			position: fixed;
			bottom:10px;
			right:10px;
			/*background: rgba(0,0,0,0.95);*/
			color: white;
			min-height: 20px;
			padding:15px;
			min-width: 250px;
			z-index: 9999999;
			border-radius: 2px;
			opacity: 1;
			text-align: center;
			-webkit-animation: toast 0.2s linear 1;
			-webkit-animation-direction:reverse;
		}
		@-webkit-keyframes toast{
			100%{bottom:-10px;opacity:0}
		}

		.toast_content {
			margin-bottom: 10px;
		    background: rgba(0,0,0,0.95);
		    color: white;
		    min-height: 20px;
		    padding: 15px;
		    min-width: 250px;
		    z-index: 9999999;
		    border-radius: 2px;
		    opacity: 1;
		    text-align: center;
		}

    	@media  only screen and (max-width: 1200px) {
    		.card {
    			height: 280px;
    		}
    		.member_name {
    			font-size: 17px;
    		}
    		.member_details p {
    			font-size: 13px;
    		}
    		.three_set .card{
			    width: 217.5px !important;
			    height: 280px;
			    margin: auto !important;
	    	}
	    	.three_set .image{
	    		width: 217.5px;
	    		margin-left: auto;
	    		margin-right: auto;
	    	}
	    	.coordinator {
	    		top: 155px;
	    	}
    	}
    	@media  only screen and (max-width: 991px) {
    		.card {
    			height: 219px;
    		}
    		.member_details {
			    width: 100%;
			    height: 70px;
    		}
    		.member_details p {
    			font-size: 10px;
    		}
    		.linkedin_icon, .fb_icon {
    			font-size: 30px;
    		}
    		.member_name {
    			font-size: 15px;
    		}
    		.three_set .card{
			    width: 165px !important;
			    height: 219px;
			    margin: auto !important;
	    	}
	    	.three_set .image{
	    		width: 165px;
	    		margin-left: auto;
	    		margin-right: auto;
	    	}
	    	.coordinator {
    		    top: 115px;
			    font-size: 13px;
	    	}
    	}
    	@media  only screen and (max-width: 767px) {
    		.cards.two_set {
    			height: 480px !important;
    		}
    		.image {
    			position: relative;
			    width: 165px;
			    margin-left: auto;
			    margin-right: auto;
    		}
    		.member_name {
    			top: 195px;
    			font-size: 15px;
			    width: 165px;
			    margin: auto;
    		}
    		.member_details {
    			position: relative;
    			width: 165px;
    			font-size: 10px;
    			margin: auto;
    			height: 80px;
    		}
    		.member_details {
			    padding-top: 5px;
    		}
    		.fb_icon, .linkedin_icon {
    			font-size: 35px;
    		}
    		.coordinator {
    			width: 165px;
			    top: 115px;
			    font-size: 13px;
    		}
    		#toast {
    			width: 100%;
    			right: 0px;
    		}
    	}
    </style>
</head>
<body>
    <div class="background"></div>
		<div class="blacky"></div>
		<div class="patterns"></div>
		<div class="navbar-fixed">
			<nav class="transparent">
				<div class="nav-wrapper">
					<a href="#" class="brand-logo center" style="width:18%;"><img src="images/logo.png" style="margin-top: px;width:70%"></a>
					<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
					<ul id="nav-mobile" class="left hide-on-med-and-down" style="width:41%;">
						<li   style="width:23%;"><a href="index.html" class="sec1" style="color:#FFFFFF;">Home</a></li>   
						<li   style="width:23%;"><a href="about.html" class="sec1" style="color:#FFFFFF;" >About</a></li>
						<li  style="width:40%;"><a href="#"  class="sec1" style="color:#FFFFFF;">Organising Team</a></li>
                        
					</ul>
					<ul id="nav-mobile" class="right hide-on-med-and-down" style="width:40%;">
                        <li   style="width:23%;"><a href="event.html" class="sec1" style="color:#FFFFFF;" >Events</a></li>
						<li  style="width:50%;"><a href="faculty.html" class="sec1"  style="color:#FFFFFF;">Faculty Co-ordinator</a></li>
						<li  style="width:25%;"><a href="gallery/index.php" class="sec1" style="color:#FFFFFF;">Gallery</a></li>
						
					</ul>
					<ul class="side-nav" id="mobile-demo">
						<li style="margin-top:40px;"><a href="#" class="sec1">Home</a></li>
						<li><a href="about.html" class="sec2">About</a></li>
                        <li><a href="#">Organising Team</a></li>
						<li><a href="event.html" class="sec4">Events</a></li>
                        <li><a href="faculty.html" class="sec4">Faculty Co-ordinator</a></li>
						<li><a href="gallery/index.php">Gallery</a></li>
						
					</ul>
				</div>
			</nav>
		</div>
    <div>
	<!-- Google Analytics 
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-88946369-1', 'auto');
	  ga('send', 'pageview');
	</script>-->
    <br><br><br><br><br><br>
	<div class="ui container" id="team_div">
		<h1 class="ui main_heading">Our Team</h1>
		<h2 class="ui sub_heading">General Secretaries & cultural Secretaries </h2>
		<div class="ui four stackable cards two_set">
			<div class="card empty-card">
    			<div class="image">
	    		</div>
	 		</div>
	 		<div class="card" data-name="Abhinaw Kumar">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/abhinaw2.png">
	      			<img class="image_original" src="assets/img/team/abhinaw.png">
	    		</div>
	    		<p class="member_name">Abhinav Kumar</p>
	    		<div class="member_details">
      				<p class="email">2013mech12@smvdu.ac.in</p>
      				<p class="phone">+91-9697413854</p>
      				<div class="linkedin_icon" >
      					<a href="#">
	      					<i class="fa fa-linkedin"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/abhinaw.kumar.7549?fref=ts" target="_blank">
		      				<i class="fa fa-facebook"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card" data-name="Prabhash Kumar">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/prabhash1.png">
	      			<img class="image_original" src="assets/img/team/prabhash.png">
	    		</div>
	    		<p class="member_name">Prabhash Kumar</p>
	    		<div class="member_details">
      				<p class="email">2013eec32@smvdu.ac.in</p>
      				<p class="phone">+91-9796290614</p>
      				<div class="linkedin_icon">
      					<a href="#">
	      					<i class="fa fa-linkedin"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/prabhash.bhardwaj.7" target="_blank">
		      				<i class="fa fa-facebook"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card empty-card">
    			<div class="image">
	    		</div>
	 		</div>
	 	</div>
	 	<!--<h2 class="ui sub_heading">Sponsorship and Marketing</h2>
	 	<div class="ui three stackable cards three_set">
  			<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="linkedin square icon"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="facebook square icon"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="linkedin square icon"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="facebook square icon"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="linkedin square icon"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="facebook square icon"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 	</div>
	 	<div class="ui four stackable cards two_set">
	 		<div class="card empty-card">
    			<div class="image">
	    		</div>
	 		</div>	 			 		
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="linkedin square icon"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="facebook square icon"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="linkedin square icon"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="facebook square icon"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card empty-card">
    			<div class="image">
	    		</div>
	 		</div>
	 	</div>-->
	 	<h2 class="ui sub_heading">Co-ordinators</h2>
	 	<div class="ui four stackable cards">
	 		<div class="card" data-name="Siddhant Sharma">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/siddhant1.png">
	      			<img class="image_original" src="assets/img/team/siddhant.png">
	    		</div>
	    		<p class="member_name">Siddhant Sharma</p>
	    		<div class="member_details">
      				<p class="email">2013eec45@smvdu.ac.in</p>
      				<p class="phone">+91-8803345593</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/siddhant-sharma-572937104?trk=hp-identity-name/" target="_blank">
	      					<i class="fa fa-linkedin"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/sidbamaboy" target="_blank">
		      				<i class="fa fa-facebook"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card" data-name="Akash Shrivastava">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/akash1.png">
	      			<img class="image_original" src="assets/img/team/akash.png">
	    		</div>
	    		<p class="member_name">Akash Srivastava</p>
	    		<div class="member_details">
      				<p class="email">2013eme05@smvdu.ac.in</p>
      				<p class="phone">+91-8803341721</p>
      				<div class="linkedin_icon">
      					<a href="#">
	      					<i class="fa fa-linkedin"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/akash.srivastava.9083477?pnref=friends.search" target="_blank">
		      				<i class="fa fa-facebook"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card" data-name="Akarshan Magotra">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/akarshan1.png">
	      			<img class="image_original" src="assets/img/team/akarshan.png">
	    		</div>
	    		<p class="member_name">Akarshan Magotra</p>
	    		<div class="member_details">
      				<p class="email">14bec007@smvdu.ac.in</p>
      				<p class="phone">+91-9419266733</p>
      				<div class="linkedin_icon">
      					<a href="#">
	      					<i class="fa fa-linkedin"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/profile.php?id=100006644328269" target="_blank">
		      				<i class="fa fa-facebook"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card" data-name="Gurman Shaan Singh">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/gurman1.png">
	      			<img class="image_original" src="assets/img/team/gurman.png">
	    		</div>
	    		<p class="member_name">Gurman Shaan Singh</p>
	    		<div class="member_details">
      				<p class="email">14bec024@smvdu.ac.in</p>
      				<p class="phone">+91-9419116848</p>
      				<div class="linkedin_icon">
      					<a href="#">
	      					<i class="fa fa-linkedin"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/gurmanshaan" target="_blank">
		      				<i class="fa fa-facebook"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 	</div>
	 	<h2 class="ui sub_heading">Web Developer</h2>
	 	<div class="ui four stackable cards two_set">
			<div class="card empty-card">
    			<div class="image">
	    		</div>
	 		</div>
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="fa fa-linkedin"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="fa fa-facebook"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/adarsh1.png">
	      			<img class="image_original" src="assets/img/team/adarsh.png">
	    		</div>
	    		<p class="member_name">Adarsh Singh Chauhan</p>
	    		<div class="member_details">
      				<p class="email">adarsh9196ideal@gmail.com</p>
      				<p class="phone">+91-9858900733</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/adarsh-chauhan-3b297aa4/"  target="_blank"><i class="fa fa-linkedin"></i></a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/adarshchauhan.thakur" target="_blank"><i class="fa fa-facebook"></i></a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card empty-card">
    			<div class="image">
	    		</div>
	 		</div>
	 	</div>
	 	<!--<h2 class="ui sub_heading">Media and Public Relations</h2>
	 	<div class="ui three stackable cards three_set one_set">
  			<div class="card empty-card">
    			<div class="image">
	    		</div>
	 		</div>
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="linkedin square icon"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="facebook square icon"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card empty-card">
    			<div class="image">
	    		</div>
	 		</div>
	 	</div>
	 	<h2 class="ui sub_heading">Pronites</h2>
	 	<div class="ui three stackable cards three_set one_set">
  			<div class="card empty-card">
    			<div class="image">
	    		</div>
	 		</div>
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="linkedin square icon"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="facebook square icon"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card empty-card">
    			<div class="image">
	    		</div>
	 		</div>
	 	</div>
	 	<h2 class="ui sub_heading">Events</h2>
	 	<div class="ui four stackable cards">
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="linkedin square icon"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="facebook square icon"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="linkedin square icon"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="facebook square icon"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="linkedin square icon"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="facebook square icon"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="linkedin square icon"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="facebook square icon"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		
	 	</div>
	 	<h2 class="ui sub_heading">Design Team</h2>
	 	<div class="ui four stackable cards">
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="linkedin square icon"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="facebook square icon"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="linkedin square icon"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="facebook square icon"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="linkedin square icon"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="facebook square icon"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="linkedin square icon"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="facebook square icon"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 	</div>
	 	<h2 class="ui sub_heading">Web Team</h2>
	 	<div class="ui four stackable cards">
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="linkedin square icon"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="facebook square icon"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="linkedin square icon"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="facebook square icon"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="linkedin square icon"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="facebook square icon"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>
	 		<div class="card" data-name="Amit Kumar Yadav">
    			<div class="image">
	      			<img class="image_hover" src="assets/img/team/amit1.png">
	      			<img class="image_original" src="assets/img/team/amit.png">
	    		</div>
	    		<p class="member_name">Amit Kumar Yadav</p>
	    		<div class="member_details">
      				<p class="email">amit12nig96@gmail.com</p>
      				<p class="phone">+91-9596561100</p>
      				<div class="linkedin_icon">
      					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/" target="_blank">
	      					<i class="linkedin square icon"></i>
		      			</a>
	      			</div>
	      			<div class="fb_icon">
	      				<a href="https://www.facebook.com/Amit.Kumar.Yadav.AJ" target="_blank">
		      				<i class="facebook square icon"></i>
		      			</a>
	      			</div>
      			</div>
	 		</div>-->
	 	</div>
	</div>
      <footer class="footer-distributed">

			<div class="footer-left">
				<h3 style="font-size:30px;">Shri <span>Mata</span> Vaishno <span>Devi</span> University</h3>
                	<div class="footer-icons">

					<a href="https://www.facebook.com/resurgence.SMVDUniversity/?fref=ts" target="_blank"><i class="fa fa-facebook"></i></a>
				     <a><i class="fa fa-twitter"></i></a>
					<a href="https://www.linkedin.com/in/amit-kumar-yadav-aj-b6a56b104/"  target="_blank"><i class="fa fa-linkedin"></i></a>
					<a href="https://github.com/amit12nig96" target="_blank"><i class="fa fa-github"></i></a>

				</div>

				<!--<p class="footer-links">
					<a href="#">Home</a>
					·
					<a href="#">Blog</a>
					·
					<a href="#">Pricing</a>
					·
					<a href="#">About</a>
					·
					<a href="#">Faq</a>
					·
					<a href="#">Contact</a>
				</p>-->
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
                        g.src = "https://cdn.pushalert.co/integrate_3e4558ec470afc375829da731ac81d05.js";
                        s.parentNode.insertBefore(g, s);
                }(document, "script"));
		</script>

	<script type="text/javascript">
		$(document).ready(function() {
			var window_width = parseInt($(window).width());

			$('.email, .phone').click(function() {
				var $temp = $("<input>");
			    $("body").append($temp);
			    $temp.val($(this).text()).select();
			    document.execCommand("copy");
			    $temp.remove();
			    toast('Copied To Clipboard.', 1000);
			});

			if(window_width > 767) {// Big Screens
				var name_top = parseInt($('#team_div .card').css('height')) - 30;
				$('#team_div .member_name').css('top', name_top);

				$(window).resize(function(){
					name_top = parseInt($('#team_div .card').css('height')) - 30;
					$('#team_div .member_name').css('top', name_top);
				});

				$('#team_div').on('mouseenter', '.card', function() {
					var div_height = parseInt($('#team_div .card').css('height'));
					var top_details = 0.7*div_height - 10;
					var top_name = 0.7*div_height - 40;
					
					$(this).find('.image_original').stop().animate({
						opacity:0
					},200);

					$(this).find('.coordinator').stop().animate({
						opacity: 0
					},200);

					var member_details = $(this).find('.member_details');
					member_details.show();
					member_details.stop().animate({
						top: top_details,
						opacity: 1
					},300);

					var member_name = $(this).find('.member_name');
					member_name.stop().animate({
						top: top_name
					},300);
				});
				$('#team_div').on('mouseleave', '.card', function() {
					var div_height = parseInt($('#team_div .card').css('height'));
					var top_cal = 0.7*div_height - 8 - 100;

					$(this).find('.image_original').stop().animate({
						opacity:1
					},200);

					$(this).find('.coordinator').stop().animate({
						opacity: 1
					},200);

					var member_details = $(this).find('.member_details');
					member_details.stop().animate({
						top: top_cal,
						opacity: 0,
					},300, function() {
						member_details.hide();
					});

					var member_name = $(this).find('.member_name');
					member_name.stop().animate({
						top: name_top
					},300);
				});
			} else {// Small Screens
				$('.card').attr('style', 'height:220px !important;width:170px !important;margin:auto;margin-bottom:10px !important;');
				$('.empty-card').attr('style', 'display:none !important;');
				$('.two_set').removeClass('four').addClass('two');
				$('.one_set').removeClass('three').addClass('one');

				$('#team_div').on('mouseenter', '.card', function() {

					$(this).find('.image_original').stop().animate({
						opacity:0
					},200);

					$(this).find('.coordinator').stop().animate({
						opacity: 0
					},200);

					var member_details = $(this).find('.member_details');
					member_details.show();
					member_details.stop().animate({
						top: '120px',
						opacity: 1
					},300);

					var member_name = $(this).find('.member_name');
					member_name.stop().animate({
						top: '115px'
					},300);
				});
				$('#team_div').on('mouseleave', '.card', function() {

					$(this).find('.image_original').stop().animate({
						opacity:1
					},200);

					$(this).find('.coordinator').stop().animate({
						opacity: 1
					},200);

					var member_details = $(this).find('.member_details');
					member_details.stop().animate({
						top: '0px',
						opacity: 0
					},300, function() {
						member_details.hide();
					});

					var member_name = $(this).find('.member_name');
					member_name.stop().animate({
						top: '195px'
					},300);
				});

			}

			// $.ajax({
			// 	'method': 'GET',
			// 	'url': 'team.json',
			// 	success: function(response) {
			// 		response = JSON.parse(response);
			// 		console.log(response);
			// 		$.each(response['message'], function(role, members) {
			// 			$.each(members, function(index, data) {
			// 				var card = $('#team_div .card[data-name="'+data['name']+'"]');
			// 				card.find('.member_name').text(data['name']);
			// 				card.find('.email').text(data['email']);
			// 				card.find('.phone').text(data['phone']);
			// 				card.find('.linkedin_icon a').attr('href', data['linkedin']);
			// 				card.find('.fb_icon a').attr('href', data['facebook']);							
			// 			});
			// 		});
			// 	}
			// });
			
			var toast_div = '';
			function toast(content, duration, type) {
				var toast_el = $('#toast');
				if(content== '') {
					return;
				}
				duration = duration || 2000;
				type = type || 'default';
				var toast = $('<div class="toast_content">'+content+'</div>').appendTo('#toast');
				toast_el.removeAttr('style');
				toast_el.show();
				setTimeout(function () {
					toast.animate({
						bottom:'-10px',
						opacity:'0'
					},250, function() {
						toast.remove();
					});
				}, duration);
				clearTimeout(toast_div);
				toast_div =	setTimeout(function () {
								toast_el.animate({
									bottom:'-10px',
									opacity:'0'
								},250, function() {
									toast_el.hide();
								});
							}, duration);
			}
		});
	</script>
</body>

<!-- Mirrored from 2017.springfest.in/team by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 14 Jan 2017 05:46:31 GMT -->
</html>