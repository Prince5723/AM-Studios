import { Check, Minus, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function Pricing() {
    return (
        <div className="w-full py-20 lg:py-40 bg-black text-neutral-100">
            <div className="container mx-auto">
                <div className="flex text-center justify-center items-center gap-4 flex-col">
                    <Badge className="bg-neutral-800 text-neutral-200">Pricing</Badge>

                    <div className="flex gap-2 flex-col">
                        <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                            Prices that make sense!
                        </h2>
                        <p className="text-lg leading-relaxed tracking-tight text-neutral-400 max-w-xl text-center">
                            Crafting standout visuals today takes more than just gear.</p>
                    </div>

                    <div className="grid text-left w-full grid-cols-3 lg:grid-cols-4 divide-x divide-neutral-800 pt-20">
                        <div className="col-span-3 lg:col-span-1"></div>

                        {/* Startup */}
                        <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
                            <p className="text-2xl">Basic</p>
                            <p className="text-sm text-neutral-400">
                                Our goal is to streamline the entire video creation process, delivering speed, efficiency, and quality for every client.
                            </p>
                            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                                <span className="text-4xl">Rs. 2500</span>
                                <span className="text-sm text-neutral-400"> / hour</span>
                            </p>
                            <Button variant="outline" className="gap-4 mt-8 border-neutral-700 text-black">
                                Try it <MoveRight className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* Growth */}
                        <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
                            <p className="text-2xl">Standard</p>
                            <p className="text-sm text-neutral-400">
                                Our goal is to streamline the entire video creation process, delivering speed, efficiency, and quality for every client.

                            </p>
                            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                                <span className="text-4xl">Rs. 5000</span>
                                <span className="text-sm text-neutral-400"> / hour</span>
                            </p>
                            <Button className="gap-4 mt-8 bg-neutral-800 hover:bg-neutral-700 text-neutral-200">
                                Try it <MoveRight className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* Enterprise */}
                        <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
                            <p className="text-2xl">Premium</p>
                            <p className="text-sm text-neutral-400">
                                Our goal is to streamline the entire video creation process, delivering speed, efficiency, and quality for every client.

                            </p>
                            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                                <span className="text-4xl">Rs. 7000</span>
                                <span className="text-sm text-neutral-400"> / month</span>
                            </p>
                            <Button variant="outline" className="gap-4 mt-8 border-neutral-700 text-black">
                                Contact us <PhoneCall className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* Feature List */}
                        <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                            <b>Features</b>
                        </div>
                        <div></div><div></div><div></div>

                        {/* Space*/}
                        <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">Space</div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Check className="w-4 h-4" />
                        </div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Check className="w-4 h-4" />
                        </div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Check className="w-4 h-4" />
                        </div>

                         {/* Furniture*/}
                        <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">Furniture</div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Check className="w-4 h-4" />
                        </div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Check className="w-4 h-4" />
                        </div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Check className="w-4 h-4" />
                        </div>

                        {/* Lighting */}
                        <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">Lighting</div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Check className="w-4 h-4" />
                        </div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Check className="w-4 h-4" />
                        </div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Check className="w-4 h-4" />
                        </div>

                        {/* AI Assistant */}
                        <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">Equipment</div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Minus className="w-4 h-4 text-neutral-600" />
                        </div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Check className="w-4 h-4" />
                        </div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Check className="w-4 h-4" />
                        </div>

                        {/* Version Control */}
                        <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">Technician</div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Minus className="w-4 h-4 text-neutral-600" />
                        </div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Check className="w-4 h-4" />
                        </div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Check className="w-4 h-4" />
                        </div>

                        {/* Multiplayer */}
                        <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">Post Production</div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Minus className="w-4 h-4 text-neutral-600" />
                        </div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Minus className="w-4 h-4 text-neutral-600" />
                        </div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Check className="w-4 h-4" />
                        </div>

                          {/* Multiplayer */}
                        <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">Editing</div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Minus className="w-4 h-4 text-neutral-600" />
                        </div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Minus className="w-4 h-4 text-neutral-600" />
                        </div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Check className="w-4 h-4" />
                        </div>

                          {/* Multiplayer */}
                        <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">Teaser and Highlights</div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Minus className="w-4 h-4 text-neutral-600" />
                        </div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Minus className="w-4 h-4 text-neutral-600" />
                        </div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Check className="w-4 h-4" />
                        </div>

                          {/* Multiplayer */}
                        <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">Short Clips</div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Minus className="w-4 h-4 text-neutral-600" />
                        </div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Minus className="w-4 h-4 text-neutral-600" />
                        </div>
                        <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                            <Check className="w-4 h-4" />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
