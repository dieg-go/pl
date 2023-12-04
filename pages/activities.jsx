import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ActivityList from "@/components/ActivityList";
import { useAuth } from "@/lib/auth";
import  Loading  from "@/components/Loading";
import  ErrorHero  from "@/components/ErrorHero";


export default function Activities() {

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

      <ActivityList profile={profile} ></ActivityList>

      <Footer></Footer>
    </>
  );
}
