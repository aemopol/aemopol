import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";

// --- Data ---
const associationData = {
  name: "Associação de Estudantes Moçambicanos na Polónia",
  introduction:
    "Sejam todos muito bem-vindos à Associação de Estudantes!" +
    "\n\nÉ com grande satisfação que abrimos as portas deste espaço de participação, união e representação estudantil." +
    " A Associação de Estudantes existe para dar voz aos alunos, promover iniciativas culturais, académicas e sociais, " +
    "e fortalecer o espírito de cooperação e cidadania entre todos.\n\nEste é um espaço construído por e para estudantes, " +
    "onde cada ideia conta, cada opinião importa e cada participação faz a diferença. Encorajamos todos a envolverem-se ativamente," +
    " a partilharem propostas, a colaborarem em projetos e a ajudarem a construir uma comunidade mais justa, dinâmica e inclusiva." +
    "\n\nJuntos, podemos transformar desafios em oportunidades e fazer da nossa experiência estudantil um caminho de crescimento, aprendizagem e sucesso." +
    "\n\nSejam muito bem-vindos e contem connosco!",
};

const jobPostings = [
  {
    department: "Departamento Académico",
    departmentDescription:
      "O Departamento Académico e de Debates é uma das áreas essenciais da associação," +
      "responsável por promover o desenvolvimento académico, intelectual e crítico dos " +
      "estudantes. O seu papel é criar iniciativas que apoiem a aprendizagem, incentivem a " +
      "troca de conhecimentos e ofereçam espaços seguros para a expressão de ideias, o " +
      "debate construtivo e o crescimento académico coletivo.",
    positions: [
      {
        title: "Coordenador(a)",
        description:
          "Procuramos um(a) líder académico(a) visionário(a) para coordenar o Departamento Académico e de Debates.\n\n" +
          "📋 Principais Responsabilidades:\n" +
          "• Elaborar planos trimestrais e anuais do departamento\n" +
          "• Representar o departamento em reuniões oficiais\n" +
          "• Supervisionar a equipa de responsáveis e assistentes\n" +
          "• Validar temas para debates, cursos e grupos de estudo\n" +
          "• Avaliar mensalmente o desempenho das atividades\n" +
          "• Alinhar iniciativas com os objetivos gerais da AEMOPOL\n\n" +
          "✨ Perfil Ideal:\n" +
          "• Capacidade de liderança e visão estratégica\n" +
          "• Excelente comunicação e relacionamento interpessoal\n" +
          "• Organização e gestão de equipas\n" +
          "• Paixão pelo desenvolvimento académico e intelectual",
        applyLink: "https://forms.gle/your-google-form-link",
      },
      {
        title: "Assessor(a) do Coordenador",
        description:
          "Como Assessor(a) do Coordenador, serás fundamental no apoio direto ao Coordenador e na gestão eficiente das atividades do departamento.\n\n" +
          "📋 Principais Responsabilidades:\n" +
          "• Apoiar o Coordenador na gestão administrativa\n" +
          "• Coordenar logística (salas, horários, materiais)\n" +
          "• Fazer ligação com outros departamentos\n" +
          "• Apoiar na preparação e execução de atividades\n" +
          "• Monitorizar prazos e acompanhar tarefas\n" +
          "• Garantir comunicação fluida entre equipas\n\n" +
          "✨ Perfil Ideal:\n" +
          "• Organização e atenção aos detalhes\n" +
          "• Capacidade de coordenação e multitasking\n" +
          "• Espírito colaborativo e proativo\n" +
          "• Flexibilidade e capacidade de adaptação",
        applyLink: "https://forms.gle/your-google-form-link",
      },
      {
        title: "Assessor(a) do Coordenador",
        description:
          "Como Assessor(a) do Coordenador, serás fundamental no apoio direto ao Coordenador e na gestão eficiente das atividades do departamento.\n\n" +
          "📋 Principais Responsabilidades:\n" +
          "• Apoiar o Coordenador na gestão administrativa\n" +
          "• Coordenar logística (salas, horários, materiais)\n" +
          "• Fazer ligação com outros departamentos\n" +
          "• Apoiar na preparação e execução de atividades\n" +
          "• Monitorizar prazos e acompanhar tarefas\n" +
          "• Garantir comunicação fluida entre equipas\n\n" +
          "✨ Perfil Ideal:\n" +
          "• Organização e atenção aos detalhes\n" +
          "• Capacidade de coordenação e multitasking\n" +
          "• Espírito colaborativo e proativo\n" +
          "• Flexibilidade e capacidade de adaptação",
        applyLink: "https://forms.gle/your-google-form-link",
      },
    ],
  },
  {
    department: "Departamento de Cultura e Eventos",
    departmentDescription:
      "O Departamento de Cultura e Eventos é responsável por promover a identidade cultural moçambicana na Polónia, " +
      "criar momentos de convívio, integração e celebração entre os estudantes, e organizar iniciativas que fortaleçam o sentido de comunidade. " +
      "O seu objetivo é proporcionar experiências enriquecedoras, tanto do ponto de vista cultural como social, e garantir que todos os membros se sintam representados e acolhidos.\n\n" +
      "As suas responsabilidades incluem:\n" +
      "• Planear e coordenar eventos culturais, sociais e académicos;\n" +
      "• Promover a cultura moçambicana através de iniciativas temáticas;\n" +
      "• Facilitar a integração de novos estudantes;\n" +
      "• Estabelecer parcerias com instituições culturais e outras associações;\n" +
      "• Gerir logística, orçamentos e comunicação de eventos;\n" +
      "• Avaliar o impacto das iniciativas e recolher feedback para melhorias futuras.",
    positions: [
      {
        title: "Coordenador(a)",
        description:
          "Lidera o Departamento de Cultura e Eventos e molda a identidade cultural da AEMOPOL na Polónia!\n\n" +
          "📋 Principais Responsabilidades:\n" +
          "• Desenvolver e implementar o plano anual de atividades\n" +
          "• Coordenar com a Direção e outros departamentos\n" +
          "• Participar ativamente no Conselho Geral\n" +
          "• Estabelecer parcerias com instituições e embaixada\n" +
          "• Aprovar propostas e gerir calendário de eventos\n" +
          "• Supervisionar a equipa do departamento\n\n" +
          "✨ Perfil Ideal:\n" +
          "• Criatividade e espírito de liderança\n" +
          "• Visão estratégica e capacidade de gestão\n" +
          "• Excelente comunicação e networking\n" +
          "• Paixão pela cultura moçambicana",
        applyLink: "https://forms.gle/your-google-form-link",
      },
      {
        title: "Responsável de Cultura e Tradições",
        description:
          "Celebra e promove a cultura moçambicana na Polónia através de eventos autênticos e envolventes!\n\n" +
          "📋 Principais Responsabilidades:\n" +
          "• Criar eventos de música, dança, gastronomia e desporto\n" +
          "• Garantir autenticidade cultural em todos os eventos\n" +
          "• Colaborar com artistas moçambicanos na Polónia\n" +
          "• Estabelecer parcerias com grupos culturais locais\n" +
          "• Desenvolver iniciativas de literatura e artes\n\n" +
          "✨ Perfil Ideal:\n" +
          "• Paixão pela cultura moçambicana\n" +
          "• Criatividade e sensibilidade cultural\n" +
          "• Capacidade de organização de eventos\n" +
          "• Networking e estabelecimento de parcerias",
        applyLink: "https://forms.gle/your-google-form-link",
      },
      {
        title: "Responsável de Eventos e Logística",
        description:
          "Transforma ideias em realidade garantindo que todos os eventos decorram sem falhas!\n\n" +
          "📋 Principais Responsabilidades:\n" +
          "• Gerir espaços, equipamentos e transporte\n" +
          "• Criar checklists e garantir cumprimento de prazos\n" +
          "• Coordenar voluntários durante eventos\n" +
          "• Supervisionar operações no terreno\n" +
          "• Resolver imprevistos com agilidade\n" +
          "• Garantir qualidade na execução de eventos\n\n" +
          "✨ Perfil Ideal:\n" +
          "• Orientação para detalhes e organização\n" +
          "• Capacidade de gestão de equipas\n" +
          "• Resolução de problemas sob pressão\n" +
          "• Proatividade e profissionalismo",
        applyLink: "https://forms.gle/your-google-form-link",
      },
    ],
  },
  {
    department: " Departamento de Marketing",
    departmentDescription:
      "O Departamento de Marketing tem como propósito principal garantir a comunicação estratégica e eficaz da Associação de Estudantes Moçambicanos na Polónia." +
      " O seu papel é assegurar que todas as iniciativas, eventos, valores e projetos da associação sejam comunicados de forma clara, atrativa e consistente, promovendo a unidade, " +
      "a representação e o fortalecimento da identidade coletiva dos estudantes moçambicanos no país.\n\nAs suas responsabilidades incluem:\n" +
      " • Gerir a presença da associação nas redes sociais;\n• Criar e editar conteúdos visuais e escritos;\n• Manter a identidade visual da associação;\n" +
      " • Promover eventos, iniciativas culturais e académicas;\n• Aumentar o alcance, envolvimento e participação dos estudantes;\n" +
      "• Realizar análises de desempenho e sugerir melhorias contínuas.",
    positions: [
      {
        title: "Coordenador(a)",
        description:
          "Lidera a estratégia de comunicação da AEMOPOL e fortalece a identidade da associação!\n\n" +
          "📋 Principais Responsabilidades:\n" +
          "• Definir estratégia de comunicação do departamento\n" +
          "• Planear e coordenar conteúdos\n" +
          "• Garantir coerência da identidade visual\n" +
          "• Supervisionar todas as publicações\n" +
          "• Fazer ligação com outros departamentos\n" +
          "• Coordenar equipa de marketing\n\n" +
          "✨ Perfil Ideal:\n" +
          "• Visão estratégica de comunicação\n" +
          "• Liderança e gestão de equipas\n" +
          "• Criatividade e pensamento analítico\n" +
          "• Conhecimento de marketing digital",
        applyLink: "https://forms.gle/your-google-form-link",
      },
      {
        title: "Social Media Manager",
        description:
          "Gere a presença digital da AEMOPOL e conecta a comunidade estudantil através das redes sociais!\n\n" +
          "📋 Principais Responsabilidades:\n" +
          "• Gestão diária das redes sociais\n" +
          "• Criação e edição de conteúdos (fotos e vídeos)\n" +
          "• Copywriting atrativo e envolvente\n" +
          "• Monitorização de interações e comunidade\n" +
          "• Análise de métricas de desempenho\n" +
          "• Desenvolver estratégias de engagement\n\n" +
          "✨ Perfil Ideal:\n" +
          "• Experiência com redes sociais\n" +
          "• Criatividade e capacidade de escrita\n" +
          "• Conhecimento de ferramentas de design\n" +
          "• Análise de dados e métricas",
        applyLink: "https://forms.gle/your-google-form-link",
      },
    ],
  },
  {
    department: "Departamento de Tecnologia e Informação",
    departmentDescription:
      "O Departamento de Tecnologia e Informação é responsável por desenvolver e manter a infraestrutura digital da AEMOPOL, " +
      "criando soluções tecnológicas que facilitam a comunicação, gestão e operação da associação. O departamento trabalha para garantir que a " +
      "presença digital da associação seja moderna, eficiente e acessível a todos os estudantes.",
    positions: [
      {
        title: "Frontend Developer",
        description:
          "Cria interfaces intuitivas e experiências digitais envolventes para a comunidade AEMOPOL!\n\n" +
          "📋 Principais Responsabilidades:\n" +
          "• Desenvolver e manter website e aplicações\n" +
          "• Transformar designs em código funcional e responsivo\n" +
          "• Criar interfaces acessíveis e performantes\n" +
          "• Trabalhar com tecnologias modernas\n" +
          "• Colaborar com designers e backend\n\n" +
          "💻 Requisitos Técnicos:\n" +
          "• Estudante de IT, Eng. Informática ou áreas relacionadas\n" +
          "• Conhecimentos em HTML, CSS e JavaScript\n" +
          "• Familiaridade com frameworks (React, Vue, etc.)\n" +
          "• Experiência com design responsivo\n" +
          "• Vontade de aprender e evoluir\n\n" +
          "✨ Perfil Ideal:\n" +
          "• Paixão por criar experiências digitais\n" +
          "• Atenção aos detalhes visuais\n" +
          "• Capacidade de trabalho em equipa\n" +
          "• Proatividade e resolução de problemas",
        applyLink: "https://forms.gle/your-google-form-link",
      },
      {
        title: "Backend Developer",
        description:
          "Constrói sistemas robustos que sustentam as operações digitais da AEMOPOL!\n\n" +
          "📋 Principais Responsabilidades:\n" +
          "• Desenvolver e manter APIs e serviços\n" +
          "• Gerir bases de dados e integridade dos dados\n" +
          "• Implementar lógica de negócio e autenticação\n" +
          "• Integrar sistemas externos (pagamentos, emails)\n" +
          "• Otimizar performance e segurança\n" +
          "• Criar documentação técnica\n\n" +
          "💻 Requisitos Técnicos:\n" +
          "• Estudante de IT, Eng. Informática ou áreas relacionadas\n" +
          "• Conhecimento em linguagem backend (Node.js, Python, Java)\n" +
          "• Compreensão de bases de dados (SQL e/ou NoSQL)\n" +
          "• Familiaridade com APIs RESTful ou GraphQL\n" +
          "• Conhecimento de autenticação (JWT, OAuth)\n\n" +
          "✨ Perfil Ideal:\n" +
          "• Resolução de problemas complexos\n" +
          "• Pensamento arquitetural\n" +
          "• Atenção à segurança e performance\n" +
          "• Capacidade de documentação técnica",
        applyLink: "https://forms.gle/your-google-form-link",
      },
    ],
  },
];

