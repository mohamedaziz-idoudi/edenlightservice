import React from 'react'
import './pack.css';
import pic from '../../assets/Packs/adam & eve.jpg'
import sidibou from '../../assets/Packs/sidibou.jpg';
import sousse from '../../assets/Packs/sousse-palace.jpg';
import skate from '../../assets/Packs/skate.jpg';
const Pack = () => {
    return (
        <div className='eden__packs'>
            <div className="eden__packs-header">
                <div className="eden__packs-header_titles">
                    <h2>Currently most requested pack: </h2>
                </div>
                <div className="eden__packs-header_pack">
                    <h1>Romeo & Juliette</h1>
                    <ul>
                        <li>Tuesday 7th Feb- Saturday 18th Feb</li>
                        <li>TUNIS: From 7th Feb to 13th Feb</li>
                        <li>6 check-up days</li>
                    </ul>
                    <p>Check more infos here</p>
                    <div className="eden__form-button">
                        <button>Read More</button>
                    </div>
                </div>
            </div>
            <div className="eden__packs-content section__padding">
                <div className="eden__packs-content_item">
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
                                        <li>Biological and cytological assessment (screening for prostate cancer, fertility, diabetes, tumor markers, consulting a Gynecologist)</li>
                                        <li>Radiological assessment (consultation with Orthopedics and traumatology teacher and consultation with MRI neurologist teacher,
                                            electroencephalogram, herniated disc screening, bone density, sciatica problems)</li>
                                        <li>Breast ultrasound</li>
                                        <li>Cardiac assessment (cardiologist consultation, ECG, rhythmic and blood pressure holter, breath test)</li>
                                        <li>Gastroenterology assessment: consultation + fibroscopy or colonoscopy, screening for diseases of the
                                            liver</li>
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
                <div className="eden__packs-content_item">
                    <div className="eden__packs-content_item-title">
                        <h2>Romeo & Juliette</h2>
                    </div>
                    <div className="eden__packs-content_item-body">
                        <div className="eden__packs-content_item-body_text">
                            <div className="eden__packs-content_item-schedule">
                                <h3>Stay Details</h3>
                                <ul>
                                    <li>Tuesday 7th Feb- Saturday 18th Feb</li>
                                    <li>TUNIS: From 7th Feb to 13th Feb</li>
                                    <li>6 check-up days</li>
                                </ul>
                            </div>
                            <div className="eden__packs-content_item-paragraph">
                                <section className="eden__packs-content_item-paragraph_section">
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
                                <section className="eden__packs-content_item-paragraph_section">
                                    <h3>Logistics details</h3>
                                    <ul>
                                        <li>5-star hotel: stroll and discover the secrets and flavors of Greater Tunis and its epic history.</li>
                                        <li><h5>From 13th Feb to 16th Feb : Hammamet</h5></li>
                                        <li>
                                            <h5>Hotel and activities: </h5>
                                            <ul>
                                                <li>??????</li>
                                                <li>??????</li>
                                                <li>??????</li>
                                            </ul>
                                        </li>
                                        <li><h5>From 16th Feb to 18th Feb: Sousse</h5></li>
                                        <li>18th Feb end of vacation, Roadtrip to the airport</li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                        <div className="eden__packs-content_item-body_pics">
                            <img src={skate} alt="Skate" />
                            <img src={sidibou} alt="Sidi Bou Said" />
                            <img src={sousse} alt="Sousse" />
                        </div>
                    </div>
                </div>
                <div className="eden__packs-content_item">
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
                                        <li>Biological and cytological assessment (screening for prostate cancer, fertility, diabetes, tumor markers, consulting a Gynecologist)</li>
                                        <li>Radiological assessment (consultation with Orthopedics and traumatology teacher and consultation with MRI neurologist teacher,
                                            electroencephalogram, herniated disc screening, bone density, sciatica problems)</li>
                                        <li>Breast ultrasound</li>
                                        <li>Cardiac assessment (cardiologist consultation, ECG, rhythmic and blood pressure holter, breath test)</li>
                                        <li>Gastroenterology assessment: consultation + fibroscopy or colonoscopy, screening for diseases of the
                                            liver</li>
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
            </div>
        </div>
    )
}

export default Pack
