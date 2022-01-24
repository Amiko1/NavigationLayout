import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import getData from "../../helpers/getData";
import FindById from "../../helpers/FindById";

import { ContentTxt, ContentWrapper } from "./Styles";

import BaseSpinner from "../BaseSpinner";

function Content(props) {
  let [description, setDescription] = useState("");
  let [spinwerShow, setSpinnerShow] = useState(true);
  const { id } = useParams();

  useEffect(async () => {
    setSpinnerShow(true);
    let MenuData = await getData();

    let descData = FindById(MenuData, id);
    setDescription(descData.description);
    setSpinnerShow(false);
  }, [id]);

  return (
    <ContentWrapper>
      {spinwerShow ? <BaseSpinner /> : <ContentTxt>{description}</ContentTxt>}
    </ContentWrapper>
  );
}

export default Content;
