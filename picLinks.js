//This is the beginning of the text generation
//last update 3/8/23 by Preston Gallaher

var sigCode = ""; /* Initializes sigCode as a global variable. */

function generate() { /* This function generates the actual text of the signature, by continuously adding HTML code to the variable sigCode. After the signature is complete, the variable is output. */

    //get information from the generator to allow use of it
    var first = document.getElementById("txtName").value;
    var middle = document.getElementById("mInitial").value;
    var last = document.getElementById("lastName").value;
 
    var switchName= first + " " + last;
    var name;
    
    //license vars
    var license0 = document.getElementById("Certifs0").value;
    var license1 = document.getElementById("Certifs1").value;
    var license2 = document.getElementById("Certifs2").value;
    var license3 = document.getElementById("Certifs3").value;
    var license4  = document.getElementById("Certifs4").value;
    var licenses = "";
    
    var title = document.getElementById("txtTitle").value;
    var officePhone = document.getElementById("txtPhone").value;
    
    var emailAddress = document.getElementById("txtEmail").value;
    var department = document.getElementById("selectDept").value; //These variable declarations are all from the text box values, except for the department dropdown value.
    var picture = document.getElementById("selectPict").value;
    var extensionNum = document.getElementById("txtExt").value;
    var licenseOne = document.getElementById("txtLicense1").value; //Actual license numbers
    var licenseTwo = document.getElementById("txtLicense2").value; //Actual license numbers
    var licenseThree = document.getElementById("txtLicense3").value;

     //opens a new page once the button is clicked.
    var newPg = window.open("");
    
    //if statements to determine number of licenses
    if(license0 == "Yes")
    {
        licenses += ", ChFC&reg;";
    }
    if(license1 == "Yes")
    {
        licenses += ", CLU&reg;";
    }
    if(license2 == "Yes")
    {
        licenses += ", CLTC";
    }
    if(license3 == "Yes")
    {
        licenses += ", MBA";
    }
    if(license4 == "Yes")
    {
        licenses += ", CFP&reg;";
    }
    
    //boiler plate
    var sen1 = "<a href = 'https://treloaronline.com/team'><img src = '";   //picture link if clicked
    var sen2 = "' alt='' width='110' height='125' /></a> </td>";            //picture settings
    var sen3 = "<style> #borderLeft { border-left: 2px solid #999999; padding-left: 8px; line-height: 1em;  position: relative; } </style><td><br><div id = 'borderLeft'><p id='header1'><b>";//css style for table and start of employee information
    var sen4 = "</b> <br>";
   
    var font = "<style> #header1 { font-family: 'Arial'; font-size: 10px; } </style>";  //This is the text style for the employee information... make your changes here
    
    
    //filter through the pictures
    if(picture == "Yes")
    {
        var sigCode = font;
        sigCode +=  "<table><tr><td> <p id='header1'>";
        let result = switchName.toUpperCase();
        name = first + " " + middle + " " + last + licenses;
        
        //switch picture based on user name..... pure brute force
        switch(result)
        {
			case "DAN MAROLIS": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Team%20Photos/Dan-Marolis.jpg?length=200&name=Dan-Marolis.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "ANNA BADGER": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Badger_Anna-1.jpg?length=200&name=Badger_Anna-1.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 




			case "ANDREW RICKARD": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Rickard_Andrew.jpg?length=200&name=Rickard_Andrew.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "PRESTON GALLAHER": 
				sigCode += sen1 + "https://fcit.usf.edu/matrix/wp-content/uploads/Robot-86-A.png" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "LISA ALESSIO": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/17c6c5d4-f3be-4839-929f-169d62b133c2.jpg?length=200&name=17c6c5d4-f3be-4839-929f-169d62b133c2.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "JESSICA KRETZ": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/c95a5cbc-1cb5-4824-b916-70a319ef7034.jpg?length=200&name=c95a5cbc-1cb5-4824-b916-70a319ef7034.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "TIM O'SHEI": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/OShei_Tim%20(2).jpg?length=200&name=OShei_Tim%20(2).jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "NICHOLAS TANCABEL": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Tancabel_Nick-1.jpg?length=200&name=Tancabel_Nick-1.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "MATTHEW PRUITT": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Pruitt_Matthew.jpg?length=200&name=Pruitt_Matthew.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "JEFFREY WHERRY": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Wherry_Jeff%20(5).jpg?length=200&name=Wherry_Jeff%20(5).jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "REBAKAH WOZNIAK": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Team%20Photos/Rebakah-Wozniak.jpg?length=200&name=Rebakah-Wozniak.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "KAYLANCE WOJCIECHOWSKI": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Team%20Photos/Kay-Wojciechowski.jpg?length=200&name=Kay-Wojciechowski.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "MONICA SCHAFER": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Schafer_Monica.jpg?length=200&name=Schafer_Monica.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "STEPHANIE MOJOCK": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Stephanie-Mojock.jpg?length=200&name=Stephanie-Mojock.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "ALEXIS MCCONAHY": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/MPC_5751.jpg?length=200&name=MPC_5751.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "BEVERLY LOMBARDO": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Team%20Photos/Beverly-Lombardo.jpg?length=200&name=Beverly-Lombardo.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break;
            case "MARGARET FIGULY": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Team%20Photos/Margaret-Figuly.jpg?length=200&name=Margaret-Figuly.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "LUKE FEHRS": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Fehrs_Luke.jpg?length=200&name=Fehrs_Luke.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "LORI BAKER": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Baker_Lori.jpg?length=200&name=Baker_Lori.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "ORION ANDERSON": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Anderson_Orion.jpg?length=200&name=Anderson_Orion.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "MARILYN ZEIGLER": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Marilyn-Zeigler.jpg?length=200&name=Marilyn-Zeigler.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "RENEE SLEEMAN": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Sleeman_Renee.jpg?length=200&name=Sleeman_Renee.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "MAX SIGUENZA": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Siguenza_Max%20(1).jpg?length=200&name=Siguenza_Max%20(1).jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "ANNE RUBIS": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Anne-Rubis-1.jpg?length=200&name=Anne-Rubis-1.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "SAMANTHA ROBINSON": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Robinson_Samantha.jpg?length=200&name=Robinson_Samantha.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "ELI RHODES": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Rhodes_Eli%20(1).jpg?length=200&name=Rhodes_Eli%20(1).jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "KELLY RAY": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Team%20Photos/Kelly-Ray.jpg?length=200&name=Kelly-Ray.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 




			case "LEAH PRENTICE": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Prentice_Leah.jpg?length=200&name=Prentice_Leah.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "ALEXIS NOGA": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Noga_Alexis.jpg?length=200&name=Noga_Alexis.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "PETER MUSCAT": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Muscat_Peter.jpg?length=200&name=Muscat_Peter.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "ROBIN MUNTZ": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Muntz_Robin.jpg?length=200&name=Muntz_Robin.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "ANGEL MORAN": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Team%20Photos/Angel-Moran.jpg?length=200&name=Angel-Moran.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "MICHELLE MILLER": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Miller_Michelle.jpg?length=200&name=Miller_Michelle.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "STEPHANIE MANIFRANG": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Team%20Photos/Stephanie-Manifrang.jpg?length=200&name=Stephanie-Manifrang.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "DIANE LYNCH": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Lynch_Diane.jpg?length=200&name=Lynch_Diane.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "PAM KWIAT": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Kwiat_Pam.jpg?length=200&name=Kwiat_Pam.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "ALLISON JOSEPH": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Joseph_Ali.jpg?length=200&name=Joseph_Ali.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "DANIELLE HUGHES": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Fehrs_Danielle.jpg?length=200&name=Fehrs_Danielle.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "JULIE CANCIO HARPER": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Harper_Julie%20Cancio.jpg?length=200&name=Harper_Julie%20Cancio.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "DIANE GRILLI": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Grilli_Diane.jpg?length=200&name=Grilli_Diane.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "ANN GOUGH": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Team%20Photos/coming-soon.jpg?length=200&name=coming-soon.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "ESTHER FRIES": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Fries_Ester-1.jpg?length=200&name=Fries_Ester-1.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "KORI FORNATARO": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Kori-Fornataro%20(1).jpg?length=200&name=Kori-Fornataro%20(1).jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "LYNN FOBES": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Lynn-Fobes.jpg?length=200&name=Lynn-Fobes.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "MAKAYLA FIFE": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Fife_Makayla.jpg?length=200&name=Fife_Makayla.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "RILEY DELANEY": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Delaney_Riley.jpg?length=200&name=Delaney_Riley.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 




			case "NATALIE AGNONE": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Team%20Photos/Natalie-Agnone-1.jpg?length=200&name=Natalie-Agnone-1.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "BLAKE BROWNELL": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Brownell_Blake.jpg?length=200&name=Brownell_Blake.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break;
            case "TYLER HUGHES": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Hughes_Tyler.jpg?length=200&name=Hughes_Tyler.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "LORI GRACE": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Team%20Photos/Grace_Lori.jpg?length=200&name=Grace_Lori.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "KATIE RODGERS": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Rodgers_Katie.jpg?length=200&name=Rodgers_Katie.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "LARA BLAINE": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Team%20Photos/Lara-Blaine.jpg?length=200&name=Lara-Blaine.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "AMY CARBONE": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Team%20Photos/Amy-Carbone-1.jpg?length=200&name=Amy-Carbone-1.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "NICHOLAS MIOZZI": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Miozzi_Nick.jpg?length=200&name=Miozzi_Nick.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "AARON PAOLINI": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Paolini_Aaron.jpg?length=200&name=Paolini_Aaron.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "MASON THOMALLA": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Thomalla_Mason.jpg?length=200&name=Thomalla_Mason.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "MICHAEL PETERS": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Peters_Michael.jpg?length=200&name=Peters_Michael.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "DANIEL AMBROSKIEWICZ": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/KJC_9018.jpg?length=200&name=KJC_9018.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "CHARLES SIMMS": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Simms_Charles.jpg?length=200&name=Simms_Charles.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
            case "GRANT OSBORNE": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Osborne_Grant.jpg?length=200&name=Osborne_Grant.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "DOMINIC PETRONY": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Petrony_Dominic.jpg?length=200&name=Petrony_Dominic.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "JAMIE FEHRS": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Fehrs_Jamie.jpg?length=200&name=Fehrs_Jamie.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 




			case "KEVIN ZDURIENCIK": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Team%20Photos/Kevin-Zduriencik.jpg?length=200&name=Kevin-Zduriencik.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "MARK SPRING": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Team%20Photos/Mark-Spring.jpg?length=200&name=Mark-Spring.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "JOHN ADCOCK": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Adcock_John%20(4).jpg?length=200&name=Adcock_John%20(4).jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
            case "SHAWN JOHNSON": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Johnson_Shawn_SSC_resized.jpg?length=200&name=Johnson_Shawn_SSC_resized.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "KENNETH THOMALLA": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Team%20Photos/Ken-Thomalla.jpg?length=200&name=Ken-Thomalla.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "SCOTT FEHRS": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Fehrs_Scott-1.png?length=200&name=Fehrs_Scott-1.png" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break;
            case "PATRICK FITZGERALD": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Fitzgerald_Patrick_Casual%20(1).jpg?length=200&name=Fitzgerald_Patrick_Casual%20(1).jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "NATHAN NEWMAN": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Newman_Nate%20(2).jpg?length=200&name=Newman_Nate%20(2).jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "JOSEPH PANTOJA": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Pantoja_Joe%20(8).jpg?length=200&name=Pantoja_Joe%20(8).jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "SARA HALANSKY": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Halansky_Sara.jpg?length=200&name=Halansky_Sara.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "ALEX SPILLER": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Spiller_Alex%20(4).jpg?length=200&name=Spiller_Alex%20(4).jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "KEVIN PRICE": 
				sigCode += sen1 + "https://cdn2.hubspot.net/hub/4308708/hubfs/Team%20Photos/Kevin-Price.jpg?length=200&name=Kevin-Price.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "CHERYL BEJGROWICZ": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Bejgrowicz_Cheryl.jpg?length=200&name=Bejgrowicz_Cheryl.jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			case "JOHN MITSOS": 
				sigCode += sen1 + "https://4308708.fs1.hubspotusercontent-na1.net/hub/4308708/hubfs/Mitsos_John%20(5).jpg?length=200&name=Mitsos_John%20(5).jpg" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			//new1
            default:
                sigCode += "<b>" + name + "</b> <br>" + title + "<br>";
                alert("Did you type your name correctly?");
                flag = "true";
                break;
        }
        
        sigCode += "<br>";
    }
    else
    {
        var sigCode = font;
        name = first + " " + middle + " " + last;
        sigCode += "<p id='header1'><b>" + name + "</b> <br>" + title + "<br>";
    }
    
    //conditionals that determine if null text was entered
    if (officePhone != "" && extensionNum == "") 
    {
        sigCode += "Office / Fax: " + officePhone + "<br>";
    }

    if (officePhone != "" && extensionNum != "") 
    {
        officePhone = "Office/Fax: " + officePhone + " Ext " + extensionNum + "<br>";
        sigCode += officePhone;
    }

 
   
    if(emailAddress != "") 
    {
        sigCode += "<a href='mailto:" + emailAddress + "'> " + emailAddress + " </a> <br>";
    }

    

    var stateOne = stateLicenseOne.options[stateLicenseOne.selectedIndex].value; //1st State Initials
    var stateTwo = stateLicenseTwo.options[stateLicenseTwo.selectedIndex].value; //2nd state Initials
    var stateThree = stateLicenseThree.options[stateLicenseThree.selectedIndex].value;
    
    var assumedLicenseCodeOne = "" + stateOne + " Insurance Lic. # " + licenseOne; //this variable holds the first license string.

    var assumedLicenseCodeTwo = "" + stateTwo + " Insurance Lic. # " + licenseTwo; //this variable holds the second license string.
    var assumedLicenseCodeThree = "" + stateThree + " Insurance Lic. # " + licenseThree;
    
    if (licenseOne != "") 
    {
        sigCode += assumedLicenseCodeOne +  "<br>"; //the first license string is added.
    }

    if (licenseTwo != "") 
    {
        sigCode += assumedLicenseCodeTwo + "<br> "; //the second license string is added.
    }
    
    if (licenseThree != "") 
    {
        sigCode += assumedLicenseCodeThree + "<br> "; //the second license string is added.
    }
  
    
    sigCode += "Visit us online at <u><a href='https://www.treloaronline.com' target = \"_blank\"> www.treloaronline.com </a> </u></p>"; //Since this will be completed no matter what, No condition is checked before adding this.
    
   
    sigCode += "</div>&nbsp;&nbsp;&nbsp;<a href='https://www.linkedin.com/company/treloar-and-heisel-inc' target = \"_blank\"><img src='https://cdn2.hubspot.net/hubfs/4308708/Email%20Signatures/linkedin.png' alt='' width='20' height='20' /></a> ";
    sigCode += "<a href='https://www.facebook.com/TreloarHeisel/timeline' target = \"_blank\"><img src='https://cdn2.hubspot.net/hubfs/4308708/Email%20Signatures/facebook.png' alt='' width='20' height='20' /></a> ";
	sigCode += "<a href='https://www.instagram.com/treloarheisel/' target = \"_blank\"><img src='https://4308708.fs1.hubspotusercontent-na1.net/hubfs/4308708/Email%20Signatures/Instagram_RGB.png' alt='' width='20' height='20' /></a>";
    
   if(picture == "yes")
    {
        sigCode += "</div></td>";
    }

    var selectedValue = selectDept.options[selectDept.selectedIndex].value; //initializes the dropdown value as a variable to check below.

    if (selectedValue == "T&H" && picture == "Yes") 
    {
        sigCode += "<td><a href='https://www.treloaronline.com' target = \"_blank\"><img id='THLogo' src='https://4308708.fs1.hubspotusercontent-na1.net/hubfs/4308708/Email%20Signatures/T&H_Logo_Epic.png' width = 140; height = 120;/></a> <br> </td></tr></table>";
    } 
    
    if (selectedValue == "T&H" && picture == "No")
    {
        sigCode += "<br><a href='https://www.treloaronline.com' target = \"_blank\"><img id='THLogo' src='https://4308708.fs1.hubspotusercontent-na1.net/hubfs/4308708/Email%20Signatures/T&H_Logo_Epic.png ' width = 140; height = 120;/></a> <br>";
    }
        
        //unused conditional block code that allows for different images to be include in the email
        /*else if (selectedValue == "Wealth Management") {
        sigCode += "<a href='https://www.treloaronline.com'><img id='WealthMgmt' height='119px' width='167px' src='https://cdn2.hubspot.net/hubfs/4308708/Email%20Signatures/TH_WealthMgt.png'/></a> <br> ";
        }  else if (selectedValue == "Property and Casualty") {
        sigCode += "<a href='https://www.treloaronline.com'><img id='THPC' width='167px' height='119px'src='https://cdn2.hubspot.net/hubfs/4308708/Logos/THPC.png'/></a> <br> ";
        } 

 
        sigCode += "<a href='http://pro.riskalyze.com/embed/7b7253772e47f1d79fab'><img src='https://cdn2.hubspot.net/hubfs/4308708/Email%20Signatures/riskanalysis.jpg' alt='' width='207' height='30'/></a> <br> ";   
        else if (checkSurvey.checked == false) { //If false, the user does not want a survey button.
        sigCode += "<a href='http://www.linkedin.com/company/treloar-and-heisel-inc'><img src='https://cdn2.hubspot.net/hubfs/4308708/Email%20Signatures/linkedin.png' alt='' width='26' height='21' /></a> ";
        sigCode += "<a href='http://www.facebook.com/TreloarHeisel/timeline'><img src='https://cdn2.hubspot.net/hubfs/4308708/Email%20Signatures/facebook.png' alt='' width='26' height='21' /></a> <br> ";

        var selectedValue = selectDept.options[selectDept.selectedIndex].value; //Since the initialization of this variable has not run if the user does not want a survey button, reinitialization is necessary.



        if (selectedValue == "T&H") {
        sigCode += "<a href='https://www.treloaronline.com'><img id='THLogo' src='https://cdn2.hubspot.net/hubfs/4308708/Email%20Signatures/treloar-logo.jpg' /></a>";
        } else if (selectedValue == "Wealth Management") {
        sigCode += "<a href='https://www.treloaronline.com'><img id='WealthMgmt' width='223px' height='159px' src='https://cdn2.hubspot.net/hubfs/4308708/Email%20Signatures/TH_WealthMgt.png' /></a> ";
        } else if (selectedValue == "Property and Casualty") {
        sigCode += "<a href='http://www.treloaronline.com'><img id='THPC'  width='223px' height='159px' src='https://cdn2.hubspot.net/hubfs/4308708/Logos/THPC.png' /></a> ";
        }

        */

    sigCode += " <style> #finePrint { font-size: 8px; font-family: 'Candara'; } </style> <p id='finePrint'> Treloar & Heisel, Treloar & Heisel Wealth Management, and Treloar & Heisel Property and Casualty are all divisions of Treloar & Heisel, LLC. <br> Investment Advice offered through WCG Wealth Advisors, LLC, a Registered Investment Advisor doing business as Treloar & Heisel Wealth Management. <br>Treloar & Heisel Wealth Management is a separate entity from The Wealth Consulting Group and WCG Wealth Advisors, LLC. <br> If you receive a suspicious email requesting your personal information or for you to make account changes or transfer funds,<br> please do not respond to the email and call our office immediately at 800-345-6040. <br> Insurance products offered separately through Treloar & Heisel and Treloar & Heisel Property and Casualty. <br> The information contained in this email message is being transmitted to and is intended for the use of only the individual(s) to whom it is addressed. <br> If the reader of this message is not the intended recipient, you are hereby advised that any dissemination, distribution or copying of this message is strictly prohibited. <br><br>If you have received this message in error, please immediately delete.</p>";
    //The above code segment adds the bottom paragraph to the signature. Note the style tags if further formatting of the text is desired.


    var sigCode1 = sigCode.replace(/®/gi, "<sup> ® </sup>");
    var sigCode2 = sigCode1.replace(/©/gi, "<sup> © </sup>");
    var sigCodeFinal = sigCode2.replace(/™/gi, "<sup> ™ </sup>"); //Superscripts all symbol characters that can be used within the generator.

    
    //this is the final line executed that adds the text to the new windows with the desire style 
    newPg.document.write(sigCodeFinal); 
    
}

/*

Saved for future possible updates


var btnCopy = document.createElement("input");
btnCopy.value = "Copy to Clipboard";
btnCopy.onclick = "copy()";



\AppData\Roaming\Microsoft\Signatures (Location of signatures)

function copy() {
var copiedText = sigCode.value;
copiedText.select();
document.execCommand("copy");
alert("copiedText.value");
}

*/
