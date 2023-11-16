import { StarsIllustration } from "@/components/illustrations/stars";

type SphereProps = {
  className: string;
};

export const Sphere: React.FC<SphereProps> = ({ className }) => {
  return (
    <div
      className={className}
    >
      <StarsIllustration className="absolute top-[50%] left-[50%] [transform:translate(-50%,-50%)]" />
    </div>
  );
};
