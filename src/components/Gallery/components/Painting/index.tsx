import React, { FC } from "react";

import IPainting from "@interfaces/IPainting";

import "./Painting.scss";

interface IPaintingProps {
    painting: IPainting;
}

const Painting: FC<IPaintingProps> = ({ painting }) => {
    return (
        <div className={"painting"}>
            <div className={"painting__image"}>
                <img
                    src={painting.imageUrl}
                    alt={painting.name}
                />
            </div>
            <div className={"painting__info"}>
                <div className={"painting__name"}>{painting.name}</div>
                <div className={"painting__location"}>{painting.location.location}</div>
                <div className={"painting__author"}>{painting.author.name}</div>
                <div className={"painting__created"}>{painting.created}</div>
            </div>
        </div>
    );
};

export default Painting;
