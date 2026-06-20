import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

export function useDocumentTitle(title: string) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
  }, [pathname, title]);
}
