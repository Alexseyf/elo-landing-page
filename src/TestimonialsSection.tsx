import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-blue-700">
          O que pais e escolas dizem sobre o Elo
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Depoimento 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <svg className="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 italic flex-grow">
                "Finalmente sinto que participo de verdade do dia a dia do meu filho na creche. O Elo trouxe muita tranquilidade e facilitou a comunicação com a professora."
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="font-semibold text-blue-800">Mariana R.</p>
                <p className="text-sm text-gray-600">Mãe de aluno</p>
              </div>
            </div>
          </div>
          
          {/* Depoimento 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <svg className="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 italic flex-grow">
                "A implementação do Elo na nossa escola transformou a comunicação com as famílias. Os pais estão mais engajados e o fluxo de informações é muito mais eficiente."
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="font-semibold text-blue-800">Escola Crescer Feliz</p>
                <p className="text-sm text-gray-600">Instituição parceira</p>
              </div>
            </div>
          </div>
          
          {/* Depoimento 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <svg className="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 italic flex-grow">
                "Adoro receber as fotos das atividades! Me sinto mais próxima do meu filho, mesmo estando no trabalho. O aplicativo é fácil de usar e muito completo."
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="font-semibold text-blue-800">Carlos P.</p>
                <p className="text-sm text-gray-600">Pai de aluna</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
