export const blogs = [{
    id: 1,
    title: "What is UX and why is it so important",
    categories: ["Designing"],
    duration: 4,
    uploaded: "18th Nov 2020",
    content: [
        {
            element: "img",
            url: "ux-picture.jpg",
            alt: "highway"
        },
        {
            element: "h2",
            className: "blog-subtitle",
            content: "- What is UX?"
        },
        {
            element: "p",
            content: "User experience or UX is defined as any interaction a user makes with a product or service - so while the term UX generally refers to software design - the core principles behind it can be applied to basically any commercial product or service."
        },
        {
            element: "p",
            content: "A UX designer will take into consideration each and every element involved that helps in shaping the experience, how it makes the user feel and how easy it is to reach their desired outcome. These are topics of increasing concern among software developers as just having a pretty interface won’t retain customers if they struggle to navigate through the product."
        },
        {
            element: "p",
            content: "Put simply, the aim of UX design is to build easy, efficient, relevant and a pleasing experience for the user. UX designers will integrate market research, strategy, product development, and design to build user experiences for products, services and processes - acting as a bridge to the customer to understand and meet their expectations."
        },
        {
            element: "img",
            url: "ux-process.jpg",
            alt: "highway"
        },
        {
            element: "h2",
            className: "blog-subtitle",
            content: "- The UX process explained"
        },
        {
            element: "p",
            content: "The designers aim to make daily products, services and technology as much user friendly and accessible as they can. They integrate design thinking to meet the user desires with technical feasibility and business viability. So what does the process look like? Here is an example:"
        },
        {
            element: "h2",
            className: "blog-subtitle-small",
            content: "Inspiration"
        },
        {
            element: "p",
            content: "It’s tough to figure out how the user will react to a product for the first time, so how do we get around that? use your competition! Do your research and analyse what works best for them - you want to understand the problem or challenge completely."
        },
        {
            element: "h2",
            className: "blog-subtitle-small",
            content: "Conceptualization"
        },
        {
            element: "p",
            content: "he knowledge gained from the previous step is used to determine the user goals, emotions, pain points as well as behaviours. This helps in building user personas. Then the designers consider what these personas are trying to attain with the help of a specific product. By the end of this step you should have your user flows mapped out and ready to turn into a prototype."
        },
        {
            element: "h2",
            className: "blog-subtitle-small",
            content: "Iteration"
        },
        {
            element: "p",
            content: "Now you have your user flows that will determine what steps the user will take to accomplish their tasks. Here brainstorming is involved for every step, by creating wireframes and prototypes for what the final product may look like. With the prototypes available, you can conduct usability tests to check how the user interacts with your product. Take your results and decide if further changes are required - repeating the process until happy.."
        },
        {
            element: "h2",
            className: "blog-subtitle-small",
            content: "Exposition"
        },
        {
            element: "p",
            content: "The designers come up with solutions as well as they also need to present their ideas and designs for proceeding with the stages ahead."
        },
        {
            element: "img",
            url: "ux-man.jpg",
            alt: "highway"
        },
        {
            element: "h2",
            className: "blog-subtitle",
            content: "The best UX designers are:"
        },{
            element: "ul",
            children: [{
                content: "Adept at creating user personas, stories, wireframes, sitemaps, storyboards, and prototypes"
            },{
                content: "Able to plan and implement user testing, surveys and formal evaluation"
            },{
                content: "Able to iterate your tasks according to user testing data and qualitative feedback"
            },{
                content: "Able to transform goals, objectives and data into digital experiences"
            },]
        },
        {
            element: "h2",
            className: "blog-subtitle",
            content: "- Why UX is so important"
        },
        {
            element: "p",
            content: "Lately, the focus of product creation has shifted to user centered design. Gone are the days when a pretty UI was all you needed to attract clients on the web. The focus was mainly on the aesthetics and branding rather than how the user would feel about it. This is because, they centered on what looked good back then, and what the clients wanted."
        },
        {
            element: "p",
            content: "But the web is changing, it has become more complex and loaded with features that must bear great user experience design by all means. Also the mediums through which we experience the web has expanded - to mobile devices, multiple browsers, and various types of internet connections."
        },
        {
            element: "p",
            content: "No matter what the factors, the only way to stand in the market is by taking the user into consideration for your product."
        }
    ]
},
{
    id: 2,
    title: "Learning Typescript with React",
    categories: ["Software"],
    duration: 3,
    uploaded: "9th Dec 2020",
    content:[
        {
            element: "img",
            url: "typescript.jpeg",
            alt: "highway"
        },{
            element: "p",
            content: "I recently picked up Typescript and the first real project I undertook was migrating the codebase for my blog (this website) over from plain react javascript."
        },{
            element: "p",
            content: "Overall things went smoothly. I found adding the syntax a fairly seamless process, since modern react is written with hooks and functional components, as opposed to using classes which makes the process far quicker in my opinion. And if you’ve used a type declarative language like C# or python then it's pretty easy to get familar with the workflow."
        },{
            element: "p",
            content: "However, there were a few environmental differences - mainly compiler related - that caused some problems. I’ve decided to write this article to explain those issues (with solutions) and hopefully save time for someone in a similar situation."
        },
        {
            element: "h2",
            className: "blog-subtitle",
            content: "- Importing files"
        },
        {
            element: "p",
            content: "If you clicked the prompt on the landing page of this website you’ll know there is a music function available (desktop only). In my original Javascipt code I had imported the mp3 file for that audio to my project like so:"
        },
        {
            element: "img",
            url: "js-mp3-import-snippet.png",
            alt: "highway",
            className: "img-bg"
        },
        {
            element: "p",
            content: "This worked fine, I was able to embed the pianoMusic variable into my JSX and the audio would render. However, when I tried the same method in Typescript I got this error:"
        },
        {
            element: "img",
            url: "audio-import-error.png",
            alt: "highway"
        },
        {
            element: "p",
            content: "The typescript compiler generated by create-react-app doesn’t know how to find files with the .mp3 declaration, after some googling I found 2 ways to get around the issue:"
        },
        {
            element: "p",
            content: "1 - You can use the require method instead which will bypass the compiler and import directly with javascript."
        },
        {
            element: "img",
            url: "require-audio-solution.png",
            alt: "highway",
            className: "img-bg"
        },
        {
            element: "p",
            content: '2 - You can change the "react-app-env.d.ts" file to broaden the declaration scope, so now the compiler will recognise the file (I recommend this method). To do this just add the following code:'
        },
        {
            element: "img",
            url: "change-file-solution.png",
            alt: "highway"
        },
        {
            element: "h2",
            className: "blog-subtitle",
            content: "- Version Error with create-react-app"
        },
        {
            element: "p",
            content: 'Using create-react-app will set up your project to use the latest version of Typescript, which is great. However, this means VSCode will throw an error if you have an older version installed on your machine.'
        },
        {
            element: "img",
            url: "ts-version-error.png",
            alt: "highway"
        },
        {
            element: "p",
            content: 'To get around this, you can simply update your version of Typescript, or, if for some reason that isn’t possible, click the version tab at the bottom right of the VSCode window and select the version tab (In my case 4.0.3)'
        },
        {
            element: "img",
            url: "vscode-bar.png",
            alt: "highway"
        },{
            element: "p",
            content: 'Then click "Select Typescript Version"'
        },
        {
            element: "img",
            url: "version-solution-1.png",
            alt: "highway"
        },
        {
            element: "p",
            content: 'Then click "Use Workspace Version", as you can see the project will now run the version 4.1.2 found in the modules folder of your react project.'
        },
        {
            element: "img",
            url: "version-solution-2.png",
            alt: "highway"
        },
        {
            element: "h2",
            className: "blog-subtitle",
            content: "- Node Package Manager"
        },
        {
            element: "img",
            url: "npm-package-manager-for-node-js.jpg",
            alt: "highway"
        },
        {
            element: "p",
            content: 'If you’re using Node to install packages for your typescript project you’ll quickly find out that not all of them will work.'
        },
        {
            element: "p",
            content: 'Those that do typically have a separate package specifically for Typescript that are prefixed with the "@types" keyword, for example “npm install @types/react-router-dom“. However some packages, like GSAP for example, will include Typescript support in the standard package.'
        },
        {
            element: "p",
            content: 'I recommend going through the documentation to check before installing any package to your project.'
        }
    ]
}]