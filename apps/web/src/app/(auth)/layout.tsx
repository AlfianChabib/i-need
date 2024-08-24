export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <section className="p-5 h-full bg-dashboardbg flex items-center justify-center">{children}</section>;
}
