function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;

  const backstyle = {
    border: "1px solid black",
    background: "powderblue",
    lineHeight: 1.5,
  };

  const bodystyle = {
    fontWeight: "bold",
    textAlign: "left",
    font: "verdana",
  }

  return (
    <div style = {backstyle}>
      <h1>CityList</h1>
      <ul style = {bodystyle}>
        <PrintCity cities = {cities}/>
      </ul>
    </div>
  )
}

function PrintCity(props) {

  const { cities } = props;

  return (
    cities.map((item, index) => {
    return <li key={index}>{item}</li>;
    })
  );
}

export default CityList;

// {cities.map((item, index) => {
//   return <li key={index}>{item}</li>;
// })}
