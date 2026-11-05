import Checklist from "./checklist";

export default function Page() {
  return (
    <>
      <div
        style={{
          fontFamily: "var(--font-instrument), system-ui, sans-serif",
          color: "#102e23",
          background: "#f4f0e5",
          lineHeight: "1.55",
          fontSize: "16px",
        }}
      >
        {/* HERO */}
        <header
          style={{
            background: "#102e23",
            color: "#f4f0e5",
            padding: "72px 24px 64px",
          }}
        >
          <div
            style={{
              maxWidth: "1160px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            <p
              style={{
                margin: "0",
                fontSize: "14px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#d5c49a",
                fontWeight: "600",
              }}
            >
              Uso interno · Luan, Ana e Mayla
            </p>
            <h1
              style={{
                margin: "0",
                fontFamily:
                  "var(--font-bricolage), var(--font-instrument), sans-serif",
                fontWeight: "800",
                fontSize: "clamp(44px, 8vw, 96px)",
                lineHeight: "0.95",
                letterSpacing: "-0.02em",
              }}
            >
              Trip Amazônia
              <br />
              Jungle
            </h1>
            <div
              style={{
                width: "96px",
                height: "6px",
                borderRadius: "3px",
                background: "#d46b43",
              }}
            ></div>
            <p
              style={{
                margin: "0",
                maxWidth: "640px",
                fontSize: "20px",
                color: "#e6dfcb",
              }}
            >
              Belém → Manaus → Lago do Juma. Cinco dias com dois de cidade e
              três de selva. Aqui está o calendário, o hotel, os pacotes, a
              lista da mala e quanto tudo custa.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                gap: "16px",
                marginTop: "8px",
              }}
            >
              <div
                style={{
                  border: "1px solid #315c45",
                  borderRadius: "14px",
                  padding: "18px 20px",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    fontSize: "13px",
                    color: "#d5c49a",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Ida
                </p>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontSize: "26px",
                    fontWeight: "600",
                  }}
                >
                  Sex 13/11 · 18h55
                </p>
              </div>
              <div
                style={{
                  border: "1px solid #315c45",
                  borderRadius: "14px",
                  padding: "18px 20px",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    fontSize: "13px",
                    color: "#d5c49a",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Volta
                </p>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontSize: "26px",
                    fontWeight: "600",
                  }}
                >
                  Ter 17/11 · 19h35
                </p>
              </div>
              <div
                style={{
                  border: "1px solid #315c45",
                  borderRadius: "14px",
                  padding: "18px 20px",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    fontSize: "13px",
                    color: "#d5c49a",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Passeios
                </p>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontSize: "26px",
                    fontWeight: "600",
                  }}
                >
                  Day Tour + Iguana
                </p>
              </div>
              <div
                style={{
                  border: "1px solid #315c45",
                  borderRadius: "14px",
                  padding: "18px 20px",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    fontSize: "13px",
                    color: "#d5c49a",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Custo por pessoa
                </p>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontSize: "26px",
                    fontWeight: "600",
                  }}
                >
                  R$ 2.817,04
                </p>
              </div>
            </div>
            <nav
              aria-label="Seções"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "8px",
              }}
            >
              <a
                href="#calendario"
                style={{
                  color: "#f4f0e5",
                  border: "1px solid #315c45",
                  borderRadius: "999px",
                  padding: "10px 18px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Calendário
              </a>
              <a
                href="#galera"
                style={{
                  color: "#f4f0e5",
                  border: "1px solid #315c45",
                  borderRadius: "999px",
                  padding: "10px 18px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                A galera
              </a>
              <a
                href="#hotel"
                style={{
                  color: "#f4f0e5",
                  border: "1px solid #315c45",
                  borderRadius: "999px",
                  padding: "10px 18px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Hotel
              </a>
              <a
                href="#pacotes"
                style={{
                  color: "#f4f0e5",
                  border: "1px solid #315c45",
                  borderRadius: "999px",
                  padding: "10px 18px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Pacotes
              </a>
              <a
                href="#custos"
                style={{
                  color: "#f4f0e5",
                  border: "1px solid #315c45",
                  borderRadius: "999px",
                  padding: "10px 18px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Custos
              </a>
              <a
                href="#mala"
                style={{
                  color: "#f4f0e5",
                  border: "1px solid #315c45",
                  borderRadius: "999px",
                  padding: "10px 18px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Mala
              </a>
              <a
                href="#pendencias"
                style={{
                  color: "#f4f0e5",
                  border: "1px solid #315c45",
                  borderRadius: "999px",
                  padding: "10px 18px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Confirmado
              </a>
            </nav>
          </div>
        </header>

        <main
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "0 24px 96px",
            display: "flex",
            flexDirection: "column",
            gap: "88px",
          }}
        >
          {/* CALENDARIO */}
          <section
            id="calendario"
            style={{
              paddingTop: "72px",
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <p
                style={{
                  margin: "0",
                  fontSize: "14px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#315c45",
                  fontWeight: "600",
                }}
              >
                Programação
              </p>
              <h2
                style={{
                  margin: "0",
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontSize: "44px",
                  lineHeight: "1.05",
                  fontWeight: "800",
                }}
              >
                Calendário · 13 a 17 de novembro
              </h2>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  marginTop: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "4px",
                      background: "#fffdf8",
                      border: "1px solid #d5c49a",
                    }}
                  ></span>
                  Manaus
                </span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "4px",
                      background: "#102e23",
                    }}
                  ></span>
                  Selva (Pacote Iguana)
                </span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: "#d46b43",
                    }}
                  ></span>
                  Voo
                </span>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(205px, 1fr))",
                gap: "12px",
                alignItems: "stretch",
              }}
            >
              {/* 13 */}
              <div
                style={{
                  background: "#fffdf8",
                  border: "1px solid #d5c49a",
                  borderRadius: "18px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    padding: "18px 18px 14px",
                    borderBottom: "1px solid #e8dfc6",
                  }}
                >
                  <p
                    style={{
                      margin: "0",
                      fontSize: "13px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#315c45",
                    }}
                  >
                    Sexta
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-bricolage), sans-serif",
                      fontSize: "48px",
                      fontWeight: "800",
                      lineHeight: "1",
                    }}
                  >
                    13
                  </p>
                  <p
                    style={{
                      margin: "6px 0 0",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Chegada e aniversários
                  </p>
                </div>
                <div
                  style={{
                    padding: "16px 18px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    fontSize: "15px",
                  }}
                >
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d46b43",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#315c45",
                        }}
                      >
                        18h55
                      </p>
                      <p style={{ margin: "0" }}>
                        Pouso em Manaus. O Josué busca a galera no aeroporto
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#315c45",
                        }}
                      >
                        ~19h30
                      </p>
                      <p style={{ margin: "0" }}>
                        Check-in no Rede Andrade Amazônia
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#315c45",
                        }}
                      >
                        20h
                      </p>
                      <p style={{ margin: "0" }}>
                        Jantar e Porão do Alemão: comemoração dos aniversários
                        do Josué e do Luan
                      </p>
                    </div>
                  </div>
                  <p
                    style={{
                      margin: "auto 0 0",
                      paddingTop: "8px",
                      fontSize: "13px",
                      color: "#315c45",
                      fontWeight: "600",
                    }}
                  >
                    Dorme no hotel
                  </p>
                </div>
              </div>

              {/* 14 */}
              <div
                style={{
                  background: "#fffdf8",
                  border: "1px solid #d5c49a",
                  borderRadius: "18px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    padding: "18px 18px 14px",
                    borderBottom: "1px solid #e8dfc6",
                  }}
                >
                  <p
                    style={{
                      margin: "0",
                      fontSize: "13px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#315c45",
                    }}
                  >
                    Sábado
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-bricolage), sans-serif",
                      fontSize: "48px",
                      fontWeight: "800",
                      lineHeight: "1",
                    }}
                  >
                    14
                  </p>
                  <p
                    style={{
                      margin: "6px 0 0",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Day Tour Fluvial
                  </p>
                </div>
                <div
                  style={{
                    padding: "16px 18px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    fontSize: "15px",
                  }}
                >
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#315c45",
                        }}
                      >
                        6h
                      </p>
                      <p style={{ margin: "0" }}>
                        Acordar e tomar café no hotel
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#315c45",
                        }}
                      >
                        6h30–7h
                      </p>
                      <p style={{ margin: "0" }}>
                        A van da Iguana busca no hotel
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#315c45",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#315c45",
                        }}
                      >
                        8h
                      </p>
                      <p style={{ margin: "0" }}>
                        Saída do passeio para a aldeia indígena, o Museu do
                        Seringal e o pirarucu
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#315c45",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#315c45",
                        }}
                      >
                        Almoço
                      </p>
                      <p style={{ margin: "0" }}>Buffet regional livre</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#315c45",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#315c45",
                        }}
                      >
                        Tarde
                      </p>
                      <p style={{ margin: "0" }}>
                        Janauary, vitórias-régias e Encontro das Águas
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#315c45",
                        }}
                      >
                        15h30
                      </p>
                      <p style={{ margin: "0" }}>
                        Retorno para Manaus e descanso no hotel
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#315c45",
                        }}
                      >
                        Noite
                      </p>
                      <p style={{ margin: "0" }}>
                        Passeio pra conhecer Manaus à noite
                      </p>
                    </div>
                  </div>
                  <p
                    style={{
                      margin: "auto 0 0",
                      paddingTop: "8px",
                      fontSize: "13px",
                      color: "#315c45",
                      fontWeight: "600",
                    }}
                  >
                    Dorme no hotel
                  </p>
                </div>
              </div>

              {/* 15 */}
              <div
                style={{
                  background: "#102e23",
                  color: "#f4f0e5",
                  borderRadius: "18px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    padding: "18px 18px 14px",
                    borderBottom: "1px solid #315c45",
                  }}
                >
                  <p
                    style={{
                      margin: "0",
                      fontSize: "13px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#d5c49a",
                    }}
                  >
                    Domingo
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-bricolage), sans-serif",
                      fontSize: "48px",
                      fontWeight: "800",
                      lineHeight: "1",
                    }}
                  >
                    15
                  </p>
                  <p
                    style={{
                      margin: "6px 0 0",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Iguana · dia 1
                  </p>
                </div>
                <div
                  style={{
                    padding: "16px 18px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    fontSize: "15px",
                  }}
                >
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#d5c49a",
                        }}
                      >
                        6h
                      </p>
                      <p style={{ margin: "0" }}>Acordar e fazer check-out</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#d5c49a",
                        }}
                      >
                        7h–7h45
                      </p>
                      <p style={{ margin: "0" }}>
                        A van busca no hotel e passa na agência, onde fica a
                        mala grande
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#d5c49a",
                        }}
                      >
                        ~11h30
                      </p>
                      <p style={{ margin: "0" }}>
                        Chegada na Pousada Juma e almoço regional
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#d5c49a",
                        }}
                      >
                        15h
                      </p>
                      <p style={{ margin: "0" }}>
                        Canoagem, botos e pesca de piranha
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#d5c49a",
                        }}
                      >
                        Pôr do sol
                      </p>
                      <p style={{ margin: "0" }}>
                        Banho de rio e, à noite, focagem de jacaré
                      </p>
                    </div>
                  </div>
                  <p
                    style={{
                      margin: "auto 0 0",
                      paddingTop: "8px",
                      fontSize: "13px",
                      color: "#d5c49a",
                      fontWeight: "600",
                    }}
                  >
                    Dorme na pousada
                  </p>
                </div>
              </div>

              {/* 16 */}
              <div
                style={{
                  background: "#102e23",
                  color: "#f4f0e5",
                  borderRadius: "18px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    padding: "18px 18px 14px",
                    borderBottom: "1px solid #315c45",
                  }}
                >
                  <p
                    style={{
                      margin: "0",
                      fontSize: "13px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#d5c49a",
                    }}
                  >
                    Segunda
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-bricolage), sans-serif",
                      fontSize: "48px",
                      fontWeight: "800",
                      lineHeight: "1",
                    }}
                  >
                    16
                  </p>
                  <p
                    style={{
                      margin: "6px 0 0",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Iguana · dia 2
                  </p>
                </div>
                <div
                  style={{
                    padding: "16px 18px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    fontSize: "15px",
                  }}
                >
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#d5c49a",
                        }}
                      >
                        5h30
                      </p>
                      <p style={{ margin: "0" }}>
                        Canoagem para ver o sol nascer e observar pássaros
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#d5c49a",
                        }}
                      >
                        Manhã
                      </p>
                      <p style={{ margin: "0" }}>
                        Café e trilha leve com aula de sobrevivência
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#d5c49a",
                        }}
                      >
                        Almoço
                      </p>
                      <p style={{ margin: "0" }}>Regional, na pousada</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#d5c49a",
                        }}
                      >
                        Tarde
                      </p>
                      <p style={{ margin: "0" }}>Ida pro acampamento na mata</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#d5c49a",
                        }}
                      >
                        Noite
                      </p>
                      <p style={{ margin: "0" }}>Canoagem noturna e estrelas</p>
                    </div>
                  </div>
                  <p
                    style={{
                      margin: "auto 0 0",
                      paddingTop: "8px",
                      fontSize: "13px",
                      color: "#d5c49a",
                      fontWeight: "600",
                    }}
                  >
                    Dorme na floresta, em rede
                  </p>
                </div>
              </div>

              {/* 17 */}
              <div
                style={{
                  background: "#102e23",
                  color: "#f4f0e5",
                  borderRadius: "18px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    padding: "18px 18px 14px",
                    borderBottom: "1px solid #315c45",
                  }}
                >
                  <p
                    style={{
                      margin: "0",
                      fontSize: "13px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#d5c49a",
                    }}
                  >
                    Terça
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-bricolage), sans-serif",
                      fontSize: "48px",
                      fontWeight: "800",
                      lineHeight: "1",
                    }}
                  >
                    17
                  </p>
                  <p
                    style={{
                      margin: "6px 0 0",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Iguana · dia 3 e volta
                  </p>
                </div>
                <div
                  style={{
                    padding: "16px 18px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    fontSize: "15px",
                  }}
                >
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#d5c49a",
                        }}
                      >
                        Manhã
                      </p>
                      <p style={{ margin: "0" }}>
                        Café na floresta e visita à casa de caboclos
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#d5c49a",
                        }}
                      >
                        Almoço
                      </p>
                      <p style={{ margin: "0" }}>Regional, na pousada</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#d5c49a",
                        }}
                      >
                        13h30
                      </p>
                      <p style={{ margin: "0" }}>Saída para Manaus</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d5c49a",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#d5c49a",
                        }}
                      >
                        16h
                      </p>
                      <p style={{ margin: "0" }}>
                        Chegada em Manaus, depois espera até o voo
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 10px",
                        height: "10px",
                        marginTop: "7px",
                        borderRadius: "50%",
                        background: "#d46b43",
                      }}
                    ></span>
                    <div>
                      <p
                        style={{
                          margin: "0",
                          fontWeight: "600",
                          color: "#d5c49a",
                        }}
                      >
                        19h35
                      </p>
                      <p style={{ margin: "0" }}>Voo de volta para Belém</p>
                    </div>
                  </div>
                  <p
                    style={{
                      margin: "auto 0 0",
                      paddingTop: "8px",
                      fontSize: "13px",
                      color: "#d5c49a",
                      fontWeight: "600",
                    }}
                  >
                    Em casa
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* GALERA */}
          <section
            id="galera"
            style={{ display: "flex", flexDirection: "column", gap: "28px" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <p
                style={{
                  margin: "0",
                  fontSize: "14px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#315c45",
                  fontWeight: "600",
                }}
              >
                Quem é quem
              </p>
              <h2
                style={{
                  margin: "0",
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontSize: "44px",
                  lineHeight: "1.05",
                  fontWeight: "800",
                }}
              >
                A galera
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
              }}
            >
              <div
                style={{
                  background: "#fffdf8",
                  border: "1px solid #d5c49a",
                  borderRadius: "18px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <h3
                  style={{
                    margin: "0",
                    fontSize: "20px",
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Vão pra selva (Belém / Ananindeua)
                </h3>
                <p style={{ margin: "0" }}>
                  <strong>Luan</strong>, o Lulu, criou o grupo e mora no centro
                  de Belém.
                </p>
                <p style={{ margin: "0" }}>
                  <strong>Ana</strong>, a Ana Motas ou Bibi, levantou os
                  passeios e montou a lista da mala.
                </p>
                <p style={{ margin: "0" }}>
                  <strong>Mayla</strong>, de Ananindeua, fez a reserva do hotel
                  no nome dela.
                </p>
              </div>
              <div
                style={{
                  background: "#fffdf8",
                  border: "1px solid #d5c49a",
                  borderRadius: "18px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <h3
                  style={{
                    margin: "0",
                    fontSize: "20px",
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Recebem em Manaus
                </h3>
                <p style={{ margin: "0" }}>
                  <strong>Josué</strong> estuda Engenharia Naval e trabalha num
                  estaleiro. Tem carro e deu as dicas da cidade.
                  <strong>
                    O aniversário dele (12/11) vai ser comemorado junto com o do
                    Luan, na sexta.
                  </strong>
                </p>
                <p style={{ margin: "0" }}>
                  <strong>Rafael</strong> é de Dom Eliseu (PA), mora no Parque
                  10 e trabalha no Itaú.
                </p>
                <p style={{ margin: "0" }}>
                  <strong>Lukinha</strong> é manauara e trabalha na Honda.
                </p>
              </div>
            </div>
          </section>

          {/* HOTEL */}
          <section
            id="hotel"
            style={{ display: "flex", flexDirection: "column", gap: "28px" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <p
                style={{
                  margin: "0",
                  fontSize: "14px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#315c45",
                  fontWeight: "600",
                }}
              >
                Hospedagem em Manaus
              </p>
              <h2
                style={{
                  margin: "0",
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontSize: "44px",
                  lineHeight: "1.05",
                  fontWeight: "800",
                }}
              >
                Rede Andrade Amazônia
              </h2>
              <p style={{ margin: "0", color: "#315c45" }}>
                Av. Getúlio Vargas, 227, Centro, Manaus (CEP 69020-010). O Porão
                do Alemão e o Teatro Amazonas ficam perto.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
              }}
            >
              <div
                style={{
                  background: "#fffdf8",
                  border: "1px solid #d5c49a",
                  borderRadius: "16px",
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    fontSize: "13px",
                    color: "#315c45",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Check-in
                </p>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  Sex 13/11 · 14h às 22h
                </p>
              </div>
              <div
                style={{
                  background: "#fffdf8",
                  border: "1px solid #d5c49a",
                  borderRadius: "16px",
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    fontSize: "13px",
                    color: "#315c45",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Check-out
                </p>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  Dom 15/11 · cedo, antes da van
                </p>
              </div>
              <div
                style={{
                  background: "#fffdf8",
                  border: "1px solid #d5c49a",
                  borderRadius: "16px",
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    fontSize: "13px",
                    color: "#315c45",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Quarto
                </p>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  Triplo Deluxe · 3 camas de solteiro
                </p>
              </div>
              <div
                style={{
                  background: "#fffdf8",
                  border: "1px solid #d5c49a",
                  borderRadius: "16px",
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    fontSize: "13px",
                    color: "#315c45",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Valor (2 diárias)
                </p>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  R$ 465,12 · R$ 155,04 por pessoa
                </p>
              </div>
            </div>
            <div
              style={{
                background: "#e9e1cb",
                borderRadius: "16px",
                padding: "22px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <p style={{ margin: "0" }}>
                Inclui café da manhã, ar-condicionado, banheiro privativo,
                frigobar e wi-fi grátis. Não tem estacionamento. O hotel é para
                não fumantes.
              </p>
              <p style={{ margin: "0" }}>
                A reserva é pelo Booking, no nome da Mayla, e o número de
                confirmação termina em <strong>…215</strong>. O PIN e o e-mail
                ficaram de fora desta página, então peça pra Mayla se precisar.
                <strong>Não é reembolsável</strong> e as datas não podem ser
                alteradas.
              </p>
            </div>
          </section>

          {/* PACOTES */}
          <section
            id="pacotes"
            style={{ display: "flex", flexDirection: "column", gap: "28px" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <p
                style={{
                  margin: "0",
                  fontSize: "14px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#315c45",
                  fontWeight: "600",
                }}
              >
                Iguana Turismo
              </p>
              <h2
                style={{
                  margin: "0",
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontSize: "44px",
                  lineHeight: "1.05",
                  fontWeight: "800",
                }}
              >
                Os dois pacotes
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "20px",
              }}
            >
              <div
                style={{
                  background: "#fffdf8",
                  border: "1px solid #d5c49a",
                  borderRadius: "18px",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "5px",
                    borderRadius: "3px",
                    background: "#d46b43",
                  }}
                ></div>
                <p
                  style={{
                    margin: "0",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#315c45",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Sábado 14 · R$ 390 por pessoa
                </p>
                <h3
                  style={{
                    margin: "0",
                    fontSize: "28px",
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontWeight: "800",
                  }}
                >
                  Day Tour Fluvial
                </h3>
                <p style={{ margin: "0", color: "#315c45" }}>
                  O passeio é 100% de barco, numa lancha rápida que leva até 25
                  pessoas. A van busca a galera no hotel.
                </p>
                <p style={{ margin: "0" }}>
                  <strong>Roteiro:</strong> aldeia indígena, com degustação e
                  vivência de rituais, Museu do Seringal, flutuante do pirarucu
                  com pesca sem anzol, feira flutuante e almoço em buffet livre.
                  À tarde vêm o Parque Ecológico Janauary, o lago das
                  vitórias-régias, a sumaúma e o Encontro das Águas.
                </p>
                <p style={{ margin: "0" }}>
                  <strong>Inclui:</strong> busca no hotel, entradas, água,
                  almoço, guia bilíngue e ajuda com fotos.
                  <strong>Não inclui:</strong> café da manhã e outras bebidas.
                </p>
                <p style={{ margin: "0" }}>
                  <strong>Pago à parte, só em dinheiro</strong>, porque não tem
                  sinal na aldeia: pintura indígena de R$ 10 a 20, rapé a partir
                  de R$ 150 e banho de ervas R$ 200.
                </p>
              </div>

              <div
                style={{
                  background: "#fffdf8",
                  border: "1px solid #d5c49a",
                  borderRadius: "18px",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "5px",
                    borderRadius: "3px",
                    background: "#d46b43",
                  }}
                ></div>
                <p
                  style={{
                    margin: "0",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#315c45",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Dom 15 a ter 17 · Pousada Juma Lake
                </p>
                <h3
                  style={{
                    margin: "0",
                    fontSize: "28px",
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontWeight: "800",
                  }}
                >
                  Pacote Iguana
                </h3>
                <p style={{ margin: "0", color: "#315c45" }}>
                  São 3 dias e 2 noites no Lago do Juma, em Autazes, em grupos
                  de até 12 pessoas com guia nativo.
                </p>
                <p style={{ margin: "0" }}>
                  <strong>Vamos de dormitório coletivo:</strong> R$ 1.210 por
                  pessoa. É misto, com 20 camas com mosquiteiro, ventilador e
                  varanda pro rio, e o banheiro fica do lado de fora.
                </p>
                <p style={{ margin: "0" }}>
                  <strong>Inclui:</strong> transporte Manaus–pousada–Manaus,
                  hospedagem e acampamento com rede e mosquiteiro, todas as
                  refeições, água e seguro viagem.
                </p>
                <p style={{ margin: "0" }}>
                  <strong>Extras pagos na pousada</strong>, por pix, cartão ou
                  dinheiro: bebidas, sobremesas e internet Starlink, que custa
                  cerca de R$ 10 por dia por pessoa. O bar fica aberto até 22h.
                </p>
              </div>
            </div>
            <p style={{ margin: "0", color: "#315c45" }}>
              Agência: Iguana Turismo, Rua 10 de Julho, 663, Centro, perto do
              Teatro Amazonas. Instagram @iguanatour · iguanatour@hotmail.com
            </p>
          </section>

          {/* CUSTOS */}
          <section
            id="custos"
            style={{ display: "flex", flexDirection: "column", gap: "28px" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <p
                style={{
                  margin: "0",
                  fontSize: "14px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#315c45",
                  fontWeight: "600",
                }}
              >
                Levantamento
              </p>
              <h2
                style={{
                  margin: "0",
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontSize: "44px",
                  lineHeight: "1.05",
                  fontWeight: "800",
                }}
              >
                Quanto custa
              </h2>
            </div>
            <div
              style={{
                overflowX: "auto",
                background: "#fffdf8",
                border: "1px solid #d5c49a",
                borderRadius: "18px",
              }}
            >
              <table
                style={{
                  width: "100%",
                  minWidth: "560px",
                  borderCollapse: "collapse",
                  fontSize: "16px",
                }}
              >
                <thead>
                  <tr
                    style={{
                      textAlign: "left",
                      color: "#315c45",
                      fontSize: "13px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    <th
                      scope="col"
                      style={{
                        padding: "16px 20px",
                        borderBottom: "1px solid #d5c49a",
                      }}
                    >
                      Item
                    </th>
                    <th
                      scope="col"
                      style={{
                        padding: "16px 20px",
                        borderBottom: "1px solid #d5c49a",
                        textAlign: "right",
                      }}
                    >
                      Por pessoa
                    </th>
                    <th
                      scope="col"
                      style={{
                        padding: "16px 20px",
                        borderBottom: "1px solid #d5c49a",
                        textAlign: "right",
                      }}
                    >
                      Grupo (3)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "16px 20px",
                        borderBottom: "1px solid #e8dfc6",
                      }}
                    >
                      <span style={{ fontWeight: "600" }}>
                        Passagem aérea (Decolar)
                      </span>
                      <br />
                      <span style={{ fontSize: "14px", color: "#315c45" }}>
                        Ida e volta Belém–Manaus
                      </span>
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        borderBottom: "1px solid #e8dfc6",
                        textAlign: "right",
                        whiteSpace: "nowrap",
                      }}
                    >
                      R$ 1.062,00
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        borderBottom: "1px solid #e8dfc6",
                        textAlign: "right",
                        whiteSpace: "nowrap",
                      }}
                    >
                      R$ 3.186,00
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "16px 20px",
                        borderBottom: "1px solid #e8dfc6",
                      }}
                    >
                      <span style={{ fontWeight: "600" }}>
                        Hotel Rede Andrade Amazônia
                      </span>
                      <br />
                      <span style={{ fontSize: "14px", color: "#315c45" }}>
                        2 diárias em quarto triplo, R$ 465,12 no total
                      </span>
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        borderBottom: "1px solid #e8dfc6",
                        textAlign: "right",
                        whiteSpace: "nowrap",
                      }}
                    >
                      R$ 155,04
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        borderBottom: "1px solid #e8dfc6",
                        textAlign: "right",
                        whiteSpace: "nowrap",
                      }}
                    >
                      R$ 465,12
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "16px 20px",
                        borderBottom: "1px solid #e8dfc6",
                      }}
                    >
                      <span style={{ fontWeight: "600" }}>
                        Day Tour Fluvial
                      </span>
                      <br />
                      <span style={{ fontSize: "14px", color: "#315c45" }}>
                        Iguana Turismo, 1 dia
                      </span>
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        borderBottom: "1px solid #e8dfc6",
                        textAlign: "right",
                        whiteSpace: "nowrap",
                      }}
                    >
                      R$ 390,00
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        borderBottom: "1px solid #e8dfc6",
                        textAlign: "right",
                        whiteSpace: "nowrap",
                      }}
                    >
                      R$ 1.170,00
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "16px 20px",
                        borderBottom: "1px solid #e8dfc6",
                      }}
                    >
                      <span style={{ fontWeight: "600" }}>Pacote Iguana</span>
                      <br />
                      <span style={{ fontSize: "14px", color: "#315c45" }}>
                        3 dias e 2 noites, dormitório coletivo
                      </span>
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        borderBottom: "1px solid #e8dfc6",
                        textAlign: "right",
                        whiteSpace: "nowrap",
                      }}
                    >
                      R$ 1.210,00
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        borderBottom: "1px solid #e8dfc6",
                        textAlign: "right",
                        whiteSpace: "nowrap",
                      }}
                    >
                      R$ 3.630,00
                    </td>
                  </tr>
                  <tr style={{ background: "#102e23", color: "#f4f0e5" }}>
                    <th
                      scope="row"
                      style={{
                        padding: "18px 20px",
                        textAlign: "left",
                        fontFamily: "var(--font-bricolage), sans-serif",
                        fontSize: "20px",
                      }}
                    >
                      Total
                    </th>
                    <td
                      style={{
                        padding: "18px 20px",
                        textAlign: "right",
                        fontWeight: "600",
                        fontSize: "20px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      R$ 2.817,04
                    </td>
                    <td
                      style={{
                        padding: "18px 20px",
                        textAlign: "right",
                        fontWeight: "600",
                        fontSize: "20px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      R$ 8.451,12
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ margin: "0", color: "#315c45" }}>
              Fora da conta: jantares e rolês em Manaus, Uber, bebidas, extras
              da aldeia e internet na pousada. Separe dinheiro em espécie pra
              esses gastos.
            </p>
          </section>

          {/* MALA */}
          <section
            id="mala"
            style={{ display: "flex", flexDirection: "column", gap: "28px" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <p
                style={{
                  margin: "0",
                  fontSize: "14px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#315c45",
                  fontWeight: "600",
                }}
              >
                Lista da Ana
              </p>
              <h2
                style={{
                  margin: "0",
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontSize: "44px",
                  lineHeight: "1.05",
                  fontWeight: "800",
                }}
              >
                O que levar
              </h2>
              <p style={{ margin: "0", color: "#315c45" }}>
                Marque o que já está na mala. A marcação vale só nesta tela,
                então cada um faz a sua.
              </p>
            </div>
            <div
              style={{
                background: "#fffdf8",
                border: "1px solid #d5c49a",
                borderRadius: "18px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              <Checklist />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
              }}
            >
              <div
                style={{
                  background: "#fffdf8",
                  border: "1px solid #d5c49a",
                  borderRadius: "18px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <h3
                  style={{
                    margin: "0",
                    fontSize: "20px",
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontWeight: "600",
                  }}
                >
                  A Iguana também pede
                </h3>
                <p style={{ margin: "0" }}>
                  Leve uma mochila em vez de mala de rodinha, porque cada um
                  carrega a própria bagagem nas trocas de barco e kombi. A mala
                  grande pode ficar no bagageiro da agência.
                </p>
                <p style={{ margin: "0" }}>
                  Pra trilha, calça comprida e camisa de manga longa em cores
                  claras. O repelente de preferência em aerosol. Rede e
                  mosquiteiro do acampamento são da pousada.
                </p>
              </div>
              <div
                style={{
                  background: "#fffdf8",
                  border: "1px solid #d5c49a",
                  borderRadius: "18px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <h3
                  style={{
                    margin: "0",
                    fontSize: "20px",
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Saúde e sinal
                </h3>
                <p style={{ margin: "0" }}>
                  Nenhuma vacina é obrigatória pra quem vem do Brasil. A de
                  febre amarela é opcional e precisa ser tomada pelo menos 10
                  dias antes.
                </p>
                <p style={{ margin: "0" }}>
                  Não tem sinal de celular durante os passeios nem na aldeia,
                  então avisem a família antes de sair.
                </p>
              </div>
            </div>
            <div
              style={{
                background: "#102e23",
                color: "#f4f0e5",
                borderRadius: "18px",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <h3
                style={{
                  margin: "0",
                  fontSize: "22px",
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontWeight: "600",
                }}
              >
                Turismo consciente
              </h3>
              <p style={{ margin: "0" }}>
                O certo é falar <strong>indígena</strong>, não “índio”. Não
                peguem nada sem permissão e não fotografem crianças sem
                autorização. Quem estiver gripado usa máscara e evita contato
                próximo com os indígenas.
              </p>
              <p style={{ margin: "0" }}>
                Guardem o lixo até o fim do passeio e escutem sempre o guia.
                Nada de perfume ou repelente antes de interagir com os animais.
              </p>
            </div>
          </section>

          {/* PENDENCIAS */}
          <section
            id="pendencias"
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <p
                style={{
                  margin: "0",
                  fontSize: "14px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#315c45",
                  fontWeight: "600",
                }}
              >
                Tudo certo
              </p>
              <h2
                style={{
                  margin: "0",
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontSize: "44px",
                  lineHeight: "1.05",
                  fontWeight: "800",
                }}
              >
                Confirmado
              </h2>
            </div>
            <div
              style={{
                background: "#fffdf8",
                border: "1px solid #d5c49a",
                borderRadius: "18px",
                padding: "24px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <p style={{ margin: "0" }}>
                <strong>Carona do aeroporto:</strong> o Josué busca a galera na
                sexta, às 18h55.
              </p>
              <p style={{ margin: "0" }}>
                <strong>Day Tour:</strong> a van da Iguana busca no hotel no
                sábado, então não precisa de Uber.
              </p>
              <p style={{ margin: "0" }}>
                <strong>Aniversários:</strong> o do Josué e o do Luan vão ser
                comemorados juntos na sexta, no Porão do Alemão.
              </p>
              <p style={{ margin: "0" }}>
                <strong>Sábado à noite:</strong> passeio pra conhecer Manaus.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
