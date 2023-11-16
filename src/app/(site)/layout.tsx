import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata = {};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="bg-page-gradient pt-20">{children}</main>
      <Footer />
    </>
  );
}
