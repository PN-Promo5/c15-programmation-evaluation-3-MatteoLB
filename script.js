/* ****************************************** EXERCISE 1 **************************************** */

function createPresentation()
{
	let newContainer = document.createElement('div');								// create a div container
	newContainer.id = 'cinemaPresentation';											// add an id to the container

	let newTitle = document.createElement('h1');									// create a h1 and add some text content
	newTitle.textContent = 'Cinéma Le Dauphin';

	let newP = document.createElement('p');											// create a paragraph then add text content
	newP.textContent = 'Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu’à minuit le vendredi et le samedi).';	

	let newButton = document.createElement('button');								// create a new button, gives it an id and some text content
	newButton.id = 'seeFilmsList';
	newButton.textContent = 'Voir les films à l\'affiche cette semaine';

	newContainer.appendChild(newTitle);												// append the h1, p, and button to the container
	newContainer.appendChild(newP);		
	newContainer.appendChild(newButton);

	document.body.appendChild(newContainer);										// append the container to the body
}

createPresentation();																// uses the function



/* **************************************** EXERCISE 1.2 ****************************************** */

let filmsList = 																	// create a 2 dimensional array
[
	['Titre du film', 'Réalisateur', 'Nationalité', 'Année', 'Durée', 'Version'],
	['IN MY ROOM', 'Ulrich Köhler', 'Allemagne', '2019', '2h', 'vf'],
	['UN VIOLENT DÉSIR DE BONHEUR', 'Clément Schneider', 'France', '2018', '1h15', 'vf'],
	['WHAT YOU GONNA DO WHEN THE WORLD IS ON FIRE', 'Roberto Minervini', 'Etats-Unis/Italie', '2018', '2h03', 'vostfr'],
	['GRASS', 'Hong Sang-Soo', 'Corée du Sud', '2018', '1h06', 'vostfr']
];


/* **************************************** EXERCISE 1.3 ****************************************** */

function createFilmsTable(sequence)													// new function whose purpose is to display a 2 dimensional array's content into a table
{
	let newContainer = document.createElement('div');								// create a div container with an id
	newContainer.id = 'filmsTableContainer';

	let newTable = document.createElement('table');									// create a table, a thead, and a tbody tags
	let newTableHeader = document.createElement('thead');
	let newTableBody = document.createElement('tbody');

	newContainer.appendChild(newTable);
	newTable.appendChild(newTableHeader);											// append the thead and tbody to the table and the table to the container
	newTable.appendChild(newTableBody);

	let newTableRow = document.createElement('tr');									// create a tr tag and appends it to the thead
	newTableHeader.appendChild(newTableRow);

	for (var i = 0; i < sequence[0].length; i++) 									// browse through the elements of the two dimensional array's first sub array
	{
		let currentElt = sequence[0][i]												// set the current element

		let newTH = document.createElement('th');									// create a new th with the current element as its text content
		newTH.textContent = currentElt;

		newTableRow.appendChild(newTH);												// appends it to the table row (which is in the thead)
	}

	for (var i = 0; i < sequence.length; i++) 										// browse through the sequence
	{
		let currentSeq = sequence[i];												// save the current sequence
		let newTableRow = document.createElement('tr');								// create a new tr

		for (var j = 0; j < currentSeq.length; j++) 								// second loop to browse through the sub sequences
		{
			let currentElt = currentSeq[j];											// save the current element

			let newTD = document.createElement('td');								// create a new td with the current element as text content
			newTD.textContent = currentElt;

			newTableRow.appendChild(newTD);											// append it to the tr
		}

		newTableBody.appendChild(newTableRow);										// append the tr to the tbody
	}

	newButton = document.createElement('button');									// create a button with an id and text content
	newButton.id = 'hideFilmsList';
	newButton.textContent = 'Retour';

	newContainer.appendChild(newButton);											// append the button to the div container

	newContainer.hidden = 'true';
	return newContainer;															// hides the new container, and returns it
}

let tableContainer = createFilmsTable(filmsList);									// use the function to create the table and return it into tableContainer, then append it to the body
document.body.appendChild(tableContainer);


/* **************************************** EXERCISE 1.4 ****************************************** */

let seeFilmsButton = document.getElementById('seeFilmsList');						// get the buttons and containers
let hideFilmsButton = document.getElementById('hideFilmsList');
let cinemaPresentationPage = document.getElementById('cinemaPresentation');
let filmsTableContainer = document.getElementById('filmsTableContainer');

seeFilmsButton.addEventListener('click', function() 								// add a click event listener to the first button
{
	cinemaPresentation.hidden = true;												// hides the presentation page and display the films table
	filmsTableContainer.hidden = false;
}, false);

hideFilmsButton.addEventListener('click', function() 								// add an event listener to the return button
{
	cinemaPresentation.hidden = false;												// hides the films table and show the presentation page
	filmsTableContainer.hidden = true;
}, false);




/* ************************************************************************** EXERCICE 2 *************************************************************************** */

/* **************************************** EXERCISE 2.1 ****************************************** */

let substances =																	// create a two dimensional array
[
	['SUBSTANCES', 'Température de fusion ou solidification en °C', 'Température d’ébullition en °C'],
	['acide acétique', '17', '118'],
	['acide nitrique', '-41', '86'],
	['acide sulfurique', '10', '290'],
	['alcool éthylique', '-114', '78'],
	['aluminium', '660', '2450']
];


/* **************************************** EXERCISE 2.2 ****************************************** */

function substancesBoilingAt(sequence, degree)										// function which will return every substance name whose boiling point is below the degree parameter
{
	let returnedArray = [];															// array which will be returned
	let currentElt;
	let substanceName;																// variables for the current element, the substances name, and the substances boiling point
	let substanceBoilingPoint;

	for (var i = 1; i < sequence.length; i++) 										// loop through the sequence
	{
		currentElt = sequence[i];													// save the current element
		substanceName = currentElt[0];												// save the first element of the current element (the substance name)
		substanceBoilingPoint = parseInt(currentElt[2]);							// transform the last element of the current element (the boiling point) into a number, and then save it

		if (substanceBoilingPoint < degree) 										// if the boiling point of the current substance is below degree
		{
			returnedArray.push(substanceName);										// push the current substance name into the array
		}
	}

	return returnedArray;															// returns the array
}