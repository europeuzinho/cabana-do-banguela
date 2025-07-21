
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle, Mail, MapPin, Phone, Star, Shield, Utensils, Users, MessageCircle, Instagram } from "lucide-react";
import { Gallery } from "@/components/gallery";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const phoneNumber = "5545998441759";
const baseWhatsAppUrl = `https://wa.me/${phoneNumber}?text=`;

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-14 items-center">
      <Link href="/" className="flex items-center gap-2 font-bold text-primary">
        <Image src="https://www.pngall.com/wp-content/uploads/8/How-To-Train-Your-Dragon-Toothless.png" alt="Logo Banguela" width={24} height={24} className="h-6 w-6" />
        <span className="font-headline text-xl">Cabana do Banguela</span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-6 text-sm font-medium">
        <Link href="#features" className="text-foreground/60 transition-colors hover:text-foreground/80">Diferenciais</Link>
        <Link href="#gallery" className="text-foreground/60 transition-colors hover:text-foreground/80">Galeria</Link>
        <Link href="#packages" className="text-foreground/60 transition-colors hover:text-foreground/80">Pacotes</Link>
        <Link href="#testimonials" className="text-foreground/60 transition-colors hover:text-foreground/80">Depoimentos</Link>
        <Link href="#contact" className="text-foreground/60 transition-colors hover:text-foreground/80">Contato</Link>
      </nav>
      <Button asChild className="ml-4 hidden bg-accent hover:bg-accent/90 text-accent-foreground md:flex">
        <a href={`${baseWhatsAppUrl}${encodeURIComponent("Olá! Tenho interesse em reservar uma festa.")}`} target="_blank" rel="noopener noreferrer">Reserve Agora</a>
      </Button>
    </div>
  </header>
);

const HeroSection = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.7;
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
    <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center text-center overflow-hidden">
      <Image
        src="https://i.imgur.com/SnvAEUK.jpeg"
        alt="Local decorado com o tema Como Treinar o Seu Dragão"
        fill
        className="object-cover brightness-50"
        style={{ opacity }}
        data-ai-hint="fantasy dragon landscape"
        priority
      />
      <div className="relative z-10 text-white flex flex-col items-center" style={{ opacity }}>
        <p className="text-xl md:text-2xl font-body mb-2">Bem-vindo à Aventura Viking Definitiva</p>
        <h1 className="font-headline text-5xl md:text-7xl text-primary">Cabana do Banguela</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-white">Onde festas de aniversário se tornam lendas.</p>
        <div className="mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#packages">Ver Pacotes de Festa</Link>
            </Button>
        </div>
      </div>
    </section>
  );
};


const features = [
  { title: "Decoração Imersiva", description: "Transformamos nosso espaço na Ilha de Berk, com detalhes que encantam.", icon: <Shield className="h-8 w-8 text-primary" /> },
  { title: "Buffet Completo", description: "Delícias temáticas para vikings de todas as idades, com opções variadas.", icon: <Utensils className="h-8 w-8 text-primary" /> },
  { title: "Equipe Especializada", description: "Nossa equipe garante que sua festa seja perfeita do início ao fim.", icon: <Users className="h-8 w-8 text-primary" /> },
];

