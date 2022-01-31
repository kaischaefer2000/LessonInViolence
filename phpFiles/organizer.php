<!DOCTYPE html>
<html lang="en">
<!-- head -->
<head>
    <title>Lesson in Violence | organizer infos</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="robots" content="noindex,nofollow">
    <link rel="shortcut icon" type="image/x-icon" href="../assets/LIV_abkuerzung_weiss.png">
    <link rel="icon" href="../assets/LIV_abkuerzung_weiss.png" sizes="16x16 32x32" type="image/png">
    <link rel="apple-touch-icon" href="../assets/LIV_abkuerzung_weiss.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;0,800;1,400;1,600;1,800&family=Lato&display=swap" rel="stylesheet">


    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="../cssFiles/organizer.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


    <!-- Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XDYLDJFLCX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-XDYLDJFLCX');
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
                <div class="col-12">
                    <img src="../assets/LessonInViolence_Wortmarke_rot.png" alt="lesson in violence logo red"/>
                </div>
            </div>
        </div>
    </section>

    <div id="mainContent" class="fluid-container">
    <div class="mainContentInner">
        <div class="row">
            <div class="col">
                <h3 translate="no">Hello organizers, welcome to our hidden download-area for promotional purposes only.</h3>
                <!-- music player -->
                    <div class="row player-container">
                        <?php
            	            include('../htmlFiles/TMMFullVersion.html');
            	            include('../htmlFiles/ScumFullVersion.html');
            	            include('../htmlFiles/LIVFullVersion.html');
            	            include('../htmlFiles/LostInYourselfFullVersion.html');
            	        ?>

                        <!-- bandinfo -->
                        <div class="download-item col-12 col-sm-6 col-lg-8">
                            <div id="bandinfo" class="download-item-content row align-items-center">
                                <div class="col download-link-container"> 
                                    <div class="download-link">
                                        <a download href="../download-items/Bandinfo_LessoninViolence_2022.pdf">DOWNLOAD</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        
    </div>
    </div>

    <?php
        include('../htmlFiles/footer.html');
    ?>

    <script type="text/javascript" language="javascript">
        function downloadJSAtOnload() {
            var element = document.createElement("script");
            element.src = "../jsFiles/layout.js";
            document.body.appendChild(element);

            var elementThree = document.createElement("script");
            elementThree.src = "../jsFiles/musicPlayer.js";
            document.body.appendChild(elementThree);
        }
        
        if (window.addEventListener)
            window.addEventListener("load", downloadJSAtOnload, false);
        //  less than or equal IE 8
        else if (window.attachEvent)
            window.attachEvent("onload", downloadJSAtOnload);
        // all Browser
        else window.onload = downloadJSAtOnload; 
    </script>
    
</body>
</html>