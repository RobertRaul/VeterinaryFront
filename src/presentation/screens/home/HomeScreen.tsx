import React from "react";
import { MyCustomLayout } from "../../components/ui/MyCustomLayout";
import { ScrollView } from "react-native";
import { EmpleadosItems } from "./MenuItems";
import { MyMenuItem } from "../../components/ui/MyMenuItem";

export const HomeScreen = () => {
  return (
    <MyCustomLayout>
      <ScrollView>        
        {
        EmpleadosItems.map((item, index) => (
          <MyMenuItem                        
            key={item.component}
            {...item}
            isFirst={index === 0}
            isLast={index === EmpleadosItems.length - 1}
          ></MyMenuItem>
        ))
        }
      </ScrollView>
    </MyCustomLayout>
  );
};
