import { redirect } from "next/navigation";
import React from "react";

function LandingPage() {
  redirect("/user/dashboard");
  //   return (
  //     <div>LandingPage</div>
  //   )
}

export default LandingPage;
