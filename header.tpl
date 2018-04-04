<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
		<title></title>

		<!-- Css styles -->
		<!--<link href="css/sprite.css" rel="stylesheet">-->
		<link href="lib/slick-carousel/slick/slick.css" rel="stylesheet">
		<link href="lib/animate.css/animate.min.css" rel="stylesheet">
		<link rel="stylesheet" href="lib/fancybox/dist/jquery.fancybox.min.css">
		<link href="lib/css-hamburgers/dist/hamburgers.min.css" rel="stylesheet">
		<link href="css/main.css" rel="stylesheet">

		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->

	</head>
	<body>
<!--[if lt IE 9]>
<p class="browserupgrade" style="color: #fff;background: #000;padding: 20px 15px; text-align: center;">You are using an
    <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your
    experience.</p>
<![endif]-->
<div class="fixcontent">
	<div class="header d-none d-sm-none d-lg-block">		
		<div class="header__top-wrapper">
		    <div class="container">
                <div class="row">
	                <div class="col header__top">
	                	<div class="header__search-wrapper">
	                		<input type="search" class="header__search" id="header__search" placeholder="Поиск">
		                    <label for="header__search" class="header__search-label">
		                        <svg class="header__search-icon">
		                            <use xlink:href="#search"></use>
		                        </svg>
		                    </label>
	                	</div>
	                	<div class="separator"></div>
	                    <div class="header__lang-wrapper">
	                    	<div class="header__lang-select">Русский</div>
	                    	<ul class="header__lang-list">
	                    		<li class="header__lang-item">Русский</li>
	                    		<li class="header__lang-item">Українська</li>
	                    		<li class="header__lang-item">English</li>
	                    	</ul>
	                    </div>
	                </div>                          	
                </div>
			</div>
		</div>
		<div class="header__main">
			<div class="container">
				<div class="row">
					<div class="col header__navbar">
						<div>
							<img src="img/icons/logo.png" alt="logo" class="logo">
						</div>
						<nav>
							<ul class="header__navbar-menu">
								<li class="header__menu-item"><a href="#!">О компании</a></li>
								<li class="header__menu-item"><a href="#!">Продукция</a></li>
								<li class="header__menu-item"><a href="#!">Решения</a></li>
								<li class="header__menu-item"><a href="#!">Новости</a></li>
								<li class="header__menu-item"><a href="#!">Поддержка</a></li>
								<li class="header__menu-item"><a href="#!">Партнеры</a></li>
								<li class="header__menu-item"><a href="#!">Контакты</a></li>
							</ul>
						</nav>
						<div class="header__currency d-flex flex-column align-items-end">
							<div class="header__currency-line">
								<svg class="currency-icon"><use xlink:href="#currency"></use></svg>
								<span class="header__currency-title">курс доллара </span>
							</div>					    
							<span class="header__currency-value">= 29,30</span>
						</div>
					</div>
				</div>
			</div>
		</div>		
	</div>
	<div class="header-mobile d-lg-none">
		<div class="container">
			<div class="row">
				<div class="col d-flex align-items-center justify-content-between">
					<div class="logo">
						<img src="img/icons/logo.png" alt="">
					</div>
					<div class="header__currency">
						<div class="d-flex">
							<div class="header__currency-line">
								<svg class="currency-icon"><use xlink:href="#currency"></use></svg>
								<span class="header__currency-title">курс доллара </span>
							</div>					    
							<span class="header__currency-value">= 29,30</span>
						</div>
					</div>
					<div class="d-flex align-items-center">
						<div class="lang">
							<svg class="lang__icon">
								<use xlink:href="#globe"></use>		
							</svg>
							<div class="lang__content">
								<ul class="lang__list">
									<li class="lang__item"><a href="#">ua</a></li>
									<li class="lang__item"><a href="#">ru</a></li>
									<li class="lang__item"><a href="#">en</a></li>
								</ul>
							</div>
						</div>
						<div class="separator"></div>
						<div class="menu">
							<button class="hamburger hamburger--collapse" type="button">
								<span class="hamburger-box">
									<span class="hamburger-inner"></span>
								</span>
							</button>
							<nav>
								<ul class="menu__list d-flex flex-column justify-content-center">
									<li class="menu__item"><a href="#!" class="menu__link">О компании</a></li>
									<li class="menu__item"><a href="#!" class="menu__link">Продукция</a></li>
									<li class="menu__item"><a href="#!" class="menu__link">Решения</a></li>
									<li class="menu__item"><a href="#!" class="menu__link">Новости</a></li>
									<li class="menu__item"><a href="#!" class="menu__link">Поддержка</a></li>
									<li class="menu__item"><a href="#!" class="menu__link">Партнеры</a></li>
									<li class="menu__item"><a href="#!" class="menu__link">Контакты</a></li>
								</ul>								
							</nav>
						</div>
					</div>
				</div>				
			</div>
		</div>		
	</div>
