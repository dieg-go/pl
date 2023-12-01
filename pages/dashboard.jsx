import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardView from "@/components/DashboardView";
import { useRouter } from 'next/router'
export default function Dashboard() {
  const router = useRouter()
  const { userId } = router.query;

  return (
    <>
      <Navbar></Navbar>
      <DashboardView userId={userId}></DashboardView>
      <Footer></Footer>
    </>
  );
}
