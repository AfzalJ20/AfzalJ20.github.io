var names=new Array();
names[0]="Ramesh";
names[1]="Suresh";
names[2]="Rajesh";
names[3]="Raghu";
names[4]="jatachi";
names[5]="jaruto";
names[6]="Jakura";
names[7]="Sasuke";
names[8]="Minato";
names[9]="Kurama";

for(var i=0;i<names.length;i++){
	if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
		console.log("Goodbye "+names[i])
	}
	else{
		console.log("Hello "+names[i])
	}
}