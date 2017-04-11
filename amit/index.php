<?php
require_once("dbcontroer.php");

if(isset($_POST['login']))
{
    $admin_name = $_POST['login-name'];
    $admin_pass = $_POST['login-pass'];

    $query = "select * from amitadmin where admin_name='$admin_name' AND pass='$admin_pass'";
    $run = mysqli_query($connect,$query);
    if(mysqli_num_rows($run)>0)
    {   
       echo "<script>window.open('resurgence_users.php?logged=You are Lgined SuccessFully!','_self')</script>";
     
    }
    else{
        echo "<script>alert('user name or password is incorrect')</script>"; 
    }
        
}



?>



<!DOCTYPE html>
<html >
        
<head>
  <meta charset="UTF-8">
  <title>Login Page</title>
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

  <link rel='stylesheet prefetch' href='http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'>
<link rel='stylesheet prefetch' href='http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css'>
<link rel='stylesheet prefetch' href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&subset=latin,latin-ext'>

      <link rel="stylesheet" href="css1/style.css">
<style>
    
html
    {
    overflow: scroll;
    }
    </style>
  
</head>

<body>
  <div id="login-main">
      
  <div class="container login-main">
    <div class="user-img">
      <img src="../assets/img/team/amit.png" alt=""><!--img-circle user-img img-thumbnail-->
    </div>
    <div class="col-md-4 login-form">
      <form class="form-horizontal" role="form" action="index.php" method="post">
        <div class="form-group">
          <input type="text" class="form-control login-field" value="" placeholder="AJ" name="login-name">
          <label for="login-name" class="login-name"><i class="fa fa-envelope"></i></label>
        </div>

        <div class="form-group">
          <input type="password" class="form-control login-field" value="" placeholder="&#9673;&#9673;&#9673;&#9673;&#9673;&#9673;&#9673;&#9673;" name="login-pass">
          <label for="login-pass" class="login-pass"><i class="glyphicon glyphicon-lock"></i></label>
        </div>

        <div class="form-group">
          <td colspan="4" class="btn btn-lg btn-block" ><input style="background-color:#6DCB1F; color:red; font-size:25px;" type="submit" name="login" value="Admin Log in"></td>
        </div>

        <!--<div class="form-group input-check">
          <input type="checkbox" id="remember-me" name="remember-me" value="" checked>
          <label for="remember-me"><span>Remember me</span></label>
        </div>

        <div class="form-group">
          <a class="login-link" href="#">Forgot Password? </a>
        </div>-->
      </form>
    </div>
  </div>
</div>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js'></script>

  
</body>
</html>
