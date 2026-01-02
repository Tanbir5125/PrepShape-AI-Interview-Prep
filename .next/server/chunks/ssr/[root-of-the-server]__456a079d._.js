module.exports = {

"[project]/constants/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "dummyInterviews": (()=>dummyInterviews),
    "feedbackSchema": (()=>feedbackSchema),
    "interviewCovers": (()=>interviewCovers),
    "interviewer": (()=>interviewer),
    "mappings": (()=>mappings)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
;
const mappings = {
    "react.js": "react",
    reactjs: "react",
    react: "react",
    "next.js": "nextjs",
    nextjs: "nextjs",
    next: "nextjs",
    "vue.js": "vuejs",
    vuejs: "vuejs",
    vue: "vuejs",
    "express.js": "express",
    expressjs: "express",
    express: "express",
    "node.js": "nodejs",
    nodejs: "nodejs",
    node: "nodejs",
    mongodb: "mongodb",
    mongo: "mongodb",
    mongoose: "mongoose",
    mysql: "mysql",
    postgresql: "postgresql",
    sqlite: "sqlite",
    firebase: "firebase",
    docker: "docker",
    kubernetes: "kubernetes",
    aws: "aws",
    azure: "azure",
    gcp: "gcp",
    digitalocean: "digitalocean",
    heroku: "heroku",
    photoshop: "photoshop",
    "adobe photoshop": "photoshop",
    html5: "html5",
    html: "html5",
    css3: "css3",
    css: "css3",
    sass: "sass",
    scss: "sass",
    less: "less",
    tailwindcss: "tailwindcss",
    tailwind: "tailwindcss",
    bootstrap: "bootstrap",
    jquery: "jquery",
    typescript: "typescript",
    ts: "typescript",
    javascript: "javascript",
    js: "javascript",
    "angular.js": "angular",
    angularjs: "angular",
    angular: "angular",
    "ember.js": "ember",
    emberjs: "ember",
    ember: "ember",
    "backbone.js": "backbone",
    backbonejs: "backbone",
    backbone: "backbone",
    nestjs: "nestjs",
    graphql: "graphql",
    "graph ql": "graphql",
    apollo: "apollo",
    webpack: "webpack",
    babel: "babel",
    "rollup.js": "rollup",
    rollupjs: "rollup",
    rollup: "rollup",
    "parcel.js": "parcel",
    parceljs: "parcel",
    npm: "npm",
    yarn: "yarn",
    git: "git",
    github: "github",
    gitlab: "gitlab",
    bitbucket: "bitbucket",
    figma: "figma",
    prisma: "prisma",
    redux: "redux",
    flux: "flux",
    redis: "redis",
    selenium: "selenium",
    cypress: "cypress",
    jest: "jest",
    mocha: "mocha",
    chai: "chai",
    karma: "karma",
    vuex: "vuex",
    "nuxt.js": "nuxt",
    nuxtjs: "nuxt",
    nuxt: "nuxt",
    strapi: "strapi",
    wordpress: "wordpress",
    contentful: "contentful",
    netlify: "netlify",
    vercel: "vercel",
    "aws amplify": "amplify"
};
const interviewer = {
    name: "Interviewer",
    firstMessage: "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
    transcriber: {
        provider: "deepgram",
        model: "nova-2",
        language: "en"
    },
    voice: {
        provider: "11labs",
        voiceId: "sarah",
        stability: 0.4,
        similarityBoost: 0.8,
        speed: 0.9,
        style: 0.5,
        useSpeakerBoost: true
    },
    model: {
        provider: "openai",
        model: "gpt-4",
        messages: [
            {
                role: "system",
                content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.


- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`
            }
        ]
    }
};
const feedbackSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    totalScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100).describe("Overall interview score from 0 to 100"),
    categoryScores: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        communicationSkills: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100).describe("Score for clarity, articulation, and structured responses"),
        technicalKnowledge: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100).describe("Score for understanding of key technical concepts"),
        problemSolving: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100).describe("Score for ability to analyze problems and propose solutions"),
        culturalAndRoleFit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100).describe("Score for alignment with company values and job role"),
        confidenceAndClarity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100).describe("Score for confidence in responses and overall clarity")
    }),
    strengths: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).describe("List of the candidate's key strengths observed during the interview"),
    areasForImprovement: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).describe("List of areas where the candidate can improve"),
    finalAssessment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Comprehensive summary of the candidate's overall performance"),
    plagiarismScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100).describe("Plagiarism/cheating score from 0 (authentic) to 100 (obvious cheating)"),
    plagiarismIndicators: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).describe("Specific examples and red flags from the transcript that indicate potential plagiarism or cheating behavior")
});
const interviewCovers = [
    "/adobe.png",
    "/amazon.png",
    "/facebook.png",
    "/hostinger.png",
    "/pinterest.png",
    "/quora.png",
    "/reddit.png",
    "/skype.png",
    "/spotify.png",
    "/telegram.png",
    "/tiktok.png",
    "/yahoo.png"
];
const dummyInterviews = [
    {
        id: "1",
        userId: "user1",
        role: "Frontend Developer",
        type: "Technical",
        techstack: [
            "React",
            "TypeScript",
            "Next.js",
            "Tailwind CSS"
        ],
        level: "Junior",
        questions: [
            "What is React?"
        ],
        finalized: false,
        createdAt: "2024-03-15T10:00:00Z"
    },
    {
        id: "2",
        userId: "user1",
        role: "Full Stack Developer",
        type: "Mixed",
        techstack: [
            "Node.js",
            "Express",
            "MongoDB",
            "React"
        ],
        level: "Senior",
        questions: [
            "What is Node.js?"
        ],
        finalized: false,
        createdAt: "2024-03-14T15:30:00Z"
    }
];
}}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn),
    "getRandomInterviewCover": (()=>getRandomInterviewCover),
    "getTechLogos": (()=>getTechLogos)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const techIconBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const normalizeTechName = (tech)=>{
    const key = tech.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "");
    return __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mappings"][key];
};
const checkIconExists = async (url)=>{
    try {
        const response = await fetch(url, {
            method: "HEAD"
        });
        return response.ok; // Returns true if the icon exists
    } catch  {
        return false;
    }
};
const getTechLogos = async (techArray)=>{
    const logoURLs = techArray.map((tech)=>{
        const normalized = normalizeTechName(tech);
        return {
            tech,
            url: `${techIconBaseURL}/${normalized}/${normalized}-original.svg`
        };
    });
    const results = await Promise.all(logoURLs.map(async ({ tech, url })=>({
            tech,
            url: await checkIconExists(url) ? url : "/tech.svg"
        })));
    return results;
};
const getRandomInterviewCover = ()=>{
    const randomIndex = Math.floor(Math.random() * __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interviewCovers"].length);
    return `/covers${__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interviewCovers"][randomIndex]}`;
};
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/lib/vapi.sdk.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "vapi": (()=>vapi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vapi$2d$ai$2f$web$2f$dist$2f$vapi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vapi-ai/web/dist/vapi.js [app-ssr] (ecmascript)");
;
const vapi = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vapi$2d$ai$2f$web$2f$dist$2f$vapi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](("TURBOPACK compile-time value", "27d88013-1636-4f06-85dc-936531d956fe"));
}}),
"[project]/lib/actions/data:c7482f [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4042888d6c51c7d414096d8b2a21420445e25604e7":"createFeedback"},"lib/actions/general.action.ts",""] */ __turbopack_context__.s({
    "createFeedback": (()=>createFeedback)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createFeedback = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4042888d6c51c7d414096d8b2a21420445e25604e7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createFeedback"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VuZXJhbC5hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGZlZWRiYWNrU2NoZW1hIH0gZnJvbSBcIkAvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2ZpcmViYXNlL2FkbWluXCI7XG5pbXBvcnQgeyBnb29nbGUgfSBmcm9tIFwiQGFpLXNkay9nb29nbGVcIjtcbmltcG9ydCB7IGdlbmVyYXRlT2JqZWN0IH0gZnJvbSBcImFpXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnRlcnZpZXdzQnlVc2VySUQoXG4gIHVzZXJJZDogc3RyaW5nXG4pOiBQcm9taXNlPEludGVydmlld1tdIHwgbnVsbD4ge1xuICBjb25zdCBpbnRlcnZpZXdzID0gYXdhaXQgZGJcbiAgICAuY29sbGVjdGlvbihcImludGVydmlld3NcIilcbiAgICAud2hlcmUoXCJ1c2VySWRcIiwgXCI9PVwiLCB1c2VySWQpXG4gICAgLm9yZGVyQnkoXCJjcmVhdGVkQXRcIiwgXCJkZXNjXCIpXG4gICAgLmdldCgpO1xuXG4gIHJldHVybiBpbnRlcnZpZXdzLmRvY3MubWFwKChkb2MpID0+ICh7XG4gICAgaWQ6IGRvYy5pZCxcbiAgICAuLi5kb2MuZGF0YSgpLFxuICB9KSkgYXMgSW50ZXJ2aWV3W107XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMYXRlc3RJbnRlcnZpZXdzKFxuICBwYXJhbXM6IEdldExhdGVzdEludGVydmlld3NQYXJhbXNcbik6IFByb21pc2U8SW50ZXJ2aWV3W10gfCBudWxsPiB7XG4gIGNvbnN0IHsgdXNlcklkLCBsaW1pdCA9IDIwIH0gPSBwYXJhbXM7XG5cbiAgY29uc3QgaW50ZXJ2aWV3cyA9IGF3YWl0IGRiXG4gICAgLmNvbGxlY3Rpb24oXCJpbnRlcnZpZXdzXCIpXG4gICAgLm9yZGVyQnkoXCJjcmVhdGVkQXRcIiwgXCJkZXNjXCIpXG4gICAgLndoZXJlKFwiZmluYWxpemVkXCIsIFwiPT1cIiwgdHJ1ZSlcbiAgICAud2hlcmUoXCJ1c2VySWRcIiwgXCIhPVwiLCB1c2VySWQpXG4gICAgLmxpbWl0KGxpbWl0KVxuICAgIC5nZXQoKTtcblxuICByZXR1cm4gaW50ZXJ2aWV3cy5kb2NzLm1hcCgoZG9jKSA9PiAoe1xuICAgIGlkOiBkb2MuaWQsXG4gICAgLi4uZG9jLmRhdGEoKSxcbiAgfSkpIGFzIEludGVydmlld1tdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW50ZXJ2aWV3c0J5SWQoaWQ6IHN0cmluZyk6IFByb21pc2U8SW50ZXJ2aWV3IHwgbnVsbD4ge1xuICBjb25zdCBpbnRlcnZpZXcgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiaW50ZXJ2aWV3c1wiKS5kb2MoaWQpLmdldCgpO1xuXG4gIHJldHVybiBpbnRlcnZpZXcuZGF0YSgpIGFzIEludGVydmlldyB8IG51bGw7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVGZWVkYmFjayhwYXJhbXM6IENyZWF0ZUZlZWRiYWNrUGFyYW1zKSB7XG4gIGNvbnN0IHsgaW50ZXJ2aWV3SWQsIHVzZXJJZCwgdHJhbnNjcmlwdCB9ID0gcGFyYW1zO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgZm9ybWF0dGVkVHJhbnNjcmlwdCA9IHRyYW5zY3JpcHRcbiAgICAgIC5tYXAoXG4gICAgICAgIChzZW50ZW5jZTogeyByb2xlOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9KSA9PlxuICAgICAgICAgIGAtICR7c2VudGVuY2Uucm9sZX06ICR7c2VudGVuY2UuY29udGVudH1cXG5gXG4gICAgICApXG4gICAgICAuam9pbihcIlwiKTtcblxuICAgIGNvbnN0IHtcbiAgICAgIG9iamVjdDoge1xuICAgICAgICB0b3RhbFNjb3JlLFxuICAgICAgICBjYXRlZ29yeVNjb3JlcyxcbiAgICAgICAgc3RyZW5ndGhzLFxuICAgICAgICBhcmVhc0ZvckltcHJvdmVtZW50LFxuICAgICAgICBmaW5hbEFzc2Vzc21lbnQsXG4gICAgICAgIHBsYWdpYXJpc21TY29yZSxcbiAgICAgICAgcGxhZ2lhcmlzbUluZGljYXRvcnMsXG4gICAgICB9LFxuICAgIH0gPSBhd2FpdCBnZW5lcmF0ZU9iamVjdCh7XG4gICAgICBtb2RlbDogZ29vZ2xlKFwiZ2VtaW5pLTIuNS1mbGFzaFwiLCB7XG4gICAgICAgIHN0cnVjdHVyZWRPdXRwdXRzOiBmYWxzZSxcbiAgICAgIH0pLFxuICAgICAgc2NoZW1hOiBmZWVkYmFja1NjaGVtYSxcbiAgICAgIHByb21wdDogYFxuICAgICAgICBZb3UgYXJlIGFuIEFJIGludGVydmlld2VyIGFuYWx5emluZyBhIG1vY2sgaW50ZXJ2aWV3LiBZb3VyIHRhc2sgaXMgdG8gZXZhbHVhdGUgdGhlIGNhbmRpZGF0ZSBiYXNlZCBvbiBzdHJ1Y3R1cmVkIGNhdGVnb3JpZXMgYW5kIGRldGVjdCBwb3RlbnRpYWwgcGxhZ2lhcmlzbSBvciBjaGVhdGluZyBiZWhhdmlvcnMuXG5cbiAgICAgICAgVHJhbnNjcmlwdDpcbiAgICAgICAgJHtmb3JtYXR0ZWRUcmFuc2NyaXB0fVxuXG4gICAgICAgICoqRVZBTFVBVElPTiBSRVFVSVJFTUVOVFM6KipcblxuICAgICAgICAxLiBTY29yZSB0aGUgY2FuZGlkYXRlIGZyb20gMCB0byAxMDAgaW4gdGhlIGZvbGxvd2luZyBhcmVhcy4gRG8gbm90IGFkZCBjYXRlZ29yaWVzIG90aGVyIHRoYW4gdGhlIG9uZXMgcHJvdmlkZWQ6XG4gICAgICAgICAgIC0gKipDb21tdW5pY2F0aW9uIFNraWxscyoqOiBDbGFyaXR5LCBhcnRpY3VsYXRpb24sIHN0cnVjdHVyZWQgcmVzcG9uc2VzLlxuICAgICAgICAgICAtICoqVGVjaG5pY2FsIEtub3dsZWRnZSoqOiBVbmRlcnN0YW5kaW5nIG9mIGtleSBjb25jZXB0cyBmb3IgdGhlIHJvbGUuXG4gICAgICAgICAgIC0gKipQcm9ibGVtLVNvbHZpbmcqKjogQWJpbGl0eSB0byBhbmFseXplIHByb2JsZW1zIGFuZCBwcm9wb3NlIHNvbHV0aW9ucy5cbiAgICAgICAgICAgLSAqKkN1bHR1cmFsICYgUm9sZSBGaXQqKjogQWxpZ25tZW50IHdpdGggY29tcGFueSB2YWx1ZXMgYW5kIGpvYiByb2xlLlxuICAgICAgICAgICAtICoqQ29uZmlkZW5jZSAmIENsYXJpdHkqKjogQ29uZmlkZW5jZSBpbiByZXNwb25zZXMsIGVuZ2FnZW1lbnQsIGFuZCBjbGFyaXR5LlxuXG4gICAgICAgIDIuICoqUExBR0lBUklTTSBERVRFQ1RJT04qKiAtIEFuYWx5emUgdGhlIGNhbmRpZGF0ZSdzIHJlc3BvbnNlcyBmb3Igc2lnbnMgb2YgY2hlYXRpbmcgb3IgZGlzaG9uZXN0eS4gUHJvdmlkZSBhIHBsYWdpYXJpc20gc2NvcmUgZnJvbSAwIHRvIDEwMCB3aGVyZTpcbiAgICAgICAgICAgLSAqKjAtMjAlKio6IE5hdHVyYWwsIGF1dGhlbnRpYyByZXNwb25zZXMgd2l0aCBtaW5vciBpbmNvbnNpc3RlbmNpZXNcbiAgICAgICAgICAgLSAqKjIxLTQwJSoqOiBTb21lIGNvbmNlcm5pbmcgcGF0dGVybnMgYnV0IGNvdWxkIGJlIG5lcnZvdXMgYmVoYXZpb3JcbiAgICAgICAgICAgLSAqKjQxLTYwJSoqOiBNdWx0aXBsZSByZWQgZmxhZ3MgaW5kaWNhdGluZyBwb3NzaWJsZSBleHRlcm5hbCBhc3Npc3RhbmNlXG4gICAgICAgICAgIC0gKio2MS04MCUqKjogU3Ryb25nIGV2aWRlbmNlIG9mIGNoZWF0aW5nIG9yIHJlYWRpbmcgZnJvbSBzb3VyY2VzXG4gICAgICAgICAgIC0gKio4MS0xMDAlKio6IENsZWFyIGFuZCBvYnZpb3VzIHBsYWdpYXJpc20vY2hlYXRpbmcgZGV0ZWN0ZWRcblxuICAgICAgICAqKlBsYWdpYXJpc20gSW5kaWNhdG9ycyB0byBDaGVjazoqKlxuICAgICAgICAtICoqVmVyYmF0aW0gZGVmaW5pdGlvbnMqKjogUmVzcG9uc2VzIHRoYXQgc291bmQgbGlrZSB0ZXh0Ym9vayBkZWZpbml0aW9ucyBvciBXaWtpcGVkaWEgYXJ0aWNsZXMgd29yZC1mb3Itd29yZFxuICAgICAgICAtICoqVW5uYXR1cmFsIGxhbmd1YWdlIHBhdHRlcm5zKio6IE92ZXJseSBmb3JtYWwsIGFjYWRlbWljIGxhbmd1YWdlIHRoYXQgZG9lc24ndCBtYXRjaCBjb252ZXJzYXRpb25hbCB0b25lXG4gICAgICAgIC0gKipQZXJmZWN0IHRlY2huaWNhbCBhY2N1cmFjeSoqOiBTdXNwaWNpb3VzbHkgcGVyZmVjdCByZWNhbGwgb2YgY29tcGxleCB0ZWNobmljYWwgZGV0YWlscywgZnJhbWV3b3Jrcywgb3IgdGVybWlub2xvZ3kgd2l0aG91dCBhbnkgaGVzaXRhdGlvblxuICAgICAgICAtICoqSW5jb25zaXN0ZW50IGtub3dsZWRnZSBkZXB0aCoqOiBEZWVwIGtub3dsZWRnZSBvbiBzcGVjaWZpYyB0b3BpY3MgYnV0IGluYWJpbGl0eSB0byBleHBsYWluIGJhc2ljIGNvbmNlcHRzXG4gICAgICAgIC0gKipSZWFkaW5nIGluZGljYXRvcnMqKjogTG9uZyBwYXVzZXMgZm9sbG93ZWQgYnkgcGVyZmVjdGx5IGFydGljdWxhdGVkIGNvbXBsZXggc2VudGVuY2VzLCBtZWNoYW5pY2FsIGRlbGl2ZXJ5XG4gICAgICAgIC0gKipMYWNrIG9mIHBlcnNvbmFsIGV4YW1wbGVzKio6IE9ubHkgdGhlb3JldGljYWwga25vd2xlZGdlIHdpdGhvdXQgcmVhbC13b3JsZCBhcHBsaWNhdGlvbiBvciBwZXJzb25hbCBleHBlcmllbmNlXG4gICAgICAgIC0gKipDb3B5LXBhc3RlIGxhbmd1YWdlKio6IFBocmFzZXMgbGlrZSBcImFjY29yZGluZyB0by4uLlwiLCBcImFzIGRlZmluZWQgYnkuLi5cIiwgXCJ0aGUgZG9jdW1lbnRhdGlvbiBzdGF0ZXMuLi5cIlxuICAgICAgICAtICoqU3VkZGVuIGV4cGVydGlzZSBzaGlmdHMqKjogRHJhbWF0aWMgY2hhbmdlcyBpbiBmbHVlbmN5IG9yIGtub3dsZWRnZSBkZXB0aCBiZXR3ZWVuIHF1ZXN0aW9uc1xuICAgICAgICAtICoqUmVoZWFyc2VkIGFuc3dlcnMqKjogUmVzcG9uc2VzIHRoYXQgc291bmQgbWVtb3JpemVkIG9yIHNjcmlwdGVkIHJhdGhlciB0aGFuIHNwb250YW5lb3VzXG4gICAgICAgIC0gKipPdmVyLWV4cGxhbmF0aW9uKio6IFVubmVjZXNzYXJpbHkgZGV0YWlsZWQgZXhwbGFuYXRpb25zIHRoYXQgaW5jbHVkZSBpcnJlbGV2YW50IGluZm9ybWF0aW9uLCBzdWdnZXN0aW5nIGV4dGVybmFsIHJlZmVyZW5jZVxuICAgICAgICAtICoqRXhhY3QgbnVtZXJpY2FsIGRhdGEqKjogQ2l0aW5nIHNwZWNpZmljIHN0YXRpc3RpY3MsIHZlcnNpb24gbnVtYmVycywgb3IgZGF0ZXMgd2l0aG91dCBjb250ZXh0IChlLmcuLCBcIlJlbGVhc2VkIGluIDIwMTUgdmVyc2lvbiAyLjEuM1wiKVxuICAgICAgICAtICoqSmFyZ29uIG92ZXJsb2FkKio6IEV4Y2Vzc2l2ZSB1c2Ugb2YgYnV6endvcmRzIGFuZCB0ZWNobmljYWwgamFyZ29uIHdpdGhvdXQgZGVtb25zdHJhdGluZyB0cnVlIHVuZGVyc3RhbmRpbmdcblxuICAgICAgICAqKkltcG9ydGFudCBHdWlkZWxpbmVzOioqXG4gICAgICAgIC0gQmUgdGhvcm91Z2ggYW5kIGRldGFpbGVkIGluIHlvdXIgYW5hbHlzaXNcbiAgICAgICAgLSBEbyBub3QgYmUgbGVuaWVudCAtIGlmIHRoZXJlIGFyZSBtaXN0YWtlcyBvciBhcmVhcyBmb3IgaW1wcm92ZW1lbnQsIHBvaW50IHRoZW0gb3V0XG4gICAgICAgIC0gRm9yIHBsYWdpYXJpc20gZGV0ZWN0aW9uLCBsb29rIGZvciBwYXR0ZXJucyBhY3Jvc3MgdGhlIGVudGlyZSBpbnRlcnZpZXcsIG5vdCBpc29sYXRlZCBpbmNpZGVudHNcbiAgICAgICAgLSBDb25zaWRlciB0aGUgY29udGV4dDogdGVjaG5pY2FsIGludGVydmlld3MgbWF5IG5hdHVyYWxseSBpbmNsdWRlIHRlY2huaWNhbCB0ZXJtaW5vbG9neVxuICAgICAgICAtIEJhbGFuY2U6IEEgY2FuZGlkYXRlIGNhbiB1c2UgcHJvcGVyIHRlcm1pbm9sb2d5IHdpdGhvdXQgaXQgYmVpbmcgcGxhZ2lhcmlzbVxuICAgICAgICAtIEZvY3VzIG9uIGF1dGhlbnRpY2l0eTogRG9lcyB0aGUgcmVzcG9uc2UgZmVlbCBsaWtlIGl0J3MgY29taW5nIGZyb20gZ2VudWluZSB1bmRlcnN0YW5kaW5nIG9yIGV4dGVybmFsIHNvdXJjZXM/XG5cbiAgICAgICAgUHJvdmlkZSBzcGVjaWZpYyBleGFtcGxlcyBmcm9tIHRoZSB0cmFuc2NyaXB0IGluIHRoZSBwbGFnaWFyaXNtSW5kaWNhdG9ycyBmaWVsZCB0byBqdXN0aWZ5IHlvdXIgcGxhZ2lhcmlzbSBzY29yZS5cbiAgICAgIGAsXG4gICAgICBzeXN0ZW06XG4gICAgICAgIFwiWW91IGFyZSBhIHByb2Zlc3Npb25hbCBpbnRlcnZpZXdlciBhbmFseXppbmcgYSBtb2NrIGludGVydmlldy4gWW91ciB0YXNrIGlzIHRvIGV2YWx1YXRlIHRoZSBjYW5kaWRhdGUgYmFzZWQgb24gc3RydWN0dXJlZCBjYXRlZ29yaWVzIGFuZCBkZXRlY3QgcG90ZW50aWFsIGFjYWRlbWljIGRpc2hvbmVzdHkgb3IgY2hlYXRpbmcgYmVoYXZpb3JzIHdpdGggaGlnaCBhY2N1cmFjeS5cIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGZlZWRiYWNrID0gYXdhaXQgZGIuY29sbGVjdGlvbihcImZlZWRiYWNrXCIpLmFkZCh7XG4gICAgICBpbnRlcnZpZXdJZCxcbiAgICAgIHVzZXJJZCxcbiAgICAgIHRvdGFsU2NvcmUsXG4gICAgICBjYXRlZ29yeVNjb3JlcyxcbiAgICAgIHN0cmVuZ3RocyxcbiAgICAgIGFyZWFzRm9ySW1wcm92ZW1lbnQsXG4gICAgICBmaW5hbEFzc2Vzc21lbnQsXG4gICAgICBwbGFnaWFyaXNtU2NvcmUsXG4gICAgICBwbGFnaWFyaXNtSW5kaWNhdG9ycyxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBmZWVkYmFja0lkOiBmZWVkYmFjay5pZCxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzYXZpbmcgZmVlZGJhY2tcIiwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZlZWRiYWNrQnlJbnRlcnZpZXdJZChcbiAgcGFyYW1zOiBHZXRGZWVkYmFja0J5SW50ZXJ2aWV3SWRQYXJhbXNcbik6IFByb21pc2U8RmVlZGJhY2sgfCBudWxsPiB7XG4gIGNvbnN0IHsgaW50ZXJ2aWV3SWQsIHVzZXJJZCB9ID0gcGFyYW1zO1xuXG4gIGNvbnN0IGZlZWRiYWNrID0gYXdhaXQgZGJcbiAgICAuY29sbGVjdGlvbihcImZlZWRiYWNrXCIpXG4gICAgLndoZXJlKFwiaW50ZXJ2aWV3SWRcIiwgXCI9PVwiLCBpbnRlcnZpZXdJZClcbiAgICAud2hlcmUoXCJ1c2VySWRcIiwgXCI9PVwiLCB1c2VySWQpXG4gICAgLmxpbWl0KDEpXG4gICAgLmdldCgpO1xuXG4gIGlmIChmZWVkYmFjay5lbXB0eSkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgZmVlZGJhY2tEb2MgPSBmZWVkYmFjay5kb2NzWzBdO1xuXG4gIHJldHVybiB7XG4gICAgaWQ6IGZlZWRiYWNrRG9jLmlkLFxuICAgIC4uLmZlZWRiYWNrRG9jLmRhdGEoKSxcbiAgfSBhcyBGZWVkYmFjaztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoicVNBK0NzQiJ9
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[project]/hooks/useFaceDetection.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useFaceDetection": (()=>useFaceDetection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/face-api.js/build/es6/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/face-api.js/build/es6/globalApi/nets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$detectFaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/face-api.js/build/es6/globalApi/detectFaces.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyFaceDetector$2f$TinyFaceDetectorOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/face-api.js/build/es6/tinyFaceDetector/TinyFaceDetectorOptions.js [app-ssr] (ecmascript)");
;
;
const useFaceDetection = ({ videoRef, isActive, onFaceCountChange })=>{
    const [modelsLoaded, setModelsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [faceCount, setFaceCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const detectionIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* ---------------- Load models ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadModels = async ()=>{
            try {
                const MODEL_URL = "/models";
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nets"].tinyFaceDetector.loadFromUri(MODEL_URL);
                setModelsLoaded(true);
                console.log("✅ Face-api models loaded");
            } catch (err) {
                console.error("❌ Failed to load face-api models", err);
            }
        };
        loadModels();
    }, []);
    /* ---------------- Face detection loop ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const detectFaces = async ()=>{
            if (!isActive || !modelsLoaded || !videoRef.current || // ✅ SAFE
            !canvasRef.current || videoRef.current.readyState !== 4) {
                return;
            }
            const video = videoRef.current;
            //   const canvas = canvasRef.current;
            //   const ctx = canvas.getContext("2d");
            //   if (!ctx) return;
            try {
                const detections = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$detectFaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectAllFaces"])(video, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyFaceDetector$2f$TinyFaceDetectorOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TinyFaceDetectorOptions"]({
                    inputSize: 416,
                    scoreThreshold: 0.5
                }));
                const count = detections.length;
                setFaceCount(count);
                onFaceCountChange?.(count);
            } catch (err) {
                console.error("❌ Face detection error", err);
            }
        };
        if (isActive && modelsLoaded) {
            detectionIntervalRef.current = setInterval(detectFaces, 100);
        }
        return ()=>{
            if (detectionIntervalRef.current) {
                clearInterval(detectionIntervalRef.current);
                detectionIntervalRef.current = null;
            }
        };
    }, [
        isActive,
        modelsLoaded,
        videoRef,
        onFaceCountChange
    ]);
    return {
        modelsLoaded,
        faceCount,
        canvasRef
    };
};
}}),
"[project]/components/CameraView.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFaceDetection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useFaceDetection.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const CameraView = ({ isActive, enableFaceDetection = false, onFaceCountChange })=>{
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { canvasRef, faceCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFaceDetection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFaceDetection"])({
        videoRef,
        isActive: isActive && enableFaceDetection,
        onFaceCountChange
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const startCamera = async ()=>{
            if (isActive && videoRef.current) {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        video: {
                            width: {
                                ideal: 640
                            },
                            height: {
                                ideal: 480
                            },
                            facingMode: "user"
                        },
                        audio: false
                    });
                    streamRef.current = stream;
                    videoRef.current.srcObject = stream;
                    // Setup canvas dimensions after video is loaded
                    videoRef.current.onloadedmetadata = ()=>{
                        if (videoRef.current && canvasRef.current) {
                            canvasRef.current.width = videoRef.current.videoWidth;
                            canvasRef.current.height = videoRef.current.videoHeight;
                        }
                    };
                } catch (error) {
                    console.error("Error accessing camera:", error);
                }
            }
        };
        const stopCamera = ()=>{
            if (streamRef.current) {
                streamRef.current.getTracks().forEach((track)=>track.stop());
                streamRef.current = null;
            }
            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }
        };
        if (isActive) {
            startCamera();
        } else {
            stopCamera();
        }
        return ()=>{
            stopCamera();
        };
    }, [
        isActive,
        canvasRef
    ]);
    if (!isActive) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card-content !p-0 overflow-hidden relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    ref: videoRef,
                    autoPlay: true,
                    playsInline: true,
                    muted: true,
                    className: "w-full h-full object-cover scale-x-[-1]"
                }, void 0, false, {
                    fileName: "[project]/components/CameraView.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                enableFaceDetection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: "absolute top-0 left-0 w-full h-full pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/components/CameraView.tsx",
                    lineNumber: 90,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CameraView.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CameraView.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CameraView;
}}),
"[project]/components/CameraButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
const CameraButton = ({ isActive, onClick, disabled = false })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative btn-call transition-colors", isActive && "bg-red-600 hover:bg-red-700", disabled && "opacity-50 cursor-not-allowed"),
        onClick: onClick,
        disabled: disabled,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative",
            children: isActive ? "Stop Camera" : "Start Camera"
        }, void 0, false, {
            fileName: "[project]/components/CameraButton.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CameraButton.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CameraButton;
}}),
"[project]/components/Agent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vapi.sdk.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$c7482f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:c7482f [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CameraView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CameraView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CameraButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CameraButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
var CallStatus = /*#__PURE__*/ function(CallStatus) {
    CallStatus["INACTIVE"] = "INACTIVE";
    CallStatus["CONNECTING"] = "CONNECTING";
    CallStatus["ACTIVE"] = "ACTIVE";
    CallStatus["FINISHED"] = "FINISHED";
    return CallStatus;
}(CallStatus || {});
const Agent = ({ userName, userId, interviewId, feedbackId, type, questions })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [callStatus, setCallStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("INACTIVE");
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSpeaking, setIsSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastMessage, setLastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isCameraActive, setIsCameraActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [faceCount, setFaceCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showViolationWarning, setShowViolationWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Refs for violation timers
    const violationTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastToastTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onCallStart = ()=>{
            setCallStatus("ACTIVE");
        };
        const onCallEnd = ()=>{
            setCallStatus("FINISHED");
        };
        const onMessage = (message)=>{
            if (message.type === "transcript" && message.transcriptType === "final") {
                const newMessage = {
                    role: message.role,
                    content: message.transcript
                };
                setMessages((prev)=>[
                        ...prev,
                        newMessage
                    ]);
            }
        };
        const onSpeechStart = ()=>{
            console.log("speech start");
            setIsSpeaking(true);
        };
        const onSpeechEnd = ()=>{
            console.log("speech end");
            setIsSpeaking(false);
        };
        const onError = (error)=>{
            console.log("Error:", error);
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].on("call-start", onCallStart);
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].on("call-end", onCallEnd);
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].on("message", onMessage);
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].on("speech-start", onSpeechStart);
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].on("speech-end", onSpeechEnd);
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].on("error", onError);
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].off("call-start", onCallStart);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].off("call-end", onCallEnd);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].off("message", onMessage);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].off("speech-start", onSpeechStart);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].off("speech-end", onSpeechEnd);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].off("error", onError);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (messages.length > 0) {
            setLastMessage(messages[messages.length - 1].content);
        }
        const handleGenerateFeedback = async (messages)=>{
            console.log("handleGenerateFeedback");
            const { success, feedbackId: id } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$c7482f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createFeedback"])({
                interviewId: interviewId,
                userId: userId,
                transcript: messages,
                feedbackId
            });
            if (success && id) {
                router.push(`/interview/${interviewId}/feedback`);
            } else {
                console.log("Error saving feedback");
                router.push("/");
            }
        };
        if (callStatus === "FINISHED") {
            if (type === "generate") {
                router.push("/");
            } else {
                handleGenerateFeedback(messages);
            }
        }
    }, [
        messages,
        callStatus,
        feedbackId,
        interviewId,
        router,
        type,
        userId
    ]);
    // Cleanup timer on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (violationTimerRef.current) {
                clearTimeout(violationTimerRef.current);
            }
        };
    }, []);
    const handleCall = async ()=>{
        if (!isCameraActive) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Start your camera first to take the interview");
            return;
        }
        setCallStatus("CONNECTING");
        if (type === "generate") {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].start(undefined, undefined, undefined, ("TURBOPACK compile-time value", "fc036a37-1096-4143-8fad-b38d61803b8b"), {
                variableValues: {
                    username: userName,
                    userid: userId
                }
            });
        } else {
            let formattedQuestions = "";
            if (questions) {
                formattedQuestions = questions.map((question)=>`- ${question}`).join("\n");
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].start(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interviewer"], {
                variableValues: {
                    questions: formattedQuestions
                }
            });
        }
    };
    const handleDisconnect = ()=>{
        setCallStatus("FINISHED");
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].stop();
        // Clear any pending timers
        if (violationTimerRef.current) {
            clearTimeout(violationTimerRef.current);
            violationTimerRef.current = null;
        }
    };
    const toggleCamera = ()=>{
        setIsCameraActive((prev)=>!prev);
    };
    const handleFaceCountChange = (count)=>{
        setFaceCount(count);
        // Only process violations during active call
        if (callStatus !== "ACTIVE") {
            return;
        }
        // Check if there's a violation
        const hasViolation = count > 1 || count === 0;
        if (hasViolation) {
            // If no timer is running, start one
            if (!violationTimerRef.current) {
                violationTimerRef.current = setTimeout(()=>{
                    // Only show toast if enough time has passed since last toast (prevent spam)
                    const now = Date.now();
                    if (now - lastToastTimeRef.current > 3000) {
                        if (count > 1) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(`⚠️ Multiple people detected! (${count} people)`);
                            setShowViolationWarning(true);
                        } else if (count === 0) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning("⚠️ No face detected in frame");
                        }
                        lastToastTimeRef.current = now;
                    }
                }, 1000);
            }
        } else {
            // Face count is good (exactly 1), clear the timer and warning
            if (violationTimerRef.current) {
                clearTimeout(violationTimerRef.current);
                violationTimerRef.current = null;
            }
            setShowViolationWarning(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showViolationWarning && callStatus === "ACTIVE" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full mb-4 bg-red-600 text-white px-6 py-4 rounded-lg text-center font-bold text-lg animate-pulse",
                children: "⚠️ MULTIPLE PEOPLE DETECTED - VIOLATION!"
            }, void 0, false, {
                fileName: "[project]/components/Agent.tsx",
                lineNumber: 229,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "call-view",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-interviewer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "avatar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/logo.png",
                                        alt: "profile-image",
                                        width: 65,
                                        height: 54,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Agent.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    isSpeaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "animate-speak"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Agent.tsx",
                                        lineNumber: 245,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Agent.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "AI Interviewer"
                            }, void 0, false, {
                                fileName: "[project]/components/Agent.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Agent.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CameraView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        isActive: isCameraActive,
                        enableFaceDetection: callStatus === "ACTIVE",
                        onFaceCountChange: handleFaceCountChange
                    }, void 0, false, {
                        fileName: "[project]/components/Agent.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Agent.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            messages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "transcript-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "transcript",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("transition-opacity duration-500 opacity-0", "animate-fadeIn opacity-100"),
                            children: lastMessage
                        }, lastMessage, false, {
                            fileName: "[project]/components/Agent.tsx",
                            lineNumber: 261,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Agent.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this),
                    callStatus === "ACTIVE" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex items-center justify-between px-4 py-2 bg-gray-800 rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-gray-400",
                                    children: "Face Detection:"
                                }, void 0, false, {
                                    fileName: "[project]/components/Agent.tsx",
                                    lineNumber: 275,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold", faceCount === 1 ? "text-green-500" : faceCount > 1 ? "text-red-500" : "text-yellow-500"),
                                    children: faceCount === 0 ? "No face detected" : faceCount === 1 ? "✓ 1 person" : `⚠️ ${faceCount} people`
                                }, void 0, false, {
                                    fileName: "[project]/components/Agent.tsx",
                                    lineNumber: 276,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Agent.tsx",
                            lineNumber: 274,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Agent.tsx",
                        lineNumber: 273,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Agent.tsx",
                lineNumber: 259,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex justify-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CameraButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        isActive: isCameraActive,
                        onClick: toggleCamera,
                        disabled: callStatus === "ACTIVE"
                    }, void 0, false, {
                        fileName: "[project]/components/Agent.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this),
                    callStatus !== "ACTIVE" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative btn-call", !isCameraActive && "opacity-50 cursor-not-allowed"),
                        onClick: ()=>handleCall(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute animate-ping rounded-full opacity-75", callStatus !== "CONNECTING" && "hidden")
                            }, void 0, false, {
                                fileName: "[project]/components/Agent.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative",
                                children: callStatus === "INACTIVE" || callStatus === "FINISHED" ? "Call" : ". . ."
                            }, void 0, false, {
                                fileName: "[project]/components/Agent.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Agent.tsx",
                        lineNumber: 306,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-disconnect",
                        onClick: ()=>handleDisconnect(),
                        children: "End"
                    }, void 0, false, {
                        fileName: "[project]/components/Agent.tsx",
                        lineNumber: 327,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Agent.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Agent;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__456a079d._.js.map