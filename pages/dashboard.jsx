import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardView from "@/components/DashboardView";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import { useAuth } from "@/lib/auth";
import Loading from "@/components/Loading";
import ErrorHero from "@/components/ErrorHero";

export default function Dashboard() {
  const {user, loading, profile} = useAuth();

  if (loading)
    return (
      <Loading></Loading>
    );

  if (!user)
    return (
      <ErrorHero></ErrorHero>
    );
  


  
  return (
    <>
      <Navbar></Navbar>
      <DashboardView profile={profile}></DashboardView>

      <Footer></Footer>
    </>
  );
}
