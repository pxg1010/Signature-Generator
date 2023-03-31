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
			case "PRESTON GALLAHER": 
				sigCode += sen1 + "https://fcit.usf.edu/matrix/wp-content/uploads/Robot-86-A.png" + sen2; 
				sigCode += sen3 + name + sen4 + title; 
				break; 
			/* Names removed for confidentiality */ 
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
