import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ActivityList from "@/components/ActivityList";
import NewActivityCard from "@/components/NewActivityCard";
import { useRouter } from 'next/router'


export default function Activities() {
  const router = useRouter()
  const { userId } = router.query;
  return (
    <main>
      <Navbar></Navbar>
      <div >
        <ActivityList userId={userId}></ActivityList>

      </div>
      <Footer></Footer>
    </main>
  )
}