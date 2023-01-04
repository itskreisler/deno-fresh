import { Head } from "$fresh/runtime.ts";
import TagAppContext from "../components/AppContext.jsx";
import Counter from "../islands/Counter.tsx";
import FormSearch from "../islands/FormSearch.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <TagAppContext>
        <FormSearch />
      </TagAppContext>
    </>
  );
}
