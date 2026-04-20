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
  name: "Portal de Candidaturas da AMOP",
  subtitle:
    "Candidata-te e faz parte da equipa que constrói a Associação de Residentes Moçambicanos na Polónia.",
  about:
    "Este é o espaço oficial de candidaturas da AMOP para os seus diferentes departamentos e posições.\n\n" +
    "Aqui podes explorar as vagas disponíveis e submeter a tua candidatura para fazer parte da equipa que organiza, " +
    "representa e desenvolve a comunidade estudantil moçambicana na Polónia.",
  whatYouFind: [
    "Departamentos e funções disponíveis",
    "Requisitos de candidatura",
    "Processo de seleção transparente",
    "Oportunidades de participação ativa na AMOP",
  ],
  howItWorks: [
    "Explora as vagas disponíveis",
    "Escolhe o departamento onde te queres candidatar",
    "Preenche o formulário de candidatura",
    "Aguarda contacto da equipa de avaliação",
  ],
  important:
    "As candidaturas são avaliadas com base em compromisso, motivação e alinhamento com os objetivos da AMOP.",
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
        title: "Director(a)",
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
        applyLink:
          "https://docs.google.com/forms/d/e/1FAIpQLScu4Vka2K8IKnK9pFolPpCZlOKBLRqWghPA0BG1wGqyUwdQyw/viewform?usp=publish-editor",
      },
      {
        title: "Assessor(a)",
        description:
          "Como Assessor(a), serás fundamental no apoio direto ao Coordenador e na gestão eficiente das atividades do departamento.\n\n" +
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
        applyLink:
          "https://docs.google.com/forms/d/e/1FAIpQLScu4Vka2K8IKnK9pFolPpCZlOKBLRqWghPA0BG1wGqyUwdQyw/viewform?usp=publish-editor",
      },
      {
        title: "Assessor(a)",
        description:
          "Como Assessor(a), serás fundamental no apoio direto ao Coordenador e na gestão eficiente das atividades do departamento.\n\n" +
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
        applyLink:
          "https://docs.google.com/forms/d/e/1FAIpQLScu4Vka2K8IKnK9pFolPpCZlOKBLRqWghPA0BG1wGqyUwdQyw/viewform?usp=publish-editor",
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
        title: "Director(a)",
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
        applyLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSc-URmuc9KNvl3z0IMBwfH31AJ0_FyCFmSEX5l9gC2xvK0fmw/viewform?usp=publish-editor",
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
        applyLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSc-URmuc9KNvl3z0IMBwfH31AJ0_FyCFmSEX5l9gC2xvK0fmw/viewform?usp=publish-editor",
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
        applyLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSc-URmuc9KNvl3z0IMBwfH31AJ0_FyCFmSEX5l9gC2xvK0fmw/viewform?usp=publish-editor",
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
        title: "Director(a)",
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
        applyLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSenj2rppVu9nNBOPcfr6fZHmwi14hS0Kv0yzKmin86nA9c9SQ/viewform?usp=publish-editor",
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
        applyLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSenj2rppVu9nNBOPcfr6fZHmwi14hS0Kv0yzKmin86nA9c9SQ/viewform?usp=publish-editor",
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
        title: "Director(a)",
        description:
          "Lidera o Departamento de Tecnologia e Informação e impulsiona a inovação digital na AEMOPOL!\n\n" +
          "📋 Principais Responsabilidades:\n" +
          "• Definir estratégia tecnológica do departamento\n" +
          "• Planear e coordenar projetos digitais\n" +
          "• Garantir segurança e eficiência dos sistemas\n" +
          "• Supervisionar manutenção de plataformas\n" +
          "• Fazer ligação com outros departamentos\n" +
          "• Coordenar equipa de TI\n\n" +
          "💻 Requisitos Técnicos:\n" +
          "• Estudante de IT, Eng. Informática, Ciências da Computação ou áreas relacionadas\n" +
          "• Conhecimento sólido de desenvolvimento web (frontend e/ou backend)\n" +
          "• Experiência com gestão de projetos tecnológicos\n" +
          "• Familiaridade com sistemas de controlo de versão (Git)\n" +
          "• Compreensão de infraestrutura digital e segurança\n\n" +
          "✨ Perfil Ideal:\n" +
          "• Visão estratégica de tecnologia\n" +
          "• Liderança e gestão de equipas técnicas\n" +
          "• Capacidade de tomada de decisões técnicas\n" +
          "• Excelente comunicação técnica e não-técnica\n" +
          "• Paixão por inovação digital",
        applyLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSfmIl9Ag0-fqoxkg-xRymHyStAms5J9epN4n7Kf_dbnjpTZrg/viewform?usp=publish-editor",
      },
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
        applyLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSfmIl9Ag0-fqoxkg-xRymHyStAms5J9epN4n7Kf_dbnjpTZrg/viewform?usp=publish-editor",
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
        applyLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSfmIl9Ag0-fqoxkg-xRymHyStAms5J9epN4n7Kf_dbnjpTZrg/viewform?usp=publish-editor",
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
        Bem-vindo ao {associationData.name}
      </CardTitle>
      <CardDescription className="text-base sm:text-lg pt-2 text-white/90 relative z-10">
        {associationData.subtitle}
      </CardDescription>
    </CardHeader>
    <CardContent className="px-4 sm:px-6 py-8 -mt-6 bg-gradient-to-b from-primary/10 via-primary/3 to-white space-y-6">

      {/* Sobre este portal */}
      <div>
        <h2 className="text-base sm:text-lg font-semibold text-primary mb-2">Sobre este portal</h2>
        <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line text-foreground/80">
          {associationData.about}
        </p>
      </div>

      {/* O que podes encontrar aqui */}
      <div>
        <h2 className="text-base sm:text-lg font-semibold text-primary mb-2">O que podes encontrar aqui</h2>
        <ul className="space-y-1">
          {associationData.whatYouFind.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-foreground/80">
              <span className="mt-1 w-2 h-2 rounded-full bg-secondary shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Como funciona */}
      <div>
        <h2 className="text-base sm:text-lg font-semibold text-primary mb-2">Como funciona</h2>
        <ol className="space-y-1">
          {associationData.howItWorks.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-foreground/80">
              <span className="shrink-0 w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center font-semibold mt-0.5">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* Importante */}
      <div className="p-4 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-lg border-l-4 border-secondary">
        <h2 className="text-base sm:text-lg font-semibold text-primary mb-1">Importante</h2>
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
          {associationData.important}
        </p>
      </div>

    </CardContent>
    <CardFooter className="flex justify-center px-4 sm:px-6 pb-8 pt-4 bg-gradient-to-b from-white via-muted/5 to-muted/10">
      <Button
        onClick={onViewJobs}
        className="w-full sm:w-auto bg-gradient-to-r from-secondary via-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        Ver vagas disponíveis
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
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden" style={{ backgroundColor: "#f8f6f0" }}>
      {/* Logo watermark — multiply blends colored lines into background */}
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
        style={{ opacity: 0.18, mixBlendMode: "multiply" }}
      />

      {/* Soft colour washes matching logo palette */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse" style={{ backgroundColor: "rgba(0,100,0,0.07)" }}></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse delay-700" style={{ backgroundColor: "rgba(204,0,0,0.07)" }}></div>
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: "rgba(255,194,0,0.09)" }}></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000" style={{ backgroundColor: "rgba(255,194,0,0.06)" }}></div>

      <div className="relative z-10">{renderPage()}</div>
    </div>
  );
}

export default App;
