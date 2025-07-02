import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CategoryCards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
