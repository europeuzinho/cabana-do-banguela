import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Mail, MapPin, Phone, Star } from "lucide-react";
import { DragonIcon, VikingHelmIcon } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";

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

const HeroSection = () => (
  <section className="relative h-[60vh] md:h-[80vh] w-full">
    <Image
      src="https://placehold.co/1600x900/172554/f97316.png"
      alt="Local decorado com o tema Como Treinar o Seu Dragão"
      fill
      objectFit="cover"
      className="brightness-50"
      data-ai-hint="fantasy dragon landscape"
      priority
    />
    <div className="absolute inset-0 z-[5] flex items-center justify-center pointer-events-none">
      <Image 
        src="https://placehold.co/800x600/00000000/png.png" 
        alt="Banguela"
        width={800}
        height={600}
        className="w-1/2 h-auto object-contain opacity-40"
        data-ai-hint="toothless dragon"
      />
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
      <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl drop-shadow-lg">
        Sua Aventura com Dragões te Espera
      </h1>
      <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90">
        Celebre em um mundo de Vikings e dragões! Festas temáticas inesquecíveis em nosso local exclusivo.
      </p>
      <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
        <Link href="#packages">Explore os Pacotes</Link>
      </Button>
    </div>
  </section>
);

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Salão principal decorado como o Grande Salão de Berk", hint: "viking hall interior" },
  { src: "https://placehold.co/600x400.png", alt: "Mesas de jantar com centros de mesa temáticos de dragão", hint: "fantasy banquet" },
  { src: "https://placehold.co/600x400.png", alt: "Mesa de bolo temática do Banguela", hint: "dragon cake" },
  { src: "https://placehold.co/600x400.png", alt: "Área de caça aos ovos de dragão no jardim", hint: "mystical forest" },
  { src: "https://placehold.co/600x400.png", alt: "Cabine de fotos de navio Viking", hint: "viking ship" },
  { src: "https://placehold.co/600x400.png", alt: "Área de festa iluminada com luzes de fada e lanternas", hint: "magical lights" },
];

const VenueShowcaseSection = () => (
  <section id="gallery" className="py-16 md:py-24 container">
    <div className="text-center mb-12">
      <h2 className="font-headline text-3xl md:text-5xl text-primary">A Cabana do Banguela</h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
        Explore nosso local, totalmente transformado na mítica Ilha de Berk.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryImages.map((image, index) => (
        <Card key={index} className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            data-ai-hint={image.hint}
          />
        </Card>
      ))}
    </div>
  </section>
);

const setups = [
  { title: "Festas de Aniversário", description: "A melhor experiência de aniversário para cavaleiros de dragões com jogos, decorações e um presente especial para o Viking aniversariante.", hint: "birthday party", icon: <VikingHelmIcon /> },
  { title: "Banquetes Temáticos", description: "Um grande banquete digno de um chefe, com uma refeição completa e decorações imersivas do 'Grande Salão'.", hint: "medieval feast", icon: <DragonIcon /> },
  { title: "Missões Corporativas", description: "Eventos de team-building e festas corporativas únicos com um toque de aventura Viking e lore de dragões.", hint: "fantasy meeting", icon: <VikingHelmIcon /> },
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

const TourSection = () => (
  <section id="tour" className="py-16 md:py-24 container">
    <div className="relative w-full h-96 rounded-lg overflow-hidden group shadow-2xl">
      <Image
        src="https://placehold.co/1200x400.png"
        alt="Visão 360 do local"
        fill
        objectFit="cover"
        className="transition-transform duration-500 group-hover:scale-105"
        data-ai-hint="panoramic fantasy landscape"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <Button variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
          Faça um Tour Virtual 360°
        </Button>
      </div>
    </div>
  </section>
);

const packages = [
  { title: "O Filhote", price: "R$ 999", description: "Perfeito para jovens Vikings! Inclui 2 horas de festa, decorações, caça aos ovos de dragão e um anfitrião dedicado.", featured: false },
  { title: "Cavaleiro de Dragão", price: "R$ 1.899", description: "A escolha mais popular! Inclui tudo do pacote O Filhote, mais 'treinamento de dragão', pintura facial e a visita de um personagem.", featured: true },
  { title: "Banquete do Chefe", price: "R$ 3.499", description: "A festa definitiva. 4 horas de uso exclusivo, banquete Viking completo, fotos profissionais e lembrancinhas premium.", featured: false },
];

const PackagesSection = () => (
  <section id="packages" className="py-16 md:py-24 bg-primary/5">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-5xl text-primary">Escolha Sua Aventura</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Oferecemos uma variedade de pacotes para tornar sua festa temática de dragão lendária.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {packages.map((pkg) => (
          <Card key={pkg.title} className={`flex flex-col h-full ${pkg.featured ? 'border-primary border-2 shadow-lg' : ''}`}>
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-2xl">{pkg.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-center text-4xl font-bold font-headline text-primary mb-4">{pkg.price}</p>
              <p className="text-foreground/80 text-center">{pkg.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant={pkg.featured ? 'default' : 'secondary'}>
                <Link href="#contact">Reserve este pacote</Link>
              </Button>
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
  <section id="testimonials" className="py-16 md:py-24 container">
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
  </section>
);

const contactInfo = [
  { icon: <Phone className="h-6 w-6 text-accent" />, title: "Ligue para Nós", value: "(555) 123-4567" },
  { icon: <Mail className="h-6 w-6 text-accent" />, title: "Envie um Email", value: "contato@cabanadobanguela.com" },
  { icon: <MapPin className="h-6 w-6 text-accent" />, title: "Encontre-nos", value: "123 Limite do Dragão, Ilha de Berk" },
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
                <h3 className="font-headline text-xl text-primary">{info.title}</h3>
                <p className="text-foreground/80">{info.value}</p>
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
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
      <div className="flex items-center gap-2">
        <VikingHelmIcon className="h-6 w-6" />
        <span className="font-headline text-lg">Cabana do Banguela &copy; {new Date().getFullYear()}</span>
      </div>
      <p className="text-sm text-primary-foreground/70">
        Torne-se uma lenda. Reserve sua festa hoje.
      </p>
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
        <TourSection />
        <PackagesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
