import { useRouter } from "next/router";
export default function ErrorHero() {
  const router = useRouter();
  return (
    <div className="hero min-h-screen bg-error">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Algo salio mal...</h1>
          <p className="py-6">
            Parece que no has iniciado sesion, o aun no has creado una cuenta.
          </p>
          <button className="btn btn-info" onClick={() => router.push("/")}>
            Volver a inicio
          </button>
        </div>
      </div>
    </div>
  );
}
