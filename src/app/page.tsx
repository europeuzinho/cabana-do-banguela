
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle, Mail, MapPin, Phone, Star } from "lucide-react";
import { DragonIcon, VikingHelmIcon } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
import { Gallery } from "@/components/gallery";

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-14 items-center">
      <Link href="/" className="flex items-center gap-2 font-bold text-primary">
        <DragonIcon className="h-6 w-6" />
        <span className="font-headline text-xl">Cabana do Banguela</span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-6 text-sm font-medium">
        <Link href="#gallery" className="text-foreground/60 transition-colors hover:text-foreground/80">Galeria</Link>
        <Link href="#setups" className="text-foreground/60 transition-colors hover:text-foreground/80">Opções</Link>
        <Link href="#packages" className="text-foreground/60 transition-colors hover:text-foreground/80">Pacotes</Link>
        <Link href="#testimonials" className="text-foreground/60 transition-colors hover:text-foreground/80">Depoimentos</Link>
        <Link href="#contact" className="text-foreground/60 transition-colors hover:text-foreground/80">Contato</Link>
      </nav>
      <Button asChild className="ml-4 hidden bg-accent hover:bg-accent/90 text-accent-foreground md:flex">
        <Link href="#contact">Reserve Agora</Link>
      </Button>
    </div>
  </header>
);

const HeroSection = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.6;
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollY / (heroHeight / 1.5));
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative h-[40vh] md:h-[60vh] w-full flex items-center justify-center text-center">
      <Image
        src="https://i.imgur.com/SnvAEUK.jpeg"
        alt="Local decorado com o tema Como Treinar o Seu Dragão"
        fill
        className="object-cover brightness-50"
        style={{ opacity }}
        data-ai-hint="fantasy dragon landscape"
        priority
      />
      <div className="relative z-10 text-white flex flex-col items-center pt-32 md:pt-48" style={{ opacity }}>
        <p className="text-xl md:text-2xl font-body mb-2">Seja bem-vindo ao</p>
        <h1 className="font-headline text-5xl md:text-7xl text-primary">Cabana do Banguela</h1>
        <div className="w-[40rem] h-[40rem] relative">
          <Image
            src="https://static.wikia.nocookie.net/comotreinarseudragao/images/1/11/ToothlessHttyd2Remder.png/revision/latest?cb=20180531200115&path-prefix=pt-br"
            alt="Dragão Banguela"
            fill
            className="object-contain"
            data-ai-hint="dragon character"
          />
        </div>
      </div>
    </section>
  );
};

const galleryImages = [
  { src: "https://i.imgur.com/IL8qWDj.jpeg", alt: "Decoração de parede com escudos Vikings", hint: "viking shields decoration" },
  { src: "https://i.imgur.com/0WW80lS.jpeg", alt: "Mesas de jantar com centros de mesa temáticos de dragão", hint: "fantasy banquet" },
  { src: "https://i.imgur.com/pqSKARY.jpeg", alt: "Mesa de bolo temática do Banguela", hint: "dragon cake" },
  { src: "https://i.imgur.com/C9InKMu.jpeg", alt: "Área de caça aos ovos de dragão no jardim", hint: "mystical forest" },
  { src: "https://i.imgur.com/hFtZkDj.jpeg", alt: "Cabine de fotos de navio Viking", hint: "viking ship" },
  { src: "https://i.imgur.com/3UTNK3u.jpeg", alt: "Área de festa iluminada com luzes de fada e lanternas", hint: "magical lights" },
];

const VenueShowcaseSection = () => (
  <section id="gallery" className="py-16 md:py-24 container">
    <div className="text-center mb-12">
      <h2 className="font-headline text-3xl md:text-5xl text-primary">A Cabana do Banguela</h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
        Explore nosso local, totalmente transformado na mítica Ilha de Berk.
      </p>
    </div>
    <Gallery images={galleryImages} />
  </section>
);

