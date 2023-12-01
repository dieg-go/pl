
import router from "next/router";



export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hola!</h1>
          <p className="py-6"> Para usar PlanifiK, por favor Inicia Sesion o Registrate.
          </p>
          <button className="btn btn-primary px-4 mx-4" onClick={() => router.push("/login")}>Inicia Sesion</button>
          <span></span>
          <button className="btn btn-secondary px-4 mx-4" onClick={() => router.push("/signup")}>Registrate</button>
        </div>
      </div>
    </div>
  );
}
