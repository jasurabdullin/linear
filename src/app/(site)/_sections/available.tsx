import LogoIcon from '../../../../public/images/icon.webp';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { AppleIcon } from '@/components/icons/social/apple';
import Image from 'next/image';

export const Available = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-10 pb-16 text-center">
        <Image
          src={LogoIcon}
          alt="Linear app icon"
          className="h-[12.8rem] w-[12.8rem]"
        />
        <h1 className="text-gradient text-5xl md:text-8xl">
          Built for the future.
          <br />
          Available today.
        </h1>
        <div className="flex gap-[1.6rem]">
          <Button type="button" variant="primary" size="lg">
            Sign up for free
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="lg"
            className="hidden md:inline-flex !bg-transparent"
          >
            <AppleIcon />
            <span className="ml-2">Download</span>
          </Button>
        </div>
      </div>
    </Container>
  );
};
