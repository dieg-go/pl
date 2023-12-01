import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EditActivityCard from "@/components/NewActivityCard";
import { useRouter } from 'next/router'


export default function EditActivityActivity() {
  const router = useRouter()
  const { activityId } = router.query;
  return (
    <main>
      <Navbar></Navbar>
      <div >
        <EditActivityCard activityId={activityId}></EditActivityCard>
      </div>
      <Footer></Footer>
    </main>
  )
}