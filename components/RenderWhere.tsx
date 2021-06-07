import React, { useEffect, useState } from "react";

export const RenderWhere: React.FC<{ client?: boolean; server?: boolean }> = (
  props
) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted && props.client) {
    return null;
  }

  if (isMounted && props.server) {
    return null;
  }

  return props.children as React.ReactElement;
};
