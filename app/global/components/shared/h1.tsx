import { Text } from "react-native";
import * as React from "react";

const H1 = React.memo(function ({ children }: { children: string | number }) {
  React.useEffect(() => {
    console.log("H1 Re-render");
  });
  return (
    <Text
      style={{
        fontSize: 18,
        fontWeight: "600",
      }}
    >
      {children}
    </Text>
  );
});

export default H1;
