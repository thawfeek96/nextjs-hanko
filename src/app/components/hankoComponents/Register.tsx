"use client";

import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { register, Hanko } from "@teamhanko/hanko-elements";

const hankoApi =  process.env.NEXT_PUBLIC_HANKO_API_URL;

export default function HankoAuth() {
  const router = useRouter();

  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const redirectAfterLogin = useCallback(() => {
    // successfully logged in, redirect to a page in your application
    router.replace("/userProfile");
  }, [router]);

  useEffect(
    () =>
      hanko?.onAuthFlowCompleted(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );

  useEffect(() => {
    register(hankoApi ?? "", { shadow: false, injectStyles: false }).catch(
      (error) => {
        // handle error
      }
    );
  }, []);

  return (
    <div
      style={{
        boxShadow: "0px 0px 61.3082px rgba(0, 0, 0, 0.15)",
      }}
      className="flex items-center flex-col py-6"
    >
      <img
        className="w-[185px] block mx-auto"
        src="https://feedbackuploadimage.s3.ap-south-1.amazonaws.com/FeedbackBrand.png"
        alt="logo"
      />

      <hanko-auth />
    </div>
  );
}