// --- Components ---

const HomePage = ({ onViewJobs }: { onViewJobs: () => void }) => (
  <Card className="w-full max-w-2xl mx-auto border-0 overflow-hidden shadow-xl">
    <CardHeader className="text-center px-4 sm:px-6 py-8 pb-6 bg-gradient-to-b from-primary via-primary/90 to-primary/70 text-white relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/30 rounded-full blur-2xl"></div>
      <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight relative z-10">
        {associationData.name}
      </CardTitle>
      <CardDescription className="text-base sm:text-lg pt-2 text-white/90 relative z-10">
        Juntos para um futuro melhor.
      </CardDescription>
    </CardHeader>
    <CardContent className="px-4 sm:px-6 py-10 -mt-6 bg-gradient-to-b from-primary/10 via-primary/3 to-white">
      <p className="text-sm sm:text-base text-center whitespace-pre-line leading-relaxed">
        {associationData.introduction}
      </p>
    </CardContent>
    <CardFooter className="flex justify-center px-4 sm:px-6 pb-8 pt-4 bg-gradient-to-b from-white via-muted/5 to-muted/10">
      <Button
        onClick={onViewJobs}
        className="w-full sm:w-auto bg-gradient-to-r from-secondary via-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        Veja as Vagas Disponíveis
      </Button>
    </CardFooter>
  </Card>
);

