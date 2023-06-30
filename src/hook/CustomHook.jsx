import { useEffect, useState } from "react";

const usePasswordStrength = (password) => {
  const [color, setColor] = useState({
    strong: false,
    middle: false,
    weak: false,
    nodata: true,
  });

  useEffect(() => {
    const numberPattern = /[0-9]/;
    const symbolsPattern = /[!@#$%^&*(),.?":{}[\]|<>]/;
    const letterPattern = /[a-zA-Z]/;
    const numberPatternResult = numberPattern.test(password);
    const symbolsPatternResult = symbolsPattern.test(password);
    const letterPatternResult = letterPattern.test(password);

    if (numberPatternResult && symbolsPatternResult && letterPatternResult) {
      setColor({ strong: true, middle: true, weak: true, nodata: false });
    } else if (
      (numberPatternResult && symbolsPatternResult) ||
      (symbolsPatternResult && letterPatternResult) ||
      (letterPatternResult && numberPatternResult)
    ) {
      setColor({ strong: false, middle: true, weak: true, nodata: false });
    } else if (
      numberPatternResult ||
      symbolsPatternResult ||
      letterPatternResult
    ) {
      setColor({ strong: false, middle: false, weak: true, nodata: false });
    } else if (password === "") {
      setColor({ strong: false, middle: false, weak: false, nodata: true });
    }
  }, [password]);

  return color;
};

export default usePasswordStrength;
