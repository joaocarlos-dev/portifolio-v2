import { projectImages } from "@/data/projectImages";
import { ProjectImagesCarousel } from "../ImageSlider";
import { TranslatedText } from "../TranslatedText";

type PageParamsProps = {
  params: Promise<{ slug: string }>;
};

export async function SingleProject({ params }: PageParamsProps) {
  const { slug } = await params;
  const images = projectImages[slug] || [];

  return (
    <div className="p-8">
      <h1 className="text-7xl font-bold text-dark-background dark:text-white">
        <TranslatedText ns="project_details" tKey={`${slug}.title`} />
      </h1>

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
