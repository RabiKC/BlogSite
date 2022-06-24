import React, { useState, useEffect } from "react";
import UserDetail from "./UserDetail";
import axios from "axios";

const Blog = ({ user, blog }) => {
  const [images, setImages] = useState(null);
  const imagesUrl = "http://localhost:8000/images";

  const getImages = async () => {
    try {
      await axios.get(imagesUrl).then((res) => setImages(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  const randomImg =
    images && images.sort(() => 0.5 - Math.random()).slice(0, 5);

  randomImg && console.log(randomImg);

  return (
    <section className="blog-section">
      <UserDetail user={user} />
      <div className="blog-content">
        <h1 className="blog-title">{blog.title}</h1>
        <h2 className="blog-subtitle">{blog.body}</h2>
        <div className="blog-texts">
          <img src={randomImg && randomImg[0].link} alt="Blogs" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            placeat dignissimos accusamus quidem rerum adipisci soluta quam
            ducimus corrupti vero sunt sint saepe, qui itaque cupiditate
            inventore, temporibus amet labore omnis totam, maxime at quod dolor.
            Quidem praesentium, dolores officia deleniti eligendi perferendis
            numquam reiciendis, totam fugit est architecto minima soluta sequi
            error ipsa molestias rem. Autem animi quae, velit ad voluptatibus
            pariatur repellendus alias maxime nam nulla enim dicta quod
            blanditiis labore suscipit officiis cupiditate voluptatem atque.
            Voluptates, ipsam eius quis aut, quos cumque perspiciatis sit, cum
            obcaecati sint nostrum facere voluptatum modi deleniti! Deleniti non
            repellat omnis alias ullam natus qui laudantium assumenda sunt. Quis
            eaque nesciunt dicta quae modi eveniet natus ut officia totam
            maiores inventore nulla dignissimos, quidem illo deserunt harum est
            numquam accusantium veritatis voluptatem vero nostrum non incidunt?
            Qui commodi laborum nisi aperiam. Non suscipit porro esse modi eaque
            ratione velit, eos cupiditate sed, quas exercitationem eum error rem
            cum deserunt voluptatibus!
          </p>
          <img src={randomImg && randomImg[1].link} alt="Blogs" />
          <p>
            Nisi quaerat quidem nobis at repellat. Officiis et laudantium a,
            iusto exercitationem ratione consequatur modi possimus magnam
            incidunt doloremque illum blanditiis reiciendis perspiciatis
            repudiandae, nulla maiores, nostrum enim vero dolores sapiente.
            Voluptatum, ad? Aliquid temporibus aperiam at ducimus, minima alias
            distinctio aspernatur facilis aut ab quo dolores quia voluptatibus,
            saepe ipsum deserunt animi officia! Possimus necessitatibus saepe
            eius odit minus? Eligendi accusantium perferendis modi nemo id
            inventore illum minus mollitia, corrupti voluptate vel eum
            voluptatum repudiandae cupiditate cum saepe ducimus voluptatem
            temporibus consectetur quidem ipsa pariatur at? Maxime dolor,
            dignissimos velit neque voluptatem ducimus ipsum eum nobis aperiam
            saepe doloribus earum quae dolorem similique nisi qui nostrum?
            Itaque consequatur soluta autem et ducimus sed aspernatur molestias
            quis ratione sunt nemo laboriosam voluptatibus repellendus unde
            optio praesentium nulla suscipit reiciendis officia minus possimus,
            deleniti necessitatibus inventore at! Blanditiis, pariatur impedit.
          </p>
          <img src={randomImg && randomImg[2].link} alt="Blogs" />
          <p>
            Nemo magnam ad quae hic placeat maiores sequi ullam ducimus beatae
            dolores, itaque natus, perferendis, nesciunt voluptatem error quasi
            doloremque commodi et dolorum vero. Assumenda hic dolore ratione
            culpa! Natus, animi ex delectus odit illo itaque facere soluta cum
            voluptates repellendus. Officia, placeat fuga eligendi corporis
            minima expedita eaque libero explicabo quae itaque. Architecto rem
            aliquam est totam soluta numquam, qui repellendus reprehenderit
            reiciendis optio sunt voluptatem repellat asperiores iusto? Mollitia
            minima nostrum molestiae quasi, dignissimos veritatis dolore odio
            repellendus provident harum facere ut iure rem voluptatum sequi
            commodi quidem maxime hic ipsam iusto qui, molestias praesentium. A
            eos saepe odit? Ab molestiae et repudiandae. Aspernatur perferendis
            officiis excepturi reiciendis culpa facilis iure nisi, voluptatem,
            nobis delectus repellendus fugit dignissimos et expedita corrupti
            dolorem aut, doloribus exercitationem adipisci cupiditate laborum
            nostrum amet. Sunt dolor repudiandae sapiente quod, ad aspernatur
            ipsum sequi quo aperiam! Similique iste nihil repellendus porro
            incidunt alias, iusto sed cumque facilis? Aspernatur, labore facere
            odit repudiandae aperiam voluptates vitae, quidem, delectus sint
            beatae excepturi.
          </p>
          <img src={randomImg && randomImg[3].link} alt="Blogs" />
          <p>
            Quidem tempore, libero distinctio eum error reprehenderit quaerat
            officiis adipisci incidunt deserunt dolorum sunt fuga aut, nulla
            placeat ipsa, sed corrupti aspernatur! Quia excepturi nostrum neque
            blanditiis. Et, expedita ipsum inventore pariatur eos quidem hic
            neque odio necessitatibus cum nesciunt odit nisi accusamus rem quam
            est tempore quisquam quae magni culpa natus quaerat ratione illo
            aperiam! At delectus laborum ipsa nemo nesciunt quas voluptas
            exercitationem tempore debitis omnis dignissimos, reprehenderit
            optio, veritatis placeat est, enim quisquam consectetur eveniet
            quibusdam culpa velit sed magni aperiam. Modi quisquam deleniti quae
            qui, accusamus optio reiciendis ullam maiores aut? Corporis
            accusantium ex dicta culpa praesentium maiores dolores tenetur nihil
            quae sunt rerum, qui eligendi. Error eos aperiam suscipit debitis ea
            iure aut obcaecati dicta! Explicabo aperiam harum blanditiis est ex
            ullam nesciunt perspiciatis quasi ipsa sequi incidunt repellat
            consectetur rem debitis, sed corrupti adipisci atque nulla expedita
            cupiditate dolor pariatur voluptatum. Autem dicta accusamus eos
            possimus temporibus illum doloremque dolorem quod voluptas at ex
            ipsa eligendi, qui ut iusto laborum est quisquam inventore sint
            aspernatur aut.
          </p>
          <p>
            Hic harum earum labore quasi libero tenetur deleniti architecto
            exercitationem quam ea cum, atque nemo eveniet, iure impedit,
            molestiae ex maxime molestias at! Obcaecati, eligendi provident!
            Architecto deserunt ea, adipisci voluptatem explicabo corporis
            aliquam, ipsam minima at facere voluptatibus vel error aspernatur!
            Ad officiis officia nostrum veritatis hic laborum accusamus rerum
            perspiciatis aliquid molestiae.
          </p>
          <img src={randomImg && randomImg[4].link} alt="Blogs" />
          <p>
            Amet ullam eum animi esse ad. Nostrum iure vel fugit sapiente
            obcaecati repellat nulla, atque aspernatur, nihil quae nam officia
            nobis ea adipisci id incidunt unde aliquam quibusdam vitae dolores
            necessitatibus. Ipsum blanditiis ex et eveniet deleniti explicabo!
            Omnis, blanditiis aliquam quos, quibusdam ad debitis sint laboriosam
            tempore asperiores cupiditate aspernatur et. Ut quaerat veritatis,
            autem provident voluptatem aut nisi enim eum cupiditate repellat,
            tempore eveniet, atque aliquid obcaecati omnis ipsa illum ea nobis?
            Voluptatibus consectetur incidunt recusandae dolorem ipsa quisquam
            a, necessitatibus nihil aperiam quas fugiat error sequi hic minima
            corporis porro eveniet culpa maxime dolor assumenda. Deleniti
            aperiam atque quas porro, modi, at vitae optio consequatur sequi vel
            voluptates veritatis quia corrupti dolores facilis harum ratione
            quibusdam quam, commodi ut dolorem iusto! Dolores, veritatis? Libero
            odit voluptas molestiae eius, error soluta quibusdam, quidem quia
            laboriosam provident reprehenderit deleniti voluptate quasi fugit.
            Ex quia magni repellat, possimus laudantium accusantium, facere eos,
            aut natus libero asperiores id omnis optio maxime qui saepe.
          </p>

          <p>
            Dolor placeat quisquam est ducimus voluptates explicabo quibusdam
            perferendis, doloribus harum ullam aperiam veniam non iure
            asperiores repellat! Praesentium molestiae possimus velit ea
            delectus, voluptatibus quam ex odit rerum atque saepe totam, sit
            sunt similique aperiam cumque.
          </p>
        </div>
        {blog.body}
      </div>
    </section>
  );
};

export default Blog;
