import Header from "@/components/Header";
import FloatingCat from "@/components/FloatingCat";
import DeadCatLogo from "@/components/DeadCatLogo";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-screen flex flex-col items-center justify-center">
        <div className="relative flex flex-col items-center" style={{ marginBottom: "20px" }}>
          <FloatingCat />
          <div className="mt-[-10px]">
            <DeadCatLogo />
          </div>
        </div>
      </main>
    </>
  );
}
