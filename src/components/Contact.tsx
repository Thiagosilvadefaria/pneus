import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(13) 99742-9361',
        },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@pneusturbo.com.br',
      secondary: 'vendas@pneusturbo.com.br'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Avenida Doutor Jorge Hannas, S/N',
      secondary: 'Centro'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Seg-Sex: 8h às 18h',
      secondary: 'Sáb: 8h às 14h'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Entre em <span className="text-red-600">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você. Entre em contato conosco para orçamentos, 
            agendamentos ou tire suas dúvidas. Frete Grátis e pagamento na entrega!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors">
                  <IconComponent className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-700 font-medium">{info.info}</p>
                <p className="text-gray-600 text-sm">{info.secondary}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Solicite um <span className="text-red-600">Orçamento</span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Serviço de Interesse
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Selecione um serviço</option>
                  <option value="pneus">Compra de Pneus</option>
                  <option value="instalacao">Instalação</option>
                  <option value="balanceamento">Balanceamento</option>
                  <option value="alinhamento">Alinhamento</option>
                  <option value="inspecao">Inspeção</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                  placeholder="Descreva suas necessidades ou dúvidas..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Por que Escolher a <span className="text-red-600">PneusTurbo?</span>
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Atendimento Personalizado
                  </h4>
                  <p className="text-gray-600">
                    Nossa equipe especializada oferece consultoria técnica personalizada 
                    para encontrar a melhor solução para seu veículo.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Agilidade no Atendimento
                  </h4>
                  <p className="text-gray-600">
                    Resposta rápida para orçamentos e agendamentos. Sua satisfação 
                    é nossa prioridade número um.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Suporte 24/7
                  </h4>
                  <p className="text-gray-600">
                    Atendimento de emergência disponível 24 horas para situações 
                    urgentes e assistência técnica.
                  </p>
                </div>
              </div>
            </div>
             
           <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
      <MessageSquare className="w-6 h-6 text-white" />
    </div>
    <div className="flex-1">
      <h4 className="text-lg font-bold text-gray-900">
        Precisa de Atendimento Rápido?
      </h4>
      <p className="text-gray-600">
        Fale conosco pelo WhatsApp para atendimento imediato
      </p>
    </div>
    <a
      href="https://wa.me/5513997429361?text=Olá%2C+gostaria+de+mais+informações"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
    >
      WhatsApp
    </a>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;