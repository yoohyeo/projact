const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

function chunk(arr, size) {
  var i,
    j,
    temparray = [],
    chunk = size;
  for (i = 0, j = arr.length; i < j; i += chunk) {
    temparray.push(arr.slice(i, i + chunk));
  }
  return temparray;
}
const 통계 = [
  {
    name: "메이플스토리",
    승리: 10,
  },
  {
    name: "서든어택",
    승리: 7,
  },
  {
    name: "던전앤 파이터",
    승리: 6,
  },
  {
    name: "로스트아크",
    승리: 6,
  },
  {
    name: "리그오브레전드(lol)",
    승리: 15,
  },
  {
    name: "FIFA 온라인 4",
    승리: 6,
  },
  {
    name: "배틀그라운드",
    승리: 7,
  },
  {
    name: "오버워치",
    승리: 5,
  },
  {
    name: "월드 오브 워크래프트(wow)",
    승리: 3,
  },
  {
    name: "카트라이더",
    승리: 3,
  },
  {
    name: "디아블로 2",
    승리: 2,
  },
  {
    name: "리니지",
    승리: 2,
  },
  {
    name: "철권 7",
    승리: 1,
  },
  {
    name: "하스스톤",
    승리: 4,
  },
  {
    name: "마구마구",
    승리: 3,
  },
  {
    name: "스타크래프트",
    승리: 8,
  },
];
const 게임월드컵 = {
  게임16강: [
    [
      {
        name: "메이플스토리",
        img: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fdbscthumb.phinf%2F5116_000_1%2F20171130105228145_EB77UXNN4.png%2F3_basic_info_log.png%3Ftype%3Dm1500_q100",
        victory: false,
      },
      {
        name: "서든어택",
        img: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F5116_000_1%2F20190801100302751_XYAIBXTO0.png%2F2%25EC%2584%259C%25EB%2593%25A0.png%3Ftype%3Dm1500_q100",
        victory: false,
      },
    ],
    [
      {
        name: "던파앤 파이터",
        img: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=https%3A%2F%2Fnng-phinf.pstatic.net%2FMjAyMTA5MDdfNDcg%2FMDAxNjMwOTgxMDg5MzQw.QGNxYim-5dvoqBM_1wtJauvh4Uyy373keEOPl3k5soAg.YdRJ71CwM0432O_PSqNuHRlShOBn_V2JSp4Gp_O2CS4g.PNG%2FDungeon_Fighter.png",
        victory: false,
      },
      {
        name: "로스트아크",
        img: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=https%3A%2F%2Fnng-phinf.pstatic.net%2FMjAyMTA5MDhfODQg%2FMDAxNjMxMDY5MDExMTAw.dxRFLpcsKNdfI2uF6aWkjkA9577uuqNOu3D_ExSuf7Mg.W9h8EKNz188lri0Z39RKyt078qTMCHJbal7XKe8mWaog.PNG%2FLost_Ark.png",
        victory: false,
      },
    ],
    [
      {
        name: "리그오브레전드(lol)",
        img: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=https%3A%2F%2Fnng-phinf.pstatic.net%2FMjAyMTA5MDhfMTk3%2FMDAxNjMxMDY4NDk3MzYx.xJYcVzRN9rJhjo_Wk3glFkqgEEQYbCAxnd49BK_L5dwg.0drLMwYFCWTAYc7e0Cy0zQUEWC-kFXEM79k__1uN7Ukg.PNG%2FLeague_of_Legends.png",
        victory: false,
      },
      {
        name: "FIFA 온라인 4",
        img: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=https%3A%2F%2Fnng-phinf.pstatic.net%2FMjAyMTA5MDdfMzAw%2FMDAxNjMwOTgxMzA5MDEy.Fp0hRsGx73yFKPFzE97dFqoRv4GiaeKd2E92sK0wrrcg.rer5qaCb394l0iTz235FrfukA_KmjDtpnTx6OGdg4jgg.PNG%2FFIFA_ONLINE4.png",
        victory: false,
      },
    ],
    [
      {
        name: "배틀그라운드",
        img: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=https%3A%2F%2Fnng-phinf.pstatic.net%2FMjAyMTEwMjlfMjI1%2FMDAxNjM1NDgwODQwNDk3.v-_CoAhLnBTNKIiNWFx770GEk-HhhwIyvkOJUxsU-qog.F-sOeRePfYAed_hNzA6GAU7pzu8XuusknLUoWYL0Gisg.PNG%2F2.png",
        victory: false,
      },
      {
        name: "오버워치",
        img: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=https%3A%2F%2Fnng-phinf.pstatic.net%2FMjAyMjA3MDhfMTI1%2FMDAxNjU3MjYxMjY1NTUz.6coB-pczXlpQml_h5lU45-915H6ScvOWiekw7fAe7FUg.fI9DTw-p4IWQFjMXr_MNSzyykhAT_0rkH1BZ50NpdS0g.PNG%2FOverwatch2_Primary_LTBKGD.png",
        victory: false,
      },
    ],
    [
      {
        name: "월드 오브 워크래프트(wow)",
        img: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=https%3A%2F%2Fnng-phinf.pstatic.net%2FMjAyMTA5MDlfMTgz%2FMDAxNjMxMTU0MTE1NzI4.7JCClvabowHuYdoHChscbzhVqPU6ckQDgJqTSvcHWv0g.G_ikJHjPQ21EuBaPzS39OiuWW4EbXjHtMFBsrRUrkm0g.PNG%2FWorld_of_Warcraft_Classic.png",
        victory: false,
      },
      {
        name: "카트라이더",
        img: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=https%3A%2F%2Fnng-phinf.pstatic.net%2FMjAyMjA3MjFfMTcy%2FMDAxNjU4MzY2MTcxODQ1.0K-4si5Gk3OrNoJBp-52XNy6qM-iVBlF7gMqRA5lDL8g.Aly2a91deketTb2Ua9Ds3M63pamZa8PB7jGoQ2uosQYg.JPEG%2F300x300.jpg",
        victory: false,
      },
    ],
    [
      {
        name: "디아블로2",
        img: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fdbscthumb.phinf%2F5116_000_1%2F20171130111257438_L3IH7LUZR.png%2F92_logo_image.png%3Ftype%3Dm1500_q100",
        victory: false,
      },
      {
        name: "리니지",
        img: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=https%3A%2F%2Fnng-phinf.pstatic.net%2FMjAyMTA5MDhfNjQg%2FMDAxNjMxMDY4NTY3Mzcz.B1vd7QCCo6RGBuSoODfpLeNDvvN0LMh5kNRODfWRs8Qg.OYI3COcjklsw-_vwVskI_huGsBhtvm3D2y4u2Js7lh4g.PNG%2FLineage.png",
        victory: false,
      },
    ],
    [
      {
        name: "철권 7",
        img: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fdbscthumb.phinf%2F5116_000_1%2F20171130105714420_Z63A6RA14.png%2Ftekken_logo.png%3Ftype%3Dm1500_q100",
        victory: false,
      },
      {
        name: "하스스톤",
        img: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=https%3A%2F%2Fnng-phinf.pstatic.net%2FMjAyMTA5MDdfMjc4%2FMDAxNjMwOTgxOTI1ODI1.CzQ8GslodDPwpXXqEAdJkDoKHkp_bLC5HDyzQBiBzIIg.o_LNzrudk_7x3Cr2q_4m7YBIsU4h_BfCgvIMvQgrpSsg.PNG%2FHearthstone.png",
        victory: false,
      },
    ],
    [
      {
        name: "마구마구",
        img: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=https%3A%2F%2Fnng-phinf.pstatic.net%2FMjAyMjA2MTBfMjc2%2FMDAxNjU0ODQ4NzkyOTkz.F5XKMGbm30Tfpu6MbRu1iZA40YNNQVZO03NoBZJVo6wg.7weK4KOnOeOIUrnPqk7EAjKllTFle0V6Yvnw8UohBLgg.PNG%2FAOS_Launcher_192.png",
        victory: false,
      },
      {
        name: "스타크래프트",
        img: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=https%3A%2F%2Fnng-phinf.pstatic.net%2FMjAyMTA5MDlfMjcx%2FMDAxNjMxMTUzOTEzODk4.B2FCs8hkqAfN7gikuA3sGRXLdWMvmYsBOlAevJdFrpQg.jR4ZKpclY6b5HWI4t_xfC_9o8ATst26oa_nErcrFgCMg.PNG%2FStarCraft_Remastered.png",
        victory: false,
      },
    ],
  ],
  게임8강: [],
  게임4강: [],
  결승: [],
  우승: [],
};

