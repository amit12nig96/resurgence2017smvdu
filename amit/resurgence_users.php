<?php
require_once("dbcontroer.php");
$sql = "SELECT * FROM `registered_users` order by 1 desc";
$result = mysqli_query($connect,$sql);
/*$salt="Amit_Kum@rY@DaV";
echo md5("qwerty".$salt);*/
$i= 1;


 ?> 

<HTML>
    <head>
    
    <style>
    
html
    {
    overflow: scroll;
    }
    </style>
    
    </head>
<body>
<br><br>
    <center><button onclick="window.location.href='index.php'" style="background-color:gray; margin-top:10px; margin-left:200px; font-size:25px;" >Log Out</button>&nbsp;&nbsp;&nbsp;&nbsp;
    <button style="background-color:gray; margin-top:50px; margin-left:auto; font-size:25px;" onclick="myFunction()">Print</button>
     </center><br><br>
    <font color="red" size="6"><center><?php echo @$_GET['deleted'];?></center></font>
    <font color="red" size="6"><center><?php echo @$_GET['logged'];?></center></font>
<Table align="center" width="95%" border="4">
    <tr>
        <td colspan="20" align="center" bgcolor="lightgreen"><h1>Register users</h1></td>
    </tr>
    <tr align="center">
        <th>S.No</th>
        <th>Nmae</th>
        <th>Branch</th>
        <th>Gender</th>
        <th>College</th>
        <th>Mobile Number</th>
        <th>Email-ID</th>
        <th>Delete</th>
        </tr>
    <?php
		while ($cot=mysqli_fetch_array($result)) {?>
	<tr>
		<td><center><?php echo $i; $i++; ?></center></td>
		<td><center><?php echo $cot['user_name']?></center></td>
		<td><center><?php echo $cot['branch']?></center></td>
		<td><center><?php echo $cot['city']?></center></td>
		<td><center><?php echo $cot['college']?></center></td>
        <td><center><?php echo $cot['Mobile_no']?></center></td>
        <td><center><?php echo $cot['email']?></center></td>
        <td><center><a href="dell.php?del=<?php echo $cot['id']?>">Delete</a></center></td>
        
		
	</tr>

	<?php		
		}
	?>
    </Table>
    <script>
function myFunction() {
    window.print();
}
</script>
    </body>
  </HTML>
    
 