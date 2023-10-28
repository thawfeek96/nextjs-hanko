import Navbar from "@/app/components/Navbar/Navbar";
import HankoAuth from "@/app/components/hankoComponents/Register";

export default function Home() {
  // const { user, isLoading } = useUser();

  // console.log("userss", user);
  

  return (
    <main className="">
      <Navbar />
      <div className=" w-[100vw] h-[90vh] flex items-center justify-center">
      <HankoAuth />

      </div>

    </main>
  );
}
