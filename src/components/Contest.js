import React from "react";
import Countdown from "./Countdown";
import { getDates } from "../utils/time";

const Contest = ({ contest }) => {
  const {
    sponsor,
    title,
    details,
    start_time,
    end_time,
    wardens,
    judges,
  } = contest;

  const t = getDates(start_time, end_time);
  console.log("---", getDates(start_time, end_time));

  return (
    <div className={"wrapper-contest " + t.state}>
      <div className="wrapper-sponsor">
        <a className="sponsor-logo" href={sponsor.image}>
          <img src={sponsor.image} alt={sponsor.name} />
        </a>
      </div>
      <div className="wrapper-contest-content">
        <h4>{title}</h4>
        <p>{details}</p>
        {t.state === "soon" || t.state === "active" ? (
          <Countdown state={t.state} start={start_time} end={end_time} />
        ) : (
          <p>
            Contest ran {t.startDay}—{t.endDay}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contest;
