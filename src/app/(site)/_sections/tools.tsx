import { Button, Highlight } from "@/components/button";
import { CommandMenu } from "@/components/command";
import { Container } from "@/components/container";
import { ChevronIcon } from "@/components/icons/chevron";
import { LogoLightIllustration } from "@/components/illustrations/LogoLight";
import { BoltIllustration } from "@/components/illustrations/bolt";
import { KeyboardShortcuts } from "@/components/shortcuts";

export const Tools = () => (
  <div className="text-white">
    <Container>
      <div className="text-center">
        <h2 className="mb-4 text-4xl md:mb-7 md:text-[5.5rem] flex flex-col -space-y-6">
          <span>Unlike any tool</span>
          <span>you’ve used before</span>
        </h2>
        <p className="mx-auto mb-12 -mt-10 max-w-[58rem] text-lg text-gray-300 md:text-xl">
          Designed to the last pixel and engineered with unforgiving precision,
          Linear combines UI elegance with world-class performance.
        </p>
      </div>
      <div className="h-[48rem] overflow-hidden md:h-auto md:overflow-auto">
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-12 md:flex-wrap md:overflow-hidden">
          <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-gray-100 bg-glass-gradient p-8 text-center md:basis-[calc(33.33%-12px)] md:p-14">
            <div className="mask-linear-faded absolute top-[-9.2rem]">
              <BoltIllustration />
            </div>
            <p className="mb-4 text-3xl">Breathtakingly fast</p>
            <p className="text-md text-gray-300">
              Built for speed with 50ms interactions and real-time sync.
            </p>
          </div>
          <div className="group relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-gray-100 bg-glass-gradient p-8 text-center md:basis-[calc(33.33%-12px)] md:p-14">
            <div className="pointer-events-none absolute top-[-8rem] w-[130%]">
              <LogoLightIllustration />
            </div>
            <div className="absolute bottom-0 space-y-4 p-10">
              <p className="text-3xl leading-tight">
                Designed for modern software teams
              </p>
              <p className="text-md text-gray-300">
                Comes with built-in workflows that create focus and routine.
              </p>
            </div>
            <Button
              href="/method"
              variant="secondary"
              size="sm"
              className="absolute bottom-[20rem] translate-y-[30%] scale-[0.8] whitespace-nowrap opacity-0 transition-[transform,opacity] group-hover:transform-none group-hover:opacity-100 [&_.highlight]:text-[1.1rem]"
            >
              <Highlight>Linear Method</Highlight>
              Product Principles
              <ChevronIcon fill="#8A8F98" className="ml-1" />
            </Button>
          </div>
          <div className="relative order-3 flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-gray-100 bg-glass-gradient p-8 text-center md:order-first md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
            <KeyboardShortcuts />
            <p className="mb-4 text-3xl">Built for your keyboard</p>
            <p className="text-md text-gray-300">
              Fly through your tasks with rapid-fire keyboard shortcuts for
              everything. Literally everything.
            </p>
          </div>
          <div className="relative order-last flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-start overflow-hidden rounded-[4.8rem] border border-gray-100 bg-glass-gradient p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
            <CommandMenu />
            <div className="transition-opacity md:[.opened+&]:opacity-0">
              <p className="mb-4 text-3xl">Meet your command line</p>
              <p className="text-md text-gray-300">
                Complete any action in seconds with the global command menu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
);
