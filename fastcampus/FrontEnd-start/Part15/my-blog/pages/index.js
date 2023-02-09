import styles from "@/styles/Home.module.css";
import sanityClient from "@sanity/client";

export default function Home({ home, post }) {
  console.log(home);
  console.log(post);
  return (
    <>
      <div className={styles.main}>
        <h1>Blog Home </h1>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // sanity로부터 데이터를 가져온다.
  const client = sanityClient({
    dataset: "production",
    projectId: "8hjnvvud",
    useCdn: process.env.NODE_ENV === "production",
  });
  const home = await client.fetch(
    `*[type === 'home'][0]{'mainPostUrl':mainPost -> slug.current}`
  );

  const posts = await client.fetch(`
  *[_type == 'post'] {
    title,
    subtitle,
    createdAt,
    'content' : content[] {
      ...,
      ...select(_type == 'imageGallery' => {'image' : images[]{..., 'url' : asset -> url}})
    },
    'slug' : slug.current,
    'thumbnail' : {
      'alt' : thumbnail.alt,
      'imageUrl' : thumbnail.asset -> url
    },
    'author' : author -> {
      name,
      role,
      'image' : image.asset -> url
    },
      'tag' : tag -> {
      title,
      'slug': slug.current
      }
  }
  `);
  return {
    props: {
      home,
      posts,
    },
  };
}
