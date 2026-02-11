import React from 'react';
import { Wrench, Gauge, AlignEndVertical as AlignVertical, ShieldCheck, Clock, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Instalação Profissional',
      description: 'Montagem e instalação de pneus com equipamentos de última geração e técnicos especialistas.',
      features: ['Desmontagem segura', 'Montagem precisa', 'Calibragem adequada'],
      price: 'A partir de R$ 25'
    },
    {
      icon: Gauge,
      title: 'Balanceamento Digital',
      description: 'Balanceamento computadorizado para eliminar vibrações e garantir maior conforto e durabilidade.',
      features: ['Equipamento digital', 'Precisão máxima', 'Garantia de qualidade'],
      price: 'A partir de R$ 20'
    },
    {
      icon: AlignVertical,
      title: 'Alinhamento 3D',
      description: 'Alinhamento de direção com tecnologia 3D para melhor estabilidade e economia de combustível.',
      features: ['Tecnologia 3D', 'Relatório completo', 'Ajuste preciso'],
      price: 'A partir de R$ 80'
    },
    {
      icon: ShieldCheck,
      title: 'Inspeção Completa',
      description: 'Verificação detalhada do estado dos pneus, suspensão e componentes relacionados.',
      features: ['Diagnóstico completo', 'Relatório detalhado', 'Recomendações técnicas'],
      price: 'Gratuito'
    }
  ];

  const stats = [
    { icon: Clock, number: '30min', label: 'Tempo Médio de Serviço' },
    { icon: Users, number: '98%', label: 'Satisfação dos Clientes' },
    { icon: ShieldCheck, number: '2 Anos', label: 'Garantia dos Serviços' },
    { icon: Wrench, number: '24/7', label: 'Atendimento de Emergência' }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-red-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serviços especializados executados por profissionais certificados com equipamentos de última geração.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors">
                    <IconComponent className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <span className="text-red-600 font-bold text-lg">{service.price}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button
  onClick={() => window.open('https://wa.me/1399999999', '_blank')}
  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
>
                      Agendar Serviço
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Por que Escolher a PneusTurbo?
            </h3>
            <p className="text-red-100 text-lg max-w-2xl mx-auto">
              Números que comprovam nossa excelência e compromisso com a qualidade.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent className="w-10 h-10 text-white mx-auto mb-4" />
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-red-100 text-sm lg:text-base">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Precisa de um Serviço Especializado?
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Agende agora mesmo e garanta a segurança do seu veículo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
  onClick={() => window.open('https://wa.me/1999999999', '_blank')}
  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
>
              Agendar Agora
            </button>
            <button
  onClick={() => window.open('https://wa.me/13999999999', '_blank')}
  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
>
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
