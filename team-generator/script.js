document.getElementById('generateBtn').addEventListener('click', () => {
    const namesInput = document.getElementById('namesInput').value.trim();
    if (namesInput === "") {
        alert("Please enter some names.");
        return;
    }
    
    const names = namesInput.split(',').map(name => name.trim()).filter(name => name);
    if (names.length < 2) {
        alert("Please enter at least two names.");
        return;
    }
    
    const teams = generateTeams(names);
    displayTeams(teams);
});

function generateTeams(names) {
    const shuffledNames = names.sort(() => Math.random() - 0.5);
    const midIndex = Math.ceil(shuffledNames.length / 2);
    const team1 = shuffledNames.slice(0, midIndex);
    const team2 = shuffledNames.slice(midIndex);

    return { team1, team2 };
}

function displayTeams(teams) {
    const teamsContainer = document.getElementById('teamsContainer');
    teamsContainer.innerHTML = '';

    const teamElements = Object.entries(teams).map(([teamName, teamMembers]) => {
        const teamDiv = document.createElement('div');
        teamDiv.classList.add('team');
        teamDiv.innerHTML = `<h3>${teamName.charAt(0).toUpperCase() + teamName.slice(1)}</h3><ul>${teamMembers.map(member => `<li>${member}</li>`).join('')}</ul>`;
        return teamDiv;
    });

    teamElements.forEach((teamElement, index) => {
        setTimeout(() => {
            teamElement.classList.add('show');
        }, index * 200);
    });

    teamsContainer.append(...teamElements);
}
