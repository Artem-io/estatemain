import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import SwiperClass from "swiper";
import "./SliderProjects.css";

const materials = {
    photos: [
        "images/ShowcaseSection/house-example.jpg",
        "images/ShowcaseSection/house-example.jpg",
        "images/ShowcaseSection/house-example.jpg",
    ],
    videos: [
        "https://www.youtube.com/watch?v=KMQ7_Hk5rVY",
        "https://www.youtube.com/watch?v=KMQ7_Hk5rVY"
    ],
};

export default function SliderProjects() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const slides = [...materials.photos, ...materials.videos];

    return (
        <div className="mb-[30px]">
            {/* Основной слайдер */}
            <Swiper
                modules={[Navigation, Pagination, Thumbs]}
                pagination={{ clickable: true }}
                navigation={true}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                thumbs={{ swiper: thumbsSwiper }}
            >
                {materials.photos.map((photo, index) => (
                    <SwiperSlide key={`photo-${index}`}>
                        <div className="w-full h-[300px] phone:h-[400px] small:h-[500px] flex justify-center items-center overflow-hidden bg-black">
                            <img
                                src={photo}
                                alt={`Project Photo ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
                {materials.videos.map((video, index) => {
                    const videoId = video.split("v=")[1];
                    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                    return (
                        <SwiperSlide key={`video-${index}`}>
                            <div className="w-full h-[300px] phone:h-[400px] small:h-[500px] flex justify-center items-center overflow-hidden bg-black">
                                <iframe
                                    src={embedUrl}
                                    title={`YouTube Video ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {/* Слайдер с миниатюрами */}
            <Swiper
                onSwiper={(swiper) => setThumbsSwiper(swiper)}
                modules={[Thumbs]}
                spaceBetween={10}
                slidesPerView={slides.length > 5 ? 5 : slides.length}
                watchSlidesProgress={true}
                className="h-[80px] phone:h-[100px] projectSlider"
            >
                {materials.photos.map((photo, index) => (
                    <SwiperSlide key={`thumb-photo-${index}`} className="cursor-pointer border-2 border-transparent">
                        <img
                            src={photo}
                            alt={`Thumb ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
                {materials.videos.map((video, index) => {
                    const videoId = video.split("v=")[1];
                    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    return (
                        <SwiperSlide key={`thumb-video-${index}`} className="cursor-pointer border-2 border-transparent">
                            <img
                                src={thumbnailUrl}
                                alt={`Thumb Video ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
