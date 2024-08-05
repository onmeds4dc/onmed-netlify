import * as React from "react";
import Layout from "../components/layout";
import MetaTags from "../components/meta-tags";
import Hero from "../components/hero";

const PrivacyPage = ({ data }) => {
    const sectionHero = (
        <Hero heroSecondary={true}>
            HIPAA Privacy Notice
        </Hero>
    );

    const sectionContent = (
        <div class="container py-6 py-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-10 col-xxl-12">
                    <p>Effective Date: July 2024</p>
                    <h2 class="h6 mt-5">NOTICE OF PRIVACY PRACTICES</h2>
                    <p>You’re in control of your medical information! This document explains what happens to your medical records, including how we use them, share them with others, and how you can see them.</p>
                    
                    <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-12">
                    <dl className="dl-primary lead row">
                        <dt>Want a copy of your medical records?</dt>
                        <dd>
                            <li>You can request them by email: patientinquiry@onmed.com. We can send them to you by secure e-mail or on paper, whichever you prefer.</li><br>
                            <li>We’ll usually have your records or a summary ready within 30 days of your request. There might be a small fee to cover the cost of providing them.</li>
                        </dd>
                        
                        <div className="100%"></div>

                        <dt>Spot a mistake in your medical records?</dt>
                        <dd>
                            <li>Let us know by email at patientinquiry@onmed.com. We’ll review your request and, if we agree there’s a correction needed, we’ll update your records. 
                                It is important to note that we can’t erase what’s already documented, but we’ll add a note explaining the correction. </li>
                        </dd>
      
                        <div className="100%"></div>
      
                        <dt>Let us know how you prefer to hear from us!</dt>
                        <dd>
                            <li>We’ll do our best to respect your wishes about how we contact you regarding your health information. This could include phone calls or texting.</li>
                        </dd>
      
                        <div className="100%"></div>

                        <dt>There are some situations where you can limit how we use or share your medical information.</dt>
                        <dd>
                            <li>This applies to things related to treatment, billing and how we run our practice. However, there are times when the law requires us to share your information regardless of your request.</li><br>
                            <p>Here are some examples:</p><br>
                            <li>We can share your information with your insurance company to process a bill.</li><br>
                            <li>We can share your information with another doctor involved in your treatment.</li>
                        </dd>
      
                        <div className="100%"></div>

                        <dt>Curious about who we’ve shared your medical records with?</dt>
                        <dd>
                            <li>You can request a list of who received your information and why, going back six years. The first request each year is free. There might be a charge for additional requests within the same year.</li>
                        </dd>
      
                        <div className="100%"></div>

                        <dt>Want another copy of this Notice?</dt>
                        <dd>
                            <li>We can mail you a printed copy or you can view it online at our website: www.OnMed.com</li>
                        </dd>
      
                        <div className="100%"></div>

                        <dt>Someone else acting on your behalf? </dt>
                        <dd>
                            <li>If you have a legal guardian or someone with a medical power of attorney for your health decisions, they can access your medical information and make choices about it on your behalf. 
                                We’ll need to confirm their legal authority first.</li>
                        </dd>
      
                        <div className="100%"></div>

                        <dt>Think we’ve violated your privacy rights?</dt>
                        <dd>
                            <li>We take complaints seriously. You can let us know by email at patientinquiry@onmed.com, or you can file a complaint with the U.S. Department of Health & Human Services. Here is how to contact them: 
                                by email OCR at OCRMail@hhs.gov or call the U.S. Department of Health and Human Services, Office for Civil Rights toll-free at: 1-800-368-1019, TDD: 1-800-537-7697. </li><br>
                            <li>Just to be clear, we will never punish you in any way for filing a complaint.</li>
                        </dd>
      
                        <div className="100%"></div>

                        <dt>We can share your medical information with your consent.</dt>
                        <dd>
                            <li>Your family, friends, or a caregivers;</li><br>
                            <li>Your name might show up on a hospital list if you are ok with it; and</li>
                        </dd>
      
                        <div className="100%"></div>

                        <dt>We may share your medical information without your consent.</dt>
                        <dd>
                            <li>In emergencies, like a disaster;</li><br>
                            <li>If you can’t tell us what you want, or if you’re really hurt, we might share your information anyway because we want to help you.</li>
                        </dd>
      
                        <div className="100%"></div>

                        <dt>Sometimes we might call you to raise money.</dt>
                        <dd>
                            <li>You can always say no, or you can even tell us to stop calling about this completely.</li>
                        </dd>
      
                        <div className="100%"></div>

                        <dt>We won’t sell your info!</dt>
                        <dd>
                            <li>Or try to sell you stuff. We also won’t share any therapy information unless you sign a paper saying it’s okay.</li>
                        </dd>
      
                        <div className="100%"></div>
                    </dl>
                </div>
            </div>
                    
                </div>
            </div>
        </div>
    );


    return (
        <Layout>
            {sectionHero}
            {sectionContent}
        </Layout>
    );
};

export default PrivacyPage;

export const Head = () => (
    <>
        <title>HIPAA Privacy Notice - OnMed</title>
        <MetaTags></MetaTags>
    </>
);
