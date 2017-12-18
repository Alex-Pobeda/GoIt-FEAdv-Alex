let createElem = () => {
	let mainDiv = document.querySelector("#main");
	
	for(let i = 0; i < 20; i++){
		let newDiv = document.createElement("div");
		newDiv.style.width = '50px';
		newDiv.style.height = '50px';
		
		let setColors = () => {
		let arr = [];
		for(let i = 0; i < 3; i++){
			let color = (Math.floor(Math.random() * 255));
			arr.push(color);
		}
		return arr;
		}
		let colors = setColors().join(", ");
		
		newDiv.style.backgroundColor = 'rgb(' + colors +')';
		newDiv.innerHTML = i + 1;
		mainDiv.appendChild(newDiv);
	}
}