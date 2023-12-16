function PlayGame() /*Linked Javascript with Html*/
{
    var random1 = Math.ceil(Math.random() * 6);/*Setting random rules for 1-6 like a 6 sided dice*/
    var random2 = Math.ceil(Math.random() * 6);

    document.getElementById("rand1").innerHTML = "Dice 1 = " + random1; /*Goes to the location rand1 putting the first random number there*/
    document.getElementById("rand2").innerHTML = "Dice 2 = " + random2; /*Goes to the location rand2 putting the first random number there*/

    var sum = random1+random2;/*Setting up the win, lose, roll again statements! The normal else is for the number 10*/
    if ((sum == 7) || (sum == 11))
    {
        document.getElementById("result").innerHTML = "Congrats You've Won!!! - You got 7 or 11!";
    }
    else if ((sum < 4) || (sum > 11))
    {
        document.getElementById("result").innerHTML = "You Lose! CRAPS!!";
    }
    else
    {
        document.getElementById("result").innerHTML = "Point! Roll Dice Again!"
    }
}