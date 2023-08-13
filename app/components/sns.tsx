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
  key: string;
  link: string;
  icon: IconDefinition;
}

export default function SocialNetwork() {
  const sns: SNS[] = [
    {
      key: "github",
      link: "https://github.com/eba472",
      icon: faGithub,
    },
    {
      key: "linkedin",
      link: "https://www.linkedin.com/in/eba472",
      icon: faLinkedin,
    },
    {
      key: "instagram",
      link: "https://instagram.com/eba472",
      icon: faInstagram,
    },
    {
      key: "facebook",
      link: "https://www.facebook.com/enkhbaatar.tserendendev.77",
      icon: faFacebookSquare,
    },
  ];

  return (
    <div className="flex flex-row space-x-2 justify-end mt-10 ">
      {sns.map((s) => (
        <Link key={s.key} href={s.link} passHref={true} className="h-6 w-6">
          <FontAwesomeIcon icon={s.icon} />
        </Link>
      ))}
    </div>
  );
}
