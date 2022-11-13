import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components";

function Onboarding1() {
  const [game, setGame] = React.useState();

  const [loading, setLoading] = React.useState(true);

  const [stage, setStage] = React.useState({
    tournament: "게임16강",
    page: 0,
  });

  const navigation = useNavigate();

  const nextPage = () => {
    const cloneStage = { ...stage };
    cloneStage["page"] += 1;
    setStage(cloneStage);
  };
  const getNextStage = () => {
    const cloneStage = { ...stage };
    let result = "";

    if (cloneStage["tournament"] === "게임16강") {
      result = "게임8강";
    } else if (cloneStage["tournament"] === "게임8강") {
      result = "게임4강";
    } else if (cloneStage["tournament"] === "게임4강") {
      result = "결승";
    } else {
      result = "우승";
    }

    return result;
  };

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
    // console.log("실행");
    sendGame();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const nowBattleGame = game[stage.tournament][stage.page];
  // console.log(nowBattleGame);

  return (
    <div className="background_div">
      <Header tournament={stage.tournament} />
      <div className="main-div">
        {nowBattleGame &&
          nowBattleGame.map((value, index) => {
            return (
              <div
                key={`game-${index}`}
                onClick={async () => {
                  const cloneGame = { ...game };
                  cloneGame[stage.tournament][stage.page][index][
                    "victory"
                  ] = true;

                  const gameLength = cloneGame[stage.tournament].length;

                  if (gameLength === stage.page + 1) {
                    // victory true인애들 만 뽑아서

                    let vitoryGames = [];

                    cloneGame[stage.tournament].forEach((items) => {
                      // console.log(items);

                      if (items[0].victory === true) {
                        items[0].victory = false;
                        vitoryGames.push(items[0]);
                        // console.log(items);
                      } else {
                        items[1].victory = false;
                        vitoryGames.push(items[1]);
                        // console.log(items);
                      }
                    });

                    const nextStage = getNextStage();

                    await axios({
                      method: "post",
                      url: "http://localhost:5000/game",
                      headers: { "Content-Type": "application/json" },
                      params: {
                        vitoryGames: vitoryGames,
                        nextStage: nextStage,
                      },
                    })
                      .then((response) => {
                        const { nextStage, 게임월드컵 } = response.data;
                        setGame(게임월드컵);

                        const cloneStage = { ...stage };
                        cloneStage.tournament = nextStage;
                        cloneStage.page = 0;
                        console.log(게임월드컵);
                        setStage(cloneStage);
                      })
                      .catch((e) => {
                        console.log(e);
                      });
                    if (stage.tournament === "결승") {
                      navigation("/Result");
                    }
                    return;
                  }

                  setGame(cloneGame);
                  nextPage(index);
                }}
              >
                <img
                  className="gameImg"
                  src={value.img}
                  alt="이미지"
                  style={{ width: 400, height: 400 }}
                />
                <div className="game-name">{value.name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Onboarding1;
