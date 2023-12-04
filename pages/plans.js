import Footer from "@/components/Footer";
import NavbarDefault from "@/components/Navbar";
import { useAuth } from "@/lib/auth";
import Loading from "@/components/Loading";
import ErrorHero from "@/components/ErrorHero";
import { useRouter } from "next/router";
import PlansView from "@/components/PlansView";
export default function Plans() {
  const { user, loading, profile } = useAuth();
  const router = useRouter();

  if (loading) return <Loading></Loading>;

  if (!user) {
    return <ErrorHero></ErrorHero>;
  }
  return (
    <div className="min-h-screen">
      <NavbarDefault></NavbarDefault>
      <PlansView profile={profile}></PlansView>
      <Footer></Footer>
    </div>
  );
}
