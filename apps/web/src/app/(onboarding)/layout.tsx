import Header from "@/components/static/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-dashboardbg">
      <Header />
      {children}
    </div>
  );
}
