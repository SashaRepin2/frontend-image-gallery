import { useCallback, useContext, useEffect, useState } from "react";

import { paintingsAddPaintings } from "@context/actions/paintings";
import AppContext from "@context/index";

import Gallery from "@components/Gallery";
import Pagination from "@components/Pagination";

import IPainting from "@interfaces/IPainting";

import "./Home.scss";

const HomePage = () => {
    const { state, dispatch } = useContext(AppContext);
    const [page, setPage] = useState<number>(1);

    const onChangePageHandler = useCallback(
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => {
            console.log(event);
            setPage(page);
        },
        [setPage],
    );

    useEffect(() => {
        getPaintings();
    }, [page]);

    function getPaintings() {
        fetch(`http://localhost:2000/api/paintings?page=${page}`, {
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

    return (
        <>
            <Gallery paintings={state.paintings} />
            <Pagination
                currPage={page}
                countPages={10}
                onChange={onChangePageHandler}
                isDisabledBtns={true}
            />
            {page}
        </>
    );
};

export default HomePage;
