import { derived } from "svelte/store";
import settings from "./settings";
import location from "./location";

const direction = derived([settings, location], ([$settiings, $location], set)=>{
    const timer = setTimeout(() => {
        set($settiings.language === 'ar' ? 'rtl' : 'ltr');
    }, 1000);
    return () => {
        clearTimeout(timer)
    }
}, 'not decided')

export default direction;