import React from "react";
import "./success.css";
import Research from "../../assets/res.webp";
import test from "../../assets/test.webp";
const Success = () => {
  return (
    <div className="eden__success">
      <div className="eden__success_header">
        <div className="eden__success_header-titles">
          <h1>Check out our Top Doctors' <br /> new inventions & stories</h1>
        </div>
      </div>
      <div className="eden__success-content section__padding">
        <div className="eden__success-content_left eden__success_paragraph">
          <h2>Dr. Mohamed BEJAOUI</h2>
          <p>
            From 1998 to 2019, he was appointed head of the pediatrics, immuno-hematology and stem cell transplant department at the National Bone Marrow Transplant Center in Tunis In 1998, he was the first with his team to perform the first allografts of

            intrafamilial HLA geno-identical hematopoietic (marrow) stem cells,

            intended to treat serious hematological and immunological diseases and often

            of fatal evolution, in children
          </p>
          <p>Founder of a unit specializing in the management of syndromes

            thalassemia and sickle cell disease in children, at the national bone marrow transplant center

            Bone of Tunis

            Author or co-author of more than 200 international scientific publications Author of numerous national and international conferences on hematological and immunological diseases in children.

            Founder and president of the Tunisian association for the fight against constitutional hemolytic anemia and immune deficiencies "La joie de vivre" from 2003 to 2019.

            Co-founder and President of "The African Society for Immunodeficiencies" (ASID) from 2008 to 2012.</p>
        </div>
        <div className="eden__success-content_right eden__success_paragraph">
          <div className="eden__success-content_right-text">
            <p>
              In 2015, he and his team were the first to perform haplo-identical allografts, ie from a non-HLA-identical family donor. In 2018, he was the first with his team to perform the first autograft of

              hematopoietic stem cells in childhood solid tumors

            </p>
            <p>
              Since 2003, he has been involved in drug research with

              Novartis (Switzerland), Celgene (USA), Protagonist Therapeutics INC (USA),

              Apopharma (Canada) and the European community. He has thus been the principal investigator in 06 research programs on hemoglobin diseases.
            </p>
          </div>
        </div>
      </div>
      <div className="eden__success_image2 section__padding">
        <img loading="lazy" src={Research} alt="research" />
      </div>
    </div>
  );
};

export default Success;
