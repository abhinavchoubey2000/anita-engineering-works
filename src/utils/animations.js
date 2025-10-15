import gsap from "gsap";

class Animation {
	constructor() {
		this.timeline = gsap.timeline({ paused: true });
		this.ref = { current: null };
	}

	getRef() {
		return this.ref;
	}

	// Fade left
	fadeLeft(speed, intensity, type = "from") {
		if (!this.ref.current) return console.log("Reference not found");
		this.timeline.clear();
		this.timeline[type](this.ref.current, {
			x: -intensity,
			duration: speed,
			opacity: 0,
		});
		this.timeline.play();
	}

	// Fade Right
	fadeRight(speed, intensity, type = "from") {
		if (!this.ref.current) return console.log("Reference not found");
		this.timeline.clear();
		this.timeline[type](this.ref.current, {
			x: intensity,
			duration: speed,
			opacity: 0,
		});
		this.timeline.play();
	}

	// Fade Up
	fadeUp(speed, intensity, type = "from") {
		if (!this.ref.current) return console.log("Reference not found");
		this.timeline.clear();
		this.timeline[type](this.ref.current, {
			y: intensity,
			duration: speed,
			opacity: 0,
		});
		this.timeline.play();
	}

	// Fade Down
	fadeDown(speed, intensity, type = "from") {
		if (!this.ref.current) return console.log("Reference not found");
		this.timeline.clear();
		this.timeline[type](this.ref.current, {
			y: -intensity,
			duration: speed,
			opacity: 0,
		});
		this.timeline.play();
	}
}

export { Animation };
