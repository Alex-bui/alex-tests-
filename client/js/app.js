import { newProfile } from './component/profile.js'

fetch('http://localhost:1234/profiles')
	.then(response => response.json())
	.then(profiles => {
		const profileElement = document.getElementById('description')
		
		const profElement = profiles.map(newProfile).join('')
		console.log(profElement)

		profileElement.innerHTML = profElement
	})