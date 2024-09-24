import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import award1 from "@/assets/svgs/awards/award1.svg";
import award2 from "@/assets/svgs/awards/award2.svg";
import award3 from "@/assets/svgs/awards/award3.svg";
import award4 from "@/assets/svgs/awards/award4.svg";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const awards = [award1, award2, award3, award4, award1, award2];

export default function AwardCarousel() {
  return (
    <section className="flex flex-col gap-2 items-center justify-center">
      <h2 className="text-2xl font-bold text-center mb-8 text-emerald-950">
        H2 Awards
      </h2>
      <p className="text-sm max-w-xl text-center mb-8 text-black">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolo aliquyam erat, sed diam
        voluptua.
      </p>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-screen-lg"
      >
        <CarouselContent>
          {awards.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col gap-4  items-center justify-center p-2 py-10">
                    <Image src={item} width={60} height={60} alt="award" />
                    <div className="text-sm text-center flex items-center gap-2">
                      <p> Lorem ipsum</p>

                      <ArrowRight className="w-4 h-4 text-emerald-900" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-emerald-900 border-2 border-orange-400" />
        <CarouselNext className="text-emerald-900 border-2 border-orange-400" />
      </Carousel>
    </section>
  );
}
