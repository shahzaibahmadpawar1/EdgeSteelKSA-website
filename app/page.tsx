import { redirect } from "next/navigation";

// Root / redirects to the default locale (/en is handled as path-less by next-intl,
// but we keep this for safety when someone hits the bare root during SSR.)
export default function RootPage() {
  redirect("/en");
}
