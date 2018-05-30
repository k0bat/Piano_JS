document.onkeydown = function( event ) {

    if ( event.keyCode == 65 ) { 
        document.getElementById('do').play(); 
        document.getElementById("touche_do").style.backgroundColor = "black";}

    if ( event.keyCode == 50 ) { 
        document.getElementById('do#').play(); 
        document.getElementById("touche_do#").style.backgroundColor = "black";}

    if ( event.keyCode == 90 ) {
        document.getElementById('re').play();
        document.getElementById("touche_re").style.backgroundColor = "black";}

    if ( event.keyCode == 51 ) {
        document.getElementById('re#').play();
        document.getElementById("touche_re#").style.backgroundColor = "black";}

    if ( event.keyCode == 69 ) {
        document.getElementById('mi').play();
        document.getElementById("touche_mi").style.backgroundColor = "black";}

    if ( event.keyCode == 82 ) {
        document.getElementById('fa').play();
        document.getElementById("touche_fa").style.backgroundColor = "black";}

    if ( event.keyCode == 53 ) {
        document.getElementById('fa#').play();
        document.getElementById("touche_fa#").style.backgroundColor = "black";}

    if ( event.keyCode == 84 ) {
        document.getElementById('sol').play();
        document.getElementById("touche_sol").style.backgroundColor = "black";}

    if ( event.keyCode == 54 ) {
        document.getElementById('sol#').play();
        document.getElementById("touche_sol#").style.backgroundColor = "black";}

    if ( event.keyCode == 89 ) {
        document.getElementById('la').play();
        document.getElementById("touche_la").style.backgroundColor = "black";}

    if ( event.keyCode == 55 ) {
        document.getElementById('la#').play();
        document.getElementById("touche_la#").style.backgroundColor = "black";}

    if ( event.keyCode == 85 ) {
        document.getElementById('si').play();
        document.getElementById("touche_si").style.backgroundColor = "black";}

    if ( event.keyCode == 73 ) {
        document.getElementById('do2').play();
        document.getElementById("touche_do2").style.backgroundColor = "black";}

    /* -------------------------------------------------------------------- */

    if ( event.keyCode == 87 ) { 
        document.getElementById('do2').play(); 
        document.getElementById("touche_do2bis").style.backgroundColor = "black";}

    if ( event.keyCode == 83 ) { 
        document.getElementById('do2#').play(); 
        document.getElementById("touche_do2#").style.backgroundColor = "black";}

    if ( event.keyCode == 88 ) {
        document.getElementById('re2').play();
        document.getElementById("touche_re2").style.backgroundColor = "black";}

    if ( event.keyCode == 68 ) {
        document.getElementById('re2#').play();
        document.getElementById("touche_re2#").style.backgroundColor = "black";}

    if ( event.keyCode == 67 ) {
        document.getElementById('mi2').play();
        document.getElementById("touche_mi2").style.backgroundColor = "black";}

    if ( event.keyCode == 86 ) {
        document.getElementById('fa2').play();
        document.getElementById("touche_fa2").style.backgroundColor = "black";}

    if ( event.keyCode == 71 ) {
        document.getElementById('fa2#').play();
        document.getElementById("touche_fa2#").style.backgroundColor = "black";}

    if ( event.keyCode == 66 ) {
        document.getElementById('sol2').play();
        document.getElementById("touche_sol2").style.backgroundColor = "black";}

    if ( event.keyCode == 72 ) {
        document.getElementById('sol2#').play();
        document.getElementById("touche_sol2#").style.backgroundColor = "black";}

    if ( event.keyCode == 78 ) {
        document.getElementById('la2').play();
        document.getElementById("touche_la2").style.backgroundColor = "black";}

    if ( event.keyCode == 74 ) {
        document.getElementById('la2#').play();
        document.getElementById("touche_la2#").style.backgroundColor = "black";}

    if ( event.keyCode == 188 ) {
        document.getElementById('si2').play();
        document.getElementById("touche_si2").style.backgroundColor = "black";}

    if ( event.keyCode == 190 ) {
        document.getElementById('do3').play();
        document.getElementById("touche_do3").style.backgroundColor = "black";}
        
}



/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */



