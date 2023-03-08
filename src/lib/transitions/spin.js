import {cubicInOut } from 'svelte/easing';

export default function spin(node, {delay = 0, duration = 400, easing = cubicInOut, spin = 1}) {
    const originalOpacity = +getComputedStyle(node).opacity; //this will return the opacity of the element
    const originalTransform = getComputedStyle(node).transform.replace('none', ''); //this will return the transform of the element

    return {
        delay,
        duration,
        easing,
        css: (t) => {
            return `
                opacity: ${t * originalOpacity};
                transform: ${originalTransform} rotate(${t * 360 * spin}deg)
            `
        }
    }
}