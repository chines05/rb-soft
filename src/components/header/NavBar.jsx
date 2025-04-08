const NavBar = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "5rem",
        padding: "0 5rem",
        backgroundColor: "#6d83a4",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      <img
        src="../src/assets/logoRbSoft.png"
        alt="Logo"
        width={80}
        height={80}
      />
      <nav style={{ display: "flex", gap: "1.5rem" }}>
        {["Início", "Sobre", "Contato"].map((text, index) => (
          <a
            key={index}
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: 500,
              padding: "0.5rem",
              borderRadius: "6px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.color = "#BFDBFE";
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "white";
              e.target.style.backgroundColor = "transparent";
            }}
          >
            {text}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
