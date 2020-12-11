<title>Greek mythology quizz</title>
# Greek mythology quizz

<section>
</section>
<input type="text" id="textInput">
<button type="submit" id="click">submit</button>
	
<p id="yesNo"></p>
		
<script>
		const section = document.querySelector('section');
		var requestURL= 'greek_myth_data.json';
		var request = new XMLHttpRequest();
		var score = 0;
		var button = document.getElementById("click");
		var yesOrNo = document.getElementById("yesNo");
		var numberOfQues = 20;
		
		request.open('GET', requestURL);
		request.responseType = 'json';
		request.send();
		
		function randomNumFunc(maxi) {
			return Math.floor(Math.random() * maxi);
		}
		
		request.onload = function() {
			var caracters = request.response;
			populateSection(caracters);
		}
		function populateSection(jsonObj) {
			var questions = 0;
			var randomCaracter = randomNumFunc(jsonObj['caracters'].length);
			caracter = Object.getOwnPropertyNames(jsonObj['caracters'][randomCaracter])
			var randomRelation = caracter[randomNumFunc(caracter.length)];
			
			if(randomRelation === "name") {
				while(randomRelation === "name") {
					var randomRelation = caracter[randomNumFunc(caracter.length)];
					
				}
			}

			var answer = jsonObj['caracters'][randomCaracter][randomRelation];
			var myPara = document.createElement('p');
			myPara.textContent = "Who is the " + randomRelation + " of " + jsonObj['caracters'][randomCaracter].name + "?";
			section.appendChild(myPara);
			function myFunc() {
				questions ++
				var txtBox = document.getElementById("textInput").value;
				if(txtBox === answer && questions < numberOfQues) {
					score ++;
					yesOrNo.innerHTML = "Bravo! <br> Your score is: " + score + "/" + questions;
				} else if(questions < numberOfQues) {
					yesOrNo.innerHTML = "It was " + answer + ". Try again. <br> Your score is: " + score + "/" + questions;
				} else {
					yesOrNo.innerHTML = "";
				}
				document.getElementById("textInput").value = '';

				if(questions < numberOfQues){
					randomCaracter = randomNumFunc(jsonObj['caracters'].length);
					caracter = Object.getOwnPropertyNames(jsonObj['caracters'][randomCaracter]);
					randomRelation = caracter[randomNumFunc(caracter.length)];
					if(randomRelation === "name") {
						while(randomRelation === "name") {
							var randomRelation = caracter[randomNumFunc(caracter.length)];
						
						}
					}
					answer = jsonObj['caracters'][randomCaracter][randomRelation];
				
					oldPara = document.querySelector('p');
					var myPara = document.createElement('p');
					myPara.textContent = "Who is the " + randomRelation + " of " + jsonObj['caracters'][randomCaracter].name + "?";
					section.replaceChild(myPara, oldPara);
				} else {
					oldPara = document.querySelector('p');
					var myPara = document.createElement('p');
					myPara.textContent = "You finished! You did " + score + " on " + numberOfQues;
				}
				section.replaceChild(myPara, oldPara);
				}
				input = document.getElementById("textInput");
				input.addEventListener("keyup", function(event) {
				if (event.keyCode === 13) {
 				  event.preventDefault();
  			 document.getElementById("click").click();
 				 }
			});
			button.addEventListener("click", myFunc);
		}
	</script>
