import { ProjectImagesCarousel } from "@/components/ImageSlider";
import { TranslatedText } from "@/components/TranslatedText";
import { projectImages } from "@/data/projectImages";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params; // Remova o await (params é síncrono)

  // Obtenha as imagens do mapeamento
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
  return Object.keys(projectImages).map((slug) => ({ slug }));
}
