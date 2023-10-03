import React from 'react'
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader'
import NewsletterL1 from '../../Componet/Newsletter/NewsletterL1'

const TeamMember = ({ name, role, image, social }) => {
    return (
        <div className="col-12 col-lg-3 col-md-6 mb-4 mb-md-0">
            <div className="border text-center py-5 px-3">
                <div className="mb-4">
                    <img className="img-fluid rounded-circle shadow overflow-hidden" src={image} alt="" />
                </div>
                <div>
                    <h5 className="mb-1">{name}</h5>
                    <small className="text-muted mb-3 d-block">{role}</small>
                    <ul className="list-inline mb-0">
                        {social.map((item) => (
                            <li key={item.id} className="list-inline-item">
                                <a className="border rounded px-2 py-1 text-dark" href={item.link}>
                                    <i className={item.icon}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};


const FeatureTeamPage = () => {
    const TeamMembersData = [
        {
            id: 1,
            name: 'Nicole James',
            role: 'Manager',
            image: require('../../assets/images/team/01.png'),
            social: [
                { id: 1, icon: 'la la-facebook', link: '#' },
                { id: 2, icon: 'la la-dribbble', link: '#' },
                { id: 3, icon: 'la la-twitter', link: '#' },
                { id: 4, icon: 'la la-linkedin', link: '#' },
            ],
        },
        {
            id: 2,
            name: 'Lena Shea',
            role: 'Ceo',
            image: require('../../assets/images/team/02.png'),
            social: [
                { id: 1, icon: 'la la-facebook', link: '#' },
                { id: 2, icon: 'la la-dribbble', link: '#' },
                { id: 3, icon: 'la la-twitter', link: '#' },
                { id: 4, icon: 'la la-linkedin', link: '#' },
            ],
        },
        {
            id: 3,
            name: 'Mark Beele',
            role: 'Founder',
            image: require('../../assets/images/team/03.png'),
            social: [
                { id: 1, icon: 'la la-facebook', link: '#' },
                { id: 2, icon: 'la la-dribbble', link: '#' },
                { id: 3, icon: 'la la-twitter', link: '#' },
                { id: 4, icon: 'la la-linkedin', link: '#' },
            ],
        },
        {
            id: 4,
            name: 'Aubee Dion',
            role: 'Supervisor',
            image: require('../../assets/images/team/04.png'),
            social: [
                { id: 1, icon: 'la la-facebook', link: '#' },
                { id: 2, icon: 'la la-dribbble', link: '#' },
                { id: 3, icon: 'la la-twitter', link: '#' },
                { id: 4, icon: 'la la-linkedin', link: '#' },
            ],
        },
        
    ];
    return (
        <>
            <HerosectionHeader name={"Team"} folder1={"Features"} />
            <div class="page-content">
                <section>
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-12 col-lg-8">
                                <div className="mb-5">
                                    <h2>
                                        <span className="font-w-4">Meet Our</span> Team Of Expert
                                    </h2>
                                    <p className="lead mb-0">
                                        We use the latest technologies it voluptatem accusantium doloremque laudantium.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* Map through the team members data and render each TeamMember */}
                            {TeamMembersData.map((member) => (
                                <TeamMember key={member.id} name={member.name} role={member.role} image={member.image} social={member.social} />
                            ))}
                        </div>
                    </div>
                </section>
                <NewsletterL1 />
            </div>
        </>
    )
}

export default FeatureTeamPage;
