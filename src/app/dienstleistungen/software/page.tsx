import ServicePage, { serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("software");

export default function Page() {
  return <ServicePage slug="software" />;
}
