import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

const RouteLoader = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 30000); // ✅ Change this to any time you want

    return () => clearTimeout(timer);
  }, [location.key]); // 🔥 IMPORTANT: use location.key

  return loading && <Loader />;
};

export default RouteLoader;
