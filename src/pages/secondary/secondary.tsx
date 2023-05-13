import { Heading, Container, BaseLayout } from '@shared/ui';

export default function SecondaryPage() {
  return (
    <BaseLayout>
      <section>
        <Container className="mt-2">
          <Heading type="h1">This page is used only as secondary page to check router ssr</Heading>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A sit obcaecati eius in suscipit eaque delectus
            dolorum animi hic adipisci. Magnam sit ea nam iste rem quibusdam vel rerum? Similique recusandae porro
            nostrum ea culpa quae placeat vero voluptatem, saepe nam, facere nisi non iure exercitationem hic tenetur
            quos eligendi quo beatae ex velit. Iusto non nostrum quae numquam ut. At ipsa eligendi repudiandae quisquam
            ipsum sint quod repellendus labore praesentium doloribus quis tempore aspernatur quas nemo iure, placeat ut
            cum aliquid. Maiores, ad? Officiis maxime quidem ex ipsum tempore eius sed tenetur assumenda, nihil quasi
            dolore, magni mollitia! Quos asperiores, amet dolore ullam nemo perferendis. Similique dicta magnam unde, ut
            voluptatibus voluptates corporis pariatur est possimus ab aspernatur ad.
          </p>
        </Container>
      </section>
    </BaseLayout>
  );
}
