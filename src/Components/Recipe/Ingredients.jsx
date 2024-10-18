import React from "react";

function Ingredients() {
  return (
    <div className="font-Inter">
    
      <p className="text-6xl font-bold p-4">Ingredients</p>
      <p className="text-3xl font-bold p-4">For main dish</p>
      <div className="p-8 flex">
      <div className="w-[60vw] h-[100vh] flex flex-col justify-evenly">
        <div className="flex p-4">
          <img src="./logos/black.png" width={"22px"} />
          <p className="ml-4">Lorem ipsum dolor sit amet</p>
        </div>
        <hr />
        <div className="flex p-4">
          <img src="./logos/circle.svg" width={"20px"}/>
          <p className="ml-4">Lorem ipsum dolor sit amet</p>
        </div>
        <hr />
        <div className="flex p-4">
          <img src="./logos/circle.svg" width={"20px"} />
          <p className="ml-4">Lorem ipsum dolor sit amet</p>
        </div>
        <hr />
        <div className="flex p-4">
          <img src="./logos/circle.svg" width={"20px"} />
          <p className="ml-4">Lorem ipsum dolor sit amet</p>
        </div>
        <hr />
        <div className="flex p-4">
          <img src="./logos/circle.svg" width={"20px"}/>
          <p className="ml-4">Lorem ipsum dolor sit amet</p>
        </div>
        <hr />
        <div className="flex p-4">
          <img src="./logos/circle.svg" width={"20px"}/>
          <p className="ml-4">Lorem ipsum dolor sit amet</p>
        </div>
        <hr />
        <p className="text-3xl font-bold mt-4">For the sauce</p>
        <div className="flex p-4">
          <img src="./logos/circle.svg" width={"20px"}/>
          <p className="ml-4">Lorem ipsum dolor sit amet</p>
        </div>
        <hr />
        <div className="flex p-4">
          <img src="./logos/circle.svg" width={"20px"}/>
          <p className="ml-4">Lorem ipsum dolor sit amet</p>
        </div>
        <hr />
        <div className="flex p-4">
          <img src="./logos/circle.svg" width={"20px"}/>
          <p className="ml-4">Lorem ipsum dolor sit amet</p>
        </div>
        <hr />
      </div>
      <div className="w-[40vw] h-[90vh]">
        <p className="text-5xl font-bold p-4 -my-24">Other Recipe</p>
        <div className="flex pt-28 px-12">
            <img src="./logos/meatballs.png" width={"170px"} className="rounded-3xl mr-3"/>
            <div className=" p-2 flex flex-col justify-between">
                <p className="text-2xl font-bold">Chicken Meatball with Creamy Chees...</p>
                <p className="text-sm text-gray-400">By Andreas Paula</p>
            </div>
        </div>
        <div className="flex pt-6 px-12">
            <img src="./logos/creamy.png" width={"170px"} className="rounded-3xl mr-3"/>
            <div className=" p-2 flex flex-col justify-between">
                <p className="text-2xl font-bold">The Creamiest Creamy Chicken an...</p>
                <p className="text-sm text-gray-400">By Andreas Paula</p>
            </div>
        </div>
        <div className="flex pt-6 px-12">
            <img src="./logos/pot.png" width={"170px"} className="rounded-3xl mr-3"/>
            <div className=" p-2 flex flex-col justify-between">
                <p className="text-2xl font-bold">The Best Easy One Pot Chicken and Rice</p>
                <p className="text-sm text-gray-400">By Andreas Paula</p>
            </div>
        </div>
        <img src="./logos/Ads.png" width={"330px"} className="translate-x-20 translate-y-14"/>
      </div>
      </div>
      <div className="w-[60vw] p-6 mb-24">
        <p className="text-6xl font-bold p-8 mt-4">Directions</p>
        <div className="flex p-4">
          <img src="./logos/circle.svg" width={"20px"} />
          <p className="ml-4 text-2xl">1. Lorem ipsum dolor sit amet </p>
        </div>
        <p className="ml-14 text-gray-400">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        <img src="./logos/girl.png" className="p-12"/>
        <p className="ml-14 text-gray-400">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        <hr className=" ml-10 my-10"/>
        <div className="flex p-4">
          <img src="./logos/circle.svg" width={"20px"} />
          <p className="ml-4 text-2xl">2. Lorem ipsum dolor sit amet </p>
        </div>
        <p className="ml-14 text-gray-400">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        <hr className="ml-10 my-10"/>
        <div className="flex p-4">
          <img src="./logos/circle.svg" width={"20px"} />
          <p className="ml-4 text-2xl">3. Lorem ipsum dolor sit amet </p>
        </div>
        <p className="ml-14 text-gray-400">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        <hr className="ml-10 my-10"/>
      </div>
    </div>
  );
}

export default Ingredients;
