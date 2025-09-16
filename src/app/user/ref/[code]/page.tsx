import { redirect } from "next/navigation";
import React from "react";

function ReferralRedirect() {
  redirect("/user/dashboard");
  return <div>ReferralRedirect</div>;
}

export default ReferralRedirect;
