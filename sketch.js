
/*
L'elaborato presenta una griglia vocale che si realizza facendo lo spelling di nome, cognome, animale preferito
e principessa disney preferita. Ogni lettera ha una coordinata prestabilita.
Una volta completate si crea un patter personale!

PUNTO 1:
  TENERE PREMUTO UNO DEI TASTI:
    N = NOME
    C = COGNOME
    A = ANIMALE PREFERITO
    D = PRINCIPESSA DISNEY PREFERITA

PUNTO 2:
  MENTRE SI TIENE PREMUTO UNO DEI TASTI, COMINCIARE A FARE LO SPELLING CON COMANDO VOCALE.
  QUANDO APPARE IL QUADRATO CORRISPONDENTE ALLA LETTERA, CONTINUARE CON LO SPELLING.

PUNTO 3:
  UNA VOLTA CONCLUSO LO SPELLING DEL TASTO CORRISPONDENTE, CHIUDERE PRONUNCIANDO FINE, IN SEGUITO STOP.

PUNTO 4:
  CONTINUARE PER TUTTI I TASTI PER POTER VEDERE IL PROPRIO PATTERN PERSONALE!
*/

var mic;
var leng;
var speech = new p5.SpeechRec('it-IT');

//VARIABILI PER LE IMMAGINI DEI QUADRATI
  //LETTERE NOME
  {
    var n_a;
    var n_b;
    var n_c;
    var n_d;
    var n_e;
    var n_f;
    var n_g;
    var n_h;
    var n_i;
    var n_j;
    var n_k;
    var n_l;
    var n_m;
    var n_n;
    var n_o;
    var n_p;
    var n_q;
    var n_r;
    var n_s;
    var n_t;
    var n_u;
    var n_v;
    var n_w;
    var n_x;
    var n_y;
    var n_z;
  }
  //LETTERE COGNOME
  {
    var c_a;
    var c_b;
    var c_c;
    var c_d;
    var c_e;
    var c_f;
    var c_g;
    var c_h;
    var c_i;
    var c_j;
    var c_k;
    var c_l;
    var c_m;
    var c_n;
    var c_o;
    var c_p;
    var c_q;
    var c_r;
    var c_s;
    var c_t;
    var c_u;
    var c_v;
    var c_w;
    var c_x;
    var c_y;
    var c_z;
  }
  //LETTERE ANIMALE
  {
    var a_a;
    var a_b;
    var a_c;
    var a_d;
    var a_e;
    var a_f;
    var a_g;
    var a_h;
    var a_i;
    var a_j;
    var a_k;
    var a_l;
    var a_m;
    var a_n;
    var a_o;
    var a_p;
    var a_q;
    var a_r;
    var a_s;
    var a_t;
    var a_u;
    var a_v;
    var a_w;
    var a_x;
    var a_y;
    var a_z;
}
  //LETTERE PRINCIPESSA
  {
    var a_a;
    var a_b;
    var a_c;
    var a_d;
    var a_e;
    var a_f;
    var a_g;
    var a_h;
    var a_i;
    var a_j;
    var a_k;
    var a_l;
    var a_m;
    var a_n;
    var a_o;
    var a_p;
    var a_q;
    var a_r;
    var a_s;
    var a_t;
    var a_u;
    var a_v;
    var a_w;
    var a_x;
    var a_y;
    var a_z;
}
  //LETTERE
  {
    var l_n;
    var l_n1;
    var l_c;
    var l_c1;
    var l_a;
    var l_a1;
    var l_d;
    var l_d1;
  }

