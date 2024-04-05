import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ProfileCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-800 bg-opacity-40 relative group/card w-auto h-auto rounded-xl flex flex-col md:flex-row gap-8 pt-8 md:pt-0">
        <CardItem
          translateZ="50"
          rotateX={10}
          rotateZ={-10}
          className="mx-auto"
        >
          <div className="md:h-96 md:w-[300px] w-[130px] h-[130px]">
            <Image
              src="/profile.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl md:rounded-xl group-hover/card:shadow-xl ring-2 md:ring-0 ring-green-400 p-1"
              alt="thumbnail"
            />
          </div>
        </CardItem>
        <div>
          <CardItem
            translateZ="50"
            className="text-4xl font-medium text-white md:mt-10 mt-6 px-8"
          >
            Rafael
          </CardItem>

          <CardItem
            translateZ="50"
            className="text-sm font-medium text-zinc-500 px-8"
          >
            20 anos
          </CardItem>

          <CardItem
            translateZ="50"
            className="text-sm font-medium text-zinc-400 mt-10 mb-5 md:mr-5 md:w-[300px] px-8"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
