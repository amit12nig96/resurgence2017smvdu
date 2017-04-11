<?php
require_once("dbcontroer.php");
$delete_re = $_GET['del'];
$query  ="delete from registered_users where id=$delete_re";
if (mysqli_query($connect,$query)){
    echo "<script>window.open('resurgence_users.php?deleted=This column has been Deleted SuccessFully!','_self')</script>";
}


?>