import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewActivityCard from "@/components/NewActivityCard";
import Loading from "@/components/Loading";
import ErrorHero from "@/components/ErrorHero";
import { useAuth } from "@/lib/auth";
export default function NewActivity() {
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
    <main>
      <Navbar></Navbar>
      <div >
        <NewActivityCard profile={profile}></NewActivityCard>
      </div>
      <Footer></Footer>
    </main>
  )
}