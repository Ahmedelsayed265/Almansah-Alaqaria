import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PropertyCard({ isHost }) {
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.language);

  return (
    <Link
      to={isHost ? "/host/my-listings/1" : "/properties/1"}
      className="unit_card"
    >
      <div className="images">
        <Swiper
          slidesPerView={1}
          speed={500}
          className="images_slider"
          dir={lang === "ar" ? "rtl" : "ltr"}
          rtl={lang === "ar"}
          key={lang}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <img src="/images/house-1.jpg" alt="house" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/house-2.jpg" alt="house" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/house-3.jpg" alt="house" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/house-4.jpg" alt="house" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="content">
        <div className="head_rate">
          <h5>Villa in Jeddah</h5>
          <button>
            <img src="/icons/star-filled.svg" alt="star" />
            4.98 (198)
          </button>
        </div>
        <p>Sea view villa with private garden</p>
        <div className="features">
          <div className="feature">
            <img src="/icons/size.svg" className="to_dark" alt="size" />
            75 m<sup>2</sup>
          </div>
          <div className="feature">
            <img src="/icons/beds.svg" className="to_dark" alt="size" />2
            bedroom
          </div>
          <div className="feature">
            <img src="/icons/baths.svg" className="to_dark" alt="size" />1
            bathroom
          </div>
        </div>
        <h6 className="price">
          <b>100</b> <span>{t("sar")}</span> / {t("night")}
        </h6>
      </div>
    </Link>
  );
}
