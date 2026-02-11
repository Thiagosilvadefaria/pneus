import React from 'react';
import { Shield, Award, Users, Wrench, Clock, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: Shield,
      title: 'Certificação ISO 9001',
      description: 'Qualidade garantida em todos os processos'
    },
    {
      icon: Award,
      title: 'Prêmio Excelência 2023',
      description: 'Reconhecimento pela qualidade dos serviços'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Técnicos certificados e treinados'
    },
    {
      icon: Wrench,
      title: 'Equipamentos Modernos',
      description: 'Tecnologia de ponta em todos os serviços'
    }
  ];

  const team = [
    {
      name: 'Carlos Silva',
      role: 'Diretor Técnico',
      experience: '20+ anos',
      image: 'https://media.istockphoto.com/id/1911521695/pt/foto/successful-businessman-in-modern-office-working-on-laptop.jpg?s=612x612&w=0&k=20&c=VvOzwDyxRqmQXAVOG9PylxGM5EPRi1VFSnJPV5fx7TM='
    },
    {
      name: 'José Gomes Hofman',
      role: 'Gerente de Vendas',
      experience: '15+ anos',
      image: 'https://media.istockphoto.com/id/1454530401/pt/foto/successful-businessman-in-modern-office-working-on-laptop.jpg?s=612x612&w=0&k=20&c=RsbM9Zrl0Kj8SveD4IvlEslebjdRctQwWwYV15Ltzuk='
    },
    {
      name: 'João Oliveira',
      role: 'Chefe de Oficina',
      experience: '18+ anos',
      image: 'https://goliveira.adv.br/wp-content/uploads/2022/04/Aposentadoria-especial-mecanico.jpg'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sobre a <span className="text-red-600">PneusTurbo</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Há mais de 15 anos no mercado automotivo, a PneusTurbo se consolidou como referência 
              em pneus e serviços especializados. Nossa missão é garantir a segurança e performance 
              do seu veículo através de produtos de qualidade superior e atendimento excepcional.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Trabalhamos exclusivamente com as melhores marcas do mercado e contamos com uma equipe 
              de técnicos certificados e equipamentos de última geração para oferecer o melhor 
              serviço da região.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                <div className="text-gray-600">Anos de Mercado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">5000+</div>
                <div className="text-gray-600">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                <div className="text-gray-600">Marcas Parceiras</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
                <div className="text-gray-600">Satisfação</div>
              </div>
            </div>
            <a href="https://wa.me/13999999999" target="_blank" rel="noopener noreferrer">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Conheça Nossa Loja
              </button>
            </a>
          </div>
          
          <div className="relative">
            <img
              src="https://maintenance-minio.kdminhaoficina.com.br/blog/2024/08/troca_de_pneu.jpg"
              alt="Nossa oficina"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <Clock className="w-8 h-8 text-red-600" />
                <div>
                  <div className="font-bold text-gray-900">Horário de Funcionamento</div>
                  <div className="text-gray-600">Seg-Sex: 8h-18h | Sáb: 8h-14h</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-red-600">Diferenciais</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Certificações e reconhecimentos que comprovam nossa excelência.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors">
                    <IconComponent className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossa <span className="text-red-600">Equipe</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profissionais experientes e apaixonados pelo que fazem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-red-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.experience} de experiência</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location Info */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Venha Nos <span className="text-red-600">Visitar</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Endereço</div>
                    <div className="text-gray-600">Avenida Doutor Jorge Hannas, S/N</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-red-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Horário</div>
                    <div className="text-gray-600">Segunda a Sexta: 8h às 18h | Sábado: 8h às 14h</div>
                  </div>
                </div>
              </div>
              
              <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Ver no Mapa
              </button>
            </div>
            
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <div>Mapa da Localização</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
