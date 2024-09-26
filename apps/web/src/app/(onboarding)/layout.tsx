import Footer from "@/components/static/Footer";
import Header from "@/components/static/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-dashboardbg">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
