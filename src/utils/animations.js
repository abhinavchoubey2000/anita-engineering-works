import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

class Animation {
	constructor(ref = undefined) {
		if (!gsap.core.globals().ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
		this.timeline = gsap.timeline();
		this.ref = ref ? ref : { current: null };
		this.gsap = gsap;
	}

	getRef() {
		return this.ref;
	}
	getTimeline() {
		return this.timeline;
	}

	// Fade
	fade(
		direction = "up",
		speed,
		intensity,
		type = "from",
		timeline = false,
		otherOptions = {},
		scrollerOptions = {}
	) {
		if (!this.ref.current) return console.log("Reference not found");

		const AnimationDirection =
			direction === "up"
				? { y: intensity }
				: direction === "down"
				? { y: -intensity }
				: direction === "left"
				? { x: -intensity }
				: direction === "right"
				? { x: intensity }
				: { x: 0, y: 0 };

		const timelinePlaceholder = timeline ? "timeline" : "gsap";

		const scrollTriggerOptions = Object.keys(scrollerOptions).length
			? { scrollTrigger: { ...scrollerOptions, trigger: this.ref.current } }
			: {};

		this[timelinePlaceholder][type](this.ref.current, {
			...AnimationDirection,
			...otherOptions,
			...scrollTriggerOptions,
			duration: speed,
			opacity: 0,
		});
	}
}

export { Animation };
