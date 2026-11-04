import ServicePage, { serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("websites");

export default function Page() {
  return <ServicePage slug="websites" />;
}
