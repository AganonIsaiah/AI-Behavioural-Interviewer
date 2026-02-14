import { redirect } from "next/navigation"
import { ROUTES } from "@/types/dashboard";

export default function Home() {
  redirect(ROUTES.DASHBOARD);
}
