<!DOCTYPE html>
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>

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
  <title>Machintruc - Motion design &agrave; Nantes</title>
  <meta name="description" content="Découvrez le portfolio de Ghislain Gillet AKA Machintruc, directeur artistique et motion designer freelance basé à Nantes. Spécialisé en design créatif et animation 2D et 3D.">
  <meta name="keywords" content="Directeur artistique, Motion designer, freelance, Nantes, Design créatif, Animation, Portfolio"> 
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="Machintruc">

  <meta property="og:title" content="Machintruc.tv">
  <meta property="og:description" content="Machintruc, Motion Design, Nantes">
  <meta property="og:image" content="resources/miniatures/showreel.jpg">
  <meta property="og:url" content="https://machintruc.tv/">

  <link rel="icon" type="image/png" href="resources/MTicon.png" >
	<link rel="stylesheet" href="css/style.css">
</head>

<body>
	
	<video preload="auto" autoplay muted loop id="vid">
			<source src="resources/showreel.mp4" type="video/mp4">
	</video>

	<header>
		<div id="logoContainer">
			<img class="logo" src="resources/logoMT.png" alt="Logo Machintruc"/>
			<h1>- Motion design & stuff -</h1>
		</div>
		<div id="arrowdContainer"></div>
		<div id="hpContainer"></div>
	</header>	

	<main>
		
		<section color="#fad900">
		
			<div class="container">
				<h2>MACHIN QUI ?</h2>

				<p>Machintruc est un studio unipersonnel de motion design bas&eacute; &agrave; Nantes, fond&eacute; et dirig&eacute; d'une main de fer par Ghislain Gillet depuis 2018.</p>
				<p>Ici on s'occupe personnellement de chaque pixel, qu'ils soient 2D ou 3D, on ne les masse pas au sak&eacute; mais on les sature de couleurs, et on s'assure qu'ils jouent tous leurs r&ocirc;les aux bons moments.<br>
				Car s'il y a bien quelque chose que j'ai retenu de mes ann&eacute;es d'exp&eacute;rience &agrave; travailler pour certains des plus beaux mus&eacute;es au monde, c'est l'attention aux d&eacute;tails et au storytelling.<br>
				Mon but ? Transformer vos projets en cr&eacute;ations uniques, millim&eacute;tr&eacute;es, percutantes et riches de sens.</p><br>
				<p>Si j'avais voulu m'en tenir &agrave; une seule technique et n'avoir qu'un seul style, je serais devenu artiste.<br>
				Mais je suis motion designer et je mets toujours un point d'honneur &agrave; trouver la solution cr&eacute;ative la plus adapt&eacute;e et la plus percutante pour vos projets.<br>
				Que ce soit pour des cr&eacute;ations uniques qui sortent du lot, ou qu'il s'agisse de s'ins&eacute;rer dans une sc&eacute;nographie, un dispositif de communication ou dans le prolongement d'une charte graphique, je m’adapte avec la m&ecirc;me rigueur.</p><br>	
				<p>Machintruc, c'est aussi un r&eacute;seau de partenaires talentueux : r&eacute;alisateurs, sound designers, voix-off, d&eacute;veloppeurs... Ensemble, nous allons plus loin, en gardant toujours une approche sur mesure, fid&egrave;le &agrave; vos besoins et vos envies.<br><br>
				Chaque d&eacute;tail compte, chaque projet est unique, et chez Machintruc, on fait bien plus que simplement animer : On raconte des histoires, on donne vie &agrave; vos id&eacute;es, un pixel &agrave; la fois.</p>
			</div>
		</section>
		
		<section color="#EC008C">
			<div class="container">
				<h2>BIDULES CHOUETTES</h2>
				
				<p>Chez Machintruc on fait des chouettes bidules !<br />En voici un florilège ; Les douze travaux de Machintruc.</p>
				<div class="minaturesContainer">
					<ul class="miniatures">
				
					<?php
						include 'projects_data.php';
				
						for ($i = 0; $i < count($projects); $i++) {
							echo "							<li> \n";
							echo "								<a class='transiout' href='project.php?p=$i'>\n";
							echo "									<figure>\n";
							echo "										<div class='tn " .$projects[$i]['color']."'></div>\n";
							echo "										<img src='" .$projects[$i]['urlImg']. "' alt='" .htmlspecialchars($projects[$i]['alt'], ENT_QUOTES). "'>\n";
							echo "										<figcaption>" .$projects[$i]['title']. "</figcaption>\n";
							echo "									</figure>\n";
							echo "								</a>\n";
							echo "							</li>\n";
							}
							
					?>
					
					</ul>
				</div>
			</div>
		</section>
	
		<section color="00d0ff">
			<div class="container">
				<h2 id="test">Contact</h2>
				<p>Une question ? une interogation ? une demande de colaboration ? N'hésitez pas !</p>
				<div id="contactInfo">
					<address>
						<a id="tel" href="tel:0688307705">Tél : 06 88 30 77 05</a>
						<a id="mail" href="mailto:bonjour@machintruc.tv">bonjour@machintruc.tv</a>
					</address>
					<ul id="social">
						<li><a id="INpic" class="socialpic" href="https://www.linkedin.com/in/ghislain-gillet-748b35157/" target="_blank"></a></li>
						<li><a id="vimeopic" class="socialpic" href="https://vimeo.com/machintruc" target="_blank"></a></li>
						<li><a id="instapic" class="socialpic" href="https://www.instagram.com/machintruc.tv/" target="_blank"></a></li>
					</ul>
				</div>

				<p id="siret">N° SIRET : 447 531 120 00023</p>
				
			</div>
		</section>
	</main>
	
	<div id="pagefiller"></div>


	<script src="js/liquids.js"></script>
	<script src="js/greensock/TweenMax.min.js"></script>
	<script src="js/lottie_light.js"></script>
	<script src="js/animations.js"></script>
</body>

</html>


<main>