app.get("/", function (req, res) {
  res.send("Hello node.js");
});
app.get("/hello", function (req, res) {
  res.send("안녕하세요");
});

app.get("/reStart", (req, res) => {
  for (let key in 게임월드컵) {
    if (key !== "게임16강") {
      게임월드컵[key] = [];
    }
  }

  res.send(게임월드컵);
});

app.get("/game", function (req, res) {
  // console.log("hello");

  res.send(게임월드컵);
});
app.get("/win", function (req, res) {
  res.send(통계);
});

app.post("/game", (req, res) => {
  // const victoryGames = JSON.parse(req.query.victoryGames);
  const victoryGames = req.query.vitoryGames;
  const nextStage = req.query.nextStage;

  console.log("asddas");

  if (게임월드컵[nextStage].length > 0) {
    res.send({
      nextStage,
      게임월드컵,
    });
    return;
  }

  const result = victoryGames.map((value) => {
    return JSON.parse(value);
  });

  const winnersGames = chunk(result, 2);

  winnersGames.forEach((value) => {
    게임월드컵[nextStage].push(value);
  });

  if (nextStage === "우승") {
    통계.forEach((value) => {
      if (게임월드컵["우승"][0][0].name === value.name) {
        value.승리 += 1;
      }
    });
  }

  res.send({
    nextStage,
    게임월드컵,
  });
});

app.listen(5000, function () {
  console.log("Start Node Server!");
});
