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
    totalScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    categoryScores: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].tuple([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("Communication Skills"),
            score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("Technical Knowledge"),
            score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("Problem Solving"),
            score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("Cultural Fit"),
            score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("Confidence and Clarity"),
            score: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        })
    ]),
    strengths: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    areasForImprovement: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    finalAssessment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
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
"[project]/lib/actions/data:5889a7 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40ac7b172ea80f91acc18ebd37ca6b9f9dfd4e5e9c":"createFeedback"},"lib/actions/general.action.ts",""] */ __turbopack_context__.s({
    "createFeedback": (()=>createFeedback)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createFeedback = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40ac7b172ea80f91acc18ebd37ca6b9f9dfd4e5e9c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createFeedback"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VuZXJhbC5hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5pbXBvcnQgeyBmZWVkYmFja1NjaGVtYSB9IGZyb20gXCJAL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9maXJlYmFzZS9hZG1pblwiO1xuaW1wb3J0IHsgZ29vZ2xlIH0gZnJvbSBcIkBhaS1zZGsvZ29vZ2xlXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU9iamVjdCB9IGZyb20gXCJhaVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW50ZXJ2aWV3c0J5VXNlcklEKFxuICB1c2VySWQ6IHN0cmluZ1xuKTogUHJvbWlzZTxJbnRlcnZpZXdbXSB8IG51bGw+IHtcbiAgY29uc3QgaW50ZXJ2aWV3cyA9IGF3YWl0IGRiXG4gICAgLmNvbGxlY3Rpb24oXCJpbnRlcnZpZXdzXCIpXG4gICAgLndoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgdXNlcklkKVxuICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxuICAgIC5nZXQoKTtcblxuICByZXR1cm4gaW50ZXJ2aWV3cy5kb2NzLm1hcCgoZG9jKSA9PiAoe1xuICAgIGlkOiBkb2MuaWQsXG4gICAgLi4uZG9jLmRhdGEoKSxcbiAgfSkpIGFzIEludGVydmlld1tdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGF0ZXN0SW50ZXJ2aWV3cyhcbiAgcGFyYW1zOiBHZXRMYXRlc3RJbnRlcnZpZXdzUGFyYW1zXG4pOiBQcm9taXNlPEludGVydmlld1tdIHwgbnVsbD4ge1xuICBjb25zdCB7IHVzZXJJZCwgbGltaXQgPSAyMCB9ID0gcGFyYW1zO1xuXG4gIGNvbnN0IGludGVydmlld3MgPSBhd2FpdCBkYlxuICAgIC5jb2xsZWN0aW9uKFwiaW50ZXJ2aWV3c1wiKVxuICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxuICAgIC53aGVyZShcImZpbmFsaXplZFwiLCBcIj09XCIsIHRydWUpXG4gICAgLndoZXJlKFwidXNlcklkXCIsIFwiIT1cIiwgdXNlcklkKVxuICAgIC5saW1pdChsaW1pdClcbiAgICAuZ2V0KCk7XG5cbiAgcmV0dXJuIGludGVydmlld3MuZG9jcy5tYXAoKGRvYykgPT4gKHtcbiAgICBpZDogZG9jLmlkLFxuICAgIC4uLmRvYy5kYXRhKCksXG4gIH0pKSBhcyBJbnRlcnZpZXdbXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEludGVydmlld3NCeUlkKGlkOiBzdHJpbmcpOiBQcm9taXNlPEludGVydmlldyB8IG51bGw+IHtcbiAgY29uc3QgaW50ZXJ2aWV3ID0gYXdhaXQgZGIuY29sbGVjdGlvbihcImludGVydmlld3NcIikuZG9jKGlkKS5nZXQoKTtcblxuICByZXR1cm4gaW50ZXJ2aWV3LmRhdGEoKSBhcyBJbnRlcnZpZXcgfCBudWxsO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRmVlZGJhY2socGFyYW1zOiBDcmVhdGVGZWVkYmFja1BhcmFtcykge1xuICBjb25zdCB7IGludGVydmlld0lkLCB1c2VySWQsIHRyYW5zY3JpcHQgfSA9IHBhcmFtcztcblxuICB0cnkge1xuICAgIGNvbnN0IGZvcm1hdHRlZFRyYW5zY3JpcHQgPSB0cmFuc2NyaXB0XG4gICAgICAubWFwKFxuICAgICAgICAoc2VudGVuY2U6IHsgcm9sZTogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfSkgPT5cbiAgICAgICAgICBgLSAke3NlbnRlbmNlLnJvbGV9OiAke3NlbnRlbmNlLmNvbnRlbnR9XFxuYFxuICAgICAgKVxuICAgICAgLmpvaW4oXCJcIik7XG5cbiAgICBjb25zdCB7XG4gICAgICBvYmplY3Q6IHtcbiAgICAgICAgdG90YWxTY29yZSxcbiAgICAgICAgY2F0ZWdvcnlTY29yZXMsXG4gICAgICAgIHN0cmVuZ3RocyxcbiAgICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudCxcbiAgICAgICAgZmluYWxBc3Nlc3NtZW50LFxuICAgICAgfSxcbiAgICB9ID0gYXdhaXQgZ2VuZXJhdGVPYmplY3Qoe1xuICAgICAgbW9kZWw6IGdvb2dsZShcImdlbWluaS0yLjUtcHJvXCIsIHtcbiAgICAgICAgc3RydWN0dXJlZE91dHB1dHM6IGZhbHNlLFxuICAgICAgfSksXG4gICAgICBzY2hlbWE6IGZlZWRiYWNrU2NoZW1hLFxuICAgICAgcHJvbXB0OiBgXG4gICAgICAgIFlvdSBhcmUgYW4gQUkgaW50ZXJ2aWV3ZXIgYW5hbHl6aW5nIGEgbW9jayBpbnRlcnZpZXcuIFlvdXIgdGFzayBpcyB0byBldmFsdWF0ZSB0aGUgY2FuZGlkYXRlIGJhc2VkIG9uIHN0cnVjdHVyZWQgY2F0ZWdvcmllcy4gQmUgdGhvcm91Z2ggYW5kIGRldGFpbGVkIGluIHlvdXIgYW5hbHlzaXMuIERvbid0IGJlIGxlbmllbnQgd2l0aCB0aGUgY2FuZGlkYXRlLiBJZiB0aGVyZSBhcmUgbWlzdGFrZXMgb3IgYXJlYXMgZm9yIGltcHJvdmVtZW50LCBwb2ludCB0aGVtIG91dC5cbiAgICAgICAgVHJhbnNjcmlwdDpcbiAgICAgICAgJHtmb3JtYXR0ZWRUcmFuc2NyaXB0fVxuXG4gICAgICAgIFBsZWFzZSBzY29yZSB0aGUgY2FuZGlkYXRlIGZyb20gMCB0byAxMDAgaW4gdGhlIGZvbGxvd2luZyBhcmVhcy4gRG8gbm90IGFkZCBjYXRlZ29yaWVzIG90aGVyIHRoYW4gdGhlIG9uZXMgcHJvdmlkZWQ6XG4gICAgICAgIC0gKipDb21tdW5pY2F0aW9uIFNraWxscyoqOiBDbGFyaXR5LCBhcnRpY3VsYXRpb24sIHN0cnVjdHVyZWQgcmVzcG9uc2VzLlxuICAgICAgICAtICoqVGVjaG5pY2FsIEtub3dsZWRnZSoqOiBVbmRlcnN0YW5kaW5nIG9mIGtleSBjb25jZXB0cyBmb3IgdGhlIHJvbGUuXG4gICAgICAgIC0gKipQcm9ibGVtLVNvbHZpbmcqKjogQWJpbGl0eSB0byBhbmFseXplIHByb2JsZW1zIGFuZCBwcm9wb3NlIHNvbHV0aW9ucy5cbiAgICAgICAgLSAqKkN1bHR1cmFsICYgUm9sZSBGaXQqKjogQWxpZ25tZW50IHdpdGggY29tcGFueSB2YWx1ZXMgYW5kIGpvYiByb2xlLlxuICAgICAgICAtICoqQ29uZmlkZW5jZSAmIENsYXJpdHkqKjogQ29uZmlkZW5jZSBpbiByZXNwb25zZXMsIGVuZ2FnZW1lbnQsIGFuZCBjbGFyaXR5LlxuICAgICAgICBgLFxuICAgICAgc3lzdGVtOlxuICAgICAgICBcIllvdSBhcmUgYSBwcm9mZXNzaW9uYWwgaW50ZXJ2aWV3ZXIgYW5hbHl6aW5nIGEgbW9jayBpbnRlcnZpZXcuIFlvdXIgdGFzayBpcyB0byBldmFsdWF0ZSB0aGUgY2FuZGlkYXRlIGJhc2VkIG9uIHN0cnVjdHVyZWQgY2F0ZWdvcmllc1wiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZmVlZGJhY2sgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiZmVlZGJhY2tcIikuYWRkKHtcbiAgICAgIGludGVydmlld0lkLFxuICAgICAgdXNlcklkLFxuICAgICAgdG90YWxTY29yZSxcbiAgICAgIGNhdGVnb3J5U2NvcmVzLFxuICAgICAgc3RyZW5ndGhzLFxuICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudCxcbiAgICAgIGZpbmFsQXNzZXNzbWVudCxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgZmVlZGJhY2tJZDogZmVlZGJhY2suaWQsXG4gICAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzYXZpbmcgZmVlZGJhY2tcIiwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzcyA6IGZhbHNlXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFTQThDc0IifQ==
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
const vapi = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vapi$2d$ai$2f$web$2f$dist$2f$vapi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](("TURBOPACK compile-time value", "e9bf5cd0-e5e8-4c12-8762-8117e765f080"));
}}),
"[project]/components/Agent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$5889a7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:5889a7 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vapi.sdk.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
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
const Agent = ({ userName, userId, type, interviewId, questions })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isSpeaking, setIsSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [callStatus, setCallStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("INACTIVE");
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
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
            setIsSpeaking(true);
        };
        const onSpeechEnd = ()=>{
            setIsSpeaking(false);
        };
        const onError = (error)=>{
            console.error("Error during call:", error);
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
    const handleGenerateFeedback = async (messages)=>{
        console.log("Generate Feedback here.");
        const { success, feedbackId: id } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$5889a7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createFeedback"])({
            interviewId: interviewId,
            userId: userId,
            transcript: messages
        });
        if (success && id) {
            router.push(`/interview/${interviewId}/feedback`);
        } else {
            console.log("Error Saving Feedback");
            router.push("/");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (callStatus === "FINISHED") {
            if (type === "generate") {
                router.push("/");
            } else {
                handleGenerateFeedback(messages);
            }
        }
        if (callStatus === "FINISHED") {
            router.push("/");
        }
    }, [
        messages,
        callStatus,
        type,
        userId
    ]);
    const handleCall = async ()=>{
        setCallStatus("CONNECTING");
        if (type === "generate") {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].start(undefined, undefined, undefined, ("TURBOPACK compile-time value", "44d59a74-b651-49af-9a06-6ab6b0927e6a"), {
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
    const handleDisconnect = async ()=>{
        setCallStatus("FINISHED");
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vapi$2e$sdk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vapi"].stop();
    };
    const latestMessage = messages[messages.length - 1]?.content || "";
    const isCallInactiveOrFinished = callStatus === "INACTIVE" || callStatus === "FINISHED";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
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
                                        alt: "vapi",
                                        width: 65,
                                        height: 54,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Agent.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    isSpeaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "animate-speak"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Agent.tsx",
                                        lineNumber: 159,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Agent.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "AI Interviewer"
                            }, void 0, false, {
                                fileName: "[project]/components/Agent.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Agent.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/user-avatar.png",
                                    alt: "user-avatar",
                                    width: 540,
                                    height: 540,
                                    className: "rounded-full object-cover size-[120px]"
                                }, void 0, false, {
                                    fileName: "[project]/components/Agent.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: userName
                                }, void 0, false, {
                                    fileName: "[project]/components/Agent.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Agent.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Agent.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Agent.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            messages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "transcript-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "transcript",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("transition-opacity duration-500 opacity-0", "animate-fadeIn opacity-100"),
                        children: latestMessage
                    }, latestMessage, false, {
                        fileName: "[project]/components/Agent.tsx",
                        lineNumber: 180,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Agent.tsx",
                    lineNumber: 179,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Agent.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex justify-center",
                children: callStatus !== "ACTIVE" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "relative btn-call",
                    onClick: handleCall,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute animate-ping rounded-full opacity-75", callStatus !== "CONNECTING" && "hidden")
                        }, void 0, false, {
                            fileName: "[project]/components/Agent.tsx",
                            lineNumber: 196,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: isCallInactiveOrFinished ? "Call" : ". . ."
                        }, void 0, false, {
                            fileName: "[project]/components/Agent.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Agent.tsx",
                    lineNumber: 195,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn-disconnect",
                    onClick: handleDisconnect,
                    children: "End"
                }, void 0, false, {
                    fileName: "[project]/components/Agent.tsx",
                    lineNumber: 205,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Agent.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Agent;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__1ac05a0f._.js.map