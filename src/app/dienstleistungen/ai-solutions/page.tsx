import ServicePage, { serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("ai-solutions");

export default function Page() {
  return <ServicePage slug="ai-solutions" />;
}
