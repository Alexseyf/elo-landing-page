import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-blue-text">
          Apresentando o Elo
        </h2>
        <div className="text-lg text-gray-700 leading-relaxed">
          <p className="mb-6">
            Para resolver essa desconexão e trazer mais tranquilidade e participação para o seu dia a dia, 
            apresentamos o <strong className="text-blue-text">Elo</strong>. Mais que um aplicativo, o Elo é a ponte digital 
            que une família e escola de forma simples, segura e eficiente.
          </p>
          <p>
            Criamos um <strong className="text-blue-text">elo</strong> de comunicação e confiança, permitindo que você 
            acompanhe de perto cada passo do desenvolvimento do seu filho na educação infantil, fortalecendo 
            a parceria essencial para um crescimento feliz e saudável.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <img 
            src="/images/app-tela-login.png" 
            alt="Aplicativo Elo em um smartphone" 
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
