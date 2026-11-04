import ServicePage, { serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("social-media");

export default function Page() {
  return <ServicePage slug="social-media" />;
}
