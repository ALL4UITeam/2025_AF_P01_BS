export default function useScrollHidden(boolState) {
    if (boolState == true) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
}