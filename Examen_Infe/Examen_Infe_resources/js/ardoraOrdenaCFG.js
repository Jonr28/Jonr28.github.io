var timeAct=100; timeIni=100; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#D7D7FF"; colorButton="#5E6668"; colorText="#000000"; colorSele="#FD0202";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="YEEEEEI!!!!  :)"; messageTime="100"; messageError="Fallaste  :("; messageErrorG="Fallaste  :("; messageAttempts="3"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#58E429"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="RXhhbWVuX0luZmU="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["SGkgaG93IGFyZSB5b3U=","d2hhdCdzIHlvdXIgbmFtZQ==","d2hlcmUgYXJlIHlvdSBmcm9t","",""];imaW=["Hola_como_estas.png","cual_es_tu_nombre.png","5892479.png","",""];queW=["","","","",""];altW=["","","","",""];c=[14,16,18,0,0];
var auW=["","","","",""];
var actMaxWidth="1000"; actMaxHeight="550";indexG=0;profG=0;dirMedia="Examen_Infe_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
