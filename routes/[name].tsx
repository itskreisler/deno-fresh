import { PageProps } from "$fresh/server.ts";

interface NameProps {
  params: {
    name: string;
  };
}
export default function Greet(props: PageProps) {
  return <div>Hello {props.params.name}</div>;
}
