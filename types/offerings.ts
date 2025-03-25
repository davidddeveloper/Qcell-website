export interface Offering {
    id: string
    title: string
    description: string
    image: string
    features: string[]
    cta: {
      text: string
      action: string
    }
    details: {
      title: string
      description: string
      benefits: string[]
    }
  }
  //
  export const offerings: Offering[] = [
    {
      id: "qpower",
      title: "QPower",
      description: "Quick and easy power service",
      image: "https://images.unsplash.com/photo-1741034793661-3bd2a33d5b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
      features: ["Instant recharge", "24/7 availability", "No service fees"],
      cta: {
        text: "Dial *363#",
        action: "*363#",
      },
      details: {
        title: "Power Your Connection",
        description:
          "QPower is our innovative power solution that puts the power in your hands. With just a few clicks, you can recharge your phone or help someone else stay connected.",
        benefits: [
          "Instant credit delivery",
          "Secure transactions",
          "Multiple payment options",
          "Transaction history",
          "Favorite numbers saving",
        ],
      },
    },
    {
      id: "tros-mi",
      title: "TROS MI TOP-UP",
      description: "Tros credit and enjoy the communication with friends and family",
      image: "https://images.unsplash.com/flagged/photo-1574164908900-6275ca361157?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBob25lfGVufDB8fDB8fHww",
      features: ["Easy transfers", "Instant delivery", "Zero fees"],
      cta: {
        text: "Start Sharing",
        action: "/tros-mi",
      },
      details: {
        title: "Share the Connection",
        description:
          "TROS MI TOP-UP lets you Tros credit when you needs it the most. It's the perfect way to help loved ones stay connected, no matter where they are.",
        benefits: [
          "No registration needed",
          "Instant credit transfer",
          "Available 24/7",
          "Minimal transfer fees",
          "Support multiple numbers",
        ],
      },
    },
    {
      id: "social-bundle",
      title: "Social Bundle",
      description: "Stay connected on all your favorite platforms",
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBob25lfGVufDB8fDB8fHww",
      features: ["All social media", "Flexible plans", "Data saving"],
      cta: {
        text: "Get Started",
        action: "/bundles",
      },
      details: {
        title: "Connect Everywhere",
        description:
          "Our Social Bundle keeps you connected to all your favorite social media platforms. Enjoy unlimited access to Facebook, Twitter, WhatsApp, and more at unbeatable prices.",
        benefits: [
          "All popular platforms included",
          "Flexible duration options",
          "Data optimization",
          "Auto-renewal available",
          "Bundle sharing enabled",
        ],
      },
    },
    {
      id: "data-plus",
      title: "Data Plus",
      description: "High-speed data plans for all your needs",
      image: "https://images.unsplash.com/photo-1523340954243-d2b6af5d9908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc5fHxtb2JpbGUlMjBkYXRhJTIwcGx1c3xlbnwwfHwwfHx8MA%3D%3D",
      features: ["High-speed internet", "Affordable plans", "Wide coverage"],
      cta: {
        text: "Subscribe Now",
        action: "/data-plus",
      },
      details: {
        title: "Stay Connected",
        description:
          "Data Plus offers a variety of high-speed data plans to keep you connected at all times. Whether you need data for browsing, streaming, or working, we have a plan for you.",
        benefits: [
          "Multiple data plans",
          "High-speed connectivity",
          "Affordable pricing",
          "Wide network coverage",
          "24/7 customer support",
        ],
      },
    },
    {
      id: "qcell-tv",
      title: "QCell TV",
      description: "Enjoy a variety of TV channels and on-demand content",
      image: "https://images.unsplash.com/photo-1467991521834-fb8e202c7074?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHZ8ZW58MHx8MHx8fDA%3D",
      features: ["Live TV", "On-demand content", "Affordable subscription"],
      cta: {
        text: "Subscribe Now",
        action: "/qcell-tv",
      },
      details: {
        title: "Entertainment at Your Fingertips",
        description:
          "QCell TV offers a wide range of live TV channels and on-demand content to keep you entertained. From movies to sports, there's something for everyone.",
        benefits: [
          "Wide range of channels",
          "High-quality streaming",
          "Affordable subscription plans",
          "User-friendly interface",
          "24/7 customer support",
        ],
      },
    },
    {
      id: "qcell-music",
      title: "QCell Music",
      description: "Stream and download your favorite music",
      image: "https://images.unsplash.com/photo-1484876065684-b683cf17d276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG11c2ljfGVufDB8fDB8fHww",
      features: ["Unlimited streaming", "Offline downloads", "Curated playlists"],
      cta: {
        text: "Start Listening",
        action: "/qcell-music",
      },
      details: {
        title: "Music for Everyone",
        description:
          "QCell Music provides unlimited streaming and downloads of your favorite songs. Enjoy curated playlists and discover new music every day.",
        benefits: [
          "Unlimited streaming",
          "Offline downloads",
          "Curated playlists",
          "High-quality audio",
          "Ad-free experience",
        ],
      },
    }
  ]
  
  