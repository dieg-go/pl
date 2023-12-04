import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/lib/auth";
import Loading from "@/components/Loading";
import ErrorHero from "@/components/ErrorHero";
import { useRouter } from "next/router";
import EditUserView from "@/components/EditUserView";

export default function EditUser(query) {
    const { user, loading, profile } = useAuth();
    const router = useRouter();

    if (loading)
        return (
            <Loading></Loading>
        );

    if (!user)
        return (
            <ErrorHero></ErrorHero>
        );

    if (profile.role === 'admin') {
        console.log(router.query.id)
        return (
            <>
                <Navbar></Navbar>
                <EditUserView id={router.query.id}></EditUserView>
                <Footer></Footer>
            </>
        )
    }

    router.push('/dashboard')


}