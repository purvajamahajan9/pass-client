import { redirect } from "next/navigation";
import React from "react";

function DashboardPage() {
  redirect("/dashboard/account");
}

export default DashboardPage;
