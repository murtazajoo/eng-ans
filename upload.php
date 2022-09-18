<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="5; URL=./">
    <title>Thank You</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<style>
    img{
        width: 100%;
    }
    p{
        font-family:cursive;
        font-size: 24px;
        width: 80%;
        margin: 0 auto;
        letter-spacing: 1px;
        color: teal;
        text-align: center;
    }
    h1{
        text-align: center;
        padding: 30px;
        font-family:"Rubik Moonrocks", cursive;
        font-size: 60px;
        color: teal;

    }
</style>
<body>
		<?php

		// servername => localhost
		// username => root
		// password => empty
		// database name => staff
		$conn = mysqli_connect("localhost", "root", "", "useraddedquestions");
		
		// Check connection
		if($conn === false){
			die("ERROR: Could not connect. "
				. mysqli_connect_error());
		}
		
		// Taking all 5 values from the form data(input)
		$Question = $_REQUEST['Question'];
		$Answer = $_REQUEST['Answer'];
		$By = $_REQUEST['By'];
	
		
		// Performing insert query execution
		// here our table name is college
		$sql = "INSERT INTO `english`(`Question`, `Answer`, `By`)  VALUES ('$Question',
			'$Answer','$By')";
		
		if(mysqli_query($conn, $sql)){

			echo ' <p style="font-family: monospace; font-size:18px;">redirecting....</p>
             <img src="img/Appreciation-bro.png" alt="">
            <p>    What is contributed is more important than who contributes it.</p>
        <h1>THANK YOU 🙂
        </h1>';

		} else{
			echo '   
      <p style="font-family: monospace; font-size:18px;">redirecting....</p>
        <img src="img/wrong.png" alt="">
        <h1>Oops! Something WENT Wrong 🙂
        </h1>';
				
		}
		
		// Close connection

		mysqli_close($conn);
        
        // header("url=http://localhost/ENGLISHWEB/;refresh:3");
		?>
</body>

</html>
