import BaseDropDown from "../BaseDropdown";
import getData from "../../helpers/getData";
import { useEffect, useState } from "react";
import { NavBar, NavBarList, List, ListTxt } from "./Styles";

function RenderList({ menuData }) {
  let checkItems = (data, index) => {
    if (index > 7) {
      return (
        <List key={data.id}>
          {data.items.length > 0 ? (
            <BaseDropDown isUnhovered="false" menuData={data} />
          ) : (
            <ListTxt> {data.name} </ListTxt>
          )}
        </List>
      );
    }
  };

  return menuData.map((data, index) => checkItems(data, index));
}

function Navigation() {
  let [menuData, setmenuData] = useState([]);

  useEffect(async () => {
    let data = await getData();

    setmenuData(data);
  }, []);

  return (
    <>
      <NavBar>
        <NavBarList>
          <RenderList menuData={menuData} />
        </NavBarList>
      </NavBar>
    </>
  );
}

export default Navigation;
