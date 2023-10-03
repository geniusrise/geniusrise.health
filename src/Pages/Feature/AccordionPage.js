import React from 'react'
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader'
import NewsletterL1 from '../../Componet/Newsletter/NewsletterL1'

const AccordionPage = () => {
    return (
        <>
            <HerosectionHeader name={"Accordion"} folder1={"Features"} />
            <div class="page-content">
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="accordion" id="accordion">
                                    <div class="accordion-item rounded mb-2">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button border-0 mb-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                When our power of choice geniusrise.health ?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse border-0 collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                                            <div class="accordion-body text-muted">Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites and web page editors.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item rounded mb-2">
                                        <h2 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button border-0 mb-0 bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Nam libero tempore, cum soluta nobis ?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                                            <div class="accordion-body text-muted">Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites and web page editors.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item rounded">
                                        <h2 class="accordion-header" id="headingThree">
                                            <button class="accordion-button border-0 mb-0 bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                which is the same as saying through ?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                                            <div class="accordion-body text-muted">Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites and web page editors.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <NewsletterL1 />
            </div>
        </>
    )
}

export default AccordionPage;
