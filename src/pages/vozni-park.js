import React from 'react'
import Wrap from '@/components/Wrap'
import Image from 'next/image'
import Head from 'next/head'

const Vozni_Park = () => {
  return (
    <>
      <Head>
        <title>Vozni park - Auto Škola Start Prijedor - Driving School Start Prijedor</title>
        <link rel="canonical" href="https://asstartprijedor.com/vozni-park/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index"></meta>
        <meta property="og:title" content="Vozni park - Auto Škola Start Prijedor - Driving School Start Prijedor" />
        <meta property="og:description" content="Motorna vozila i njihova ispravnost i kvalitet su temelj našeg poslovanja. Zbog toga se trudimo da uvijek idemo u korak sa vremenom i prilagođavamo naš vozni park Vama i Vašim potrebama." />
        <meta property="og:url" content="https://asstartprijedor.com/vozni-park/" />
      </Head>

      <div className="border-t-2 border-secondary w-full"></div>
      <Wrap extendClassName="mt-8 lg:mt-16 lg:mb-16">
        <h1 className="text-4xl lg:text-[60px] font-bold text-center mb-8 lg:mb-16">Vozni Park</h1>
        <p className="text-center lg:text-left lg:text-lg">Motorna vozila i njihova ispravnost i kvalitet su temelj našeg poslovanja. Zbog toga se trudimo da uvijek idemo u korak sa vremenom i prilagođavamo naš vozni park Vama i Vašim potrebama.</p>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8 lg:mt-16">
            <div className="flex justify-center items-center mb-4">
              <Image src="/motor2-644x483.png" width={640} height={480} alt="Motor2"></Image>
            </div>
            <div className="flex justify-center items-center mb-4">
              <Image src="/auta4-644x483.jpg" width={640} height={480} alt="Car4"></Image>
            </div>
            <div className="flex justify-center items-center mb-4">
              <Image src="/1-644x483.jpg" width={640} height={480} alt="Car1"></Image>
            </div>
            <div className="flex justify-center items-center mb-4">
              <Image src="/voznipark3-768x768.jpg" width={640} height={480} alt="Voznipark3"></Image>
            </div>
            <div className="flex justify-center items-center mb-4">
              <Image src="/voznipark4-644x483.jpg" width={640} height={480} alt="Voznipark4"></Image>
            </div>
            <div className="flex justify-center items-center mb-4">
              <Image src="/truck.jpg" width={640} height={480} alt="Truck"></Image>
            </div>
          </div>
        </div>
      </Wrap>
    </>
  )
}

export default Vozni_Park