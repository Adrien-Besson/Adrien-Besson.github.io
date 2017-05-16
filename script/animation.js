/// VARIABLES COULEURS

var colors = [
  'magenta',
  'cyan',
  'pink'
];
var colorform = [
  'green',
  'purple',
  'blue',
  'red'
];

var randomcolor;
var randomcolorform;

/// VARIABLES PARAMETRES

var settings = {
    largeur : 0,
    x : 0,
    y : 0,
}
var settings2 = {
    diam : 0,
    x : 0,
    y : 0
}

///////////////////////// FONCTION PARAMETRE

function setup(){
  createCanvas(windowWidth,windowHeight);
  randomcolor = random(colors);
  randomcolorform = random(colorform);
  noStroke()
}

///////////////////////// FONCTION DESSIN

function draw(){
  background(randomcolor);
  fill(randomcolorform);

  triangle(
    settings.x, settings.y - settings.largeur,
    settings.x - settings.largeur, settings.y + settings.largeur,
    settings.x + settings.largeur, settings.y + settings.largeur
  );
  ellipse(settings2.x,settings2.y,settings2.diam)
}

///////////////////////// FONCTION CLAVIER

////////// TOUCHE 1

function keyTyped(){
  if (key ==='g'){
    settings.x = random(width);
    settings.y = random(width);
    randomcolorform = random(colorform);
    randomcolor = random(colors);

    TweenMax.fromTo(settings,.3,{
      largeur:0,
    },
    {
      largeur:20,
      onComplete: anim2
    });
  }

  function anim2(){
    TweenMax.to(settings,.5,{
      largeur:0,
    });
  }

////////// TOUCHE 2

  if (key ==='c'){
    settings2.x = random(width);
    settings2.y = random(width);
    randomcolorform = random(colorform);
    randomcolor = random(colors);

      TweenMax.fromTo(settings2,.5,{
        diam:100
      },
      {
        diam:0,
      });
    }

}
