function FindById(data, id) {
  let targetItem = {
    description: "NO DATA",
  };

  function checkItems(menuData) {
    if (menuData?.items) {
      for (let i = 0; i < menuData.items.length; i++) {
        if (menuData.items[i].id === id) {
          targetItem = menuData.items[i];
          break;
        } else if (menuData.items[i].items) {
          checkItems(menuData.items[i]);
        }
      }
    }
  }

  for (let i = 0; i < data.length; i++) {
    checkItems(data[i]);
  }

  return targetItem;
}

export default FindById;
