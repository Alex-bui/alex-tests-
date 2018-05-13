fetch('http://localhost:1234/profiles/1')
	.then(response => response.json())
	.then(profile => console.log(profile))