const setups = [
  { title: "Festas de Aniversário", description: "A melhor experiência de aniversário para cavaleiros de dragões com jogos, decorações e um presente especial para o Viking aniversariante.", hint: "birthday party", icon: <VikingHelmIcon /> },
  { title: "Banquetes Temáticos", description: "Um grande banquete digno de um chefe, com uma refeição completa e decorações imersivas do 'Grande Salão'.", hint: "medieval feast", icon: <DragonIcon /> },
];

const CategorizedSetupsSection = () => (
  <section id="setups" className="py-16 md:py-24 bg-primary/5">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-5xl text-primary">Opções de Festa para Cada Viking</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          De aniversários a grandes banquetes, temos a opção perfeita para sua celebração.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {setups.map((setup) => (
          <Card key={setup.title} className="text-center flex flex-col items-center">
            <CardHeader>
              <div className="mx-auto bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center">
                <div className="w-8 h-8">{setup.icon}</div>
              </div>
              <CardTitle className="font-headline pt-4">{setup.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{setup.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const packages = [
  {
    title: "Prata Completo",
    price: "Consulte",
    description: "Uma aventura fantástica com tudo o que você precisa para uma ótima festa.",
    isFeatured: false,
    inclusions: [
      "3 horas e 30 minutos de festa",
      "Buffet completo (Salgados, Doces e Bebidas)",
      "Bolo da Sodiê Doces",
      "Decoração tradicional completa",
      "1 recepcionista, 2 monitores e garçons"
    ],
    details: [
        { 
            title: "Buffet", 
            items: [
                "Salgados fritos, assados e folhados", "Pipoca", "Bolinha de queijo", "Travesseiro de pizza", "Pastelzinho de carne", "Enroladinho de salsicha ou Kibe", "Mini empada de palmito", "Folhado de frango"
            ] 
        },
        { 
            title: "Docinhos", 
            items: [
                "Brigadeiro, brigadeiro power, beijinho e casadinho"
            ] 
        },
        { title: "Bolo", items: ["Bolo da SODIE DOCES (verificar sabores)"] },
        { 
            title: "Bebidas", 
            items: [
                "Coca-cola, Guaraná, Coca-cola Zero", "Água natural, Suco de uva"
            ] 
        },
        { 
            title: "Preços por Convidado", 
            items: [
                "20 pessoas: R$ 3.000,00", "30 pessoas: R$ 3.700,00", "40 pessoas: R$ 4.400,00", "50 pessoas: R$ 5.100,00"
            ] 
        },
        { title: "Equipe", items: ["1 recepcionista, 2 monitores, 2 garçons a cada 20 convidados."] },
        { 
            title: "Decoração", 
            items: [
                "Decoração tradicional com painel de fundo em tecido", "Bolo cenográfico (conforme disponibilidade)", "04 suportes com balões simples", "Toalhas de mesa e arranjos em MDF", "Hall de entrada com estantes, aparador e baú para presentes"
            ] 
        },
        { 
            title: "Observações", 
            items: [
                "Duração da festa: 3 horas e 30 minutos.", "Hora adicional: R$ 250,00.", "Convidado adicional (até 10 dias antes): R$ 30,00.", "Convidado adicional (no dia): R$ 60,00.", "Crianças a partir de 5 anos pagam (exceto aniversariante).", "Cliente pode trazer chopp sem taxa de serviço (retirar até 11h do dia seguinte)."
            ] 
        }
    ]
  },
  {
    title: "Ouro Completo",
    price: "Consulte",
    description: "A experiência definitiva da Cabana do Banguela para uma celebração inesquecível.",
    isFeatured: true,
    inclusions: [
      "3 horas e 30 minutos de festa",
      "Buffet Premium com mais variedades",
      "Decoração temática de luxo personalizada",
      "Equipe completa com 1 recepcionista e 2 monitores",
      "Lembrancinhas personalizadas",
    ],
    details: [
        { 
            title: "Buffet", 
            items: [
                "Salgados fritos, assados, e folhados", "Pipoca", "Bolinha de queijo", "Travesseiro de pizza", "Pastelzinho de carne", "Enroladinho de salsicha", "Kibe", "Mini empada de palmito", "Mini empada de frango", "Folhado de frango", "Mini pizza", "Mini cachorro quente", "Batata frita"
            ] 
        },
        { 
            title: "Docinhos", 
            items: [
                "Brigadeiro, brigadeiro power, beijinho, casadinho", "Carolina, churros médio, brigadeiro ninho com nutella"
            ] 
        },
        { title: "Bolo", items: ["Bolo da SODIE DOCES (verificar sabores)"] },
        { 
            title: "Bebidas", 
            items: [
                "Coca-cola, Guaraná, Coca-cola Zero", "Água natural, Suco de uva, Suco de laranja"
            ] 
        },
        { 
            title: "Preços por Convidado", 
            items: [
                "20 pessoas: R$ 4.000,00", "30 pessoas: R$ 4.700,00", "40 pessoas: R$ 5.500,00", "50 pessoas: R$ 6.300,00"
            ] 
        },
        { title: "Equipe", items: ["1 recepcionista, 2 monitores, 2 garçons a cada 20 convidados."] },
        { 
            title: "Decoração", 
            items: [
                "Decoração luxo com painel de fundo em tecido", "Bolo cenográfico (conforme disponibilidade)", "Balões duplos/desconstruídos", "Tags personalizadas para os doces e forminhas trabalhadas", "Arranjos de mesa com balões duplos", "Souplat de MDF, guardanapos de tecido e amarradores personalizados", "Hall de entrada decorado e personalizado no tema"
            ] 
        },
        { 
            title: "Observações", 
            items: [
                "Duração da festa: 3 horas e 30 minutos.", "Hora adicional: R$ 250,00.", "Convidado adicional (até 10 dias antes): R$ 30,00.", "Convidado adicional (no dia): R$ 60,00.", "Crianças a partir de 5 anos pagam (exceto aniversariante).", "Cliente pode trazer chopp sem taxa de serviço (retirar até 11h do dia seguinte)."
            ] 
        }
    ]
  }
];

const PackagesSection = () => (
  <section id="packages" className="py-16 md:py-24">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-5xl text-primary">Nossas Aventuras Completas</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Oferecemos pacotes para tornar sua festa temática de dragão verdadeiramente lendária.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <Card key={pkg.title} className={`flex flex-col h-full ${pkg.isFeatured ? 'border-primary border-2 shadow-lg relative' : ''}`}>
            {pkg.isFeatured && (
              <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-full">Mais Popular</div>
            )}
            <CardHeader className="text-center pt-8">
              <CardTitle className="font-headline text-2xl">{pkg.title}</CardTitle>
              <CardDescription>{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <p className="text-center text-4xl font-bold font-headline text-primary">{pkg.price}</p>
              <ul className="space-y-2 text-sm text-foreground/80">
                {pkg.inclusions.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex-col gap-2 !p-0">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b-0">
                        <AccordionTrigger className="w-full border-t border-b hover:no-underline justify-center py-3">
                            Ver todos os detalhes
                        </AccordionTrigger>
                        <AccordionContent className="p-6 pt-4">
                            <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-4">
                                {pkg.details.map((section, index) => (
                                    <div key={index}>
                                        <h4 className="font-semibold text-foreground mb-2 border-b pb-1">{section.title}</h4>
                                        <ul className="list-disc list-inside space-y-1 text-foreground/80 pl-4 text-sm">
                                            {section.items.map((item, itemIndex) => (
                                                <li key={itemIndex}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className="p-6 pt-0 w-full">
                    <Button asChild className="w-full">
                        <Link href="#contact">Reserve este pacote</Link>
                    </Button>
                </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const testimonials = [
  { name: "Astrid H.", quote: "A melhor festa de aniversário que meu filho já teve! A atenção aos detalhes foi incrível, parecia que estávamos em Berk. Super recomendo!" },
  { name: "Stoick V.", quote: "Um banquete verdadeiramente grandioso! A equipe foi incrível e o local era perfeito. Voltaremos no próximo ano, com certeza. Digno de um chefe!" },
  { name: "Gobber B.", quote: "Já vi muitas festas na minha vida, mas esta supera todas! Ou melhor, a carne de carneiro. O percurso de treinamento de dragão foi um toque brilhante!" },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-16 md:py-24 bg-primary/5">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-5xl text-primary">Contos dos Nossos Vikings</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Ouça o que nossos convidados têm a dizer sobre suas aventuras.
        </p>
      </div>
      <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card className="p-6">
                <CardContent className="flex flex-col items-center text-center">
                  <div className="flex gap-1 text-accent mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}
                  </div>
                  <p className="text-lg italic text-foreground/90">"{testimonial.quote}"</p>
                  <p className="font-bold mt-4 text-primary">- {testimonial.name}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
);

const faqItems = [
  {
    question: "O que está incluso no pacote de festa?",
    answer: "Nossos pacotes incluem decoração temática completa, atividades e jogos de dragão, um anfitrião viking dedicado, buffet completo e lembrancinhas para os convidados. Veja os detalhes de cada pacote para mais informações!"
  },
  {
    question: "Qual a capacidade máxima do local?",
    answer: "Nossa cabana comporta confortavelmente até 50 convidados, incluindo crianças e adultos, garantindo uma experiência imersiva e segura para todos."
  },
  {
    question: "Posso personalizar a decoração ou as atividades?",
    answer: "Sim! Adoramos tornar cada festa única. Entre em contato conosco para discutir suas ideias de personalização para decorações, atividades ou até mesmo no cardápio do banquete."
  },
  {
    question: "O que preciso levar?",
    answer: "Absolutamente nada! Nossos pacotes são completos e incluem comida, bebida, decoração e entretenimento. Apenas traga seus convidados e a vontade de se aventurar!"
  },
];

const FaqSection = () => (
  <section id="faq" className="py-16 md:py-24">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-5xl text-primary">Perguntas Frequentes</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Tire suas dúvidas sobre nossas aventuras vikings.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
            <AccordionContent>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

const contactInfo = [
  { icon: <Phone className="h-6 w-6 text-accent" />, title: "Ligue para Nós", value: "+55 (45) 9 9844-1759" },
  { icon: <Mail className="h-6 w-6 text-accent" />, title: "Envie um Email", value: "Camilakoval14@outlook.com" },
  { icon: <MapPin className="h-6 w-6 text-accent" />, title: "Encontre-nos", value: "Rua Fortaleza, 729 - Centro, Cascavel - PR" },
];

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24 bg-primary/5">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-5xl text-primary">Reserve Sua Festa Lendária</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Envie um correio-terror ou use o formulário abaixo para começar a planejar seu evento.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          {contactInfo.map((info) => (
            <div key={info.title} className="flex items-start gap-4">
              <div className="flex-shrink-0">{info.icon}</div>
              <div>
                <h3 className="font-headline text-2xl text-primary">{info.title}</h3>
                <p className="text-foreground/80 text-xl">{info.value}</p>
              </div>
            </div>
          ))}
        </div>
        <Card className="p-6 md:p-8">
          <ContactForm />
        </Card>
      </div>
    </div>
  </section>
);

const Footer = () => (
    <footer className="bg-primary text-primary-foreground relative pt-8 pb-8">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <VikingHelmIcon className="h-6 w-6" />
            <span className="font-headline text-lg">Cabana do Banguela &copy; {new Date().getFullYear()}</span>
          </div>
          <p className="text-sm text-primary-foreground/70 mt-2">
            Torne-se uma lenda. Reserve sua festa hoje.
          </p>
        </div>
      </div>
      <div className="absolute -bottom-3 -right-8 md:right-4 w-48 h-auto pointer-events-none">
         <Image
          src="https://static.wikia.nocookie.net/comotreinarseudragao/images/1/11/ToothlessHttyd2Remder.png/revision/latest?cb=20180531200115&path-prefix=pt-br"
          alt="Dragão Banguela"
          width={250}
          height={250}
          className="w-full h-auto object-contain"
          data-ai-hint="dragon character"
        />
      </div>
    </footer>
  );

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <VenueShowcaseSection />
        <CategorizedSetupsSection />
        <PackagesSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
