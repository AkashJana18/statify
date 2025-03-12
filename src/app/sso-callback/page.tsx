import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function SSOCallbackPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <AuthenticateWithRedirectCallback />
    </div>
  );
}
