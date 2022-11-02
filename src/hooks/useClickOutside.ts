import { useEffect, useRef } from "react";

function useClickOutside<TElement extends HTMLElement = HTMLElement>(
    callback: (event: MouseEvent) => void,
) {
    const ref = useRef<TElement | null>(null);

    function onClickOutsideHandler(event: MouseEvent) {
        const el = ref.current;

        if (!el || el.contains(event.target as Node)) {
            return;
        }

        callback(event);
    }

    useEffect(() => {
        document.addEventListener("click", onClickOutsideHandler, true);

        return () => {
            document.removeEventListener("click", onClickOutsideHandler, true);
        };
    });

    return {
        ref,
    };
}
export default useClickOutside;
