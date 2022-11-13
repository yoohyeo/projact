import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Char } from "../components";

function Result() {
  const [game, setGame] = React.useState();

  const [loading, setLoading] = React.useState(true);

  const [stage, setStage] = React.useState({
    tournament: "우승",
  });
  const navigation = useNavigate();

  // const winnergame = () => {
  //   const cloneStage = { ...stage };
  //   let result = (cloneStage["tournament"] = "우승");
  //   return result;
  // };

  const sendGame = async () => {
    await axios({
      method: "get",
      url: "http://localhost:5000/game",
    })
      .then((response) => {
        const data = response.data;
        setGame(data);
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
  const winnersGame = game[stage.tournament];
  return (
    <div className="main-app">
      <img
        className="gameImg"
        src={winnersGame[0][0].img}
        alt="이미지"
        style={{ width: 400, height: 400 }}
      />
      <div className="game-name">{winnersGame[0][0].name}</div>
      <Char />

      <button
        className="btn"
        type="button"
        onClick={async () => {
          await axios({
            url: "http://localhost:5000/reStart",
          }).then((response) => {
            const { 게임월드컵 } = response.data;
            setGame(게임월드컵);
          });

          navigation("/on1");
        }}
      >
        다시하기
      </button>
    </div>
  );
}

export default Result;
