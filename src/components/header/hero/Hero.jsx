import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: "5rem", // espaço para a navbar
        height: "100vh",
        backgroundColor: "#324158",
      }}
    >
      <div
        style={{
          flex: 1,
          backgroundImage: "url('/imgs/logoRbSoft.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HeroRight />
      </div>
    </div>
  );
};

export default Hero;
