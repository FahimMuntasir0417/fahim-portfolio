import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type ProfilePhotoProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function ProfilePhoto({
  className,
  priority = false,
  sizes = "(min-width: 1024px) 22rem, 60vw"
}: ProfilePhotoProps) {
  return (
    <div className={cn("relative overflow-hidden bg-surface-2", className)}>
      <Image
        src={siteConfig.profileImage.src}
        alt={siteConfig.profileImage.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: siteConfig.profileImage.objectPosition }}
      />
    </div>
  );
}
