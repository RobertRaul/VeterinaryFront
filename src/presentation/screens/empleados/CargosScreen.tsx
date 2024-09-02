import React from "react";
import { MyCustomLayout } from "../../components/ui/MyCustomLayout";
import { Layout, Text } from "@ui-kitten/components";
import { useQuery } from "@tanstack/react-query";
import { getCargos } from "../../../actions/empleados/getCargos";

export const CargosScreen = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["cargos"],
    queryFn: () => getCargos(),
  });

  if (isPending) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <MyCustomLayout>
      <Layout>
        <Text>{JSON.stringify(data,null,2)}</Text>
      </Layout>
    </MyCustomLayout>
  );
};
