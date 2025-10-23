import type { JSX } from "react";
import skillsData from "./assets/data.ts";
// import {skillsData} from "./assets/data.js";

function App(): JSX.Element {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <h2>Captivate Dev Profile</h2>
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(): JSX.Element {
  // if the image is in the public folder, reference it at runtime (no import)
  return <img src="/me.jpg" className="avatar" alt="Dev Profile Avatar" />;
}

function Intro(): JSX.Element {
  return (
    <p>
      Welcome to the Captivate Dev Profile App! This application showcases my
      skills and projects that I've learned over the course of my career.
    </p>
  );
}

function SkillList(): JSX.Element {
  return (
    <ul className="skill-list">
      {/* <Skill mySkill={"Skill #1"} experience={"🚀"} color="red"></Skill> */}
      {skillsData.map((s, i) => (
        <Skill
          key={s.skill + i}
          mySkill={s.skill}
          experience={s.experience}
          color={s.color}
        />
      ))}
    </ul>
  );
}

function Skill(props: {
  mySkill: string;
  experience: string;
  color: string;
}): JSX.Element {
  console.log(props);

  //* we'll use a ternary and not short-circuit via the && approach that Jonas likes to use

  return (
    <li
      className="skill"
      style={{
        backgroundColor: props.color,
      }}
    >
      {props.mySkill}
      {/* {props.experience} */}
      {props.experience == "high" ? (
        <p>💪</p>
      ) : props.experience == "med" ? (
        <p>👍</p>
      ) : props.experience == "low" ? (
        <p>🦶</p>
      ) : (
        <p>💩</p>
      )}
    </li>
  );
}

export default App;
