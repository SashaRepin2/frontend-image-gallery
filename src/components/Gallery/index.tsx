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
    const { paintings, emptyText } = props;

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
        <div className={"gallery-container"}>
            {memoPaintings.length ? (
                <div className={"gallery"}>{memoPaintings}</div>
            ) : (
                <NotFound content={emptyText} />
            )}
        </div>
    );
};

Gallery.defaultProps = {
    emptyText: "Картины не найдены",
};

export default memo(Gallery);
