import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavbarDefault from "@/components/Navbar";
import { useAuth } from "@/lib/auth";
import Loading from "@/components/Loading";
import ErrorHero from "@/components/ErrorHero";
import { useRouter } from "next/router";

export default function Home() {
  const { user, loading, profile } = useAuth();
  const router = useRouter();

  if (loading) return <Loading></Loading>;

  if (user) {
    router.push("/dashboard");
    return <Loading></Loading>;
  }
  return (
    <div className="min-h-screen">
      <NavbarDefault></NavbarDefault>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}
