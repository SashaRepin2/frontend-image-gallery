import React, { FC } from "react";

import Painting from "./components/Painting";

import IPainting from "@interfaces/IPainting";

import "./Gallery.scss";

export interface IGalleryProps {
    paintings: IPainting[];
}

const Gallery: FC<IGalleryProps> = ({ paintings }) => {
    return (
        <div className={"gallery shadow"}>
            {paintings.length
                ? paintings.map((painting) => (
                      <Painting
                          key={painting.id}
                          painting={painting}
                      />
                  ))
                : "Empty"}
        </div>
    );
};
export default Gallery;