const FeaturesSection = () => (
  <section id="features" className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center p-6">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="font-headline text-2xl mb-2">{feature.title}</h3>
            <p className="text-foreground/80">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const galleryImages = [
  { src: "https://i.imgur.com/IL8qWDj.jpeg", alt: "Decoração de parede com escudos Vikings", hint: "viking shields decoration" },
  { src: "https://i.imgur.com/0WW80lS.jpeg", alt: "Mesas de jantar com centros de mesa temáticos de dragão", hint: "fantasy banquet" },
  { src: "https://i.imgur.com/pqSKARY.jpeg", alt: "Mesa de bolo temática do Banguela", hint: "dragon cake" },
  { src: "https://i.imgur.com/C9InKMu.jpeg", alt: "Área de caça aos ovos de dragão no jardim", hint: "mystical forest" },
  { src: "https://i.imgur.com/hFtZkDj.jpeg", alt: "Cabine de fotos de navio Viking", hint: "viking ship" },
  { src: "https://i.imgur.com/3UTNK3u.jpeg", alt: "Área de festa iluminada com luzes de fada e lanternas", hint: "magical lights" },
];

const VenueShowcaseSection = () => (
  <section id="gallery" className="py-16 md:py-24 bg-primary/5">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-5xl text-primary">Explore a Cabana</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Cada canto do nosso espaço é pensado para uma imersão completa no mundo dos dragões.
        </p>
      </div>
      <Gallery images={galleryImages} />
    </div>
  </section>
);

const packages = [
  {
    id: "furia-da-luz",
    title: "Fúria da Luz",
    price: "Consulte",
    description: "Uma aventura fantástica com tudo que você precisa para uma ótima festa.",
    isFeatured: false,
    inclusions: [
      "3 horas e 30 minutos de festa",
      "Buffet completo (Salgados, Doces e Bebidas)",
      "Bolo da Sodiê Doces",
      "Decoração tradicional completa",
      "1 recepcionista, 2 monitores e garçons"
    ],
    pricing: {
        title: "Preços por Convidado",
        items: [
            "20 pessoas: R$ 3.000,00",
            "30 pessoas: R$ 3.700,00",
            "40 pessoas: R$ 4.400,00",
            "50 pessoas: R$ 5.100,00"
        ]
    },
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
    id: "furia-da-noite",
    title: "Fúria da Noite",
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
    pricing: {
        title: "Preços por Convidado",
        items: [
            "20 pessoas: R$ 4.000,00",
            "30 pessoas: R$ 4.700,00",
            "40 pessoas: R$ 5.500,00",
            "50 pessoas: R$ 6.300,00"
        ]
    },
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
    <section id="packages" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-5xl text-primary">Nossas Aventuras Lendárias</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Escolha o pacote ideal para forjar memórias inesquecíveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
            {packages.map(pkg => (
                <Card 
                    key={pkg.id} 
                    className={`flex flex-col h-full ${pkg.isFeatured ? 'border-2 border-primary' : ''}`}
                >
                    <CardHeader className="text-center">
                        <div className="flex justify-center items-center gap-2">
                           {pkg.isFeatured && <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />}
                           <CardTitle className="font-headline text-2xl md:text-3xl">{pkg.title}</CardTitle>
                           {pkg.isFeatured && <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />}
                        </div>
                       <CardDescription>{pkg.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col gap-8 p-6 md:p-8">
                      {/* Seção de Preços e Inclusões */}
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-lg text-foreground mb-3">{pkg.pricing.title}</h4>
                          <ul className="text-foreground/80 space-y-2">
                              {pkg.pricing.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex justify-between border-b border-dashed pb-1">
                                    <span>{item.split(':')[0]}</span>
                                    <span className="font-medium">{item.split(':')[1]}</span>
                                  </li>
                              ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-foreground mb-3">Principais Inclusões</h4>
                          <ul className="space-y-2 text-sm text-foreground/80">
                            {pkg.inclusions.map((item, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Seção de Detalhes Completos */}
                      <div className="space-y-6">
                        {pkg.details.map((section, index) => (
                          <div key={index}>
                              <h4 className="font-semibold text-foreground mb-2 border-b pb-1 text-lg">{section.title}</h4>
                              <ul className="list-disc list-inside space-y-1 text-foreground/80 pl-2 text-sm">
                                  {section.items.map((item, itemIndex) => (
                                      <li key={itemIndex}>{item}</li>
                                  ))}
                              </ul>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full" size="lg">
                        <a href={`${baseWhatsAppUrl}${encodeURIComponent(`Olá! Tenho interesse no pacote ${pkg.title}. Gostaria de mais informações.`)}`} target="_blank" rel="noopener noreferrer">
                            Reserve este pacote
                        </a>
                      </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );

const testimonials = [
  { name: "Ana S.", quote: "A melhor festa de aniversário que meu filho já teve! A atenção aos detalhes foi incrível e a equipe foi muito atenciosa. Super recomendo!" },
  { name: "João P.", quote: "O buffet estava delicioso e a decoração deixou todos de queixo caído. Um lugar mágico que com certeza voltaremos a visitar!" },
  { name: "Carlos M.", quote: "Serviço impecável do início ao fim. As crianças se divertiram muito com os monitores e o espaço é perfeito para os pais relaxarem. Nota 10!" },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-16 md:py-24 bg-primary/5">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-5xl text-primary">Contos dos Nossos Vikings</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Ouça o que nossos convidados têm a dizer sobre suas aventuras lendárias.
        </p>
      </div>
      <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card className="p-6 bg-background">
                <CardContent className="flex flex-col items-center text-center">
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="h-5 w-5" />)}
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
    question: "O que está incluso nos pacotes de festa?",
    answer: "Nossos pacotes incluem decoração temática, buffet completo com salgados, doces e bebidas, bolo, e equipe de suporte. O pacote Fúria da Noite oferece um buffet premium e decoração de luxo. Veja todos os detalhes na seção de pacotes!"
  },
  {
    question: "Qual a duração da festa e qual o valor da hora adicional?",
    answer: "A festa tem duração de 3 horas e 30 minutos. Caso deseje estender a celebração, o valor da hora adicional é de R$ 250,00."
  },
  {
    question: "Como funciona a cobrança para crianças e convidados extras?",
    answer: "Crianças a partir de 5 anos contam como pagantes, com exceção do aniversariante. O valor do convidado adicional varia se for informado com antecedência ou no dia da festa. Consulte os detalhes nos pacotes."
  },
  {
    question: "Posso levar minha própria bebida, como chopp?",
    answer: "Sim! Você pode trazer seu próprio chopp sem nenhuma taxa de serviço adicional. Apenas pedimos que o barril seja retirado até as 11h do dia seguinte ao evento."
  },
  {
    question: "Qual a capacidade máxima do local?",
    answer: "Nossa cabana comporta confortavelmente até 50 convidados, incluindo crianças e adultos, garantindo uma experiência imersiva e segura para todos."
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
  { icon: <Phone className="h-6 w-6 text-primary" />, title: "Ligue para Nós", value: "+55 (45) 9 9844-1759" },
  { icon: <Mail className="h-6 w-6 text-primary" />, title: "Envie um Email", value: "Camilakoval14@outlook.com" },
  { icon: <Instagram className="h-6 w-6 text-primary" />, title: "Siga-nos", value: "@cabanadobanguela" },
  { icon: <MapPin className="h-6 w-6 text-primary" />, title: "Encontre-nos", value: "Rua Fortaleza, 729 - Centro, Cascavel - PR" },
];

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24 bg-primary/5">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-5xl text-primary">Reserve Sua Festa Lendária</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Entre em contato para começar a planejar seu evento!
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info) => (
              <div key={info.title} className="flex flex-col items-center text-center gap-4 p-4">
                <div className="flex-shrink-0">{info.icon}</div>
                <div>
                  <h3 className="font-headline text-xl text-primary">{info.title}</h3>
                  <p className="text-foreground/80 text-lg">{info.value}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="mt-12 text-center">
             <Button asChild size="lg">
                <a href={`${baseWhatsAppUrl}${encodeURIComponent("Olá! Gostaria de saber mais sobre os pacotes de festa.")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Fale Conosco no WhatsApp
                </a>
            </Button>
        </div>
      </div>
    </div>
  </section>
);


const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <title>Behance</title>
    <path d="M22.539 8.242H15V6.016h7.078a.461.461 0 0 1 .461.461v1.304a.461.461 0 0 1-.461.461zM8.984 17.656h5.813a3.07 3.07 0 0 0 2.5-1.078 3.323 3.323 0 0 0 .813-2.39a3.323 3.323 0 0 0-.813-2.391 3.07 3.07 0 0 0-2.5-1.078H8.984zm.484-6.328h4.688a1.865 1.865 0 0 1 1.484.586 2.015 2.015 0 0 1 .586 1.484 2.016 2.016 0 0 1-.586 1.485 1.865 1.865 0 0 1-1.484.586H9.468zM15.938 12.875h-7v4.78h6.125a2.062 2.062 0 0 0 1.547-.64 2.12 2.12 0 0 0 .625-1.547 2.15 2.15 0 0 0-.625-1.547 2.062 2.062 0 0 0-1.547-.641zM0 12.016C0 5.375 5.375 0 12 0s12 5.375 12 12.016c0 6.64-5.375 12.015-12 12.015S0 18.656 0 12.016zm1.125 0c0 6.015 4.875 10.89 10.875 10.89s10.875-4.875 10.875-10.89c0-6.016-4.875-10.89-10.875-10.89S1.125 6.001 1.125 12.016z" />
  </svg>
);

const Footer = () => (
    <footer className="bg-background border-t">
        <div className="container py-6 flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2">
                <Image src="https://www.pngall.com/wp-content/uploads/8/How-To-Train-Your-Dragon-Toothless.png" alt="Logo Banguela" width={24} height={24} className="h-6 w-6" />
                <span className="font-headline text-lg">Cabana do Banguela</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <p className="text-sm text-foreground/70 text-center">
                    © {new Date().getFullYear()} Todos os direitos reservados.
                </p>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <span>Desenvolvido por:</span>
                  <a href="https://www.behance.net/europeudesigner" target="_blank" rel="noopener noreferrer" aria-label="Behance Profile" className="text-foreground/70 hover:text-primary transition-colors">
                      <BehanceIcon className="h-5 w-5" />
                  </a>
                </div>
            </div>
        </div>
    </footer>
);


const WhatsAppButton = () => (
    <a 
        href={`${baseWhatsAppUrl}${encodeURIComponent("Olá! Tenho interesse nos pacotes da Cabana do Banguela.")}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 flex items-center gap-2"
        aria-label="Fale conosco no WhatsApp"
    >
        <MessageCircle className="h-6 w-6" />
    </a>
);


export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <VenueShowcaseSection />
        <PackagesSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
