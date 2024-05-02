import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";
import PropertyImg from "@/assets/Property.jpg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));
  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="w-full h-[400px] bg-muted/40">
                  <CardContent className="flex items-center justify-center p-6">
                    <img
                      className="h-[350px] w-full object-cover rounded-md"
                      src={PropertyImg}
                      alt="Property Image"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Card className="rounded-none h-[130px] bg-custom-brown_200">
        <CardContent className="flex h-full justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-base lg:text-xl font-headingFont text-white">
              Lodge a complain about your property
            </h1>
            <Button className="bg-custom-yellow_200">Submit a Complain</Button>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col items-center justify-center my-5">
        <h2 className="text-center font-headingFont font-semibold">
          Frequently asked questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className=" w-[300px] lg:w-[600px]"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>What do Property rights do?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              ut iste nihil ad enim impedit omnis odit laudantium. Voluptate id
              corporis maiores quod sapiente facilis quos exercitationem. Quidem
              consequuntur unde doloremque dolorum dignissimos accusantium
              dolore accusamus repudiandae. Cupiditate incidunt, ea ex voluptas
              quasi vel, nobis, dolorum laudantium accusamus sint maiores?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              Where is Property rights company located?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              pariatur id, magnam ipsum laboriosam, dolores ea odit magni quis
              explicabo neque? Eius, harum ea doloremque hic quod ratione
              ducimus facere corrupti animi et quos aut! Blanditiis, autem esse
              mollitia sint magni et! Autem et dolore cum eius quas eos
              deserunt!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How can I protect my properties</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              voluptates? Eius omnis sequi obcaecati fugit ex dolore distinctio
              asperiores repudiandae necessitatibus commodi, quia mollitia, ut
              aliquam provident natus quasi nulla itaque similique ducimus
              debitis in accusantium explicabo accusamus aperiam. Eum?
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <footer>
        <Card className="rounded-none h-[200px] bg-custom-brown_200">
          <CardContent className="flex h-full justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-1">
              <h1 className="text-xl font-headingFont text-white">
                Footer will be here
              </h1>
            </div>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
};

export default LandingPage;
