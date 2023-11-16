import { Container } from "@/components/container";
import { Logo } from "@/components/icons/logo";
import { GithubIcon, SlackIcon, TwitterIcon } from "@/components/icons/social";

import { FooterLink } from "./footer-link";

export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-100 py-[5.6rem] text-md">
      <Container className="flex flex-col justify-between lg:flex-row">
        <div>
          <div className="flex h-full flex-row justify-between lg:flex-col">
            <div className="flex items-center text-gray-400">
              <Logo className="mr-2 h-4 w-4" />{" "}
              <span className="text-sm">Linear - Designed Worldwide</span>
            </div>
            <div className="mt-auto flex space-x-6 text-gray-400">
              <TwitterIcon />
              <GithubIcon />
              <SlackIcon />
            </div>
          </div>
        </div>
        <FooterLink />
      </Container>
    </footer>
  );
};
