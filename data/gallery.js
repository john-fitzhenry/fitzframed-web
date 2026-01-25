export const galleryItems = [
    // Reliable High-Res Placeholders matching the categories
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=90",
        category: "Editorial",
        title: "Vogue Italia Submission"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=1200&q=90",
        category: "Live Music",
        title: "T.3 Backstage"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?w=1200&q=90",
        category: "Street",
        title: "Boston Commons"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=1200&q=90",
        category: "Fashion",
        title: "Summer Collection"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1200&q=90",
        category: "Architecture",
        title: "Syracuse Skyline"
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1503095392237-7362463f6fb5?w=1200&q=90",
        category: "Performance",
        title: "Stage Lights"
    }
];

// Helper to convert Dropbox links to raw images
export function getDirectImageLink(url) {
    if (!url) return "";
    if (url.includes("unsplash.com")) return url; // Pass through Unsplash for testing
    if (url.includes("dropbox.com")) {
        return url.replace("dl=0", "raw=1").replace("dl=1", "raw=1");
    }
    return url;
}
