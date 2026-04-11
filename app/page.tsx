import { StaticRedirect } from "@/components/static-redirect";

export default function IndexPage() {
  return (
    <StaticRedirect
      href="/en"
      message="Redirecting to the English homepage..."
      linkLabel="Open homepage"
    />
  );
}