const JobsPage = ({ onBack }: { onBack: () => void }) => (
  <div className="w-full max-w-3xl mx-auto">
    <Button
      variant="outline"
      size="sm"
      onClick={onBack}
      className="mb-4 border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary/80 hover:text-white transition-all duration-300"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Voltar
    </Button>
    <Card className="border-0 overflow-hidden shadow-xl">
      <CardHeader className="text-center px-4 sm:px-6 py-8 pb-6 bg-gradient-to-b from-primary via-primary/90 to-primary/70 text-white relative">
        <div className="absolute top-0 left-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/30 rounded-full blur-2xl"></div>
        <CardTitle className="text-2xl sm:text-3xl font-bold relative z-10">
          Vagas Disponíveis
        </CardTitle>
        <CardDescription className="text-base sm:text-lg pt-2 text-white/90 relative z-10">
          A sua oportunidade de fazer parte da nossa equipe!
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6 pt-6 pb-6 -mt-6 bg-gradient-to-b from-primary/10 via-primary/3 to-white">
        <Accordion type="single" collapsible className="w-full">
          {jobPostings.map((dept, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg sm:text-xl">
                {dept.department}
              </AccordionTrigger>
              <AccordionContent>
                {dept.departmentDescription && (
                  <div className="mb-4 sm:mb-6 p-4 sm:p-5 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-lg border-l-4 border-primary">
                    <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line text-foreground/80">
                      {dept.departmentDescription}
                    </p>
                  </div>
                )}
                <div className="space-y-4 sm:space-y-6">
                  {dept.positions.map((pos, posIndex) => (
                    <div
                      key={posIndex}
                      className="p-4 sm:p-5 border-2 rounded-lg bg-gradient-to-br from-white to-muted/10 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                    >
                      <h3 className="font-semibold text-base sm:text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {pos.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed whitespace-pre-line text-foreground/80">
                        {pos.description}
                      </p>
                      <Button
                        asChild
                        className="mt-3 sm:mt-4 w-full sm:w-auto bg-gradient-to-r from-secondary via-secondary/90 to-secondary/80 hover:from-secondary/90 hover:to-secondary text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <a
                          href={pos.applyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Submeta a sua candidatura
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  </div>
);

function App() {
  const [page, setPage] = useState("home"); // "home" or "jobs"

  const renderPage = () => {
    if (page === "home") {
      return <HomePage onViewJobs={() => setPage("jobs")} />;
    }
    if (page === "jobs") {
      return <JobsPage onBack={() => setPage("home")} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Decorative background elements representing Mozambique flag colors */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/6 rounded-full blur-3xl"></div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-primary rotate-45 rounded-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-4 border-secondary -rotate-12 rounded-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 border-4 border-accent rotate-12 rounded-xl"></div>
      </div>

      <div className="relative z-10">{renderPage()}</div>
    </div>
  );
}

export default App;
