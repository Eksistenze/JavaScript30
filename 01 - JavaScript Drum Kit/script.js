window.addEventListener("keydown", (event) => {
	const audio = document.querySelector(`audio[data-key="${event.code}"]`);
	console.log(audio);
	if (!audio) return;
	audio.play();
});
