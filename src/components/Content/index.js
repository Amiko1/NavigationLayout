import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import getData from "../../helpers/getData";
import FindById from "../../helpers/FindById";
import { ContentTxt } from "./Styles";


function Content(props) {
  let [description, setDescription] = useState("");
  const { id } = useParams();

  useEffect(async () => {
    let MenuData = await getData();

    let descData = FindById(MenuData, id);
    setDescription(descData.description);
  }, [id]);

  return (
    <div>
      <ContentTxt>{description}</ContentTxt>
    </div>
  );
}

export default Content;
