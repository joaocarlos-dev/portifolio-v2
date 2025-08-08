import { SingleProject } from "@/components/SingleProject";

type PageParamsProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: PageParamsProps) {
  return <SingleProject params={params} />;
}
