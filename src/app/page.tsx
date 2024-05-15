import Image from "next/image";
import { Bevan } from "next/font/google";

const bevan = Bevan({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main>
      <article>
        <h1 className={`text-center text-3xl uppercase ${bevan.className}`}>
          Heading
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          voluptatibus consectetur quos voluptatem repellendus pariatur
          necessitatibus ab voluptates architecto molestiae voluptate sapiente
          obcaecati, quia unde temporibus distinctio accusamus dicta ducimus?
        </p>
        <h2 className={`text-center text-2xl uppercase ${bevan.className}`}>
          Heading
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          deleniti optio recusandae totam molestias corrupti, esse quis corporis
          obcaecati, perferendis aliquid. Nihil ipsa corrupti vel itaque
          deleniti aspernatur distinctio deserunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sequi
          alias eligendi voluptate molestiae recusandae. Optio nihil quidem,
          placeat reprehenderit officiis excepturi voluptates, nesciunt nisi
          tenetur dicta consequatur molestias saepe!
        </p>
        <blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis exercitationem, iure expedita quam aliquid incidunt,
            rerum molestiae ratione dolore veniam laudantium placeat delectus
            repudiandae, quas sint suscipit nam. Repellat, pariatur.
            <cite>&mdash; Chris Wilcocks</cite>
          </p>
        </blockquote>
      </article>
    </main>
  );
}
