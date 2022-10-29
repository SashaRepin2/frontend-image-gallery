import React, { FC } from "react";

import PaintingField from "./components";

import IPainting from "@interfaces/IPainting";

import "./Painting.scss";

interface IPaintingProps {
    painting: IPainting;
}

const Painting: FC<IPaintingProps> = (props) => {
    const { painting } = props;

    return (
        <div className={"painting"}>
            <div className={"painting__image"}>
                <img
                    src={painting.imageUrl}
                    alt={painting.name}
                />
            </div>
            <div className={"painting__info"}>
                <PaintingField
                    title={"Название:"}
                    value={painting.name}
                />
                <PaintingField
                    title={"Год создания:"}
                    value={painting.created}
                />
                <PaintingField
                    title={"Автор:"}
                    value={painting.author.name}
                />
                <PaintingField
                    title={"Местоположение:"}
                    value={painting.location.location}
                />
            </div>
        </div>
    );
};

export default Painting;
