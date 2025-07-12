
<!DOCTYPE html>
<html lang="fr-FR" >

<head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZPWDBYY1XX"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-ZPWDBYY1XX');
	</script>

  <meta charset="UTF-8">
  <title>Machintruc - Motion design</title>
  <meta name="description" content="Découvrez le portfolio de Ghislain Gillet AKA Machintruc, directeur artistique et motion designer basé à Nantes. Spécialisé en design créatif et animation 2D et 3D.">
  <meta name="keywords" content="Directeur artistique, Motion designer, Nantes, Design créatif, Animation, Portfolio"> 
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="Machintruc">
  <link rel="icon" type="image/png" href="resources/MTicon.png" />	
  <link href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:400,700i|Roboto:400,700" rel="stylesheet">
	<link rel="stylesheet" href="css/style.css">
</head>

<body>
<script src="js/projects.js"></script>

<?php 
	include 'projects_data.php';
	$id = $_GET['p'];
?>
	
	<main class="sectionContainer"  id="project">
			<!-- <div class="wblok"> -->
				
			<section class="container">
				<div>

					<a href="javascript:void(0);" class="close-button" onclick="goBackOrRedirect()"></a>
					
					<h1 class="projectTitle"><?php echo  $projects[$id]['title'];  ?></h1>
					
					
					<div class="vidProjectContainer">
						<iframe class="vidProject" title="vimeo-player" src=<?php echo  $projects[$id]['url'];  ?> width="640" height="360" frameborder="0"    allowfullscreen></iframe>
					</div>
					<p><?php echo  $projects[$id]['descr'];  ?></p>
				</div>
					
			</section>
			
		<!-- </div>	 -->
</main>

	<script src="js/greensock/TweenMax.min.js"></script>
	
	
</body>

</html>
