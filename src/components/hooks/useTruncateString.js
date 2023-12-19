import { useState, useEffect } from "react";

const useTruncateString = (initialString) => {
  const [truncatedString, setTruncatedString] = useState(initialString);

  useEffect(() => {
    if (initialString.length > 55) {
      const truncated = initialString.substring(0, 55) + "...";
      setTruncatedString(truncated);
    } else {
      setTruncatedString(initialString);
    }
  }, [initialString]);

  return truncatedString;
};

export default useTruncateString;
