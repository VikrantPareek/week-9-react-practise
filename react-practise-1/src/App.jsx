import { Children } from "react";

function App() {
  return (
    <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
      <ProfileCard name={"Vikrant"} age={20} bio={"Developer"}>
        <button
          style={{
            background: "grey",
            color: "white",
            fontSize: "18px",
            border: "none",
          }}
        >
          Follow
        </button>
      </ProfileCard>
      <ProfileCard name={"Vikrant"} age={20} bio={"Developer"}>
        <button
          style={{
            background: "grey",
            color: "white",
            fontSize: "18px",
            border: "none",
          }}
        >
          Follow
        </button>
      </ProfileCard>
    </div>
  );
}

function ProfileCard(props) {
  return (
    <div
      style={{
        background: "skyblue",
        color: "white",
        width: "200px",
        padding: "10px",
        borderRadius: "10px",
        lineHeight: "0.2",
      }}
    >
      <h3>Name: {props.name}</h3>
      <h4>Age: {props.age}</h4>
      <h4>Bio: {props.bio}</h4>
      {props.children}
    </div>
  );
}

export default App;
