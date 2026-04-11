import { StaticRedirect } from "@/components/static-redirect";

export default function IndexPage() {
  return (
    <StaticRedirect
      href="/zh"
      message="Redirecting to the Chinese homepage..."
      linkLabel="打开中文首页"
    />
  );
}
