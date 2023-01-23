import React from 'react'

export default function Card(props) {
  return (
    <div
    style={{
      height: 314,
      background: "#F7F7F7",
      borderRadius: 10,
      padding: "10px 10px 10px 30px",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: 50,
          height: 50,
          background: "#FFFFFF",
          borderRadius: 10,
          margin: "20px 0 0 0",
          padding: 15,
        }}
      >
        <img src={props.img} style={{ width: "100%", height: "100%" }} />
      </div>
      <p
        style={{
          height: 50,
          fontWeight: "800",
          fontSize: 48,
          color: "#0E1F51",
          opacity: 0.1,
          marginTop: 0,
        }}
      >
        {props.count}
      </p>
    </div>
    <p
      style={{
        height: 26,
        fontWeight: "800",
        fontSize: 20,
        color: "#0E1F51",
      }}
    >
      {props.title}
    </p>
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          width: 60,
          height: 6,
          background: "#FF3E54",
          borderRadius: 6,
        }}
      ></div>
      <div
        style={{
          width: 20,
          height: 6,
          background: "#FF3E54",
          borderRadius: 6,
          marginLeft: 10,
        }}
      ></div>
    </div>
    <p
      style={{
        fontWeight: "500",
        fontSize: 16,
        lineHeight: "26px",
        color: "#000000",
      }}
    >
      {props.message}
    </p>
  </div>
  )
}
