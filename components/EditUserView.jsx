  import { useState, useEffect } from "react";
  import supabase from "@/lib/supabase";
  import { useRouter } from "next/router";
  export default function EditUserView({ id }) {
    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rut, setRut] = useState("");
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    useEffect(() => {
      getUser();
    }, []);

    async function getUser() {
      const { data } = await supabase
        .from("users")
        .select()
        .eq("id", id)
        .single();
      setUser(data);
    }

    async function handleSubmit(e) {
      e.preventDefault();
      const updatedUser = {
        name: name || user.name,
        rut: rut || user.rut,
        email: email || user.email,
        city: city || user.city,
        region: region || user.region,
        password: password || user.password,
      }
    
      const { error } = await supabase
        .from("users")
        .update({
          name: updatedUser.name,
          rut: updatedUser.rut,
          email: updatedUser.email,
          city: updatedUser.city,
          region: updatedUser.region,
          password: updatedUser.password
        })
        .eq("id", id);

      router.push("/userManagement");
    }

    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center"></div>
        <label className="form-control w-full max-w-xs">
          <h1>Editar Usuario</h1>
          <div className="label">
            <span className="label-text">Nombre </span>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={user.name}
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label">
              <span className="label-text">rut </span>
            </div>
            <input
              name="rut"
              id="rut"
              type="text"
              value={rut}
              placeholder={user.rut}
              onChange={(e) => setRut(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />

            <div className="label">
              <span className="label-text">email </span>
            </div>
            <input
              value={email}
              name="email"
              id="email"
              type="text"
              placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />

            <div className="label">
              <span className="label-text">city </span>
            </div>
            <input
              value={city}
              name="city"
              id="city"
              type="text"
              placeholder={user.city}
              onChange={(e) => setCity(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />

            <div className="label">
              <span className="label-text">region </span>
            </div>
            <input
              value={region}
              type="text"
              name="region"
              id="region"
              placeholder={user.region}
              onChange={(e) => setRegion(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label">
              <span className="label-text">password </span>
            </div>
            <input
              value={password}
              type="text"
              name="password"
              id="password"
              placeholder={user.password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <span className="label-text"> </span>

            <button className="btn btn-primary" type="submit">
              Guardar
            </button>
          </form>
        </label>
      </div>
    );
  }
