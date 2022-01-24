const MAIN_API = "https://60ebd365e9647b0017cdde51.mockapi.io";

export default async () => {
  let fetchData = await fetch(`${MAIN_API}/menu`);

  let Data = await fetchData.json();

  return Data;
};
