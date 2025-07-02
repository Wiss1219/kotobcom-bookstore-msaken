import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Shop = () => {
  // Mock data for demonstration
  const books = [
    {
      id: 1,
      title: "The Quran Translation",
      titleAr: "ترجمة القرآن الكريم",
      price: 45,
      category: "mushafs",
      image: "/placeholder.svg",
      inStock: true
    },
    {
      id: 2,
      title: "Islamic History",
      titleAr: "التاريخ الإسلامي",
      price: 30,
      category: "religious",
      image: "/placeholder.svg",
      inStock: true
    },
    {
      id: 3,
      title: "Arabic Literature",
      titleAr: "الأدب العربي",
      price: 25,
      category: "general",
      image: "/placeholder.svg",
      inStock: false
    }
  ];

  const categories = [
    { id: "all", name: "All Books", nameAr: "جميع الكتب" },
    { id: "general", name: "General", nameAr: "عامة" },
    { id: "religious", name: "Religious", nameAr: "دينية" },
    { id: "mushafs", name: "Mushafs", nameAr: "مصاحف" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container px-4">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Our Book Collection
            </h1>
            <p className="text-lg text-muted-foreground font-arabic">
              مجموعتنا من الكتب المتنوعة
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                size="sm"
                className="text-sm"
              >
                {category.name}
                <span className="font-arabic ml-2">{category.nameAr}</span>
              </Button>
            ))}
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.map((book) => (
              <Card key={book.id} className="group hover:shadow-elegant transition-all duration-300">
                <div className="aspect-[3/4] bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-base leading-tight">{book.title}</CardTitle>
                      <p className="text-sm font-arabic text-muted-foreground mt-1">
                        {book.titleAr}
                      </p>
                    </div>
                    <Badge variant={book.inStock ? "default" : "secondary"}>
                      {book.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-primary">
                      {book.price} TND
                    </div>
                    <Button 
                      size="sm" 
                      disabled={!book.inStock}
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      {book.inStock ? "Add to Cart" : "Unavailable"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Books
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;