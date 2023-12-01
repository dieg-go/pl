import { getUser  as getUserData}  from "@/lib/users";
import { useEffect, useState } from "react";
import router from "next/router";
export default function DashboardView(query) {
  
  const [user, setUser] = useState([]); 

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const data = await getUserData(query.userId);

    setUser(data);
  }

  if (user) {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Bienvenido {user.name}</h1>
            <p className="py-6">Estas en el dashboard</p>
            <button className="btn btn-primary"onClick={() => router.push("/activities?userId=" + query.userId)}>Ver Mis Actividades</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div></div>
  ) 
}
