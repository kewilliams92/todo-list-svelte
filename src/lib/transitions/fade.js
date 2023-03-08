import { cubicInOut } from "svelte/easing";

export default function fade(node, {delay = 0, duration = 400, easing = cubicInOut}){
    const originalOpacity = +getComputedStyle(node).opacity;

    return {
        delay,
        duration,
        easing,
        tick: (t, u) => {
            node.style.opacity = t * originalOpacity;
        }
    }
}