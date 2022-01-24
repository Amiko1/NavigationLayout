import {
  DropdownWrapper,
  DropdownTxt,
  DropdownBody,
  DropdownBodyList,
  SecondaryBody,
} from "./Styles";
import { useEffect, useState, useRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";

// import DropDownIcon from "..Icons/DropDownIcon.js";

function RenderMenuData({ menuData, reff }) {
  let [isTropdownShow, setIsTropdownShow] = useState("hidden");

  const downDropdowns = () => {
    setIsTropdownShow("hidden");
  };

  useImperativeHandle(reff, () => {
    return {
      downDropdowns: downDropdowns,
    };
  });

  return menuData.items.map((item) => (
    <DropdownBodyList key={item.id}>
      {item.items ? (
        <Link
          to={`content/${item.id}`}
          onMouseEnter={() => setIsTropdownShow("show")}
        >
          {item.name}
        </Link>
      ) : (
        <Link to={`content/${item.id}`}> {item.name} </Link>
      )}
      {item.items && (
        <SecondaryBody onMouseLeave={downDropdowns} visible={isTropdownShow}>
          <RenderMenuData menuData={item} />
        </SecondaryBody>
      )}
    </DropdownBodyList>
  ));
}

function BaseDropDown({ menuData }) {
  const reff = useRef(null);

  const handleClick = () => {
    reff.current.downDropdowns();
  };

  let [isTropdownShow, setIsTropdownShow] = useState("hidden");

  function downDropDown() {
    setIsTropdownShow("hidden");
    handleClick();
  }

  return (
    <DropdownWrapper onMouseLeave={downDropDown}>
      <DropdownTxt onMouseEnter={() => setIsTropdownShow("show")}>
        {menuData.name}
      </DropdownTxt>

      <DropdownBody visible={isTropdownShow}>
        <RenderMenuData reff={reff} menuData={menuData} />
      </DropdownBody>
    </DropdownWrapper>
  );
}

export default BaseDropDown;
