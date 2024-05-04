import React from "react";
import { MdEmail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="footer" style={{ marginTop: 150 }}>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <div>
        <div>
          <div>
            <span className="text-2xl">Address</span>
          </div>
          <div>
            <div className="flex flex-wrap">
              <GiPositionMarker className="text-3xl" />
              <span className="text-1xl ml-2">Italy Naples(NA)</span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div>
            <span className="text-2xl">Email</span>
          </div>
          <div>
            <div className="flex flex-wrap">
              <MdEmail className="text-3xl" />
              <span className="text-1xl ml-2">mannitiemanuele@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-1xl font-serif p-4 text-white">Emanuele Manniti - {new Date().getFullYear()}</h1>
      </div>
    </footer>
  );
}
