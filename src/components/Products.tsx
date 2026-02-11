import React from 'react';
import { Star, Truck, Shield, Award } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Michelin Pilot Sport 4',
      category: 'Performance',
      price: 'R$ 498',
      size: '225/45R17',
      rating: 5,
      image: 'https://dxm.contentcenter.michelin.com/api/wedia/dam/transform/b98rpyxf61b4xsd35i34y17gpe/4w-365_tire_michelin_pilot-sport-4-UQA6NSkuuyK29JMboER7BeoL9UCgaKUIx_8HV3-NEh9KEu7m-slash-9.webp?t=resize&height=800',
      features: ['Ultra High Performance', 'Aderência Superior', 'Longa Durabilidade']
    },
    {
      id: 2,
      name: 'Bridgestone Turanza T005',
      category: 'Conforto',
      price: 'R$ 340',
      size: '205/55R16',
      rating: 5,
      image: 'https://i.ebayimg.com/images/g/TFsAAOSwCcxmMOkj/s-l1200.png',
      features: ['Conforto Premium', 'Baixo Ruído', 'Economia de Combustível']
    },
    {
      id: 3,
      name: 'Continental CrossContact',
      category: 'SUV/Pickup',
      price: 'R$ 480',
      size: '235/60R18',
      rating: 4,
      image: 'https://a-static.mlcdn.com.br/1500x1500/pneu-continental-aro-18-crosscontact-uhp-235-60r18-107w-xl/pneustore/10260151/e9e632ab976fba447d7c8ca7994228c6.jpeg',
      features: ['Off-Road Ready', 'Resistência Máxima', 'Tração 4x4']
    },
    {
      id: 4,
      name: 'Pirelli Cinturato P7',
      category: 'Eco-Friendly',
      price: 'R$ 388',
      size: '215/50R17',
      rating: 5,
      image: 'https://down-br.img.susercontent.com/file/sg-11134201-7rfi2-m32b4l6onj493c',
      features: ['Baixa Resistência', 'Verde Sustentável', 'Eficiência Energética']
    }
  ];

  const categories = [
    { name: 'Performance', icon: Award, count: 24 },
    { name: 'Conforto', icon: Shield, count: 18 },
    { name: 'SUV/Pickup', icon: Truck, count: 32 },
    { name: 'Eco-Friendly', icon: Star, count: 15 }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-red-600">Produtos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos as melhores marcas de pneus do mercado com garantia total e preços competitivos.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors">
                  <IconComponent className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} modelos</p>
              </div>
            );
          })}
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-3">{product.size}</p>
                
                <div className="flex items-center mb-4">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-sm text-gray-600">({product.rating}.0)</span>
                </div>
                
                <div className="mb-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600 mb-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-red-600">{product.price}</div>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
  onClick={() => window.open('https://wa.me/13999999999', '_blank')}
  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
>
            Ver Todos os Produtos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
