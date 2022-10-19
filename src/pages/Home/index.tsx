import { useCallback, useContext, useEffect, useState } from "react";

import { paintingsAddPaintings } from "@context/actions/paintings";
import AppContext from "@context/index";
import ReactPaginate from "react-paginate";

import Gallery from "@components/Gallery";
import Pagination from "@components/Pagination";
import Input from "@components/UI/Input";
import Select from "@components/UI/Select";

import rootApi from "@api/rootApi";

import "./Home.scss";

const HomePage = () => {
    const { state, dispatch } = useContext(AppContext);
    const [page, setPage] = useState<number>(0);
    const [searchValue, setSearchValue] = useState<string>("");

    const onChangeInputHandler = useCallback(
        (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setSearchValue(event.target.value);
        },
        [],
    );

    const onChangePageHandler = useCallback(
        (selectedItem: { selected: number }) => {
            console.log(selectedItem);

            setPage(selectedItem.selected);
        },
        [setPage],
    );

    useEffect(() => {
        rootApi
            .getPaintings(page + 1)
            .then((paintings) => {
                dispatch(paintingsAddPaintings(paintings.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }, [page]);

    return (
        <>
            <Gallery paintings={state.paintings} />
            <ReactPaginate
                pageCount={10}
                forcePage={page}
                onPageChange={onChangePageHandler}
                containerClassName={"pagination"}
                pageLinkClassName={"pagination__page"}
                previousLinkClassName={"pagination__page"}
                nextLinkClassName={"pagination__page"}
                activeLinkClassName={"pagination__page_active"}
            />
        </>
    );
};

export default HomePage;
