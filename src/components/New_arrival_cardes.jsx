import React from "react";
import New_arrival_card from "./New_arrival_card";

export default function New_arrival_cardes({ new_arrival_card, slug }) {
  const xx = new_arrival_card;
  return (
    <div id="container_new_arrival_all">
      {slug == "all"
        ? new_arrival_card.map((nac) => (
            <New_arrival_card
              image={nac.img_new_arrival_card}
              title={nac.title_new_arrival_card}
              cost={nac.cost_new_arrival_card}
              id={nac.id}
              key={nac.id}
            />
          ))
        : xx
            .filter((nac) => {
              let filtered_nac = nac.slug_tag_new_arrival_card;
              return filtered_nac.includes(slug);
            })
            .map((fnac) => (
              <New_arrival_card
                image={fnac.img_new_arrival_card}
                title={fnac.title_new_arrival_card}
                cost={fnac.cost_new_arrival_card}
              />
            ))}
    </div>
  );
}
