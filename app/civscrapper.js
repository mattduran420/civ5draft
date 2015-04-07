var table = $('#civs > tbody > tr');
var tempTable = [];

for(var i = 0; i < table.length; i++){
	var notNull = false;
	var isLegit = false;

	if(table[i].children[0].children[0].text != null){
		notNull = true;
	}

	if(!table[i].children[0].children[0].children.length > 0 && table[i].children.length > 3){
		isLegit = true;
	}

	if(notNull && isLegit){
		

		//GET START BIAS
		var bias = null;
		if(table[i].children[2].innerHTML.trim() != ''){
			bias = table[i].children[2].children[0].children[0].alt;
			if(!bias) bias = null;
		}

		//GET UNIQUE ABILITY
		/*if(table[i].children[4].children[1]){
			console.log(table[i].children[4].children[1]);
		} */


		var civ = {
			name: table[i].children[0].children[0].text,
			image: table[i].children[1].children[0].children[0].src,
			bias: bias,
			leader:table[i].children[3].children[0].text
			//uniqueTitle:'',
			//uniqueDesc:'',
			//uniqueUnit:'',
			//uniqueBuilding:''
		};
		tempTable.push(civ);
		//console.log(civ);
	}

}
table = [];
var str = '';
for(var i = 0; i < tempTable.length; i++){
	table[tempTable[i].name] = tempTable[i];
	str += JSON.stringify(tempTable[i]);
}
//var str = JSON.stringify(table);
console.log(str)
/*
0 civ name table[i].children[0].children[0].text
1 civ icon table[i].children[1].children[0].children[0].src
2 bias
3 leader
4 unique ability
5 unique units
6 unique building
*/

