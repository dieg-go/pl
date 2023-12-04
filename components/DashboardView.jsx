
import { useRouter } from "next/navigation";
export default function DashboardView({profile}) {

  const router = useRouter();
  if (profile.role === 'admin'){
    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Bienvenido {profile.name}</h1>
          <p className="py-6">Estas en el dashboard</p>
          <h2 className="text-3xl font-bold">Tu datos de perfil:</h2>
          <p>Nombre: {profile.name}</p>
          <p>Correo: {profile.email}</p>
          <p>Rut: {profile.rut}</p>
          <p>Password: {profile.password}</p>
          <p>Id: {profile.id}</p>
          <p>Ciudad: {profile.city}</p>
          <p>Region: {profile.region}</p>

          <button
            className="btn btn-primary"
            onClick={() => router.push("/activities")}
          >
            Ver Mis Actividades
          </button>
          <button className="btn btn-primary" onClick={() => router.push("/userManagement")}> Administrar usuarios </button>
        </div>
      </div>
    </div>
    )
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Bienvenido {profile.name}</h1>
          <p className="py-6">Estas en el dashboard</p>
          <h2 className="text-3xl font-bold">Tu datos de perfil:</h2>
          <p>Nombre: {profile.name}</p>
          <p>Correo: {profile.email}</p>
          <p>Rut: {profile.rut}</p>
          <p>Password: {profile.password}</p>
          <p>Id: {profile.id}</p>
          <p>Ciudad: {profile.city}</p>
          <p>Region: {profile.region}</p>

          <button
            className="btn btn-primary"
            onClick={() => router.push("/activities")}
          >
            Ver Mis Actividades
          </button>
        </div>
      </div>
    </div>
  );
}
