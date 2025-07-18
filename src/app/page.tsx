import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Mail, MapPin, Phone, Star } from "lucide-react";
import { DragonIcon, VikingHelmIcon } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-14 items-center">
      <Link href="/" className="flex items-center gap-2 font-bold text-primary">
        <DragonIcon className="h-6 w-6" />
        <span className="font-headline text-xl">Dragon's Lair Parties</span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-6 text-sm font-medium">
        <Link href="#gallery" className="text-foreground/60 transition-colors hover:text-foreground/80">Gallery</Link>
        <Link href="#setups" className="text-foreground/60 transition-colors hover:text-foreground/80">Setups</Link>
        <Link href="#packages" className="text-foreground/60 transition-colors hover:text-foreground/80">Packages</Link>
        <Link href="#testimonials" className="text-foreground/60 transition-colors hover:text-foreground/80">Testimonials</Link>
        <Link href="#contact" className="text-foreground/60 transition-colors hover:text-foreground/80">Contact</Link>
      </nav>
      <Button asChild className="ml-4 hidden bg-accent hover:bg-accent/90 text-accent-foreground md:flex">
        <Link href="#contact">Book Now</Link>
      </Button>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="relative h-[60vh] md:h-[80vh] w-full">
    <Image
      src="https://placehold.co/1600x900.png"
      alt="Venue decorated with How to Train Your Dragon theme"
      fill
      objectFit="cover"
      className="brightness-50"
      data-ai-hint="fantasy dragon landscape"
      priority
    />
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
      <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl drop-shadow-lg">
        Your Dragon Adventure Awaits
      </h1>
      <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90">
        Celebrate in a world of Vikings and dragons! Unforgettable themed parties at our one-of-a-kind venue.
      </p>
      <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
        <Link href="#packages">Explore Packages</Link>
      </Button>
    </div>
  </section>
);

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Main hall decorated as the Great Hall of Berk", hint: "viking hall interior" },
  { src: "https://placehold.co/600x400.png", alt: "Dining tables with dragon-themed centerpieces", hint: "fantasy banquet" },
  { src: "https://placehold.co/600x400.png", alt: "A Toothless-themed cake table", hint: "dragon cake" },
  { src: "https://placehold.co/600x400.png", alt: "Dragon egg hunt area in the garden", hint: "mystical forest" },
  { src: "https://placehold.co/600x400.png", alt: "Viking ship photo booth", hint: "viking ship" },
  { src: "https://placehold.co/600x400.png", alt: "Party area lit with fairy lights and lanterns", hint: "magical lights" },
];

const VenueShowcaseSection = () => (
  <section id="gallery" className="py-16 md:py-24 container">
    <div className="text-center mb-12">
      <h2 className="font-headline text-3xl md:text-5xl text-primary">The Dragon's Den</h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
        Explore our venue, fully transformed into the mythical Isle of Berk.
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
  { title: "Birthday Bashes", description: "The ultimate dragon-rider birthday experience with games, decorations, and a special gift for the birthday Viking.", hint: "birthday party", icon: <VikingHelmIcon /> },
  { title: "Themed Feasts", description: "A grand feast worthy of a chief, with a full-course meal and immersive 'Great Hall' decorations.", hint: "medieval feast", icon: <DragonIcon /> },
  { title: "Corporate Quests", description: "Unique team-building events and corporate parties with a touch of Viking adventure and dragon-lore.", hint: "fantasy meeting", icon: <VikingHelmIcon /> },
];

const CategorizedSetupsSection = () => (
  <section id="setups" className="py-16 md:py-24 bg-primary/5">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-5xl text-primary">Party Setups for Every Viking</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          From birthdays to grand feasts, we have the perfect setup for your celebration.
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
        alt="360 view of the venue"
        fill
        objectFit="cover"
        className="transition-transform duration-500 group-hover:scale-105"
        data-ai-hint="panoramic fantasy landscape"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <Button variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
          Take a 360° Virtual Tour
        </Button>
      </div>
    </div>
  </section>
);

const packages = [
  { title: "The Hatchling", content: "Perfect for young Vikings! Includes 2 hours of party time, themed decorations, a dragon egg hunt, and a dedicated party host." },
  { title: "Dragon Rider", content: "The most popular choice. Includes everything in The Hatchling package, plus a 'dragon training' obstacle course, face painting, and a visit from a costumed character." },
  { title: "Chief's Feast", content: "The ultimate legendary party. Includes 4 hours of exclusive venue use, a full Viking feast, professional photos, and premium party favors for all guests." },
];

const PackagesSection = () => (
  <section id="packages" className="py-16 md:py-24 bg-primary/5">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-5xl text-primary">Choose Your Adventure</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          We offer a range of packages to make your dragon-themed party legendary.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
        {packages.map((pkg, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="font-headline text-xl">{pkg.title}</AccordionTrigger>
            <AccordionContent className="text-base">{pkg.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

const testimonials = [
  { name: "Astrid H.", quote: "The best birthday party my son has ever had! The attention to detail was incredible, it really felt like we were on Berk. Highly recommended!" },
  { name: "Stoick V.", quote: "A truly grand feast! The staff were amazing and the venue was perfect. We'll be back next year for sure. Worthy of a chief!" },
  { name: "Gobber B.", quote: "I've seen many a party in my day, but this takes the cake! Or the mutton, rather. The dragon training course was a brilliant touch!" },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-16 md:py-24 container">
    <div className="text-center mb-12">
      <h2 className="font-headline text-3xl md:text-5xl text-primary">Tales from Our Vikings</h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
        Hear what our guests have to say about their adventures.
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
  { icon: <Phone className="h-6 w-6 text-accent" />, title: "Call Us", value: "(555) 123-4567" },
  { icon: <Mail className="h-6 w-6 text-accent" />, title: "Email Us", value: "contact@dragonslair.com" },
  { icon: <MapPin className="h-6 w-6 text-accent" />, title: "Find Us", value: "123 Dragon's Edge, Isle of Berk" },
];

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24 bg-primary/5">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-5xl text-primary">Book Your Legendary Party</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Send a terror mail or use the form below to start planning your event.
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
        <span className="font-headline text-lg">Dragon's Lair Parties &copy; {new Date().getFullYear()}</span>
      </div>
      <p className="text-sm text-primary-foreground/70">
        Become a legend. Book your party today.
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
