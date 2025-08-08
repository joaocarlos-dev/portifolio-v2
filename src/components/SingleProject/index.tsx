import { projectImages } from "@/data/projectImages";
import { ProjectImagesCarousel } from "../ImageSlider";
import { TranslatedText } from "../TranslatedText";
import { GrGithub } from "react-icons/gr";
import { projectsData } from "@/data/projectLinks";

type PageParamsProps = {
  params: Promise<{ slug: string }>;
};

export async function SingleProject({ params }: PageParamsProps) {
  const { slug } = await params;
  const images = projectImages[slug] || [];
  const githubLink = projectsData[slug]?.github;
  const websiteLink = projectsData[slug]?.website;

  return (
    <div className="p-8">
      <div className="flex flex-row items-center gap-8">
        <h1 className="text-4xl md:text-7xl font-bold text-dark-background dark:text-white">
          {projectsData[slug]?.website ? (
            <a
              href={websiteLink}
              target="_blank"
              className="underline decoration-3"
            >
              <TranslatedText ns="project_details" tKey={`${slug}.title`} />
            </a>
          ) : (
            <a href={websiteLink} className="decoration-3 cursor-not-allowed">
              <TranslatedText ns="project_details" tKey={`${slug}.title`} />
            </a>
          )}
        </h1>
        <p className="text-dark-background dark:text-white text-4xl">-</p>

        {projectsData[slug]?.github ? (
          <a
            className="text-dark-background dark:text-white pt-4"
            target="_blank"
            href={githubLink}
          >
            <GrGithub size={40} />
          </a>
        ) : (
          <div className="flex items-center text-gray-400 cursor-not-allowed gap-2 pt-4">
            <GrGithub size={40} />
            <TranslatedText ns="common" tKey={"private_github"} />
          </div>
        )}
      </div>

      <div className="py-10">
        <ProjectImagesCarousel images={images} />
      </div>

      <p className="whitespace-pre-line text-dark-background dark:text-white text-justify">
        <TranslatedText
          ns="project_details"
          tKey={`${slug}.long_description`}
        />
      </p>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(projectImages).map((slug) => ({
    slug: slug,
  }));
}
