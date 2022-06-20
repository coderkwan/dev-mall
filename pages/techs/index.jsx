import styles from "../../styles/techs.module.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import UseTechs from "../../utils/UseTechs";

const queryClient = new QueryClient();

export default function Index() {
  return (
    <div className={styles.container}>
      <QueryClientProvider client={queryClient}>
        <UseTechs />
      </QueryClientProvider>
    </div>
  );
}
