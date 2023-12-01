// components/Layout.js

import { userAuthenticated } from "../lib/auth";

export default function Layout({ children }) {
  userAuthenticated();

  return (
    <div>
      {children}
    </div>
  );
}
