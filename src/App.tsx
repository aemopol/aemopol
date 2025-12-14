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
    "Sejam todos muito bem-vindos à Associação de Estudantes!\n\nÉ com grande satisfação que abrimos as portas deste espaço de participação, união e representação estudantil. A Associação de Estudantes existe para dar voz aos alunos, promover iniciativas culturais, académicas e sociais, e fortalecer o espírito de cooperação e cidadania entre todos.\n\nEste é um espaço construído por e para estudantes, onde cada ideia conta, cada opinião importa e cada participação faz a diferença. Encorajamos todos a envolverem-se ativamente, a partilharem propostas, a colaborarem em projetos e a ajudarem a construir uma comunidade mais justa, dinâmica e inclusiva.\n\nJuntos, podemos transformar desafios em oportunidades e fazer da nossa experiência estudantil um caminho de crescimento, aprendizagem e sucesso.\n\nSejam muito bem-vindos e contem connosco!",
};

const jobPostings = [
  {
    department: "Technology",
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
  {
    department: "Marketing",
    positions: [
      {
        title: "Digital Marketing Specialist",
        description:
          "Join our marketing team to develop, implement, and manage marketing campaigns that promote our association and its products. You will play a major role in enhancing brand awareness within the digital space as well as driving website traffic and acquiring leads/customers.",
        applyLink: "https://forms.gle/your-google-form-link",
      },
    ],
  },
  {
    department: "Human Resources",
    positions: [
      {
        title: "HR Coordinator",
        description:
          "We are looking for an efficient Human Resources (HR) Coordinator to undertake a variety of HR administrative duties. You will facilitate daily HR functions like keeping track of employees records and supporting the interview process. Your role involves performing tasks with a focus to grow our company’s talent pipeline and improve our sourcing tactics.",
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