function preload(){

  {
    n_a = loadImage("./assets/ALFABETI/1_NOME/N-01.png");
    n_b = loadImage("./assets/ALFABETI/1_NOME/N-02.png");
    n_c = loadImage("./assets/ALFABETI/1_NOME/N-03.png");
    n_d = loadImage("./assets/ALFABETI/1_NOME/N-04.png");
    n_e = loadImage("./assets/ALFABETI/1_NOME/N-05.png");
    n_f = loadImage("./assets/ALFABETI/1_NOME/N-06.png");
    n_g = loadImage("./assets/ALFABETI/1_NOME/N-07.png");
    n_h = loadImage("./assets/ALFABETI/1_NOME/N-08.png");
    n_i = loadImage("./assets/ALFABETI/1_NOME/N-09.png");
    n_j = loadImage("./assets/ALFABETI/1_NOME/N-10.png");
    n_k = loadImage("./assets/ALFABETI/1_NOME/N-11.png");
    n_l = loadImage("./assets/ALFABETI/1_NOME/N-12.png");
    n_m = loadImage("./assets/ALFABETI/1_NOME/N-13.png");
    n_n = loadImage("./assets/ALFABETI/1_NOME/N-14.png");
    n_o = loadImage("./assets/ALFABETI/1_NOME/N-15.png");
    n_p = loadImage("./assets/ALFABETI/1_NOME/N-16.png");
    n_q = loadImage("./assets/ALFABETI/1_NOME/N-17.png");
    n_r = loadImage("./assets/ALFABETI/1_NOME/N-18.png");
    n_s = loadImage("./assets/ALFABETI/1_NOME/N-19.png");
    n_t = loadImage("./assets/ALFABETI/1_NOME/N-20.png");
    n_u = loadImage("./assets/ALFABETI/1_NOME/N-21.png");
    n_v = loadImage("./assets/ALFABETI/1_NOME/N-22.png");
    n_w = loadImage("./assets/ALFABETI/1_NOME/N-23.png");
    n_x = loadImage("./assets/ALFABETI/1_NOME/N-24.png");
    n_y = loadImage("./assets/ALFABETI/1_NOME/N-25.png");
    n_z = loadImage("./assets/ALFABETI/1_NOME/N-26.png");}//NOME

  {
    c_a = loadImage("./assets/ALFABETI/2_COGNOME/C-01.png");
    c_b = loadImage("./assets/ALFABETI/2_COGNOME/C-02.png");
    c_c = loadImage("./assets/ALFABETI/2_COGNOME/C-03.png");
    c_d = loadImage("./assets/ALFABETI/2_COGNOME/C-04.png");
    c_e = loadImage("./assets/ALFABETI/2_COGNOME/C-05.png");
    c_f = loadImage("./assets/ALFABETI/2_COGNOME/C-06.png");
    c_g = loadImage("./assets/ALFABETI/2_COGNOME/C-07.png");
    c_h = loadImage("./assets/ALFABETI/2_COGNOME/C-08.png");
    c_i = loadImage("./assets/ALFABETI/2_COGNOME/C-09.png");
    c_j = loadImage("./assets/ALFABETI/2_COGNOME/C-10.png");
    c_k = loadImage("./assets/ALFABETI/2_COGNOME/C-11.png");
    c_l = loadImage("./assets/ALFABETI/2_COGNOME/C-12.png");
    c_m = loadImage("./assets/ALFABETI/2_COGNOME/C-13.png");
    c_n = loadImage("./assets/ALFABETI/2_COGNOME/C-14.png");
    c_o = loadImage("./assets/ALFABETI/2_COGNOME/C-15.png");
    c_p = loadImage("./assets/ALFABETI/2_COGNOME/C-16.png");
    c_q = loadImage("./assets/ALFABETI/2_COGNOME/C-17.png");
    c_r = loadImage("./assets/ALFABETI/2_COGNOME/C-18.png");
    c_s = loadImage("./assets/ALFABETI/2_COGNOME/C-19.png");
    c_t = loadImage("./assets/ALFABETI/2_COGNOME/C-20.png");
    c_u = loadImage("./assets/ALFABETI/2_COGNOME/C-21.png");
    c_v = loadImage("./assets/ALFABETI/2_COGNOME/C-22.png");
    c_w = loadImage("./assets/ALFABETI/2_COGNOME/C-23.png");
    c_x = loadImage("./assets/ALFABETI/2_COGNOME/C-24.png");
    c_y = loadImage("./assets/ALFABETI/2_COGNOME/C-25.png");
    c_z = loadImage("./assets/ALFABETI/2_COGNOME/C-26.png");}//COGNOME

  {
    a_a = loadImage("./assets/ALFABETI/3_ANIMALE/A_-01.png");
    a_b = loadImage("./assets/ALFABETI/3_ANIMALE/A_-02.png");
    a_c = loadImage("./assets/ALFABETI/3_ANIMALE/A_-03.png");
    a_d = loadImage("./assets/ALFABETI/3_ANIMALE/A_-04.png");
    a_e = loadImage("./assets/ALFABETI/3_ANIMALE/A_-05.png");
    a_f = loadImage("./assets/ALFABETI/3_ANIMALE/A_-06.png");
    a_g = loadImage("./assets/ALFABETI/3_ANIMALE/A_-07.png");
    a_h = loadImage("./assets/ALFABETI/3_ANIMALE/A_-08.png");
    a_i = loadImage("./assets/ALFABETI/3_ANIMALE/A_-09.png");
    a_j = loadImage("./assets/ALFABETI/3_ANIMALE/A_-10.png");
    a_k = loadImage("./assets/ALFABETI/3_ANIMALE/A_-11.png");
    a_l = loadImage("./assets/ALFABETI/3_ANIMALE/A_-12.png");
    a_m = loadImage("./assets/ALFABETI/3_ANIMALE/A_-13.png");
    a_n = loadImage("./assets/ALFABETI/3_ANIMALE/A_-14.png");
    a_o = loadImage("./assets/ALFABETI/3_ANIMALE/A_-15.png");
    a_p = loadImage("./assets/ALFABETI/3_ANIMALE/A_-16.png");
    a_q = loadImage("./assets/ALFABETI/3_ANIMALE/A_-17.png");
    a_r = loadImage("./assets/ALFABETI/3_ANIMALE/A_-18.png");
    a_s = loadImage("./assets/ALFABETI/3_ANIMALE/A_-19.png");
    a_t = loadImage("./assets/ALFABETI/3_ANIMALE/A_-20.png");
    a_u = loadImage("./assets/ALFABETI/3_ANIMALE/A_-21.png");
    a_v = loadImage("./assets/ALFABETI/3_ANIMALE/A_-22.png");
    a_w = loadImage("./assets/ALFABETI/3_ANIMALE/A_-23.png");
    a_x = loadImage("./assets/ALFABETI/3_ANIMALE/A_-24.png");
    a_y = loadImage("./assets/ALFABETI/3_ANIMALE/A_-25.png");
    a_z = loadImage("./assets/ALFABETI/3_ANIMALE/A_-26.png");}//ANIMALE

  {
    p_a = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-01.png");
    p_b = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-02.png");
    p_c = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-03.png");
    p_d = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-04.png");
    p_e = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-05.png");
    p_f = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-06.png");
    p_g = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-07.png");
    p_h = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-08.png");
    p_i = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-09.png");
    p_j = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-10.png");
    p_k = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-11.png");
    p_l = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-12.png");
    p_m = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-13.png");
    p_n = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-14.png");
    p_o = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-15.png");
    p_p = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-16.png");
    p_q = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-17.png");
    p_r = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-18.png");
    p_s = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-19.png");
    p_t = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-20.png");
    p_u = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-21.png");
    p_v = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-22.png");
    p_w = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-23.png");
    p_x = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-24.png");
    p_y = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-25.png");
    p_z = loadImage("./assets/ALFABETI/4_PRINCIPESSA/P_-26.png");}//PRINCIPESSA

  {
    l_n = loadImage("./assets/ALFABETI/5_LETTERE/L1-02.png");
    l_n1 = loadImage("./assets/ALFABETI/5_LETTERE/L-02.png");
    l_c = loadImage("./assets/ALFABETI/5_LETTERE/L1-03.png");
    l_c1 = loadImage("./assets/ALFABETI/5_LETTERE/L-03.png");
    l_a = loadImage("./assets/ALFABETI/5_LETTERE/L1-04.png");
    l_a1 = loadImage("./assets/ALFABETI/5_LETTERE/L-04.png");
    l_d = loadImage("./assets/ALFABETI/5_LETTERE/L1-05.png");
    l_d1 = loadImage("./assets/ALFABETI/5_LETTERE/L-05.png");
}//LETTERE
}

