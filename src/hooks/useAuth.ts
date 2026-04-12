import { useAuthenticator } from "@aws-amplify/ui-react";

export function useAuth() {
  const { authStatus, user, signOut } = useAuthenticator();
  return {
    isAuthenticated: authStatus === "authenticated",
    user,
    signOut,
  };
}
