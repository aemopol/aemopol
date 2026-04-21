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

// --- Types ---
type Position = {
  title: string;
  description?: string;
  applyLink?: string;
};

type Department = {
  department: string;
  departmentDescription: string;
  departmentApplyLink?: string;
  positions: Position[];
};

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

const jobPostings: Department[] = [
  {
    department: "Comítê de Auditoria Interna",
    departmentDescription:
      "O Comítê de Auditoria Interna é um órgão independente de supervisão, responsável por assegurar a transparência, integridade e conformidade na gestão financeira e administrativa da Associação. " +
      "Atua como um mecanismo de controlo interno, promovendo boas práticas de governação, responsabilidade e prestação de contas.\n\n" +
      "📋 Principais funções:\n" +
      "• Realizar auditorias financeiras periódicas, garantindo a exatidão, consistência e rastreabilidade das contas da Associação;\n" +
      "• Avaliar a eficiência, eficácia e conformidade dos processos financeiros e administrativos;\n" +
      "• Monitorizar o cumprimento de normas internas, regulamentos aplicáveis e boas práticas de gestão;\n" +
      "• Preparar relatórios de auditoria claros e estruturados, incluindo recomendações concretas para melhoria contínua;\n" +
      "• Efetuar reconciliações financeiras e validar a correspondência entre registos contabilísticos e fluxos reais;\n" +
      "• Identificar riscos financeiros e propor medidas preventivas e corretivas;\n" +
      "• Atuar com total independência face aos órgãos executivos, garantindo imparcialidade nas suas análises e decisões.\n\n" +
      "✅ Critérios para candidatura:\n" +
      "• Experiência prévia em auditoria, contabilidade ou áreas financeiras (preferencial);\n" +
      "• Formação académica em Finanças, Contabilidade, Fiscalidade, Gestão ou áreas relacionadas;\n" +
      "• Conhecimento de princípios de conformidade regulatória e boas práticas financeiras;\n" +
      "• Elevado sentido de ética, responsabilidade e confidencialidade;\n" +
      "• Capacidade de análise crítica, rigor técnico e atenção ao detalhe;\n" +
      "• Boa capacidade de comunicação escrita para elaboração de relatórios.\n\n" +
      "Posições abertas:\n" +
      "👤 Presidente\n" +
      "👤 Vice-Presidente\n" +
      "👤 Membro",
    departmentApplyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScu4Vka2K8IKnK9pFolPpCZlOKBLRqWghPA0BG1wGqyUwdQyw/viewform?usp=publish-editor",
    positions: [],
  },
  {
    department: "Assembleia Geral",
    departmentDescription:
      "A Assembleia Geral é o órgão máximo de deliberação da Associação de Moçambicanos na Polónia (AMOP), sendo composta por todos os membros no pleno gozo dos seus direitos. " +
      "Representa a expressão máxima da vontade coletiva da associação, assegurando a participação democrática, a transparência e a legitimidade das decisões tomadas.\n\n" +
      "Enquanto órgão soberano, a Assembleia Geral define as orientações estratégicas da AMOP e exerce funções de supervisão sobre os restantes órgãos sociais, " +
      "garantindo o alinhamento das suas atividades com os objetivos e valores da associação.\n\n" +
      "📋 Principais funções:\n" +
      "• Aprovar, rever e alterar os estatutos da associação;\n" +
      "• Eleger, avaliar e destituir os membros da Direção e demais órgãos sociais;\n" +
      "• Apreciar e aprovar os relatórios de atividades e contas apresentados pela Direção;\n" +
      "• Deliberar sobre matérias estratégicas e decisões de grande relevância para a associação;\n" +
      "• Aprovar planos de atividades, orçamentos e eventuais alterações estruturais;\n" +
      "• Garantir a participação ativa e democrática dos membros nos processos de decisão;\n" +
      "• Conduzir reuniões da Assembleia Geral de forma organizada e transparente;\n" +
      "• Elaborar e validar as atas das reuniões, assegurando o registo fiel das deliberações;\n" +
      "• Comunicar formalmente à Direção as decisões tomadas pela Assembleia Geral;\n" +
      "• Pronunciar-se sobre quaisquer outras matérias que lhe sejam submetidas nos termos dos estatutos.\n\n" +
      "✅ Critérios para candidatura:\n" +
      "• Ser membro ativo da AMOP;\n" +
      "• Demonstrar elevado sentido de responsabilidade, imparcialidade e compromisso institucional;\n" +
      "• Capacidade de condução de reuniões de forma organizada, estruturada e eficiente (no caso do Presidente);\n" +
      "• Boa capacidade de organização, redação e gestão documental (no caso do Secretário);\n" +
      "• Boa comunicação institucional e atenção ao detalhe.\n\n" +
      "Posições abertas:\n" +
      "👤 Presidente\n" +
      "👤 Secretário",
    departmentApplyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScu4Vka2K8IKnK9pFolPpCZlOKBLRqWghPA0BG1wGqyUwdQyw/viewform?usp=publish-editor",
    positions: [],
  },
  {
    department: "Departamento de Eventos & Comunidade",
    departmentDescription:
      "O Departamento de Eventos & Comunidade é responsável pelo planeamento, organização e execução das atividades da Associação de Moçambicanos na Polónia (AMOP), " +
      "promovendo o envolvimento ativo dos membros e o fortalecimento do espírito comunitário.\n\n" +
      "Este departamento desempenha um papel central na dinamização da associação, contribuindo para a valorização da cultura moçambicana, " +
      "a criação de laços entre os membros e o crescimento sustentável da AMOP.\n\n" +
      "📋 Principais funções:\n" +
      "• Planear, organizar e executar eventos e atividades da associação;\n" +
      "• Gerir a logística e operação dos eventos (espaços, materiais, cronogramas, equipas);\n" +
      "• Promover o envolvimento e participação ativa da comunidade nas iniciativas da AMOP;\n" +
      "• Criar experiências que reforcem o sentido de pertença e união entre os membros;\n" +
      "• Colaborar com outros departamentos na divulgação e implementação de atividades;\n" +
      "• Avaliar o impacto dos eventos e propor melhorias contínuas;\n" +
      "• Contribuir para a valorização e promoção da cultura moçambicana.\n\n" +
      "✅ Critérios para candidatura:\n" +
      "• Sentido de responsabilidade e boa capacidade de organização;\n" +
      "• Cumprimento de prazos e capacidade de gestão de tarefas;\n" +
      "• Proatividade e disponibilidade para participação ativa nas atividades;\n" +
      "• Capacidade de trabalho em equipa e colaboração;\n" +
      "• Compromisso com a missão e valores da AMOP;\n" +
      "• Boa comunicação e espírito de iniciativa;\n" +
      "• Disponibilidade mínima para participação em eventos da associação.\n\n" +
      "⭐ Competências valorizadas (não obrigatórias):\n" +
      "• Experiência na organização de eventos ou atividades comunitárias;\n" +
      "• Participação prévia em voluntariado ou associações;\n" +
      "• Criatividade na conceção de atividades e iniciativas;\n" +
      "• Capacidade de propor ideias inovadoras e agir com autonomia.\n\n" +
      "Posições abertas:\n" +
      "👤 Chefe de Departamento\n" +
      "👤 Membro\n" +
      "👤 Membro\n" +
      "👤 Membro\n" +
      "👤 Membro",
    departmentApplyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSc-URmuc9KNvl3z0IMBwfH31AJ0_FyCFmSEX5l9gC2xvK0fmw/viewform?usp=publish-editor",
    positions: [],
  },
  {
    department: "Departamento de Marketing & Comunicação",
    departmentDescription:
      "O Departamento de Marketing e Comunicação é responsável pela gestão da comunicação institucional da Associação de Moçambicanos na Polónia (AMOP), " +
      "assegurando a divulgação eficaz das suas atividades, a promoção da sua imagem pública e o fortalecimento do seu posicionamento junto da comunidade.\n\n" +
      "Este departamento desempenha um papel estratégico na ligação entre a associação e os seus membros, parceiros e o público em geral, " +
      "garantindo uma comunicação clara, consistente e alinhada com os valores da AMOP.\n\n" +
      "📋 Principais funções:\n" +
      "• Desenvolver e implementar estratégias de comunicação e marketing da associação;\n" +
      "• Criar conteúdos para redes sociais e outros canais de comunicação;\n" +
      "• Divulgar eventos, iniciativas e atividades promovidas pela AMOP;\n" +
      "• Planear e executar campanhas de comunicação e engajamento;\n" +
      "• Garantir a consistência da identidade visual e institucional da associação;\n" +
      "• Gerir as redes sociais oficiais (ex.: Instagram, TikTok, entre outras);\n" +
      "• Produzir materiais promocionais (design gráfico, vídeos, textos institucionais);\n" +
      "• Apoiar outros departamentos na promoção das suas atividades e iniciativas;\n" +
      "• Monitorizar o alcance e impacto das ações de comunicação, propondo melhorias contínuas.\n\n" +
      "✅ Critérios para candidatura:\n" +
      "• Interesse por marketing, comunicação ou gestão de redes sociais;\n" +
      "• Pensamento criativo aliado a capacidade de planeamento estratégico;\n" +
      "• Boa capacidade de organização e cumprimento de prazos (deadlines);\n" +
      "• Capacidade de trabalho em equipa e colaboração interdepartamental;\n" +
      "• Sentido de responsabilidade, proatividade e compromisso institucional;\n" +
      "• Boa comunicação oral e escrita;\n" +
      "• Disponibilidade para participação ativa nas atividades da associação.\n\n" +
      "⭐ Competências valorizadas (não obrigatórias):\n" +
      "• Experiência na gestão de redes sociais (Instagram, TikTok, etc.);\n" +
      "• Conhecimentos de design gráfico (ex.: Canva, Adobe Photoshop);\n" +
      "• Experiência em edição de vídeo (ex.: CapCut ou similares);\n" +
      "• Capacidade de criação de conteúdos criativos e adaptados ao público-alvo.\n\n" +
      "Posições abertas:\n" +
      "👤 Chefe de Departamento\n" +
      "👤 Membro\n" +
      "👤 Membro\n" +
      "👤 Membro\n" +
      "👤 Membro",
    departmentApplyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSenj2rppVu9nNBOPcfr6fZHmwi14hS0Kv0yzKmin86nA9c9SQ/viewform?usp=publish-editor",
    positions: [],
  },
  {
    department: "Departamento de Parcerias & Relações Institucionais",
    departmentDescription:
      "O Departamento de Parcerias e Relações Institucionais desempenha um papel estratégico na Associação de Moçambicanos na Polónia (AMOP), " +
      "funcionando como a principal ponte entre a associação e entidades externas, incluindo instituições públicas, empresas, universidades, " +
      "organizações não-governamentais e outros parceiros relevantes.\n\n" +
      "Este departamento é responsável por fortalecer a presença institucional da AMOP, promover colaborações sustentáveis e criar oportunidades " +
      "que contribuam para o crescimento e impacto da associação.\n\n" +
      "📋 Principais funções:\n" +
      "• Identificar, desenvolver e estabelecer parcerias estratégicas com entidades externas;\n" +
      "• Gerir e manter relações institucionais com parceiros, assegurando comunicação contínua e profissional;\n" +
      "• Angariar apoios, patrocínios e colaborações para iniciativas da associação;\n" +
      "• Mapear oportunidades externas relevantes (eventos, financiamentos, colaborações, programas institucionais);\n" +
      "• Elaborar propostas institucionais, cartas de apresentação e documentos de parceria;\n" +
      "• Representar a associação em contextos institucionais, quando necessário;\n" +
      "• Colaborar com outros departamentos para alinhar parcerias com as atividades e objetivos da AMOP.\n\n" +
      "✅ Critérios para candidatura:\n" +
      "• Interesse na área de parcerias, relações institucionais ou desenvolvimento organizacional;\n" +
      "• Boa capacidade de comunicação oral e escrita;\n" +
      "• Pensamento estratégico e capacidade de identificação de oportunidades;\n" +
      "• Capacidade de trabalho em equipa e colaboração interdepartamental;\n" +
      "• Sentido de responsabilidade, proatividade e compromisso institucional.\n\n" +
      "⭐ Competências valorizadas (não obrigatórias):\n" +
      "• Experiência em organização de eventos;\n" +
      "• Participação prévia em associações, ONGs ou atividades comunitárias;\n" +
      "• Experiência em voluntariado ou contextos institucionais;\n" +
      "• Capacidade de negociação e relacionamento interpessoal.\n\n" +
      "Posições abertas:\n" +
      "👤 Chefe de Departamento\n" +
      "👤 Membro\n" +
      "👤 Membro\n" +
      "👤 Membro",
    departmentApplyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScu4Vka2K8IKnK9pFolPpCZlOKBLRqWghPA0BG1wGqyUwdQyw/viewform?usp=publish-editor",
    positions: [],
  },
  {
    department: "Departamento de Tecnologia",
    departmentDescription:
      "O Departamento de Tecnologia é responsável pelo suporte tecnológico e pela promoção da inovação na Associação de Moçambicanos na Polónia (AMOP), " +
      "assegurando o bom funcionamento das plataformas digitais e o desenvolvimento de soluções que apoiem as atividades da associação.\n\n" +
      "Este departamento desempenha um papel essencial na modernização dos processos internos, na melhoria da eficiência operacional e no suporte técnico às iniciativas da AMOP, " +
      "contribuindo para uma organização mais ágil, estruturada e orientada para o futuro.\n\n" +
      "📋 Principais funções:\n" +
      "• Gerir e manter as plataformas digitais da associação (website, formulários, ferramentas internas, etc.);\n" +
      "• Prestar suporte técnico durante eventos e atividades (equipamentos, apresentações, sistemas digitais);\n" +
      "• Desenvolver e implementar ferramentas internas que facilitem a gestão e organização da associação;\n" +
      "• Gerir, organizar e estruturar dados relevantes da AMOP de forma segura e eficiente;\n" +
      "• Identificar e implementar soluções tecnológicas que melhorem processos existentes;\n" +
      "• Apoiar outros departamentos na utilização de ferramentas digitais;\n" +
      "• Garantir boas práticas de organização, segurança e utilização de dados.\n\n" +
      "✅ Critérios para candidatura:\n" +
      "• Conhecimentos básicos a intermédios em desenvolvimento web (front-end e back-end);\n" +
      "• Capacidade de trabalhar com tecnologias como HTML, CSS, JavaScript e pelo menos uma linguagem back-end (ex.: Python, Node.js);\n" +
      "• Noções de bases de dados (ex.: SQL ou NoSQL) e organização de dados;\n" +
      "• Familiaridade com ferramentas digitais e plataformas online;\n" +
      "• Capacidade de resolução de problemas técnicos de forma autónoma;\n" +
      "• Interesse por tecnologia, inovação e melhoria contínua;\n" +
      "• Boa capacidade de organização e documentação de soluções;\n" +
      "• Capacidade de trabalho em equipa e comunicação com membros não técnicos.\n\n" +
      "⭐ Competências valorizadas (não obrigatórias):\n" +
      "• Experiência com frameworks (ex.: React, Django, Express ou similares);\n" +
      "• Conhecimentos básicos de Git e controlo de versões;\n" +
      "• Experiência com automação de tarefas e integrações (APIs);\n" +
      "• Familiaridade com ferramentas no-code/low-code (ex.: Airtable, Zapier, etc.);\n" +
      "• Experiência em projetos pessoais, académicos ou associativos na área tecnológica.\n\n" +
      "Posições abertas:\n" +
      "👤 Chefe de Departamento\n" +
      "👤 Membro",
    departmentApplyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfmIl9Ag0-fqoxkg-xRymHyStAms5J9epN4n7Kf_dbnjpTZrg/viewform?usp=publish-editor",
    positions: [],
  },
  {
    department: "Departamento Acadêmico",
    departmentDescription:
      "O Departamento Acadêmico é responsável pela representação, integração e apoio aos estudantes moçambicanos na Polónia, " +
      "assegurando que as suas necessidades, interesses e desafios são devidamente considerados no âmbito das atividades da Associação de Moçambicanos na Polónia (AMOP).\n\n" +
      "Este departamento atua como um elo de ligação entre os estudantes e a Direção da AMOP, promovendo a inclusão, o apoio mútuo e o desenvolvimento académico da comunidade estudantil.\n\n" +
      "📋 Principais funções:\n" +
      "• Representar os interesses dos estudantes junto da Direção da AMOP;\n" +
      "• Apoiar a integração de novos estudantes moçambicanos (acolhimento, orientação e acompanhamento inicial);\n" +
      "• Identificar necessidades, desafios e oportunidades no seio da comunidade estudantil;\n" +
      "• Promover iniciativas académicas (workshops, sessões informativas, partilha de experiências, etc.);\n" +
      "• Facilitar a comunicação entre os estudantes e os órgãos da associação;\n" +
      "• Colaborar com outros departamentos na organização de atividades relevantes para estudantes;\n" +
      "• Contribuir para o fortalecimento da rede de estudantes moçambicanos na Polónia.\n\n" +
      "✅ Critérios para candidatura:\n" +
      "• Ser estudante moçambicano residente na Polónia;\n" +
      "• Interesse em representação estudantil e envolvimento comunitário;\n" +
      "• Boa capacidade de comunicação e relacionamento interpessoal;\n" +
      "• Sentido de responsabilidade, proatividade e compromisso;\n" +
      "• Capacidade de trabalho em equipa;\n" +
      "• Disponibilidade para participação ativa nas atividades da associação.\n\n" +
      "⭐ Competências valorizadas (não obrigatórias):\n" +
      "• Experiência prévia em representação estudantil ou associações;\n" +
      "• Participação em atividades académicas, voluntariado ou iniciativas comunitárias;\n" +
      "• Capacidade de organização de eventos e iniciativas académicas;\n" +
      "• Espírito de liderança e iniciativa.\n\n" +
      "Posições abertas:\n" +
      "👤 Coordenador Acadêmico (Representante dos Estudantes) — membro eleito pelos estudantes através de processo eleitoral próprio\n" +
      "👤 Vice-Coordenador\n" +
      "👤 Membro\n" +
      "👤 Membro\n" +
      "👤 Membro",
    departmentApplyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScu4Vka2K8IKnK9pFolPpCZlOKBLRqWghPA0BG1wGqyUwdQyw/viewform?usp=publish-editor",
    positions: [],
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
        className="w-full sm:w-auto bg-gradient-to-r from-secondary via-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
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
                      {"description" in pos && pos.description && (
                        <p className="mt-2 text-xs sm:text-sm leading-relaxed whitespace-pre-line text-foreground/80">
                          {pos.description}
                        </p>
                      )}
                      {"applyLink" in pos && pos.applyLink && (
                        <Button
                          asChild
                          className="mt-3 sm:mt-4 w-full sm:w-auto bg-gradient-to-r from-secondary via-secondary/90 to-secondary/80 hover:from-secondary/90 hover:to-secondary text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                        >
                          <a href={pos.applyLink} target="_blank" rel="noopener noreferrer">
                            Submeta a sua candidatura
                          </a>
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
                {"departmentApplyLink" in dept && dept.departmentApplyLink && (
                  <div className="mt-4 sm:mt-6 flex justify-center">
                    <Button
                      asChild
                      className="w-full sm:w-auto bg-gradient-to-r from-secondary via-secondary/90 to-secondary/80 hover:from-secondary/90 hover:to-secondary text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                    >
                      <a href={dept.departmentApplyLink} target="_blank" rel="noopener noreferrer">
                        Submeta a sua candidatura
                      </a>
                    </Button>
                  </div>
                )}
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
