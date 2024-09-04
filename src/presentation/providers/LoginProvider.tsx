import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Children, PropsWithChildren, useEffect } from "react";
import { MyRootStackParams } from "../navigation/MyStackNavigator";
import { useLoginStore } from "../../actions/clientes/login.state";

export const LoginProvider = ({ children }: PropsWithChildren) => {
  const navigation = useNavigation<StackNavigationProp<MyRootStackParams>>();
  const { status } = useLoginStore();

  useEffect(() => {
    if (status == "authenticated") {
      navigation.reset({
        index: 0,
        routes: [{ name: "HomeScreen" }],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: "LoginScreen" }],
      });
    }
  }, [status]);

  return <>{children}</>;
};
