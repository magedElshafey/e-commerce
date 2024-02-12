import { useState, useEffect } from "react";

const useTruncateString = (initialString) => {
  const [truncatedString, setTruncatedString] = useState(initialString);

  useEffect(() => {
    if (initialString.length > 95) {
      const truncated = initialString.substring(0, 220) + "...";
      setTruncatedString(truncated);
    } else {
      setTruncatedString(initialString);
    }
  }, [initialString]);

  return truncatedString;
};

export default useTruncateString;
