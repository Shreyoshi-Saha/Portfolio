import React from "react";
import education from "./data/education.json";

const Education = () => {
  return (
    <>
      <div className="container ex" id="education">
        <h1>EDUCATION</h1>
        {education.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                
                <div className="right">
                  <h2>{data.role}</h2>
                  <h3>{data.organisation}</h3>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.year}
                    </span>{" "}

                  </h4>
                  <h5 style={{ color: "yellow" }}>{data.experiences}</h5>
                  
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Education;
