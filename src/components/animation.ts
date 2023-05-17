import { gsap } from "gsap";

export default () => {
	return {
		init() {
			console.log("start animation");

            const targets = document.querySelectorAll('[data-target]');

            const tl = gsap.timeline();

            targets.forEach((target) => {
                tl.add(()=>{
                    const wave = target.querySelector("[data-wave]");

                    target.classList.add("container_animation");
                    wave.classList.add("wave_animation");
                }, "+=0.025")
            });

		},
	};
};