document.onkeyup = function( event ) {

 
    if ( event.keyCode == 65 ) { 
        document.getElementById('do').pause();
        document.getElementById('do').currentTime = 0; 
        document.getElementById("touche_do").style.backgroundColor = "white";}

    if ( event.keyCode == 50 ) { 
        document.getElementById('do#').pause();
        document.getElementById('do#').currentTime = 0; 
        document.getElementById("touche_do#").style.backgroundColor = "white";}

    if ( event.keyCode == 90 ) {
        document.getElementById('re').pause();
        document.getElementById('re').currentTime = 0;
        document.getElementById("touche_re").style.backgroundColor = "white";}

    if ( event.keyCode == 51 ) {
        document.getElementById('re#').pause();
        document.getElementById('re#').currentTime = 0;
        document.getElementById("touche_re#").style.backgroundColor = "white";}

    if ( event.keyCode == 69 ) {
        document.getElementById('mi').pause();
        document.getElementById('mi').currentTime = 0;
        document.getElementById("touche_mi").style.backgroundColor = "white";}


    if ( event.keyCode == 82 ) {
        document.getElementById('fa').pause();
        document.getElementById('fa').currentTime = 0;
        document.getElementById("touche_fa").style.backgroundColor = "white";}

    if ( event.keyCode == 53 ) {
        document.getElementById('fa#').pause();
        document.getElementById('fa#').currentTime = 0;
        document.getElementById("touche_fa#").style.backgroundColor = "white";}

    if ( event.keyCode == 84 ) {
        document.getElementById('sol').pause();
        document.getElementById('sol').currentTime = 0;
        document.getElementById("touche_sol").style.backgroundColor = "white";}

    if ( event.keyCode == 54 ) {
        document.getElementById('sol#').pause();
        document.getElementById('sol#').currentTime = 0;
        document.getElementById("touche_sol#").style.backgroundColor = "white";}

    if ( event.keyCode == 89 ) {
     document.getElementById('la').pause();
        document.getElementById('la').currentTime = 0;
        document.getElementById("touche_la").style.backgroundColor = "white";}

    if ( event.keyCode == 55 ) {
         document.getElementById('la#').pause();
        document.getElementById('la#').currentTime = 0;
        document.getElementById("touche_la#").style.backgroundColor = "white";}

    if ( event.keyCode == 85 ) {
     document.getElementById('si').pause();
        document.getElementById('si').currentTime = 0;
        document.getElementById("touche_si").style.backgroundColor = "white";}


    if ( event.keyCode == 73 ) {
         document.getElementById('do2').pause();
        document.getElementById('do2').currentTime = 0;
        document.getElementById("touche_do2").style.backgroundColor = "white";}

    if ( event.keyCode == 57 ) {
        document.getElementById('do2#').pause();
        document.getElementById('do2#').currentTime = 0;
        document.getElementById("touche_do2#").style.backgroundColor = "white";}

    /* -------------------------------------------------------------------- */

    if ( event.keyCode == 87 ) { 
        document.getElementById('do2').pause();
        document.getElementById("do2") .currentTime = 0;
        document.getElementById("touche_do2bis").style.backgroundColor = "white";}

    if ( event.keyCode == 83 ) { 
        document.getElementById('do2#').pause();
        document.getElementById("do2#") .currentTime = 0;
        document.getElementById("touche_do2#").style.backgroundColor = "white";}

    if ( event.keyCode == 88 ) {
        document.getElementById('re2').pause();
        document.getElementById("re2").currentTime = 0;
        document.getElementById("touche_re2").style.backgroundColor = "white";}

    if ( event.keyCode == 68 ) {
        document.getElementById('re2#').pause();
        document.getElementById("re2#").currentTime = 0;
        document.getElementById("touche_re2#").style.backgroundColor = "white";}

    if ( event.keyCode == 67 ) {
        document.getElementById('mi2').pause();
        document.getElementById("mi2").currentTime = 0;
        document.getElementById("touche_mi2").style.backgroundColor = "white";}

    if ( event.keyCode == 86 ) {
        document.getElementById('fa2').pause();
        document.getElementById("fa2").currentTime = 0;
        document.getElementById("touche_fa2").style.backgroundColor = "white";}

    if ( event.keyCode == 71 ) {
        document.getElementById('fa2#').pause();
        document.getElementById("fa2#").currentTime = 0;
        document.getElementById("touche_fa2#").style.backgroundColor = "white";}

    if ( event.keyCode == 66 ) {
        document.getElementById('sol2').pause();
        document.getElementById("sol2").currentTime = 0;
        document.getElementById("touche_sol2").style.backgroundColor = "white";}

    if ( event.keyCode == 72 ) {
        document.getElementById('sol2#').pause();
        document.getElementById("sol2#").currentTime = 0;
        document.getElementById("touche_sol2#").style.backgroundColor = "white";}

    if ( event.keyCode == 78 ) {
        document.getElementById('la2').pause();
        document.getElementById("la2").currentTime = 0;
        document.getElementById("touche_la2").style.backgroundColor = "white";}

    if ( event.keyCode == 74 ) {
        document.getElementById('la2#').pause();
        document.getElementById("la2#").currentTime = 0;
        document.getElementById("touche_la2#").style.backgroundColor = "white";}

    if ( event.keyCode == 188 ) {
        document.getElementById('si2').pause();
        document.getElementById("si2").currentTime = 0;
        document.getElementById("touche_si2").style.backgroundColor = "white";}

    if ( event.keyCode == 190 ) {
        document.getElementById('do3').pause();
        document.getElementById("do3").currentTime = 0;
        document.getElementById("touche_do3").style.backgroundColor = "white";}


    }

