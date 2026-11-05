"use client";

import { useState } from "react";

const labels = [
  "Identidade",
  "Dinheiro em espécie",
  "Fone de ouvido",
  "Toalha",
  "Carregador (e portátil, se tiver)",
  "Chapéu",
  "Protetor solar e skincare",
  "Repelente",
  "Sacolas extras",
  "Porta-sabonete e sabonete",
  "Escova de dente",
  "Escova de cabelo",
  "Shampoo e condicionador",
  "Roupa de banho (pelo menos 2)",
  "Pijama",
  "Roupa íntima",
  "Sandália",
  "Sapato fechado",
  "Perfume",
  "Roupas leves ou de academia",
  "Hidratante corporal",
  "Meia",
  "Papel higiênico",
  "Lençol",
];

export default function Checklist() {
  const [done, setDone] = useState({});
  const count = Object.values(done).filter(Boolean).length;
  const pct = `${Math.round((count / labels.length) * 100)}%`;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <p
          style={{
            margin: "0",
            fontFamily: "var(--font-bricolage), sans-serif",
            fontSize: "24px",
            fontWeight: "600",
          }}
        >
          {count} de {labels.length} na mala
        </p>
        <button
          type="button"
          onClick={() => setDone({})}
          style={{
            minHeight: "44px",
            padding: "10px 18px",
            borderRadius: "999px",
            border: "1px solid #102e23",
            background: "#fffdf8",
            color: "#102e23",
            font: "inherit",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Desmarcar tudo
        </button>
      </div>
      <div
        style={{
          height: "8px",
          borderRadius: "4px",
          background: "#e8dfc6",
          overflow: "hidden",
        }}
      >
        <div style={{ height: "8px", background: "#D46B43", width: pct }}></div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "4px 20px",
        }}
      >
        {labels.map((label, i) => (
          <label
            key={i}
            htmlFor={`mala-${i}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              minHeight: "44px",
              cursor: "pointer",
              borderBottom: "1px solid #f0e9d6",
            }}
          >
            <input
              type="checkbox"
              id={`mala-${i}`}
              checked={!!done[i]}
              onChange={() => setDone({ ...done, [i]: !done[i] })}
              style={{
                width: "20px",
                height: "20px",
                accentColor: "#315c45",
                flex: "0 0 auto",
              }}
            />
            <span>{label}</span>
          </label>
        ))}
      </div>
    </>
  );
}
