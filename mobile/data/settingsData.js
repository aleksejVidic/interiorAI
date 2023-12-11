import { useRef } from "react";
const optionsList = useRef([
    {
        title: "Follow us",
        data: [
            {
                optionName: "TikTok",
                optionIcon: "tiktok",
                action() {
                    openBrowserAsync("https://www.tiktok.com/@volleyball.university");
                }
            },
            {
                optionName: "Instagram",
                optionIcon: "instagram",
                action() {
                    openBrowserAsync("https://www.tiktok.com/@volleyball.university");
                }
            },
            {
                optionName: "Facebook",
                optionIcon: "facebook",
                action() {
                    openBrowserAsync("https://www.tiktok.com/@volleyball.university");
                }
            },
            {
                optionName: "Pinterest",
                optionIcon: "pinterest",
                action() {
                    openBrowserAsync("https://www.tiktok.com/@volleyball.university");
                }
            }
        ]
    },
    {
        title: "Support us",
        data: [
            {
                optionName: "Share us",
                optionIcon: "share",
                async action() {
                    await Share.share({
                        message: `Give your room a new charm
https://play.google.com/store/apps/details?id=com.interiordesignai.homedecor
                        `
                    });
                    
                }
            },
            {
                optionName: "Like us, rate us",
                optionIcon: "star",
                action() {
                    const itunesItemId = 982107779;
                    const androidPackageName = 'host.exp.exponent';
                    Linking.openURL(Platform.OS === "ios" ? 
                    `https://apps.apple.com/app/apple-store/id${itunesItemId}?action=write-review` 
                    : `market://details?id=${androidPackageName}&showAllReviews=true`);
                }
            },
            {
                optionName: "Restore",
                optionIcon: "none",
                action() {

                }
            },
        ]
    },
    {
        title: "Other",
        data: [
            {
                optionName: "Privacy Policy",
                optionIcon: "none",
                action() {
                    navigation.navigate("PdfDoc", {
                        docID: "privacyPolicy"
                    })
                }
            },
            {
                optionName: "Terms of Service",
                optionIcon: "none",
                action() {
                    navigation.navigate("PdfDoc", {
                        docID: "termsOfService"
                    })
                }
            },
            {
                optionName: "Rights Policy",
                optionIcon: "none",
                action() {
                    navigation.navigate("PdfDoc", {
                        docID: "rightsPolicy"
                    })
                }
            },
            {
                optionName: "Community Guidelines",
                optionIcon: "none",
                action() {
                    navigation.navigate("PdfDoc", {
                        docID: "communityGuidelines"
                    })
                }
            }
        ]
    }
]).current;

export default optionsList;