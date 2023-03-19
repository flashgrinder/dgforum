import gsap from 'gsap';

function lineAnimationsMoving() {
	const lineContainers = Array.from(document.querySelectorAll('.a-lines-container-moving'));

	lineContainers.forEach((container) => {
		const lines = Array.from(container.querySelectorAll('.a-line'));

		const fromXValue = window.matchMedia('(max-width: 1920px)').matches ? -50 : -100;
		const toXValue = window.matchMedia('(max-width: 1920px)').matches ? window.innerWidth + 50 : 1540;

		lines.forEach((line) => {
			const randomValueForDuration = (Math.random() * (2) + 8);
			const randomValueForStart = Math.random() * randomValueForDuration;

			const tl = gsap.timeline({defaults: {repeat: -1, duration: randomValueForDuration}});
			tl.fromTo(line, {
				x: fromXValue,
				force3d: true
			}, {
				x: toXValue
			}, randomValueForStart * -1);

		})
	})
}

function init() {
    lineAnimationsMoving();
}

export default { init }