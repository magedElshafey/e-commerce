import { useState, useEffect } from "react";

const useTruncateString = (initialString) => {
  const [truncatedString, setTruncatedString] = useState(initialString);

  useEffect(() => {
    if (initialString.length > 75) {
      const truncated = initialString.substring(0, 95) + "...";
      setTruncatedString(truncated);
    } else {
      setTruncatedString(initialString);
    }
  }, [initialString]);

  return truncatedString;
};

export default useTruncateString;
