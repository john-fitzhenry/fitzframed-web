import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="wrap notfound">
        <p className="label">404</p>
        <h1 className="display">That page isn&apos;t here.</h1>
        <p className="lede">It may have moved when this site was rebuilt.</p>
        <p className="actions">
          <a className="btn" href="/">Go to the home page</a>
          <a className="btn btn-ghost" href="/senior-portraits/">Senior portraits</a>
        </p>
      </main>
      <Footer />
    </>
  );
}
