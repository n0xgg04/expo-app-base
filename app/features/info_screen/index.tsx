import * as React from "react";
import { Button, SafeAreaView, StyleSheet, View } from "react-native";
import H1 from "@/global/components/shared/h1";

type Props = {};

type P = {
  children?: React.ReactNode;
};

//Object destruct
//Hooks
function Row({ children }: P): React.JSX.Element {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {children}
    </View>
  );
}

// <FunctionName name="Anh" age={21}/>

// => props = {name: "Anh", age: 21}

//! State, Props changed => re-Render necessary part (Virtual DOM)
//! Lifecycle of a react component;
//! Mount component => Update component => Unmount

function sum(n: number) {
  return (n * (n + 1)) / 2;
}
export default function InfoScreen(props: Props) {
  const [count2, setCount2] = React.useState(0);

  React.useEffect(() => {
    console.log("InfoScreen is mounted!");
    //! Khong co deps => Goi vao tat ca lan rendder
    // ! Deps rỗng => Gọi lúc mount
    //! Deps có => Phụ thuộc dep s
  }, [count2]);

  const handlePress = React.useCallback(() => {
    setCount2(count2 + 1);
    console.log(count2); //l
  }, [count2]);

  const t = React.useMemo(() => {
    return sum(count2);
  }, [count2]);

  return (
    <SafeAreaView>
      <Row>
        <H1>{`Count 2 (${count2}) = ${t}`}</H1>
        <Button //cach 1
          onPress={handlePress}
          title="Click me"
        />
      </Row>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    opacity: 0.6,
  },
  view: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ad3131",
  },
});
