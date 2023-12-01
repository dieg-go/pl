import { useState } from "react";
import router from "next/router";
import { signUp } from "../lib/auth";
// TODO: Confirmar contraseña
export default function SignUpForm({}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    if(password.length < 6) {
      alert("Contraseña debe ser de al menos 6 caracteres");
      return;
    }

    const { data, error } = await signUp(name, email, password);

    if (!error) {
      router.push("/dashboard?userId=" + data.user.id); 
    }
    else {
      console.log(error.message);
    }
  }
  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registrate</h1>
          <p className="py-6">Ingresas tus datos para continuar.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSignup}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nombre de usuario</span>
              </label>
              <input
                type="text"
                placeholder="Nombre"
                className="input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Correo</span>
              </label>
              <input
                type="email"
                placeholder="correo@mail.com"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Contraseña</span>
              </label>
              <input
                type="password"
                placeholder="******"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  ¿Olvidaste la contraseña?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Registrarse</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
