import React from 'react';
import { default as svg1 } from '../../assets/images/svg/01.svg';
import { default as svg2 } from '../../assets/images/svg/02.svg';
import { default as svg3 } from '../../assets/images/svg/03.svg';
import { default as svg4 } from '../../assets/images/svg/04.svg';

function FeatureL3() {
    const data1 = [
        {
            service: 'Dashboard',
            details: 'Taking design from geniusrise.health design and typography, contemporary page layouts.',
            img: svg1,
        },
        {
            service: 'Easy to use',
            details: 'Taking design from geniusrise.health design and typography, contemporary page layouts.',
            img: svg2,
        },
    ];
    const data2 = [
        {
            service: 'Clean code',
            details: 'Taking design from geniusrise.health design and typography, contemporary page layouts.',
            img: svg3,
        },
        {
            service: 'User Friendly',
            details: 'Taking design from geniusrise.health design and typography, contemporary page layouts.',
            img: svg4,
        },
    ];
    return (
        <>
            <section class="p-0">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-5 col-md-6 pe-lg-4">
                            <div class="mb-5">
                                <h2 class="mb-0">
                                    <span class="font-w-4 d-block">Exclusive services</span> for the next creative
                                    project
                                </h2>
                            </div>
                            {data1.map((item) => {
                                return (
                                    <>
                                        <div class="px-lg-7 px-4 py-5 rounded bg-white shadow text-center mb-5">
                                            <div>
                                                <img class="img-fluid" src={item.img} alt="" />
                                            </div>
                                            <h5 class="mt-4 mb-3">{item.service}</h5>
                                            <p class="mb-0">{item.details}</p>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                        <div class="col-lg-5 col-md-6 ps-lg-4 mt-5 mt-lg-0">
                            {data2.map((item) => {
                                return (
                                    <>
                                        <div class="px-lg-7 px-4 py-5 rounded bg-white shadow text-center mb-5">
                                            <div>
                                                <img class="img-fluid" src={item.img} alt="" />
                                            </div>
                                            <h5 class="mt-4 mb-3">{item.service}</h5>
                                            <p class="mb-0">{item.details}</p>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FeatureL3;
