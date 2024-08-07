import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faChartLine,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";

const APP_NAME = import.meta.env.VITE_APP_NAME;
const AboutComponent: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Tentang Kami
          </h2>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/3 mb-8 lg:mb-0">
              <img
                src="https://via.placeholder.com/300"
                alt={APP_NAME}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="lg:w-2/3 lg:pl-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Selamat datang di {APP_NAME}, platform terdepan untuk mencari
                dan menjual properti. Kami berkomitmen untuk memberikan
                pengalaman terbaik dalam dunia real estate dengan menghubungkan
                pembeli, penjual, dan agen properti melalui teknologi inovatif.
              </p>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  className="text-xl  w-8 text-blue-500 mr-4"
                  icon={faBuilding}
                />
                <p className="text-lg text-gray-700">
                  Tim ahli kami berdedikasi untuk memastikan bahwa setiap
                  pengguna dapat menemukan properti impian mereka dengan mudah
                  dan cepat.
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  className="text-xl w-8 text-green-500 mr-4"
                  icon={faHandsHelping}
                />
                <p className="text-lg text-gray-700">
                  Kami juga menyediakan informasi pasar terkini dan alat
                  analisis untuk membantu Anda membuat keputusan yang tepat.
                </p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  className="text-xl  w-8 text-red-500 mr-4"
                  icon={faChartLine}
                />
                <p className="text-lg text-gray-700">
                  Bergabunglah dengan kami dan temukan bagaimana {APP_NAME}
                  dapat membantu Anda dalam perjalanan mencari atau menjual
                  properti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
