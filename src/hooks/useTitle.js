
import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | MiniMart`;
    }, [title]);
};

export default useTitle;
