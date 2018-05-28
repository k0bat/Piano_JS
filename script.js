document.onkeydown = function( event ) {

    if ( event.keyCode == 81 ) { 
        document.getElementById('do').play(); 
        document.getElementById("touche_do").style.backgroundColor = "black";}

    if ( event.keyCode == 90 ) { 
        document.getElementById('do#').play(); 
        document.getElementById("touche_do#").style.backgroundColor = "black";}

    if ( event.keyCode == 83 ) {
        document.getElementById('re').play();
        document.getElementById("touche_re").style.backgroundColor = "black";}

    if ( event.keyCode == 69 ) {
        document.getElementById('re#').play();
        document.getElementById("touche_re#").style.backgroundColor = "black";}

    if ( event.keyCode == 68 ) {
        document.getElementById('mi').play();
        document.getElementById("touche_mi").style.backgroundColor = "black";}


    if ( event.keyCode == 70 ) {
        document.getElementById('fa').play();
        document.getElementById("touche_fa").style.backgroundColor = "black";}

    if ( event.keyCode == 84 ) {
        document.getElementById('fa#').play();
        document.getElementById("touche_fa#").style.backgroundColor = "black";}

    if ( event.keyCode == 71 ) {
        document.getElementById('sol').play();
        document.getElementById("touche_sol").style.backgroundColor = "black";}

    if ( event.keyCode == 89 ) {
        document.getElementById('sol#').play();
        document.getElementById("touche_sol#").style.backgroundColor = "black";}

    if ( event.keyCode == 72 ) {
        document.getElementById('la').play();
        document.getElementById("touche_la").style.backgroundColor = "black";}

    if ( event.keyCode == 85 ) {
        document.getElementById('la#').play();
        document.getElementById("touche_la#").style.backgroundColor = "black";}

    if ( event.keyCode == 74 ) {
        document.getElementById('si').play();
        document.getElementById("touche_si").style.backgroundColor = "black";}


    if ( event.keyCode == 75 ) {
        document.getElementById('do2').play();
        document.getElementById("touche_do2").style.backgroundColor = "black";}

    if ( event.keyCode == 79 ) {
        document.getElementById('do2#').play();
        document.getElementById("touche_do2#").style.backgroundColor = "black";}

}

document.onkeyup = function( event ) {

 
    if ( event.keyCode == 81 ) { 
        document.getElementById('do').pause();
        document.getElementById('do').currentTime = 0; 
        document.getElementById("touche_do").style.backgroundColor = "white";}

    if ( event.keyCode == 90 ) { 
        document.getElementById('do#').pause();
        document.getElementById('do#').currentTime = 0; 
        document.getElementById("touche_do#").style.backgroundColor = "white";}

    if ( event.keyCode == 83 ) {
        document.getElementById('re').pause();
        document.getElementById('re').currentTime = 0;
        document.getElementById("touche_re").style.backgroundColor = "white";}

    if ( event.keyCode == 69 ) {
        document.getElementById('re#').pause();
        document.getElementById('re#').currentTime = 0;
        document.getElementById("touche_re#").style.backgroundColor = "white";}

    if ( event.keyCode == 68 ) {
        document.getElementById('mi').pause();
        document.getElementById('mi').currentTime = 0;
        document.getElementById("touche_mi").style.backgroundColor = "white";}


    if ( event.keyCode == 70 ) {
        document.getElementById('fa').pause();
        document.getElementById('fa').currentTime = 0;
        document.getElementById("touche_fa").style.backgroundColor = "white";}

    if ( event.keyCode == 84 ) {
        document.getElementById('fa#').pause();
        document.getElementById('fa#').currentTime = 0;
        document.getElementById("touche_fa#").style.backgroundColor = "white";}

    if ( event.keyCode == 71 ) {
        document.getElementById('sol').pause();
        document.getElementById('sol').currentTime = 0;
        document.getElementById("touche_sol").style.backgroundColor = "white";}

    if ( event.keyCode == 89 ) {
        document.getElementById('sol#').pause();
        document.getElementById('sol#').currentTime = 0;
        document.getElementById("touche_sol#").style.backgroundColor = "white";}

    if ( event.keyCode == 72 ) {
     document.getElementById('la').pause();
        document.getElementById('la').currentTime = 0;
        document.getElementById("touche_la").style.backgroundColor = "white";}

    if ( event.keyCode == 85 ) {
         document.getElementById('la#').pause();
        document.getElementById('la#').currentTime = 0;
        document.getElementById("touche_la#").style.backgroundColor = "white";}

    if ( event.keyCode == 74 ) {
     document.getElementById('si').pause();
        document.getElementById('si').currentTime = 0;
        document.getElementById("touche_si").style.backgroundColor = "white";}


    if ( event.keyCode == 75 ) {
         document.getElementById('do2').pause();
        document.getElementById('do2').currentTime = 0;
        document.getElementById("touche_do2").style.backgroundColor = "white";}

    if ( event.keyCode == 79 ) {
        document.getElementById('do2#').pause();
        document.getElementById('do2#').currentTime = 0;
        document.getElementById("touche_do2#").style.backgroundColor = "white";}

}

