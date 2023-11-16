import clsx from "clsx";
import {
  Available,
  Clients,
  Direction,
  HomeHero,
  IssueTracking,
  Momentum,
  Sphere,
  Tools,
  Workflows,
} from "@/app/(site)/_sections";

export default function Home() {
  return (
    <>
      <HomeHero />

      <Clients />

      <Sphere className={clsx(
        "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden",
        "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
        "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,119,198,0.4)] after:bg-black"
      )}/>

      <Tools />
      <IssueTracking />
      <Momentum />
      <Direction />
      <Workflows />

      <Sphere className={clsx(
          "mask-radial-faded pointer-events-none relative z-[-1] my-[-16.4rem] h-[48rem] rotate-180 overflow-hidden md:h-[60rem]",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
          "after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(78,92,218,0.4)] after:bg-black"
        )}/>
 
      <Available />
    </>
  );
}
