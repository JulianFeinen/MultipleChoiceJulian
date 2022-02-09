function auswerten()//wird beim drücken des Auswerte-Knopfes aktiviert
{
    let AnzahlRichtigerLoesungen=0;
    let solutionsString =  holeLoesungen();//korrekte Optionen aus datenbank holen
    let solutionsStringArray = solutionsString.split(";");

    const alleInputs = document.getElementsByTagName("input");//alle Optionen liegen auf einer Collection
    for(var i=0;i<alleInputs.length;i++)    
    {
        if(alleInputs[i].checked)//überprüft ob die Option ausgewählt wurde
        {
            if(isCheckedCorrect(solutionsStringArray,alleInputs[i].id))//überprüft ob die Auswahl korrekt ist
            {
                AnzahlRichtigerLoesungen= AnzahlRichtigerLoesungen+1;
            }
        }
    }
    if(AnzahlRichtigerLoesungen>2)//überprüft ob mindestens 3 fragen richtig sind
    {
        document.getElementsByClassName("ergebnis")[0].innerHTML = "<u>Bestanden!</u>";
    }
    else
    {
        document.getElementsByClassName("ergebnis")[0].innerHTML = "<u>Nicht Bestanden!</u>";
    }
}

function isCheckedCorrect(solutionsStringArray,currentID)//überprüft ob das angekreuzte Input-Element korrekt ist (also ob die ID in der imaginären Datenbank vorkommt)
{
    for(var i=0;i<solutionsStringArray.length;i++)
    {
        if(solutionsStringArray[i]==currentID)
        {
            return true;
        }
    }
    return false;
}

function holeLoesungen()
{
    //über z.b. AJAX wird der server angesprochen
    // der server liefert einen string mit den richtigen Optionen zurück
    // z.B. 
    // 0-0;1-2....
    //soll heißen: in frage 1 ist die erste Option korrekt, in frage 2 die dritte Option
    //die erste Ziffer "0"-0 stellt die frage dar. Die Zweite 0-"0", die zugehörige Option
    return "0-0;1-1;2-2;3-0;4-1;5-2"; //das Muster für die Korrekten Optionen lautet also 1,2,3,1,2,3
}