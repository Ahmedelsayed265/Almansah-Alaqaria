import { Link } from "react-router-dom";

export default function DestinationCard() {
  return (
    <Link to="/destinations">
      <div className="img">
        <img src="images/d1.jpg" alt="destination" />
        <div className="title">
          <h3>الرياض</h3>
          <p>75,432 شقة مطلة</p>
        </div>
      </div>
    </Link>
  );
}