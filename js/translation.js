

function translator(){
	var inValue;
var inArr = [];
var check = false;
var uncorrect = "Enter number of 12 characters there";
var move;
// input and check
do{
	var j = 0;
	inValue = prompt(" Please input necessary nubmer of 6 numbers ", uncorrect); // input number
	if(inValue.length > 12){
		uncorrect = "You enter more than 12 characters!)";
		continue;  /* перевірка входження в діапазон доп. значень вхідних даних....*/
	};
	if(isNaN(inValue)){
		uncorrect = " You enter some not numeric characters)";
		continue;
	}else{
		check = true;
		inArr = inValue.split("");
		for (var i = 0; i < inArr.length; i++){
			inArr[i] = +inArr[i];
		};
	}
} while(check === false);

// end check
console.log(inArr); // debug !!!++

inArr.reverse(); // reverse to more simplify working with data 0 index will to be responsible for unity numbers, 
//1 index for dozens numbers and etc.
console.log(inArr);//debug!!  reverse number...

var a0 = ["нуль", "один", "два", "три", "чотири", "п\'ять", "шість", "сім", "вісім", "дев\'ять", "десять", "одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п\'ятнадцять", "шістнадцять", "сімнадцять", "вісімнадцять", "дев\'ятнадцять"];
var a1 = ["дясять", "двадцять", "тридцять", "сорок", "п\'ятьдесять", "шістдесять", "сімдесят", "вісімдесят", "девяносто"];
var a2 = ["сто", "двісті", "триста", "чотириста", "п\'ятсот", "шістсот", "сімсот", "вісімсот", "девятсот"];
var a3 = ["", "одна тисяча", "дві тисячі", "три тисячі", "чотири тисячі", "п\'ять тисяч", "шість тисяч", "сім тисяч", "вісім тисяч", "дев\'ять тисяч"];
var word = ["один", "", "", "одна тисяча", " тисячі", " тисяч", "один мільйон", " мільйони", " мільйонів", "один  мільярд", " мільярди", " мільярдів"];

var result = [];
var clockword = 1;

/*+
Functional block. Responsible for convert number into symbolic representation.
+
*/
var prewresult = [];
do{

  	
	move = inArr.splice(0, 3);
	prewresult = prewresult.concat(f1(move, clockword));
	clockword = clockword + 3;
  

}while(inArr.length >= 1)



/*
-
Functional block
-
*/
function f1(arr, clockword){
	var fresult = [];
	if(arr[0] === 0 && arr[1] === 0 && arr[2] === 0){   //якщо в перших 3 розрядах нулі.. необхідно при числах 1000... 100000 ітд
		
		return fresult;
	};
	if (arr[1] === undefined){ // input |1-9|

					switch(clockword){
						case 1:
							fresult[1] = a0[arr[0]];
							fresult[0] = "";
							break;
						case 4:
							fresult[1] = a3[arr[0]];
							fresult[0] = "";
							break;
						default:
							if( (0 <= arr[0]) && (arr[0] <= 4) ){
								arr[0] === 1 ? fresult[1] = word[clockword-1] : fresult[1] = a0[arr[0]] + word[clockword];
								fresult[0] = "";
							}else{
								fresult[1] = a0[arr[0]] + word[clockword+1];
								fresult[0] = "";
							};
					};
	};

	if(((arr[1] === 1) || (arr[1] === 0)) && arr[1] !==	undefined){ // input |0-1|1-9|
		
		fresult[1] = a0[(arr[1]*10)+arr[0]] + word[clockword+1]; 
		fresult[0] = "";
		
	}else if (arr[1] !== undefined){ // input |2-9|0-9|
		
		fresult[1] = a1[arr[1]-1];
		
		if(arr[0] > 0 && arr[0] <= 4){
			
			arr[0] === 1 ? fresult[0] = word[clockword-1] : fresult[0] = a0[arr[0]] + word[clockword];
		
		}else if(arr[0] > 4){
			
			fresult[0] = a0[arr[0]] + word[clockword+1];
		
		 }else{
			
			fresult[0] = word[clockword+1];
		 
		 }
	};
	
	if(arr[2] !== undefined && arr[2] != 0){   // if input |0-9|***|***| якщо введені сотні

		if(arr[0] === 0 && arr[1] === 0 ){
			
			fresult[2] = a2[arr[2]-1] + word[clockword+1];
			fresult[1] = "";
			fresult[0] = "";

		}else{

			fresult[2] = a2[arr[2]-1];
			
		};
		
	};
	
	return fresult;
};

result = prewresult;
result.reverse(); /* реверс для зручності компоновки*/
var lastResult ="";
for (var i = 0; i <= result.length-1; i++) {
	lastResult = lastResult + " " +  result[i]; /* компоновка результатів у стрічку для виведення результатів*/
};

alert(lastResult); 
return;
}

// var res = document.getElementById('result');

