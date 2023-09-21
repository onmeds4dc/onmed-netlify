import * as React from "react";
import Layout from "../components/layout";
import CardColsSecondary from "../components/card-cols-secondary";
import ContactForm from "../components/contact-form";
import { ImgBooth } from "../components/images/general/booth";
import { Link } from "gatsby";
import MetaTags from "../components/meta-tags";
import { ImgHeroManOfficeChair } from "../components/images/heroes/man-office-chair";
import Hero from "../components/hero";

const BenefitsPage = ({ data }) => {
    const sectionHero = (
        <Hero
            img={
                <ImgHeroManOfficeChair
                    alt="Become an OnMed partner"
                    positions="70% 50%"
                    classNames="mb-5 mb-md-6"
                />
            }
        >
            Our Benefits
        </Hero>
    );

    const sectionBenefits = (
        <section className="container py-6 my-4">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                    <dl className="dl-primary lead row">
                        <dt>Health & Wellness</dt>
                        <dd>
                            <li>Medical Coverage (Including Prescription Drugs)</li>
                            <li>Dental Coverage</li>
                            <li>Vision Coverage</li>
                            <li>Telemedicine</li>
                            <li>Use of the OnMed Care Station for Diagnoses</li>
                            <li>Employee Assistance Program</li>
                        </dd>
                        <div className="100%"></div>

                        <dt>FInancial Benefits</dt>
                        <dd>
                            <li>Medical Coverage (Including Prescription Drugs)</li>
                            <li>Dental Coverage</li>
                            <li>Vision Coverage</li>
                            <li>Telemedicine</li>
                            <li>Use of the OnMed Care Station for Diagnoses</li>
                            <li>Employee Assistance Program</li>
                        </dd>
                        <div className="100%"></div>
                        <dt>Additional Benefits</dt>
                        <dd>
                            <li>Medical Coverage (Including Prescription Drugs)</li>
                            <li>Dental Coverage</li>
                            <li>Vision Coverage</li>
                            <li>Telemedicine</li>
                            <li>Use of the OnMed Care Station for Diagnoses</li>
                            <li>Employee Assistance Program</li>
                        </dd>
                        <div className="100%"></div>
                    </dl>
                </div>
            </div>
        </section>
    );


    return (
        <Layout>
            {sectionHero}
            {sectionBenefits}
        </Layout>
    );
};

export default BenefitsPage;

export const Head = () => {
    const title = "Benefits - OnMed";
    return (
        <>
            <title>{title}</title>
            <MetaTags title={title} description="OnMed is a convenient virtual healthcare solution for
                    sponsor partners including Government Agencies, Payers,
                    Providers, Large Employers, Colleges and Universities and
                    high-traffic venues." ></MetaTags>
        </>
    )
};
