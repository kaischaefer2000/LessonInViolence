<html lang="en">
<!-- head -->
<head>
    <title>Lesson in Violence | Metal Merch</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="robots" content="index,follow">
    <meta name="description"
        content="Go checkout our merch! You can order t-shirts and our new album The Thrashfall of Mankind soon...">
    <meta name="keywords"
        content="lesson in violence, thrash metal, german thrash metal, thrash metal aus schweinfurt, thrash metal aus franken, lesson in violence schweinfurt,
             lesson in violence band, thrash metal band, lesson in violence buchen, l i v, L.I.V, Thrash Metal Mankind, Bavarian thrash metal, heavy metal, heavy metal band, german thrash, exodus, lesson in violence news">
    <link rel="shortcut icon" type="image/x-icon" href="../assets/LIV_abkuerzung_weiss.png">
    <link rel="icon" href="../assets/LIV_abkuerzung_schwarz.png" sizes="16x16 32x32" type="image/png">
    <link rel="apple-touch-icon" href="../assets/LIV_abkuerzung_schwarz.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;0,800;1,400;1,600;1,800&family=Lato&display=swap" rel="stylesheet">


    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="../cssFiles/merch.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <script language="javascript" type="text/javascript" src="../jsFiles/layout.js"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-163318384-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-163318384-1', { 'anonymize_ip': true });
    </script>
</head>

<!-- body -->
<body>

    <?php
        include('../htmlFiles/header.html');
    ?>

    <!-- info box -->
    <section>
        <div class="container-fluid">
            <div id="info-box" class="row">
                <div class="col">
                    <h2>More stuff coming soon ...</h2>
                </div>
            </div>
        </div>
    </section>

    <div id="mainContent" class="fluid-container">
    <div class="mainContentInner">
    <section>
        <div class="row products">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 product">
                <div class="prodContainer">
                    <div class="prodImage">
                        <button id="back" onfocus="backActive()">b<br>a<br>c<br>k</button>
                        <button id="front" onfocus="frontActive()">f<br>r<br>o<br>n<br>t</button>

                        <img id="imgFront" class="shirtImage" src="../merchPictures/productShirtFront.jpg" alt="">
                        <img id="imgBack" class="shirtImage" src="../merchPictures/productShirtBack.jpg" alt="">
                        <img id="bgImg" class="shirtImage shown" src="../merchPictures/productShirt.jpg" alt="">
                        <img id="fullScreenImg" onclick="openLightbox()" src="../merchPictures/fullScreen.png" alt="full screen icon">
                        
                    </div>
                    
                    <div class="row prodDescription">
                        <h3>L.i.V T-SHIRT</h3>
                        <hr>
                        <table>
                            <tr>
                                <td>Color:</td>
                                <td>Black</td>
                            </tr>
                            <tr>
                                <td>Size:</td>
                                <td><button>S</button><button>M</button><button>L</button><button>XL</button><button>XXL</button></td>
                            </tr>
                        </table>
                        <button><a href="mailto:contact@lessoninviolence.com" style="color:white" translate="no">Order !</a></button>
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4 col-lg-6 order" style="display:none">
                <h3>My order</h3>
                <div class="orderContainer">
                    <h4>L.i.V Shirt</h4>
                    <hr> 
                    <img class="orderPicture" src="../merchPictures/productShirt.jpg" alt="">
                    <div class="orderTitle">
                        <p>Size: L</p>
                        <p>Count: 1x</p>
                    </div>

                </div>
                <div class="orderContainer">
                    <h4>Thrashfall of Mankind - CD</h4>
                    <hr> 
                    <img class="orderPicture" src="../audioPlayer/thrash-metal-mankind-thumbnail.jpg" alt="">
                    <div class="orderTitle">
                        <p>Count: 1x</p>
                    </div>

                </div>
            </div>

        </div>
        </div>
    </section>    
    </div>

    <?php
        include('../htmlFiles/footer.html');
    ?>

    <script language="javascript" type="text/javascript" src="../jsFiles/product.js"></script>
    
</body>
</html>