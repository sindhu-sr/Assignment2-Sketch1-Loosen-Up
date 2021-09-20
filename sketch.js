let outerDialX = 300,
    innerDialX = 300
let punchHoleX = 300
let angle = 0
let holderY = 110
let circleDiameterColored = 600,
    circleDiameterWhite = 300
let buckleY = 55

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
}

function draw() {
    background(255, 255, 255);

    //Watch bands
    quad(270, 260, 275, 20, 325, 20, 330, 260); //Upper band
    quad(270, 340, 330, 340, 325, 550, 275, 550); //Lower band

    //Two Circles
    push();

    //Outer colored circle
    fill(128, 128, 128);
    circle(300, 300, circleDiameterColored);

    if (circleDiameterColored > 105) {
        circleDiameterColored = circleDiameterColored * 0.995; //Shrink colored circle
    }
    pop();

    //Inner white Circle
    push();
    stroke(0);
    circle(300, 300, circleDiameterWhite);

    if (circleDiameterWhite > 85) {
        circleDiameterWhite = circleDiameterWhite * 0.995; //Shrink white circle
    }
    pop();

    //Watch dial diagram
    rectMode(CENTER);
    stroke(0);
    rect(outerDialX, 300, 85, 85, 20);
    outerDialX = outerDialX + 1; //Move outer dial to the right
    stroke(0);
    rect(innerDialX, 300, 75, 75, 10);
    innerDialX = innerDialX - 1; //Move inner dial to the left

    //Watch band holder
    stroke(0);
    rectMode(CENTER);
    rect(300, holderY, 70, 15);
    if (holderY < 450) {
        holderY = holderY + 0.8; //Move holder to bottom
    }

    //Band punch holes - 6
    rectMode(CENTER);
    y = 0;
    push();

    if (angle >= 360) {
        translate(0, 120); //Apply this translation after angle crosses 360 degrees
    } else {
        translate(300, 450); //Apply this translation if angle is between 0 to 360 degrees
    }

    for (let i = 1; i <= 6; i++) {
        if (angle >= 360) {
            //Apply this style to punch holes after angle crosses 360 degrees
            noFill();
            stroke(1);
            rect(300, y, 22, 7, 3);
        } else {
            //Rotate punch holes in loop until angle reaches 360 degrees
            rotate(angle);
            fill(angle / 1.4, angle / 1.4, angle / 1.4); //Change color for rotations
            noStroke();
            rect(0, y, 22, 7, 3);
        }
        y = y + 20; //Distance between each punch hole
    }
    angle = angle + 1;
    pop();

    //Watch band buckle
    rectMode(CENTER);
    if (buckleY <= 535) {
        buckleY = buckleY + 1; //Move entire buckle object from top to bottom
    }
    rect(300, buckleY + 5, 70, 30);
    push();
    fill(buckleY, buckleY, buckleY);
    rect(300, buckleY, 55, 20);
    pop();
    rect(300, buckleY, 8, 30);

    //Fitbit logo within the Watch dial
    push();
    fill(0, 0, 0);

    ellipse(273, 300, 6, 6); //Ellispe in 1st column

    y = 310; //Ellipse in 2nd column
    for (let i = 0; i < 3; i++) {
        ellipse(285, y, 7, 7);
        y = y - 10;
    }

    y = 325; //Ellipse in 3rd column
    for (let i = 0; i < 5; i++) {
        ellipse(300, y, 8, 8);
        y = y - 12;
    }

    y = 312; //Ellipse in 4th column
    for (let i = 0; i < 3; i++) {
        ellipse(315, y, 9, 9);
        y = y - 12;
    }

    ellipse(328, 300, 9, 9); //Ellipse in 5th column
    pop();
}
