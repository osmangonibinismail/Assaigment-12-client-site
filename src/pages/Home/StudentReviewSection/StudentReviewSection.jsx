import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/navigation';

const StudentReviewSection = () => {
    return (
        <div className='max-w-[1440px] mx-auto px-4 pb-24'>
            <div className="text-center mb-10">
                <p className="font-medium text-[#ed2027]">STUDENTS REVIEW</p>
                <h1 className="text-4xl font-medium mt-2">What's People Say's</h1>
            </div>

            <Swiper modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation>
                {/* 
                    {
                        reviews.map (item =>  <swiperslide key={item._id}>)
            `       }
                */}
                <SwiperSlide>
                    <div className="border-2 p-4 flex flex-grow-0">
                        <div className="space-y-5 min-h-full">
                            <h1 className="text-3xl font-medium text-black">swiper title</h1>
                            <p className="text-lg">swiper body</p>
                            <div className="flex items-center gap-3">
                                <img src="https://i.ibb.co/k5jGd99/iiuc.jpg" alt="" className="rounded-full w-[35px]" />
                                <p>item</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default StudentReviewSection
