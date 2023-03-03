//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=3;
var score=0; scoreMax=7; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#71555A"; colorText="#000000"; colorSele="#16B9D6";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Yeeeeeeeeeei Ganaste"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="ZnJhc2Vz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Que es medir?<br>","¿Que es medicion en la fisica?","¿Que utilizamos para medir?","¿Qué es la ciencia fisica?","¿Que es gravedad en las ciencias?","¿Que es velocidad?","¿Que es un vector?"];
var answers1=["MURldGVybWluYXIgbGEgbG9uZ2l0dWQsIGV4dGVuc2nDs24sIHZvbHVtZW4gbyBjYXBhY2lkYWQgZGUgdW5hIGNvc2EgcG9yIGNvbXBhcmFjacOzbiBjb24gdW5hIHVuaWRhZCBlc3RhYmxlY2lkYSBxdWUgc2UgdG9tYSBjb21vIHJlZmVyZW5jaWEsIGdlbmVyYWxtZW50ZSBtZWRpYW50ZSBhbGfDum4gaW5zdHJ1bWVudG8gZ3JhZHVhZG8gY29uIGRpY2hhIHVuaWRhZC4=","MEVzIGxsZXZhciBhY2FibyB1bmEgYWNjaW9uIGRlIGFub3RhciBsb3MgbnVtZXJvcyByZXByZXNlbnRhZG9zIHkgY3JlYXIgdW5hIHN1bWEu"];
var answers2=["MWFzb2NpYXIgYSBsYSBtaXNtYSB1biB2YWxvciBkaW1lbnNpb25hZG8gZW4gcmVsYWNpw7NuIGEgbGEgdW5pZGFkIHF1ZSBhcmJpdHJhcmlhbWVudGUgc2UgaGEgZGVmaW5pZG8gcGFyYSBtZWRpcmxh","MEVzIG1lZGlyIGNvbiB1bmEgcmVnbGEgQWxndW5hcyBtZWRpZGFzIGRlIG1lZGly"];
var answers3=["MVJlZ2xhcyBvIGNvbXBhcw==","MEVsIGFndWE="];
var answers4=["MUxhIEbDrXNpY2EgZXMgbGEgY2llbmNpYSBxdWUgZXN0dWRpYSBsYXMgaW50ZXJhY2Npb25lcyBmdW5kYW1lbnRhbGVzIGVuIGxhIG5hdHVyYWxlemEsIGRlc2RlIGxvIG1pY3Jvc2PDs3BpY28gYSBsbyBtYWNyb3Njw7NwaWNvLCBsYXMgZXN0cnVjdHVyYXMgeSBjYW1iaW9zIHF1ZSBnZW5lcmFuLg==","MExhIGVkdWNhY2nDs24gZsOtc2ljYSBjb250cmlidXllIGFsIGRlc2Fycm9sbG8gZGUgbGEgbW90cmljaWRhZCBlbiBsYXMgeSBsb3MgYWx1bW5vcyBhIHRyYXbDqXMgZGUgdW4gcHJvY2VzbyBkaW7DoW1pY28geSByZWZsZXhpdm8sIGRlIGVzdHJhdGVnaWFzIGRpZMOhY3RpY2FzIHF1ZSBkZXJpdmFuIGRlbCBqdWVnbyBtb3RvciBjb21vIGV4cHJlc2nDs24gY29ycG9yYWwsIGxhIGluaWNpYWNpw7NuIGRlcG9ydGl2YSB5IGVsIGRlcG9ydGUgZWR1Y2F0"];
var answers5=["MUxhIGdyYXZlZGFkIGVzIGxvIHF1ZSBoYWNlIHF1ZSBsb3MgcGxhbmV0YXMgZW50cmVuIGVuIMOzcmJpdGEgYWxyZWRlZG9yIGRlIGxhcyBlc3RyZWxsYXMtLWNvbW8gbGEgVGllcnJhIHF1ZSBlc3TDoSBlbiDDs3JiaXRhIGFscmVkZWRvciBkZSBudWVzdHJhIGVzdHJlbGxhLCBlbCBTb2wu","MEltcG9ydGFuY2lhLCBkaWZpY3VsdGFkIG8gcGVsaWdybyBxdWUgcHJlc2VudGEgdW5hIGNvc2EgbyBwZXJzb25hIGdyYXZlLg=="];
var answers6=["MUxhIHZlbG9jaWRhZCBlcyB1bmEgbWFnbml0dWQgZsOtc2ljYSBkZSBjYXLDoWN0ZXIgdmVjdG9yaWFsIHF1ZSBleHByZXNhIGVsIGRlc3BsYXphbWllbnRvIGRlIHVuIG9iamV0byBwb3IgdW5pZGFkIGRlIHRpZW1wby4=","MEVzIGFxdWVsbGEgcXVlIHNlIGxvZ3JhIGN1YW5kbyB2YW1vcyBlbiB1bmEgY2FtaW5hdGEu"];
var answers7=["MVNlZ21lbnRvIGRlIHJlY3RhLCBjb250YWRvIGEgcGFydGlyIGRlIHVuIHB1bnRvIGRlbCBlc3BhY2lvLCBjdXlhIGxvbmdpdHVkIHJlcHJlc2VudGEgYSBlc2NhbGEgdW5hIG1hZ25pdHVkLCBlbiB1bmEgZGlyZWNjacOzbiBkZXRlcm1pbmFkYSB5IGVuIHVubyBkZSBzdXMgc2VudGlkb3Mu","MEVuIHBzaWNvbG9nw61hLCBmdWVyemEgbyBlbGVtZW50byBxdWUgaW5mbHV5ZSBlbiBlbCBjb21wb3J0YW1pZW50byBkZSBsYSBwZXJzb25hLg=="];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7];
var err=["Perdiste","Perdiste","Perdiste","Perdiste","Perdiste","Perdiste","Perdiste"];
var ima=["","","","","","",""];
var mp4=["","","","","","",""];
var ogv=["","","","","","",""];
var alt=["","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="frases_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
