// data.ts
export interface Website {
    url: string;
    title: string;
    description: string;
}

export const websites: Website[] = [
    {
        url: "https://www.google.com",
        title: "Google",
        description:
            "Search the world's information, including webpages, images, videos and more.",
    },
    {
        url: "https://www.facebook.com",
        title: "Facebook",
        description:
            "Connect with friends and the world around you on Facebook.",
    },
    {
        url: "https://www.twitter.com",
        title: "Twitter",
        description:
            "From breaking news and entertainment to sports and politics, get the full story with all the live commentary.",
    },
    {
        url: "https://www.linkedin.com",
        title: "LinkedIn",
        description:
            "Manage your professional identity. Build and engage with your professional network.",
    },
    {
        url: "https://www.github.com",
        title: "GitHub",
        description:
            "GitHub is where people build software. More than 65 million people use GitHub to discover, fork, and contribute to over 200 million projects.",
    },
    {
        url: "https://www.reddit.com",
        title: "Reddit",
        description:
            "Reddit is a network of communities based on people's interests. Find communities you're interested in, and become part of an online community!",
    },
    {
        url: "https://www.youtube.com",
        title: "YouTube",
        description:
            "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
    },

    {
        url: "https://www.medium.com",
        title: "Medium",
        description:
            "Medium is a place to write, read, and connect. It's easy and free to post your thinking on any topic and connect with millions of readers.",
    },
    {
        url: "https://www.wikipedia.org",
        title: "Wikipedia",
        description:
            "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.",
    },
    {
        url: "https://www.stackoverflow.com",
        title: "Stack Overflow",
        description:
            "Stack Overflow is the largest, most trusted online community for developers to learn, share their programming knowledge, and build their careers.",
    },
];
