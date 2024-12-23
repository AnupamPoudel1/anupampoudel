import memojiImage from '@/app/assets/images/bitmoji1.jpg';
import { FaArrowDownLong } from "react-icons/fa6";
import grainImage from '@/app/assets/images/grain.jpg';
import { GrStar } from "react-icons/gr";
import { MdOutlineStarBorder } from "react-icons/md";
import Orbit from '@/components/Orbit';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip' id='home'>
            <div className="absolute inset-0 mask pointer-events-none">
                <div className="absolute inset-0 -z-30 opacity-5" style={{
                    backgroundImage: `url(${grainImage})`
                }}
                ></div>

                <div className="size-[620px] hero-ring"></div>
                <div className="size-[820px] hero-ring"></div>
                <div className="size-[1020px] hero-ring"></div>
                <div className="size-[1220px] hero-ring"></div>

                <Orbit size={430} rotation={-13} should={true} duration='30s' shouldSpin={true} spinDuration='5s'>
                    <MdOutlineStarBorder className='size-8 opacity-20' />
                </Orbit>

                <Orbit size={440} rotation={79} should={true} duration='32s' shouldSpin={true} spinDuration='5s'>
                    <MdOutlineStarBorder className='size-5 opacity-20' />
                </Orbit>

                <Orbit size={510} rotation={-40} should={true} duration='34s'>
                    <div
                        className='size-3 bg-secondary rounded-full opacity-20'
                    />
                </Orbit>

                <Orbit size={530} rotation={178} should={true} duration='36s' shouldSpin={true} spinDuration='5s'>
                    <MdOutlineStarBorder className='size-10 opacity-20' />
                </Orbit>

                <Orbit size={550} rotation={20} should={true} duration='38s' shouldSpin={true} spinDuration='10s'>
                    <GrStar
                        className='size-12'
                    />
                </Orbit>

                <Orbit size={590} rotation={98} should={true} duration='40s' shouldSpin={true} spinDuration='10s'>
                    <GrStar className='size-8' />
                </Orbit>

                <Orbit size={650} rotation={-5} should={true} duration='42s'>
                    <div
                        className='size-3 bg-secondary rounded-full opacity-20'
                    />
                </Orbit>

                <Orbit size={710} rotation={145} should={true} duration='44s' shouldSpin={true} spinDuration='5s'>
                    <MdOutlineStarBorder className='size-14 opacity-20' />
                </Orbit>

                <Orbit size={710} rotation={80} should={true} duration='46s'>
                    <div
                        className='size-3 bg-secondary rounded-full opacity-20'
                    />
                </Orbit>

                <Orbit size={800} rotation={-72} should={true} duration='48s' shouldSpin={true} spinDuration='10s'>
                    <GrStar className='size-28' />
                </Orbit>
            </div>

            <div className="container">
                <div className="flex-col-center">
                    <Image
                        src={memojiImage}
                        alt="Emoji of person behind laptop"
                        className='size-[100px]'
                    />
                    <div className='bg-secondary border border-text px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
                        <div className='bg-green-600 size-2.5 rounded-full relative'>
                            <div className="absolute inset-0 size-2.5 bg-green-600 rounded-full animate-ping-large">

                            </div>
                        </div>
                        <div className='text-sm font-medium text-primary'>
                            Available for new projects.
                        </div>
                    </div>
                </div>

                <div className="max-w-lg m-auto">
                    <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide text-secondary font-extrabold'>Building Exceptional User Experiences</h1>
                    <p className='mt-4 text-center text-text md:text-lg'>
                        I specialize in transforming designs into functional, high performing web applications. Let's discuss your next project.
                    </p>
                </div>
                <div className='flex-center flex-col md:flex-row mt-8 gap-4'>
                    <a href="https://linkedin.com/in/anupampoudel">
                        <button className='inline-flex items-center gap-2 border border-secondary px-6 h-12 rounded-xl bg-secondary text-primary'>
                            <span>
                                👋
                            </span>
                            <span className='font-semibold'>
                                Let's Connect
                            </span>
                        </button>
                    </a>
                    <a href="#projects">
                        <button className='inline-flex items-center gap-2 border border-text px-6 h-12 rounded-xl'>
                            <span className='font-semibold'>
                                Explore My Work
                            </span>
                            <FaArrowDownLong className='size-4' />
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}
