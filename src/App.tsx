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
    departmentDescription: "O Departamento Académico e de Debates é uma das áreas essenciais da associação,"+
      "responsável por promover o desenvolvimento académico, intelectual e crítico dos " +
      "estudantes. O seu papel é criar iniciativas que apoiem a aprendizagem, incentivem a " +
      "troca de conhecimentos e ofereçam espaços seguros para a expressão de ideias, o " +
      "debate construtivo e o crescimento académico coletivo.",
    positions: [
      {
        title: "Coordenador(a)",
        description:
          "Procuramos um(a) líder académico(a) visionário(a) para coordenar o Departamento Académico e de Debates. Nesta posição estratégica, terás a responsabilidade de definir e implementar o rumo das atividades académicas da associação, promovendo o desenvolvimento intelectual da comunidade estudantil.\n\n" +
          "Como Coordenador(a), serás responsável por elaborar os planos trimestrais e anuais do departamento, alinhando-os com os objetivos gerais da AEMOPOL. Representarás o departamento em reuniões oficiais e terás a importante função de supervisionar a equipa de responsáveis e assistentes, garantindo qualidade e coerência nas iniciativas.\n\n" +
          "O teu papel incluirá validar temas para debates, cursos e grupos de estudo, assegurando relevância e impacto. Através de avaliações mensais de desempenho, liderarás a melhoria contínua das atividades, criando um ambiente académico estimulante e enriquecedor para todos os estudantes.",
        applyLink: "https://forms.gle/your-google-form-link",
      },
      {
        title: "Vice-Coordenador(a)",
        description:
          "És organizado(a), tens capacidade de coordenação e gostas de trabalho colaborativo? Como Vice-Coordenador(a) do Departamento Académico, serás o braço direito do Coordenador, garantindo que todas as atividades académicas decorram com eficiência e profissionalismo.\n\n" +
          "Nesta função, serás responsável pela gestão logística das atividades — desde a reserva de salas e definição de horários até à preparação de materiais necessários. Atuarás como elo de ligação entre o Departamento Académico e outros departamentos da associação, facilitando colaborações e garantindo comunicação fluida.\n\n" +
          "Terás também a responsabilidade de substituir o Coordenador quando necessário, o que te dará uma visão completa da liderança do departamento e a oportunidade de desenvolver competências de gestão numa função de grande impacto.",
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
          "Procuramos uma pessoa criativa, organizada e com espírito de liderança para coordenar o Departamento de Cultura e Eventos. Nesta função, terás a oportunidade de moldar a identidade cultural da associação e criar experiências memoráveis para a comunidade estudantil moçambicana na Polónia.\n\n" +
          "Como Coordenador(a), serás responsável por desenvolver e implementar o plano anual de atividades, trabalhando em estreita colaboração com a Direção da AEMOPOL e outros departamentos. Terás um papel ativo no Conselho Geral, representando as necessidades do departamento e estabelecendo pontes com instituições externas, incluindo a Embaixada, para garantir apoio nos eventos oficiais.\n\n" +
          "Procuramos alguém com capacidade de gestão de equipas, visão estratégica para identificar parcerias valiosas (universidades, espaços culturais, estabelecimentos locais) e habilidade para transformar ideias em eventos impactantes que unam e celebrem a nossa comunidade.",
        applyLink: "https://forms.gle/your-google-form-link",
      },
      {
        title: "Responsável de Cultura e Tradições",
        description:
          "És apaixonado(a) pela cultura moçambicana e queres partilhar essa paixão com a comunidade estudantil na Polónia? Procuramos alguém que seja guardião da nossa identidade cultural e que consiga traduzi-la em experiências autênticas e envolventes.\n\n" +
          "Nesta posição, serás responsável por conceber e desenvolver eventos que celebrem as diversas expressões culturais moçambicanas — desde a música e dança até à gastronomia, literatura e desporto. Trabalharás para garantir que cada evento da associação tenha elementos culturais genuínos que conectem os estudantes às suas raízes.\n\n" +
          "Terás também a oportunidade de estabelecer colaborações com artistas moçambicanos na Polónia e grupos culturais locais, criando pontes entre comunidades e enriquecendo a experiência cultural de todos.",
        applyLink: "https://forms.gle/your-google-form-link",
      },
      {
        title: "Responsável de Eventos e Logística",
        description:
          "Se és uma pessoa orientada para os detalhes, com excelentes capacidades organizacionais e gostas de ver projetos tomarem forma, esta posição é para ti. Como Responsável de Eventos e Logística, serás a força operacional que transforma ideias em realidade.\n\n" +
          "O teu papel será garantir que todos os aspetos práticos dos eventos funcionem sem falhas — desde a reserva de espaços e equipamentos até à coordenação de transporte e gestão de voluntários. Criarás sistemas de organização eficientes, desenvolverás checklists detalhadas e assegurarás que todos os prazos sejam cumpridos.\n\n" +
          "Durante os eventos, terás a responsabilidade de supervisionar as operações no terreno, resolver imprevistos e coordenar as equipas de apoio, garantindo que cada atividade decorra com sucesso e profissionalismo.",
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
          "Responsável por liderar o departamento, definir a estratégia de comunicação, planear conteúdos, " +
          "garantir a coerência da identidade visual, supervisionar publicações e fazer a ligação com os restantes órgãos da associação.",
        applyLink: "https://forms.gle/your-google-form-link",
      },
      {
        title: "Social Media Manager",
        description:
          "Responsável pela gestão diária das redes sociais, criação e edição de conteúdos (incluindo fotos e vídeos)," +
          " copywriting, monitorização de interações e análise de métricas de desempenho.",
        applyLink: "https://forms.gle/your-google-form-link",
      },
    ],
  },
  {
    department: " Departamento de Tecnologia e Informação",
    departmentDescription: "",
    positions: [
      {
        title: "Frontend Developer",
        description:
          "We are looking for a skilled Frontend Developer to join our team. The ideal candidate is passionate about creating beautiful and intuitive user interfaces. Responsibilities include translating UI/UX design wireframes to actual code and ensuring the technical feasibility of UI/UX designs.",
        applyLink: "https://forms.gle/your-google-form-link",
      },
      {
        title: "Backend Developer",
        description:
          "We are seeking an experienced Backend Developer to be responsible for the server-side web application logic and integration of the work frontend developers do. You will be responsible for managing the interchange of data between the server and the users, as well as developing and maintaining all server-side network components.",
        applyLink: "https://forms.gle/your-google-form-link",
      },
    ],
  },
];

