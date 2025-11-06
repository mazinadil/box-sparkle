import { ReactNode, lazy, Suspense } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Header from "./Header";
import WhatsAppButton from "./WhatsAppButton";

const Footer = lazy(() => import("./Footer"));

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0, triggerOnce: true });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <div ref={ref}>
        {isVisible && (
          <Suspense fallback={<div className="h-96" />}>
            <Footer />
          </Suspense>
        )}
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
