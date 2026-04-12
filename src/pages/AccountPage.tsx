import { useAuthenticator } from "@aws-amplify/ui-react";
import { User } from "lucide-react";
import RequireAuth from "../components/RequireAuth";

function AccountContent() {
  const { user } = useAuthenticator();

  return (
    <section className="page-placeholder">
      <User size={48} strokeWidth={1} />
      <h2 className="page-placeholder__heading">My Account</h2>
      <p className="page-placeholder__text">
        Signed in as {user?.signInDetails?.loginId ?? "user"}
      </p>
    </section>
  );
}

export default function AccountPage() {
  return (
    <RequireAuth>
      <AccountContent />
    </RequireAuth>
  );
}
