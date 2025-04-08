import NavBar from "./components/header/NavBar";
import Hero from "./components/header/hero/Hero";

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div
        style={{
          padding: "2rem",
          textAlign: "center",
          backgroundColor: "#f3f4f6",
          color: "#111827",
        }}
      >
        <p>
          Texto simples aqui embaixo. Pode usar esse espaço para informações
          adicionais ou um rodapé futuramente.
        </p>
      </div>
    </div>
  );
}
