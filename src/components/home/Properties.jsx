import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropertyCard from "./../../ui/cards/PropertyCard";

export default function Properties() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 p-2 mb-4">
          <div className="sec_header">
            <div className="section_title">
              <h2>{t("propertiesTitle")}</h2>
              <p>{t("propertiesDesc")}</p>
            </div>
            <Link to="/destinations">{t("viewAll")}</Link>
          </div>
        </div>
        {Array(4)
          .fill()
          .map((_, i) => (
            <div key={i} className="col-lg-3 col-md-6 col-12 p-2">
              <PropertyCard />
            </div>
          ))}
      </div>
    </div>
  );
}