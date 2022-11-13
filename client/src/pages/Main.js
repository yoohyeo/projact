import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigation = useNavigate();

  return (
    <div className="main-app">
      <img
        src="https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=https%3A%2F%2Fnng-phinf.pstatic.net%2FMjAyMTA5MDdfNDcg%2FMDAxNjMwOTgxMDg5MzQw.QGNxYim-5dvoqBM_1wtJauvh4Uyy373keEOPl3k5soAg.YdRJ71CwM0432O_PSqNuHRlShOBn_V2JSp4Gp_O2CS4g.PNG%2FDungeon_Fighter.png"
        alt="메인이미지"
      />
      <button
        className="btn"
        type="button"
        onClick={() => {
          navigation("/on1");
        }}
      >
        시작하기
      </button>
    </div>
  );
}

export default Main;
