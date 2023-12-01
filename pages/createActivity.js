import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewActivityCard from "@/components/NewActivityCard";
import { useRouter } from 'next/router'


export default function NewActivity() {
  const router = useRouter()
  const { userId } = router.query;
  return (
    <main>
      <Navbar></Navbar>
      <div >
        <NewActivityCard userId={userId}></NewActivityCard>
      </div>
      <Footer></Footer>
    </main>
  )
}