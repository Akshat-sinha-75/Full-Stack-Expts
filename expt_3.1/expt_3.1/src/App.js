import ProductCard from "./components/productCard";

function App() {
  const products = [
    {
      title: "Nike Air Max",
      price: "7,499",
    
      inStock: true,
    },
    {
      title: "Sony WH-1000XM5",
      price: "29,999",
     
      inStock: false,
    },
    {
      title: "Apple Watch Series 9",
      price: "41,999",
     
      inStock: true,
    },
    {
      title: "Canon EOS M50",
      price: "56,999",
     
      inStock: true,
    },
  ];

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((item, index) => (
        <ProductCard
          key={index}
          title={item.title}
          price={item.price}
          inStock={item.inStock}
        />
      ))}
    </div>
  );
}

export default App;