function setup(){
  createCanvas(windowWidth,windowHeight);
//LETTERE DA TENERE PREMUTE PER LA LETTURA DEL COMANDO
  image(l_n, (windowWidth/2) - (l_n.width), (windowHeight/2) - (l_n.height), l_n.width, l_n.height);
  image(l_c, (windowWidth/2) - (l_c.width), (windowHeight/2) - (l_c.height), l_c.width, l_c.height);
  image(l_a, (windowWidth/2) - (l_a.width), (windowHeight/2) - (l_a.height), l_a.width, l_a.height);
  image(l_d, (windowWidth/2) - (l_d.width), (windowHeight/2) - (l_d.height), l_d.width, l_d.height);

  speech.continuous = true;
  speech.interimResults = true;
  speech.start();
}

function draw() {
  speech.onResult = showResult;
//UNA VOLTA TENUTE PREMUTE QUESTE LETTERE, FARE LO SPELLING DI:
//NOME, COGNOME, ANIMALE PREFERITO E PRINCIPESSA DISNEY PREFERITA
  if(keyIsDown(78)){
    if(speech.resultString == 'a'|| speech.resultString == 'ah' || speech.resultString == 'A'){
      image(n_a, (windowWidth/2) - (n_a.width), (windowHeight/2) - (n_a.height), n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'b' || speech.resultString == 'bi' || speech.resultString == 'B'){
      image(n_b, (windowWidth/2) - (n_b.width), (windowHeight/2) - (n_b.height), n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'c' || speech.resultString == 'ci' || speech.resultString == 'C'){
      image(n_c, (windowWidth/2) - (n_c.width), (windowHeight/2) - (n_c.height), n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'd' || speech.resultString == 'di' || speech.resultString == 'D'){
      image(n_d, (windowWidth/2) - (n_d.width), (windowHeight/2) - (n_d.height),n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'e' || speech.resultString == 'eh' || speech.resultString == 'E'){
      image(n_e, (windowWidth/2) - (n_e.width), (windowHeight/2) - (n_e.height), n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'f' || speech.resultString == 'effe' || speech.resultString == 'F'){
      image(n_f, (windowWidth/2) - (n_f.width), (windowHeight/2) - (n_f.height), n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'g' || speech.resultString == 'gi' || speech.resultString == 'G'){
      image(n_g, (windowWidth/2) - (n_g.width), (windowHeight/2) - (n_g.height), n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'h' || speech.resultString == 'acca' || speech.resultString == 'H'){
      image(n_h, (windowWidth/2) - (n_h.width), (windowHeight/2) - (n_h.height),n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'i' || speech.resultString == 'ih' || speech.resultString == 'I'){
      image(n_i, (windowWidth/2) - (n_i.width), (windowHeight/2) - (n_i.height),n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'j' || speech.resultString == 'jay' || speech.resultString == 'J'){
      image(n_j, (windowWidth/2) - (n_j.width), (windowHeight/2) - (n_j.height),n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'k' || speech.resultString == 'kappa' || speech.resultString == 'K'){
      image(n_k, (windowWidth/2) - (n_k.width), (windowHeight/2) - (n_k.height),n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'l' || speech.resultString == 'elle' || speech.resultString == 'L'){
      image(n_l, (windowWidth/2) - (n_l.width), (windowHeight/2) - (n_l.height),n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'm' || speech.resultString == 'emme' || speech.resultString == 'M'){
      image(n_m, (windowWidth/2) - (n_m.width), (windowHeight/2) - (n_m.height),n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'n' || speech.resultString == 'enne' || speech.resultString == 'N'){
      image(n_n, (windowWidth/2) - (n_n.width), (windowHeight/2) - (n_n.height), n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'o' || speech.resultString == 'oh' || speech.resultString == 'ho' || speech.resultString == 'O'){
      image(n_o, (windowWidth/2) - (n_o.width), (windowHeight/2) - (n_o.height), n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'p' || speech.resultString == 'pi' || speech.resultString == 'P'){
      image(n_p, (windowWidth/2) - (n_p.width), (windowHeight/2) - (n_p.height), n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'q' || speech.resultString == 'qu' || speech.resultString == 'Q'){
      image(n_q, (windowWidth/2) - (n_q.width), (windowHeight/2) - (n_q.height), n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'r' || speech.resultString == 'erre' || speech.resultString == 'R'){
      image(n_r, (windowWidth/2) - (n_r.width), (windowHeight/2) - (n_r.height), n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 's' || speech.resultString == 'esse' || speech.resultString == 'S'){
      image(n_s, (windowWidth/2) - (n_s.width), (windowHeight/2) - (n_s.height),n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 't' || speech.resultString == 'ti' || speech.resultString == 'T'){
      image(n_t, (windowWidth/2) - (n_t.width), (windowHeight/2) - (n_t.height),n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'u' || speech.resultString == 'uh' || speech.resultString == 'U' || speech.resultString == 'Pou'){
      image(n_u, (windowWidth/2) - (n_u.width), (windowHeight/2) - (n_u.height), n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'v' || speech.resultString == 'vi' || speech.resultString == 'V'){
      image(n_v, (windowWidth/2) - (n_v.width), (windowHeight/2) - (n_v.height), n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'w' || speech.resultString == 'doppiavvu' || speech.resultString == 'doppiavu' || speech.resultString == 'W'){
      image(n_w, (windowWidth/2) - (n_w.width), (windowHeight/2) - (n_w.height), n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'x' || speech.resultString == 'ix' || speech.resultString == 'ics' || speech.resultString == 'X'){
      image(n_x, (windowWidth/2) - (n_x.width), (windowHeight/2) - (n_x.height),n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'y' || speech.resultString == 'ipsilon' || speech.resultString == 'Y'){
      image(n_y, (windowWidth/2) - (n_a.width), (windowHeight/2) - (n_a.height), n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'z' || speech.resultString == 'zeta' || speech.resultString == 'Z'){
      image(n_z, (windowWidth/2) - (n_z.width), (windowHeight/2) - (n_z.height), n_a.width*2, n_a.height*2);
    }
    if(speech.resultString == 'fine' || speech.resultString == 'FINE'){
      image(l_n1, (windowWidth/2) - (l_n.width), (windowHeight/2) - (l_n.height), l_n.width, l_n.height);
    }
    if(speech.resultString == 'cancella' || speech.resultString == 'CANCELLA'){x
    }
}

  if(keyIsDown(67)){
    if(speech.resultString == 'a'|| speech.resultString == 'ah' || speech.resultString == 'A'){
      image(c_a, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'b' || speech.resultString == 'bi' || speech.resultString == 'B'){
      image(c_b, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'c' || speech.resultString == 'ci' || speech.resultString == 'C'){
      image(c_c, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'd' || speech.resultString == 'di' || speech.resultString == 'D'){
      image(c_d, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'e' || speech.resultString == 'eh' || speech.resultString == 'E'){
      image(c_e, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'f' || speech.resultString == 'effe' || speech.resultString == 'F'){
      image(c_f, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'g' || speech.resultString == 'gi' || speech.resultString == 'G'){
      image(c_g, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'h' || speech.resultString == 'acca' || speech.resultString == 'H'){
      image(c_h, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'i' || speech.resultString == 'ih' || speech.resultString == 'I'){
      image(c_i, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'j' || speech.resultString == 'jay' || speech.resultString == 'J'){
      image(c_j, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'k' || speech.resultString == 'kappa' || speech.resultString == 'K'){
      image(c_k,(windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'l' || speech.resultString == 'elle' || speech.resultString == 'L'){
      image(c_l, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'm' || speech.resultString == 'emme' || speech.resultString == 'M'){
      image(c_m, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'n' || speech.resultString == 'enne' || speech.resultString == 'N'){
      image(c_n, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'o' || speech.resultString == 'oh' || speech.resultString == 'ho' || speech.resultString == 'O'){
      image(c_o, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'p' || speech.resultString == 'pi' || speech.resultString == 'P'){
      image(c_p, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'q' || speech.resultString == 'qu' || speech.resultString == 'Q'){
      image(c_q, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'r' || speech.resultString == 'erre' || speech.resultString == 'R'){
      image(c_r, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 's' || speech.resultString == 'esse' || speech.resultString == 'S'){
      image(c_s, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 't' || speech.resultString == 'ti' || speech.resultString == 'T'){
      image(c_t, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'u' || speech.resultString == 'uh' || speech.resultString == 'U' || speech.resultString == 'Pou'){
      image(c_u, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'v' || speech.resultString == 'vi' || speech.resultString == 'V'){
      image(c_v, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'w' || speech.resultString == 'doppiavvu' || speech.resultString == 'doppiavu' || speech.resultString == 'W'){
      image(c_w, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'x' || speech.resultString == 'ix' || speech.resultString == 'X' || speech.resultString == 'ics'){
      image(c_x, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'y' || speech.resultString == 'ipsilon' || speech.resultString == 'Y'){
      image(c_y, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'z' || speech.resultString == 'zeta' || speech.resultString == 'Z'){
      image(c_z, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'fine' || speech.resultString == 'FINE'){
    image(l_c1, (windowWidth/2) - (l_n.width), (windowHeight/2) - (l_n.height), l_n.width, l_n.height);
    }
  }

  if(keyIsDown(65)){
    if(speech.resultString == 'a'|| speech.resultString == 'ah' || speech.resultString == 'A'){
      image(a_a, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'b' || speech.resultString == 'bi' || speech.resultString == 'B'){
      image(a_b, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'c' || speech.resultString == 'ci' || speech.resultString == 'C'){
      image(a_c, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'd' || speech.resultString == 'di' || speech.resultString == 'D'){
      image(a_d, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'e' || speech.resultString == 'eh' || speech.resultString == 'E'){
      image(a_e, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'f' || speech.resultString == 'effe' || speech.resultString == 'F'){
      image(a_f, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'g' || speech.resultString == 'gi' || speech.resultString == 'G'){
      image(a_g, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'h' || speech.resultString == 'acca' || speech.resultString == 'H'){
      image(a_h, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'i' || speech.resultString == 'ih' || speech.resultString == 'I'){
      image(a_i, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'j' || speech.resultString == 'jay' || speech.resultString == 'J'){
      image(a_j, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'k' || speech.resultString == 'kappa' || speech.resultString == 'K'){
      image(a_k, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'l' || speech.resultString == 'elle' || speech.resultString == 'L'){
      image(a_l, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'm' || speech.resultString == 'emme' || speech.resultString == 'M'){
      image(a_m, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'n' || speech.resultString == 'enne' || speech.resultString == 'N'){
      image(a_n, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'o' || speech.resultString == 'oh' || speech.resultString == 'ho' || speech.resultString == 'O'){
      image(a_o, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'p' || speech.resultString == 'pi' || speech.resultString == 'P'){
      image(a_p, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'q' || speech.resultString == 'qu' || speech.resultString == 'Q'){
      image(a_q, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'r' || speech.resultString == 'erre' || speech.resultString == 'R'){
      image(a_r, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 's' || speech.resultString == 'esse' || speech.resultString == 'S'){
      image(a_s, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 't' || speech.resultString == 'ti' || speech.resultString == 'T'){
      image(a_t, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'u' || speech.resultString == 'uh' || speech.resultString == 'U' || speech.resultString == 'Pou'){
      image(a_u, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'v' || speech.resultString == 'vi' || speech.resultString == 'V'){
      image(a_v, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_g.width*2, c_h.height*2);
    }
    if(speech.resultString == 'w' || speech.resultString == 'doppiavvu' || speech.resultString == 'doppiavu' || speech.resultString == 'W'){
      image(a_w, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_g.width*2, c_h.height*2);
    }
    if(speech.resultString == 'x' || speech.resultString == 'ix' || speech.resultString == 'X' || speech.resultString == 'ics'){
      image(a_x, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_g.width*2, c_h.height*2);
    }
    if(speech.resultString == 'y' || speech.resultString == 'ipsilon' || speech.resultString == 'Y'){
      image(a_y, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_g.width*2, c_h.height*2);
    }
    if(speech.resultString == 'z' || speech.resultString == 'zeta' || speech.resultString == 'Z'){
      image(a_z, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_g.width*2, c_h.height*2);
    }
    else if(speech.resultString == 'fine' || speech.resultString == 'FINE'){
    image(l_a1, (windowWidth/2) - (l_n.width), (windowHeight/2) - (l_n.height), l_n.width, l_n.height);
    }
  }

  if(keyIsDown(68)){
    if(speech.resultString == 'a'|| speech.resultString == 'ah' || speech.resultString == 'A'){
      image(p_a, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'b' || speech.resultString == 'bi' || speech.resultString == 'B'){
      image(p_b, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'c' || speech.resultString == 'ci' || speech.resultString == 'C'){
      image(p_c, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'd' || speech.resultString == 'di' || speech.resultString == 'D'){
      image(p_d, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'e' || speech.resultString == 'eh' || speech.resultString == 'E'){
      image(p_e, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'f' || speech.resultString == 'effe' || speech.resultString == 'F'){
      image(p_f, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'g' || speech.resultString == 'gi' || speech.resultString == 'G'){
      image(p_g, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'h' || speech.resultString == 'acca' || speech.resultString == 'H'){
      image(p_h,(windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'i' || speech.resultString == 'ih' || speech.resultString == 'I'){
      image(p_i, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'j' || speech.resultString == 'jay' || speech.resultString == 'J'){
      image(p_j, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'k' || speech.resultString == 'kappa' || speech.resultString == 'K'){
      image(p_k, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'l' || speech.resultString == 'elle' || speech.resultString == 'L'){
      image(p_l, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'm' || speech.resultString == 'emme' || speech.resultString == 'M'){
      image(p_m, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'n' || speech.resultString == 'enne' || speech.resultString == 'N'){
      image(p_n, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'o' || speech.resultString == 'oh' || speech.resultString == 'ho' || speech.resultString == 'O'){
      image(p_o, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'p' || speech.resultString == 'pi' || speech.resultString == 'P'){
      image(p_p, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'q' || speech.resultString == 'qu' || speech.resultString == 'Q'){
      image(p_q, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'r' || speech.resultString == 'erre' || speech.resultString == 'R'){
      image(p_r, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 's' || speech.resultString == 'esse' || speech.resultString == 'S'){
      image(p_s, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 't' || speech.resultString == 'ti' || speech.resultString == 'T'){
      image(p_t, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'u' || speech.resultString == 'uh' || speech.resultString == 'U' || speech.resultString == 'Pou'){
      image(p_u, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'v' || speech.resultString == 'vi' || speech.resultString == 'V'){
      image(p_v, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'w' || speech.resultString == 'doppiavvu' || speech.resultString == 'doppiavu' || speech.resultString == 'W'){
      image(p_w, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'x' || speech.resultString == 'ix' || speech.resultString == 'X'){
      image(p_x,(windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'y' || speech.resultString == 'ipsilon' || speech.resultString == 'Y'){
      image(p_y, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    if(speech.resultString == 'z' || speech.resultString == 'zeta' || speech.resultString == 'Z'){
      image(p_z, (windowWidth/2) - (c_a.width), (windowHeight/2) - (c_a.height), c_a.width*2, c_a.height*2);
    }
    else if(speech.resultString == 'fine' || speech.resultString == 'FINE'){
    image(l_d1, (windowWidth/2) - (l_n.width), (windowHeight/2) - (l_n.height), l_n.width, l_n.height);
    }
}
}

function showResult()
{
  console.log(speech.resultString);
}
