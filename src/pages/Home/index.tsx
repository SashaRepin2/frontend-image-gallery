import { useCallback, useContext, useEffect, useState } from "react";

import { paintingsAddPaintings } from "@context/actions/paintings";
import AppContext from "@context/index";

import Gallery from "@components/Gallery";
import Pagination from "@components/Pagination";
import Input from "@components/UI/Input";
import Select from "@components/UI/Select";

import { API } from "@api/API";

import "./Home.scss";

const HomePage = () => {
    const { state, dispatch } = useContext(AppContext);
    const [page, setPage] = useState<number>(1);
    const [searchValue, setSearchValue] = useState<string>("");

    const onChangeInputHandler = useCallback(
        (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setSearchValue(event.target.value);
        },
        [],
    );

    const onChangePageHandler = useCallback(
        (
            event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
            page: number,
        ) => {
            setPage(page);
        },
        [setPage],
    );

    useEffect(() => {
        API.getPaintings()
            .then((paintings) => {
                dispatch(paintingsAddPaintings(paintings.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }, [page]);

    return (
        <>
            <div
                style={{
                    width: "fit-content",
                    margin: "10px auto",
                }}
            >
                <Input
                    value={searchValue}
                    changeValue={onChangeInputHandler}
                    placeholder={"Девятый вал"}
                    label={"Введите название картины"}
                    id={"search-gallery "}
                    name={"search"}
                />
                <Select
                    options={[
                        {
                            name: "first",
                            value: "2",
                        },
                    ]}
                />
            </div>
            <Gallery paintings={state.paintings} />
            <div className={"pagination-container"}>
                <Pagination
                    currPage={page}
                    countPages={10}
                    onChange={onChangePageHandler}
                />
            </div>
        </>
    );
};

export default HomePage;
