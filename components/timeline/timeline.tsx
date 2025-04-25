'use client'
import React from 'react';
import { useInView, useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './styles.css'


interface TimelineItemInterface {
    date: string;
    text: string[];
    image: string;
    link: {
        url: string;
        text: string;
        imageUrl?: string;
    };
    detailText?: string[];
    quote?: {
        text: string;
        author: string;
        authorImage: string;
    };
    definition?: {
        term: string;
        pronunciation: string;
        meaning: string;
        partOfSpeech: string;
    };
    milestone?: string;
}

interface TimelineItemsInterface {
    items: TimelineItemInterface[];
}

const timelineItems: TimelineItemsInterface = { items: [
    {
        date: 'January 2012',
        text: ["Co-founder Dan finishes the economics degree he promised his mum he'd complete, only to never use it and start his own clothing business (love you mum)."],
        image: 'https://cdn.prod.website-files.com/60dd72519d9f9f67690ae425/60dda4ae36510574b1a7932a_Image%201%20-%20Transparent.png',
        link: {
            url: "",
            text: "",
        },
        detailText: [],
        quote: {
            text: "",
            author: "",
            authorImage: "",
        },
        definition: {
            term: "",
            pronunciation: "",
            meaning: "",
            partOfSpeech: ""
        },
        milestone: "",
    },
    {
        date: 'June 2016',
        text: ["Adam catches wind of Dan's early success and slides into his DM offering help. Dan politely accepts."],
        image: 'https://cdn.prod.website-files.com/60dd72519d9f9f67690ae425/60de4fe2f3220f62c99e3f0f_Image%202.png',
        link: {
            url: "https://www.smartcompany.com.au/startupsmart/profiles/sydney-startup-with-500000-in-funding-wants-to-monetise-your-social-media-following/",
            text: "See the article that got Adam's attention",
            imageUrl: "https://cdn.prod.website-files.com/60dd72519d9f9f67690ae425/60de4e982f499b91260e0e91_open_in_new.svg"
        },
        detailText: [],
        quote: {
            text: "",
            author: "",
            authorImage: "",
        },
        definition: {
            term: "",
            pronunciation: "",
            meaning: "",
            partOfSpeech: ""
        },
        milestone: "",
    },
    {
        date: 'August 2017',
        text: ["After collectively failing a number of business ventures, Dan and Adam finally have their first break. Together they build Lumio with a team of 7 other legends."],
        image: 'https://cdn.prod.website-files.com/60dd72519d9f9f67690ae425/60de4fe355e62d52d0a322d8_Image%203.png',
        link: {
            url: "https://www.smartcompany.com.au/startupsmart/profiles/sydney-startup-with-500000-in-funding-wants-to-monetise-your-social-media-following/",
            text: "See the article that got Adam's attention",
            imageUrl: ""
        },
        detailText: ["Lumio, previously called Foenix, was a social media analytics company that helped brands like Audi, David Jones and Red Balloon source legitimate influencers for social media campaigns."],
        quote: {
            text: "“We were essentially the Instagram police and called out fake influencers left, right and centre. It was fun and all, but there is only so many bikini chicks you can look at on Instagram before you start losing your mind.”",
            author: "Dan, Co-founder and CEO of Lumio",
            authorImage: "https://cdn.prod.website-files.com/60dd72519d9f9f67690ae425/60de52655aae394d43a0ac08_Dan.jpg"
        },
        definition: {
            term: "",
            pronunciation: "",
            meaning: "",
            partOfSpeech: ""
        },
        milestone: "",
    },
    {
        date: 'April 2018',
        text: ["Lumio gets acquired by German company, Influencer DB. Yeww! 🎉"],
        image: 'https://cdn.prod.website-files.com/60dd72519d9f9f67690ae425/60de4fe2c703faf630cb8191_Image%204.png',
        link: {
            url: "https://www.bandt.com.au/influencerdb-acquires-australian-based-lumio-analytics/",
            text: "Read about the acquisition"
        },
        detailText: [],
        quote: {
            text: "“After this, we both took up golf during the week and started eating fancy dinners at the local Country Club... Ha. This is not what happened at all. We suck at golf and love eating Guzman Y Gomez.”",
            author: "Adam, Co-founder of Lumio",
            authorImage: "https://cdn.prod.website-files.com/60dd72519d9f9f67690ae425/60de5451e0fe7488a2d0efda_Adam.jpg"
        },
        definition: {
            term: "",
            pronunciation: "",
            meaning: "",
            partOfSpeech: ""
        },
        milestone: "",
    },
    {
        date: 'June 2018',
        text: ["Dan is shipped off to work with ze Germans as Head of Product at Influencer DB. ", "Adam decides to stay in Sydney and cut his teeth as a Product Designer with one of Sydney's leading design studios."],
        image: 'https://cdn.prod.website-files.com/60dd72519d9f9f67690ae425/60de4fe27335a43515f1b7a7_Image%205.png',
        link: {
            url: "https://good-design.org/projects/seatfrog-com-responsive-website-redesign/",
            text: "Read about the Good Design Award"
        },
        detailText: ["Whilst in Germany, Dan worked with with brands such as Daniel Wellington and BMW - Ja!", "Adam worked with clients like Vodafone, TAFE NSW, Adobe and also won the 'Good Design Australia' award for his work on the Seatfrog website."],
        quote: {
            text: "",
            author: "",
            authorImage: ""
        },
        definition: {
            term: "",
            pronunciation: "",
            meaning: "",
            partOfSpeech: ""
        },
        milestone: "",
    },
    {
        date: 'November 2019',
        text: ["After spending time apart, Dan and Adam begin to plan their next moves and rekindle their business partnership. The name 'Relume' is born."],
        image: 'https://cdn.prod.website-files.com/60dd72519d9f9f67690ae425/60de4fe236a3d8f3c716b49f_Image%206.png',
        definition: {
            term: "relume",
            pronunciation: "[ri-loom]",
            meaning: "To relight or rekindle (a light, flame, etc.)",
            partOfSpeech: "Verb"
        },
        link: {
            url: "",
            text: "",
        },
        detailText: [],
        quote: {
            text: "",
            author: "",
            authorImage: ""
        },
        milestone: ""
    },
    {
        date: 'January 2020',
        text: ["Dan moves back to Sydney to join a Global startup incubator called Antler. He convinces Adam to join him."],
        image: 'https://cdn.prod.website-files.com/60dd72519d9f9f67690ae425/60de4fe229fc171a5a90cec1_Image%207.png',
        link: {
            url: "https://www.antler.co/",
            text: "Learn more about Antler here"
        },
        detailText: [],
        quote: {
            text: "",
            author: "",
            authorImage: ""
        },
        definition: {
            term: "",
            pronunciation: "",
            meaning: "",
            partOfSpeech: ""
        },
        milestone: "",
    },
    {
        date: 'April 2020',
        text: ["For various reasons, Dan and Adam decide to turn down a $100,000 investment from Antler and start their own business venture, without taking outside investment."],
        image: 'https://cdn.prod.website-files.com/60dd72519d9f9f67690ae425/60de4fe33c218b7075db8daa_Image%208.png',
        milestone: "🚀 Relume launches",
        link: {
            url: "",
            text: ""
        },
        detailText: [],
        quote: {
            text: "",
            author: "",
            authorImage: ""
        },
        definition: {
            term: "",
            pronunciation: "",
            meaning: "",
            partOfSpeech: ""
        },
    },
    {
        date: 'June 2020',
        text: ["After building 11 websites on Webflow in under 6 weeks as a way to test a number of business ideas, Dan and Adam decide to stick to what they know best and launch Relume - a company that designs and builds beautiful Webflow websites."],
        image: 'https://cdn.prod.website-files.com/60dd72519d9f9f67690ae425/60de4fe31b526885591abeb7_Image%209.png',
        link: {
            url: "",
            text: ""
        },
        detailText: [],
        quote: {
            text: "“Relume was an opportunity for us to build a profitable business, not a startup that bleeds cash, whilst doing what we love to do. It also allows us to learn about all types of businesses and the problems they deal with. These are all opportunities that we could potentially solve for in the future. For now, our goal is simple, we want to build a kickass business which means we really want our customers and the Webflow community to succeed too.”",
            author: "Dan, Co-founder of Relume",
            authorImage: "https://cdn.prod.website-files.com/60dd72519d9f9f67690ae425/60de52655aae394d43a0ac08_Dan.jpg"
        },
        definition: {
            term: "",
            pronunciation: "",
            meaning: "",
            partOfSpeech: ""
        },
        milestone: "",
    }
]};


const TimelineItem = ({key, item }: { key: number, item: TimelineItemInterface }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, margin: '-50% 0px -50% 0px' });

    return (
        <div ref={ref} key={key} className="timeline_item">
            <div id="w-node-_24c49997-4a3d-4bd7-0915-1f0630d904af-8b0ae424" className="timeline_left" style={{"willChange": "opacity", "opacity": inView ? 1 : 0.25}}><div className="timeline_date-text">{item.date}</div></div>
            <div id="w-node-_24c49997-4a3d-4bd7-0915-1f0630d904b2-8b0ae424" className="timeline_centre"><div className="timeline_circle" style={{"willChange": "background", "backgroundColor": "rgb(65, 65, 65)"}}></div></div>
            <div className="timeline_right" style={{opacity: inView ? 1 : 0.25, transition: 'opacity 0.5s ease',}}>
                {item.milestone ? <div className="timeline_milestone-badge"><div>{item.milestone}</div></div> : ""}
                {/*<div className="timeline_milestone-badge"><div>🚀 relume launches</div></div> NEED TO RENDER THE TIMELINE TEXT BELOW*/}
                <div className="margin-bottom-medium">
                    {item.text.map((text: string, index: number) => (
                        <>
                        <div className="timeline_text">{text}<br /></div>
                        {item.text.length -1 !== index ? <br /> : ""}
                        </>
                    ))}
                </div>
                {item.detailText && item.detailText.length > 0 ?
                <div className="margin-bottom-xlarge">
                    {item.detailText.map((text: string, index: number) => (
                        <p key={index} className="text-colour-lightgrey"> {text}<br /></p>
                    ))}
                </div> : ""}

                {item.link && (item.link.url || item.link.text) ?
                <div className="margin-bottom-xlarge">
                    <div className="inline-block">
                        <a href={item.link.url} target="_blank" className="timeline_link w-inline-block">
                            <div>{item.link.text}</div>
                            <img src={item.link.imageUrl} loading="lazy" alt="" className="link-icon" />
                        </a>
                    </div>
                </div> : ""}
                {item.definition && (item.definition.term || item.definition.pronunciation || item.definition.meaning ) ? 
                <div className="margin-bottom-xlarge">
                    <div className="timeline_definition-wrapper">
                        <p className="text-colour-black">{item.definition.term}<br /></p>
                        <div className="timeline_badge"><div>{item.definition.partOfSpeech}</div></div>
                        <p className="text-colour-lightgrey">
                            [{item.definition.pronunciation}]<br />
                            <span className="text-colour-black">{item.definition.meaning}</span>
                        </p>
                    </div>
                </div> : ""}
                <div className="timeline_image-wrapper"><img src={item.image} loading="lazy" width="480" alt="" /></div>
                {item.quote && (item.quote.text || item.quote.author || item.quote.authorImage) ?
                <>
                <br/>
                <div className="timeline_quote-wrapper">
                    <img src={item.quote.authorImage} loading="lazy" alt="" className="timeline_quote-image" />
                    <div className="timeline_quote-text-wrapper">
                        <p className="timeline_quote">
                            {item.quote.text}<br />
                        </p>
                        <p className="timeline_quote-title">{item.quote.author}<br /></p>
                    </div>
                </div>
                </> : "" }
            </div>
        </div>
    )

}

const Timeline = () => {

    return (
        <>
        <div className="container">
        <div className="timeline_component">
            <div className="timeline_progress"><div data-w-id="d5abcf1f-3370-3eea-ccfd-66f076babfdd" className="timeline_progress-bar" style={{"willChange": "opacity", "opacity": 1}}></div></div>
            {
                timelineItems.items.map((item: TimelineItemInterface, index: number) => (
                    <TimelineItem key={index} item={item} />
                ))
            }
            
            <div className="overlay-fade-bottom"></div>
            <div className="overlay-fade-top"></div>
        </div>
    </div>



    <style jsx>{`
        
    `}</style>
    </>
    );
};

export default Timeline;
