import { GetStaticProps } from "next";

export default function Home({ data }: { data: any[] }) {
  return (
    <div>
      {data.map((project) => (
        <section key={project.node_id}>
          <h2>{project.full_name}</h2>
          <a href={`/repository/${project.name}`}>Check it out</a>
        </section>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://api.github.com/users/saymow/repos");
  const data = await response.json();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
