import {
  IconDefinition,
  faFacebookSquare,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface SNS {
  link: string;
  icon: IconDefinition;
}

export default function SocialNetwork() {
  const sns: SNS[] = [
    {
      link: "https://github.com/eba472",
      icon: faGithub,
    },
    {
      link: "https://www.linkedin.com/in/eba472",
      icon: faLinkedin,
    },
    {
      link: "https://instagram.com/eba472",
      icon: faInstagram,
    },
    {
      link: "https://www.facebook.com/enkhbaatar.tserendendev.77",
      icon: faFacebookSquare,
    },
  ];

  return (
    <div className="flex flex-row space-x-2 justify-end mt-10">
      {sns.map((s) => (
        <Link href={s.link} passHref={true} className="h-6 w-6">
          <FontAwesomeIcon icon={s.icon} />
        </Link>
      ))}
    </div>
  );
}