// --- Components ---

const HomePage = ({ onViewJobs }: { onViewJobs: () => void }) => (
  <Card className="w-full max-w-2xl mx-auto">
    <CardHeader className="text-center px-4 sm:px-6">
      <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
        {associationData.name}
      </CardTitle>
      <CardDescription className="text-base sm:text-lg pt-2">
        Juntos para um futuro melhor.
      </CardDescription>
    </CardHeader>
    <CardContent className="px-4 sm:px-6">
      <p className="text-sm sm:text-base text-center whitespace-pre-line leading-relaxed">
        {associationData.introduction}
      </p>
    </CardContent>
    <CardFooter className="flex justify-center px-4 sm:px-6">
      <Button onClick={onViewJobs} className="w-full sm:w-auto">
        Veja as Vagas Disponíveis
      </Button>
    </CardFooter>
  </Card>
);

const JobsPage = ({ onBack }: { onBack: () => void }) => (
  <div className="w-full max-w-3xl mx-auto">
    <Button variant="outline" size="sm" onClick={onBack} className="mb-4">
      <ArrowLeft className="mr-2 h-4 w-4" />
      Voltar
    </Button>
    <Card>
      <CardHeader className="text-center px-4 sm:px-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold">
          Vagas Disponíveis
        </CardTitle>
        <CardDescription className="text-base sm:text-lg pt-2">
          A sua oportunidade de fazer parte da nossa equipe!
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <Accordion type="single" collapsible className="w-full">
          {jobPostings.map((dept, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg sm:text-xl">
                {dept.department}
              </AccordionTrigger>
              <AccordionContent>
                {dept.departmentDescription && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-muted/50 rounded-lg">
                    <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                      {dept.departmentDescription}
                    </p>
                  </div>
                )}
                <div className="space-y-4 sm:space-y-6">
                  {dept.positions.map((pos, posIndex) => (
                    <div
                      key={posIndex}
                      className="p-3 sm:p-4 border rounded-lg"
                    >
                      <h3 className="font-semibold text-base sm:text-lg">
                        {pos.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed">
                        {pos.description}
                      </p>
                      <Button asChild className="mt-3 sm:mt-4 w-full sm:w-auto">
                        <a
                          href={pos.applyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Apply Now
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

const AssociationWebsite = () => {
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
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {renderPage()}
    </div>
  );
};

export default AssociationWebsite;
