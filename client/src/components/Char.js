import React from "react";
import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import axios from "axios";
function Char() {
  const [win, setWin] = React.useState();

  const [loading, setLoading] = React.useState(true);

  const sendGame = async () => {
    await axios({
      method: "get",
      url: "http://localhost:5000/win",
    })
      .then((response) => {
        const data = response.data;
        setWin(data);
      })
      .catch(() => {})
      .finally(() => {});

    setLoading(false);
  };
  React.useEffect(() => {
    sendGame();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  let gameName = [];
  let gameWin = [];
  win.forEach((items) => {
    gameName.push(items.name);
    gameWin.push(items.승리);
  });
  // console.log(gameName);
  // console.log(gameWin);

  let data = {
    labels: gameName,
    datasets: [
      {
        type: "bar",
        label: "게임우승횟수",
        backgroundColor: "rgb(255, 99, 132)",
        data: gameWin,
        borderColor: "red",
        borderWidth: 2,
      },
    ],
  };
  return (
    <div className="chart-div">
      <Line type="line" data={data} />
    </div>
  );
}

export default Char;
