async function populate() {
	async function populate() {
		console.log('2');
		fetch('https://github.com/Myanisa/FFXIV-Achievement-Hunter/blob/day1/data/all_achievements.json')
        .then(response => response.json())
        .then(data => this.setState({ achievements: data }));

		populateTable(achievements);
	}

	function populateTable(obj) {
		const section = document.querySelector('section');
		const achievements = obj.results;

		const myList = document.createElement("ul");

		for (const achievement of achievements) {
			const listItem = document.createElement("li");
			listItem.textContent = achievement.name;
			myList.appendChild(listItem);
		}
		section.appendChild(myList);
	}
	populate();
}