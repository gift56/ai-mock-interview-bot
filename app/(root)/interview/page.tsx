import { Agent } from "@/components/interview";
import { getCurrentUser } from "@/lib/actions/auth/auth.actions";
import React from "react";

export default async function InterviewPage() {
 const user = await getCurrentUser();


  return (
    <React.Fragment>
      <h3>Interview generation</h3>
      <Agent
        userName={user?.name!}
        userId={user?.id}
        // profileImage={user?.profileURL}
        type="generate"
      />
    </React.Fragment>
  );
}
