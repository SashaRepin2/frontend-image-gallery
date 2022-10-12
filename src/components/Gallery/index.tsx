import React, { FC } from "react";

import Painting from "./components/Painting";

import IPainting from "@interfaces/IPainting";

import "./Gallery.scss";

export interface IGalleryProps {
    paintings: IPainting[];
    emptyText?: string;
}

const Gallery: FC<IGalleryProps> = ({ paintings, emptyText = "Ничего не найдено" }) => {
    return (
        <div className={"gallery-container"}>
            {paintings.length ? (
                <div className={"gallery"}>
                    {paintings.map((painting) => (
                        <Painting
                            key={painting.id}
                            painting={painting}
                        />
                    ))}
                </div>
            ) : (
                <div className={"gallery__empty"}>{emptyText}</div>
            )}
        </div>
    );
};
export default Gallery;
