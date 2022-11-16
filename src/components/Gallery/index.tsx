import React, { FC, memo, useMemo } from "react";

import Painting from "./components/Painting";
import NotFound from "@components/UI/Empty";

import IPainting from "@interfaces/IPainting";

import "./Gallery.scss";

export interface IGalleryProps {
    paintings: IPainting[];
    emptyText?: string;
}

const Gallery: FC<IGalleryProps> = (props) => {
    const { paintings, emptyText = "Картины не найдены" } = props;

    const memoPaintings = useMemo(
        () =>
            paintings.map((painting) => (
                <Painting
                    key={painting.id}
                    painting={painting}
                />
            )),
        [paintings],
    );

    return (
        <>
            {memoPaintings.length ? (
                <div className={"gallery"}>{memoPaintings}</div>
            ) : (
                <NotFound content={emptyText} />
            )}
        </>
    );
};

export default memo(Gallery);
