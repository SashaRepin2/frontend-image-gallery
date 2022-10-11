import { useContext, useEffect } from "react";

import { paintingsAddPaintings } from "@context/actions/paintings";
import AppContext from "@context/index";

import Gallery from "@components/Gallery";

import IPainting from "@interfaces/IPainting";

import "./Home.scss";

const HomePage = () => {
    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        getPaintings();
    }, []);

    function getPaintings() {
        fetch("http://localhost:2000/api/paintings", {
            method: "GET",
            mode: "cors",
        })
            .then((response) => response.json())
            .then((paitings) => {
                const data = paitings.data;
                dispatch(paintingsAddPaintings(data as IPainting[]));
            })
            .catch((err) => {
                const message = (err as Error).message;
                console.log(message);
            });
    }

    return <Gallery paintings={state.paintings} />;
};

export default HomePage;
