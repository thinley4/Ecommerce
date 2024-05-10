'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import one from './assets/one.jpg'
import two from './assets/two.jpg'
import three from './assets/three.png'
import four from './assets/four.jpg'
import five from './assets/five.jpg'


export function CarouselShadcn() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const arr = [
    {
      url: four
    },
    {
      url: five
    },
    {
      url: three
    },
    {
      url: one
    },
    {
      url: two
    }
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-[85rem]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {arr.map((a, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center">
                  <Image src={a.url} alt="img" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden 2xl:block"/>
      <CarouselNext className="hidden 2xl:block"/>
    </Carousel>
  )
}
