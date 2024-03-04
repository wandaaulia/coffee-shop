import React from "react";

type Props = {};

export default class StringUtil {
  static TruncatedText(a: string) {
    const truncatedText = a.length > 8 ? a.slice(0, 8) + "..." : a;

    return truncatedText;
  }
}
