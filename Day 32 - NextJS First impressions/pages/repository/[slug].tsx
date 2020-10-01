import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

export default function Repository({ data }) {
  const { isFallback } = useRouter();

  return isFallback ? (
    <p>loding...</p>
  ) : (
    <div>
      <p>{data.name}</p>
      <p>{data.description}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://api.github.com/users/saymow/repos");
  const data = await response.json();

  const paths = data.map((repository) => ({
    params: {
      slug: repository.name,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  console.log(slug);
  const url = `https://api.github.com/repos/saymow/${slug}`;
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: { data },
    revalidate: 60,
  };
};
