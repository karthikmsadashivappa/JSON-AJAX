var pageCounter = 1;

var animalContainer = document.querySelector('#animal-info');

var btn = document.querySelector('#btn');

btn.addEventListener("click", function(){

	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://raw.githubusercontent.com/LearnWebCode/json-example/master/animals-' +pageCounter+ '.json');
	ourRequest.onload = function () {
	var ourData = JSON.parse(ourRequest.responseText);
	renderHTML(ourData);
	};

	ourRequest.send();
	pageCounter++;
});

function renderHTML(data) {
	var htmlString = "";

	for (i = 0; i < data.length; i++) {
		htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>" ;
	}

	animalContainer.insertAdjacentHTML('beforeend', htmlString);
};
