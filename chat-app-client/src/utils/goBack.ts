// routerUtils.js

import { useRouter } from "next/router";

export function useGoBack() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return goBack;
}
