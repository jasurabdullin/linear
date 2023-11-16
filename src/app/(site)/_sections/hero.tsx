import { Button, Highlight } from "@/components/button";
import { Container } from "@/components/container";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero";
import { HeroImage } from "@/components/hero-image";
import AsksIcon from "@/components/icons/asks";
import { ChevronIcon } from "@/components/icons/chevron";

export const HomeHero = () => (
  <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">

  <Container className="pt-[6.4rem]">
    <Hero>
      <div className="flex justify-center pb-8">
        <AsksIcon/>
      </div>
      <Button
        href="/"
        variant="secondary"
        size="sm"
        className="translate-y-[-1rem] animate-fade-in opacity-0 items-center flex"
      >
        <span>Introducing Linear Asks</span>
        <ChevronIcon fill="currentColor" className="h-4 w-4 ml-1 -mr-2" />
      </Button>
      <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] flex flex-col -space-y-4">
       <span>Linear is a better way</span>  
       <span>to build products</span>
      </HeroTitle>
      <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] font-light tracking-wide">
        Meet the new standard for modern software development.
        <br className="hidden md:block" /> Streamline issues, sprints, and
        product roadmaps.
      </HeroSubtitle>
      <Button
        href="/"
        variant="primary"
        size="lg"
        className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      >
        Get started
        <Highlight>
          <ChevronIcon fill="currentColor" />
        </Highlight>
      </Button>
      <HeroImage />
    </Hero>
  </Container>
  </div>
);
