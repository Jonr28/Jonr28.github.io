//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=100; timeIni=100; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=2;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFF9F"; colorButton="#C0C0C0"; colorText="#000000"; colorSele="#EF1026";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitaciones!!!  :)"; messageTime="100"; messageError="Fallaste intentalo de nuevo :("; messageErrorG="Fallaste intentalo de nuevo :("; messageAttempts="2"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#80FF80"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="SnVlZ29kZWxleGFtZW5kZW9yZGVuYXJwYXJyYWZv"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="1000"; actMaxHeight="550";profG=0;dirMedia="Juegodelexamendeordenarparrafo_resources/media/";
var indexG=0;
var words1G=["VG9kb3MgbG9zIHNlcmVzIHZpdm9z","aGFicsOtYW4gc2lkbyBjcmVhZG9zIHBvciBEaW9z","dGFsIHkgY29tbyBsb3MgY29ub2NlbW9z"];
var words2G=["TGFzIGVzcGVjaWVz","cHJvdmllbmVuIHVuYXMgZGUgb3RyYXMs","ZGUgbGFzIG3DoXMgc2ltcGxlcw==","YSBsYXMgbcOhcyBjb21wbGVqYXM="];
var words3G=["QnVmZm9uIGVsIGRlc2Fycm9sbG8gZGUgdW4gZW1icmnDs24=","bm8gZXJhIG3DoXMgcXVlIGVsIGNyZWNpbWllbnRvIGRlIHVuIG9yZ2FuaXNtbw==","cXVlIGVzdGFiYSB5YSBwcmVmb3JtYWRv"];
var c1=[21,29,24];
var c2=[12,24,18,19];
var c3=[34,45,24];
