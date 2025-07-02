import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-mushaf.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4">
        <div className="max-w-2xl">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-primary">Kotobcom</span>
              </h1>
              <p className="text-xl font-arabic text-muted-foreground">
                مكتبة مساكن للكتب والمصاحف
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Discover our collection of general books, religious texts, and beautiful Mushaf editions. 
              Quality books delivered to your doorstep in Tunisia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Browse Collection
              </Button>
              <Button variant="outline" size="lg">
                View Mushafs
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <Card className="p-6 bg-background/80 backdrop-blur-sm">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">Free Delivery</p>
            <p className="font-semibold">Cash on Delivery</p>
            <p className="text-xs text-muted-foreground">All over Tunisia</p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;