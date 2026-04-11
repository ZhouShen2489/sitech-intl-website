import { ClientRedirect } from "@/components/client-redirect";

export default function IndexPage() {
  return (
    <ClientRedirect
      href="/en"
      message="Redirecting to the English homepage..."
      linkLabel="Open homepage"
    />
  );
}
