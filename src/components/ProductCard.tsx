import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

interface Product {
  id: string;
  title: string;
  title_ar?: string;
  description?: string;
  description_ar?: string;
  price: number;
  category: string;
  stock_quantity: number;
  image_url?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'general': return 'General Books';
      case 'religious': return 'Religious Books';
      case 'mushafs': return 'Mushafs';
      default: return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'general': return 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300';
      case 'religious': return 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300';
      case 'mushafs': return 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300';
      default: return 'bg-gray-50 text-gray-700 dark:bg-gray-950 dark:text-gray-300';
    }
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      title_ar: product.title_ar,
      price: product.price,
      stock_quantity: product.stock_quantity,
      image_url: product.image_url
    });
  };

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
      <div className="aspect-[3/4] bg-muted flex items-center justify-center">
        {product.image_url ? (
          <img 
            src={product.image_url} 
            alt={product.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-muted-foreground text-sm">No Image</div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="font-semibold text-lg line-clamp-2">{product.title}</h3>
            {product.title_ar && (
              <p className="text-sm text-muted-foreground font-arabic mt-1">{product.title_ar}</p>
            )}
          </div>
          <Badge className={getCategoryColor(product.category)} variant="secondary">
            {getCategoryLabel(product.category)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {product.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        )}
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-2xl font-bold text-primary">${product.price}</p>
            <p className="text-xs text-muted-foreground">
              {product.stock_quantity > 0 ? `${product.stock_quantity} in stock` : 'Out of stock'}
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            <Button asChild variant="outline" size="sm">
              <Link to={`/product/${product.id}`}>View</Link>
            </Button>
            <Button 
              size="sm" 
              disabled={product.stock_quantity === 0}
              className="w-full"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;