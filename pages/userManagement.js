import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UserManagementView from "@/components/UserManagementView";
import { useAuth } from "@/lib/auth";
import Loading from "@/components/Loading";
import ErrorHero from "@/components/ErrorHero";
import { useRouter } from "next/router";

export default function UserManagement() {
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
        return (
            <>
                <Navbar></Navbar>
                <UserManagementView profile={profile}></UserManagementView>
                <Footer></Footer>
            </>
        )
    }

    router.push('/dashboard')


}