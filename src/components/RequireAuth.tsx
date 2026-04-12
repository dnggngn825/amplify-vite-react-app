import { Authenticator } from "@aws-amplify/ui-react";
import type { ReactNode } from "react";

export default function RequireAuth({ children }: { children: ReactNode }) {
  return (
    <Authenticator hideSignUp>
      {children}
    </Authenticator>
  );
}
