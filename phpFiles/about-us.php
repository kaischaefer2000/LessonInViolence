<!DOCTYPE html>
<html lang="en">
<!-- head -->
<head>
    <title>Lesson in Violence | german Thrash Metal band</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="robots" content="index,follow">
    <meta name="description"
        content="We are a german Thrash Metal band from Schweinfurt - Frankonia. Lesson in Violence delivers headbanging metal and smashing live shows">
    <meta name="keywords"
        content="lesson in violence, thrash metal, german thrash metal, thrash metal aus schweinfurt, thrash metal aus franken, lesson in violence schweinfurt,
             lesson in violence band, thrash metal band, lesson in violence buchen, l i v, L.I.V, Thrash Metal Mankind, Bavarian thrash metal, heavy metal, heavy metal band, german thrash, exodus, lesson in violence news">
    <link rel="shortcut icon" type="image/x-icon" href="../assets/LIV_abkuerzung_weiss.png">
    <link rel="icon" href="../assets/LIV_abkuerzung_weiss.png" sizes="16x16 32x32" type="image/png">
    <link rel="apple-touch-icon" href="../assets/LIV_abkuerzung_weiss.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;0,800;1,400;1,600;1,800&family=Lato&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="../cssFiles/about-us.css" />
</head>

<!-- body -->
<body>

    <!-- header -->
    <?php
        include('../htmlFiles/header.html');
    ?>

    <!-- info box -->
    <section>
        <div class="container-fluid">
            <div id="info-box" class="row">
                <div class="col-6">
                    <a class="red" href="../phpFiles/live.php">Next show</a>
                </div>
                <div class="col-6">
                    <a href="../phpFiles/live.php">
                        <span>09.04.2022</span><br>
                        <span translate="no">Metal Franconia Festival</span><br>
                        Dettelbach / Frankenhalle
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- main content -->
    <main>
        <div id="mainContent" class="fluid-container">
        <div class="mainContentInner">
            <!-- about us pragraph  -->
            <section>
                <div class="row">
                    <div id="aboutUsText" class="col">
                        <h2>Welcome to the official homepage of<br>
                        <span translate="no">LESSON IN VIOLENCE</span></h2>

                        <p>We are a <strong>german Thrash Metal</strong> band from <strong>Schweinfurt</strong>, Bavaria.<br>It's always hard to find a name for your baby. We wanted a name that expresses the message in our music and gives you an idea for what it's all about. Further should every <strong>metalhead</strong> know what's going on by just reading the name of the band. So we helped ourselves by leaning on to one of the greatest <strong>Thrash Metal bands</strong> who have always been a huge influence to us all. <strong>“Lesson in Violence”</strong> was born in summer 2019, named after a song by <strong>Exodus</strong>. It is our aim to deliver fuckin good <strong>Thrash Metal</strong> without any triviality that goes straight through the heart.
                        <br><br>
                        Violence in music ... and nowhere else!
                        <br><br>
                        Actually we are working on our <strong>first album</strong> to bring the violence to your home and <strong>play shows</strong> to increase our range and fuck shit up!</p>
                    </div>
                </div>
            </section>

            <!-- member pictures -->
            <div id="members" class="row">
                <div class="col-6 col-md ml-0 mr-0 ml-lg-1 mr-lg-1">
                   <div id="flo_eins" class="member-picture"></div> 
                   <p>Florian Negwer<br><span>Vocals</span></p>
                </div>
                <div class="col-6 col-md ml-0 mr-0 ml-lg-1 mr-lg-1">
                    <div id="roli" class="member-picture"></div>    
                    <p>Roland Schäfer<br><span>Bass, Backvocals</span></p>
                </div>
                <div class="col-6 col-md ml-0 mr-0 ml-lg-1 mr-lg-1">
                     <div id="scraper" class="member-picture"></div> 
                    <p>Matthias Krapp<br><span>Drums</span></p>
                </div>
                <div class="col-6 col-md ml-0 mr-0 ml-lg-1 mr-lg-1">
                    <div id="flo_zwei" class="member-picture"></div>
                    <p>Florian Helbig<br><span>Guitar, Backvocals</span></p>
                </div>
                <div class="col-6 col-md ml-0 mr-0 ml-lg-1 mr-lg-1">
                    <div id="andre" class="member-picture"></div>
                    <p>Andre Loesch<br><span>Guitar</span></p>
                </div>
            </div>
    	</div>
        </div>
    </main>


    <!-- footer -->
    <?php
        include('../htmlFiles/footer.html');
    ?>

    <script type="text/javascript" language="javascript">
        function downloadJSAtOnload() {
            var element = document.createElement("script");
            element.src = "../jsFiles/layout.js";
            document.body.appendChild(element);
        }
        // greater than or equal IE 9 and other modern Browser
        if (window.addEventListener)
            window.addEventListener("load", downloadJSAtOnload, false);
        //  less than or equal IE 8
        else if (window.attachEvent)
            window.attachEvent("onload", downloadJSAtOnload);
        // all Browser
        else window.onload = downloadJSAtOnload; 


        // const memberPictures = document.querySelectorAll(".member-picture")
        // const memberPicturesActive = [
            // {
                // id: 0,
                // image: "../members/Flo-zwei-live-min.jpg"
            // },
            // {
                // id: 1,
                // image: "../members/Scraper-live-min.jpg"
            // },
            // {
                // id: 2,
                // image: "../members/Flo-eins-live-min.jpg"
            // },
            // {
                // id: 3,
                // image: "../members/Roli-live-min.jpg"
            // },
            // {
                // id: 4,
                // image: "../members/Andre-live-min.jpg"
            // }
        // ]
// 
// 
        // memberPictures.forEach((member) => {
            // member.addEventListener("click", function(){
                // console.log(this.id)
            // })
        // })

    </script>
    
</body>
</html>