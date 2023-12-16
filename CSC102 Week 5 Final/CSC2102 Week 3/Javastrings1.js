function strings() /*Setting the up string to get the value!*/
{
    var string1 = document.getElementById("1stString").value; /*Puts information into the HTML path*/
   

    document.getElementById("str1display").innerHTML = "Your Input: " + string1;
   




   

/* I couldn't get     string3 = string1;
    var i; 
    var reversed = "";
    for (i= string3.length-1; i >=0;i--)
    {
        reversed +=string3[i];
    }

    document.getElementById("strUpdate").innerHTML = "Reversed:  " + string3;  to work so I used Split, Reverse, Join. I was at this for 4 hours.*/

    string3 = string1.split(""); /*Revesred and joins them all together */

    string3 = string3.reverse("");

    string3 = string3.join("");


    document.getElementById("strUpdate").innerHTML = "Your Input Reversed: " + string3 ;



    if(string1 == string3)
    {
        document.getElementById("results").innerHTML = "You typed a Palidrome in!"; /*Sets up rules for it to see if it was a palindrome or not!*/
    }

    else
    {
        document.getElementById("results").innerHTML = "Try again! Enter a Palidrome!";
    }

}