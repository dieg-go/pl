import { logOut, signOutUser } from "@/lib/auth";
import router from "next/router";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
            <a onClick={() => router.push("/dashboard")}>Dashboard</a>
            </li>
            <li>
              <a onClick={() => router.push("/plans")}>Planes</a>
            </li>
            <li>
              <a onClick={() => router.push("/activities")}>Actividades</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" href="/">
          PlanifiK
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={() => router.push("/dashboard")}>Dashboard</a>
          </li>
          <li>
            <a onClick={() => router.push("/plans")}>Planes</a>
          </li>
          <li>
            <a onClick={() => router.push("/activities")}>Actividades</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn" onClick={() => logOut()}>Salir de PlanifiK</a>
      </div>
    </div>
  );
}
