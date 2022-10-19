import React, { FC, memo, useMemo } from "react";

import Painting from "./components/Painting";
import Empty from "@components/UI/NotFound";

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
                <Empty content={emptyText} />
            )}
        </div>
    );
};
export default memo(Gallery);
