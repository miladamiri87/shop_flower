import React from "react";
import Newlatest from "./Newlatest";

export default function NewLatestes({ new_arrival_card }) {
  return (
    <>
      <div id="container_latestP">
        {new_arrival_card
          .filter((nac) => {
            let filtered_nac = nac.is_new;
            return filtered_nac.includes("1");
          })
          .map((fnac) => (
            <Newlatest
              image={fnac.img_new_arrival_card}
              title={fnac.title_new_arrival_card}
              category={fnac.category_id}
              key={fnac.id}
            />
          ))}
      </div>
    </>
  );
}
