import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Heart, BookOpen } from "lucide-react";

const CategoryCards = () => {
  const categories = [
    {
      id: "general",
      title: "General Books",
      titleAr: "كتب عامة",
      description: "Fiction, non-fiction, educational books",
      descriptionAr: "كتب الأدب والعلوم والتعليم",
      icon: Book,
      color: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900"
    },
    {
      id: "religious",
      title: "Religious Books",
      titleAr: "كتب دينية",
      description: "Islamic literature, theology, and studies",
      descriptionAr: "الأدب الإسلامي والفقه والدراسات",
      icon: Heart,
      color: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900"
    },
    {
      id: "mushafs",
      title: "Mushafs",
      titleAr: "مصاحف",
      description: "Beautiful Quran editions with various calligraphy",
      descriptionAr: "مصاحف جميلة بخطوط متنوعة",
      icon: BookOpen,
      color: "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Our Categories
          </h2>
          <p className="text-lg text-muted-foreground font-arabic">
            استكشف مجموعاتنا المتنوعة من الكتب
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
                <div className={`h-32 ${category.color} flex items-center justify-center`}>
                  <IconComponent className="w-12 h-12 text-primary" />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                  <p className="text-lg font-arabic text-muted-foreground">{category.titleAr}</p>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">{category.description}</p>
                  <p className="text-sm font-arabic text-muted-foreground">{category.descriptionAr}</p>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Explore
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;