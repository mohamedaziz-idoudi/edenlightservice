import React from 'react'
import './pack.css';
import pic from '../../assets/Packs/adam & eve.jpg'
import sidibou from '../../assets/Packs/sidibou.jpg';
import sousse from '../../assets/Packs/sousse-palace.jpg';
import skate from '../../assets/Packs/skate.jpg';
import { useNavigate } from 'react-router-dom';
const Pack = () => {
    let navigate = useNavigate('');
    return (
        <div className='eden__packs'>
            <div className="eden__packs-header">
                <div className="eden__packs-header_titles">
                    <h2>Our Packs</h2>
                </div>
            </div>
            <div className="eden__packs-content">
                <div className="eden__packs_item section__padding">
                    <div className="eden__packs-content_item-title">
                        <h2>"Mon Incroyable Famille"</h2>
                    </div>
                    <div className="eden__packs-item_content">
                        <section className='eden__packs-item_content-section'>
                            <h4>Check-up for the husband:</h4>
                            <ul>
                                <li>Biological and cytological assessment (screening for prostate cancer, fertility, diabetes, tumor markers)</li>
                                <li>Radiological assessment (consultation with Orthopedics and traumatology teacher and consultation with MRI neurologist teacher,
                                    electroencephalogram, herniated disc screening, bone density, sciatica problems)</li>
                                <li>Abdomino-pelvic ultrasound (screening for liver disease, hepatitis)</li>
                                <li>Cardiac assessment (cardiologist consultation, ECG, rhythmic and blood pressure holter, breath test)</li>
                                <li>Gastroenterology assessment: consultation + fibroscopy or colonoscopy, screening for diseases of the
                                    liver</li>
                                <li>Dentist and ophthalmologist consultation</li>
                            </ul>
                        </section>
                        <section className='eden__packs-item_content-section'>
                            <h4>Check-up for the wife:</h4>
                            <ul>
                                <li>Biological and cytological assessment (screening for breast cancer, cancer of the
                                    body and cervix, fertility, diabetes, tumor markers Gynecologist consultation)</li>
                                <li>Radiological assessment (consultation with Orthopedist and traumatologist teacher and consultation with neurologist teacher MRI, electroencephalogram, herniated disc screening, bone density, sciatica problems)</li>
                                <li>Breast ultrasound</li>
                                <li>Cardiac assessment (cardiologist consultation, ECG, rhythmic and blood pressure holter, breath test; gastroenterology assessment: consultation + fibroscopy or colonoscopy, liver disease screening)</li>
                                <li>Creation of an artificial vagina, labioplasty, vaginal shrinkage</li>
                                <li>Dentist and ophthalmologist consultation</li>
                            </ul>
                        </section>

                    </div>
                    <section className='eden__packs-item_content-section' id='kids'>
                        <h4>Check-up for kids:</h4>
                        <p>Consultations pedodontist, pediatrician, ophthalmologist,
                            ENT, abdominopelvic ultrasound, panoramic X-ray,
                            Blood test,
                            Neuro-pediatrician or hematologist consultation if necessary</p>
                    </section>
                    <div className="eden__packs-logistics">
                        <h5>For logistic details</h5>
                        <div className='eden__button-blue'>
                            <button onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Contact Us</button>
                            <button onClick={() => { navigate('/medicaltourism'); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Visit our Medical Tourism Page</button>
                        </div>
                    </div>
                </div>
                <div className="eden__packs_item-romeo" id='romeo'>
                    <div className="eden__packs-content_item-title-romeo">
                        <h2>Romeo & Juliette</h2>
                    </div>
                    <div className="eden__packs-content_item-body-romeo">
                        <div className="eden__packs-content_item-body_text-romeo">
                            <div className="eden__packs-content_item-schedule-romeo">
                                <h3>Stay Details</h3>
                                <ul>
                                    <li>Tuesday 7th Feb- Saturday 18th Feb</li>
                                    <li>TUNIS: From 7th Feb to 13th Feb</li>
                                    <li>6 check-up days</li>
                                </ul>
                            </div>
                            <div className="eden__packs-content_item-paragraph-romeo">
                                <section className="eden__packs-content_item-paragraph_section-romeo">
                                    <h3>Medical Features</h3>
                                    <ul>
                                        <li>Biological Report
                                            <ul>
                                                <li>Screening for prostate cancer, breast cancer, cancer of the cervix and body of the uterus, STDs, diabetes
                                                    prevention</li>
                                                <li>Consultation gynecologist and urologist</li>
                                            </ul>
                                        </li>

                                        <li>Cardiac assessment (cardiologist consultation, ECG, rhythmic and blood pressure holter, breath test)</li>
                                    </ul>
                                </section>
                                <section className="eden__packs-content_item-paragraph_section-romeo">
                                    <h5>For logistic details</h5>
                                    <div className='form__button-romeo'>
                                        <button onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Contact Us</button>
                                        <button onClick={() => { navigate('/medicaltourism'); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Visit our Medical Tourism Page</button>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="eden__packs-content_item section__padding">
                    <div className="eden__packs-content_item-title">
                        <h2>Adam & Eve</h2>
                    </div>
                    <div className="eden__packs-content_item-body">
                        <div className="eden__packs-content_item-body_text">
                            <div className="eden__packs-content_item-schedule">
                                <h3>Stay Details</h3>
                                <ul>
                                    <li>14 Days in Tunis</li>
                                </ul>
                            </div>
                            <div className="eden__packs-content_item-paragraph">
                                <section className="eden__packs-content_item-paragraph_section">
                                    <h3>Check up Adam:</h3>
                                    <ul>
                                        <li>Biological and cytological assessment (screening for prostate cancer, fertility, diabetes, tumor markers)</li>
                                        <li>Radiological assessment (consultation with Orthopedics and traumatology teacher and consultation with MRI neurologist teacher,
                                            electroencephalogram, herniated disc screening, bone density, sciatica problems)</li>
                                        <li>Abdomino-pelvic ultrasound (screening for liver disease, hepatitis)</li>
                                        <li>Cardiac assessment (cardiologist consultation, ECG, rhythmic and blood pressure holter, breath test)</li>
                                        <li>Gastroenterology assessment: consultation + fibroscopy or colonoscopy, screening for diseases of the
                                            liver</li>
                                        <li>Dentist and ophthalmologist consultation</li>
                                    </ul>
                                </section>
                                <section className="eden__packs-content_item-paragraph_section">
                                    <h3>Check up Eve:</h3>
                                    <ul>
                                        <li>Biological and cytological assessment (screening for breast cancer, cancer of the
                                            body and cervix, fertility, diabetes, tumor markers Gynecologist consultation)</li>
                                        <li>Radiological assessment (consultation with Orthopedist and traumatologist teacher and consultation with neurologist teacher MRI, electroencephalogram, herniated disc screening, bone density, sciatica problems)</li>
                                        <li>Breast ultrasound</li>
                                        <li>Cardiac assessment (cardiologist consultation, ECG, rhythmic and blood pressure holter, breath test; gastroenterology assessment: consultation + fibroscopy or colonoscopy, liver disease screening)</li>
                                        <li>Dentist and ophthalmologist consultation</li>
                                    </ul>
                                </section>
                                <section className="eden__packs-content_item-paragraph_section">
                                    <h3>Schedule</h3>
                                    <p>Visit of Tunis the historic city and the remains of Carthage</p>
                                    <p>Visit of the city of Hammamet and Sousse (boat trip, tour
                                        from the city in horse-drawn carriages or on the back of a dromedary, quad on the mountain,
                                        discovery of the medina, skiing)</p>
                                </section>
                            </div>
                        </div>
                        <div className="eden__packs-content_item-body_pic">
                            <img src={pic} alt="Adam & Eve" />
                        </div>
                    </div>
                    <div className="eden__packs-item_pictures">
                        <img src={skate} alt="Skate" />
                        <img src={sidibou} alt="Sidi Bou Said" />
                        <img src={sousse} alt="Sousse" />
                    </div>
                </div>
                <div className="eden__packs-honeymoon">
                    <div className="eden__packs-honeymoon-header">
                        <h2>Honeymoon Pack</h2>
                    </div>
                    <div className="eden__packs-honeymoon-content">
                        <div className="eden__packs-honeymoon-content_item">
                            <h3>Medical Details</h3>
                            <p>
                                Biological assessment: prostate cancer screening, breast cancer,
                                cancer of the cervix and body of the uterus, STDs, diabetes prevention, consultation
                                gynecologist and urologist</p>
                            <p>
                                Cardiac assessment: ECG; rhythmic and blood pressure holter, prevention
                                hypertension, cardiologist consultation
                            </p>
                        </div>
                        <div className="eden__packs-honeymoon-content_item">
                            <h3>Leisure</h3>
                            <p>
                                Claim this pack and enjoy the great tour of Tunisia. It includes sightseeing in Greater Tunis and its historical monuments. It also contains leisure activities in Hammamet, Sousse, Djerba and more...</p>
                            <h5>For logistic details</h5>
                            <div className='form__button'>
                                <button onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Contact Us</button>
                                <button onClick={() => { navigate('/medicaltourism'); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Visit our Medical Tourism Page</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pack
