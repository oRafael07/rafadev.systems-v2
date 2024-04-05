import { Header } from "@/components/header";
import { ProfileCard } from "@/components/profile-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
export default function Home() {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="px-8 md:px-36">
        <div className="flex mt-6 md:mt-0 md:flex-row flex-col justify-between items-center">
          <div>
            <h1 className="text-lg font-medium text-zinc-500">Olá, Eu sou</h1>
            <h4 className="text-6xl text-white font-bold">Rafael Rocha👋</h4>

            <Separator
              orientation="horizontal"
              className="h-1 w-24 my-6 bg-green-400"
            />

            <p className="md:w-96 text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="flex gap-4 mt-10">
              <Button
                variant="default"
                className="bg-green-400 text-zinc-700 hover:bg-green-500"
              >
                Entre em contato
              </Button>

              <Button
                variant="secondary"
                className="text-zinc-700 w-full md:w-auto"
              >
                Meu portifolio
              </Button>
            </div>
          </div>
          <div className="md:flex justify-center items-center">
            {/* <CardContainer className="inter-var ">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl">
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer> */}
          </div>
        </div>
      </div>
      <section>
        <div className="px-8 md:px-36 md:mt-20 mt-10">
          <h1 className="text-center text-4xl font-bold text-white">Resume</h1>

          <ProfileCard />
        </div>
      </section>
    </div>
  );
}
