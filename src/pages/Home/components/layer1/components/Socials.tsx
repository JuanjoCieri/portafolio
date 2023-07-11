import { GithubIcon, LinkedinIcon } from "../../../../../utils/icons";

export default function Socials() {
  return (
    <div className="col-span-4 tablet:col-span-4 laptop:col-span-3 desktop:col-span-1 bg-white rounded-xl flex justify-center items-center gap-6 py-20">
      <GithubIcon />
      <LinkedinIcon />
    </div>
  );
}
