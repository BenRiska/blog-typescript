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
},
{
    id: 3,
    title: "Setting goals for 2021",
    categories: ["Working"],
    duration: 5,
    uploaded: "27th Jan 2021",
    content: [
        {
            element: "img",
            url: "goals-banner.jpg",
            alt: "goals"
        },
        {
            element: "h2",
            className: "blog-subtitle",
            content: "2020"
        },
        {
            element: "p",
            content: '2020 was the first year that I seriously took into consideration the time I spent being unproductive, this means binging Netflix in the evening, playing video games all day on the weekend, taking instagram breaks every 30 minutes and less obvious issues like spending each day sitting on the bus or train listening to music. I knew there was a better way to increase my productivity but I never made the choice to address it because my life seemed fine.'
        },
        {
            element: "p",
            content: "However the older I grow the more I value time, there is always a long list of things on my to do list - whether it's picking up a new programming language or learning a new song to play on piano. I used to mindlessly prioritise these tasks and if it didn't get done I'd just accept the idea that I was 'too busy'. I would make the assumption that putting in more effort to get these things done would impact my social life but deep down I knew that doesn't make sense. Most people can find an extra 30 mins in the day to get something done if they really try, and there are plenty of ways to improve your learning process so you can get more done within that finite amount of time."
        },
        {
            element: "p",
            content: "My journey to this state of mind wasn't an entirely conscious effort, over the past few years I've been getting somewhat frustrated with myself for not getting my goals done. I've always had high expectations for myself which can be a good and bad thing. It's led me to continuously learn and grow, but without a solid understanding of what creates that growth I became annoyed at myself whenever I failed to meet those expectations."
        },
        {
            element: "p",
            content: "This was a stupid situation that I had created for myself, getting annoyed because I didn't hit goals while simultaneously failing to prepare for them. This lead up to 2020 when I finally decided to sit down and reflect on how I want to live my life. "
        },
        {
            element: "h2",
            className: "blog-subtitle",
            content: "Self Reflection"
        },
        {
            element: "p",
            content: "Reflection can be tough, for you to get anything worthwhile out of it you need to be brutally honest with yourself. What went wrong, what went right, what could be done better. For example if I planned to read a book and it didn't get done, I could blame it on my work hours being too busy, I could blame it on some social situation that came up. Neither of these answers would get me anywhere. Instead I should be looking to critique my own actions, was there any time that could have been spent better? Could I have made time to read before going to sleep? Could I have read a few chapters on the bus instead of listening to music. When you start looking inward it will become apparent that most of the time there are multiple ways you could have prepared better for the task."
        },
        {
            element: "p",
            content: "On top of this, you need to reflect often to get the most out of it, It's very easy for us to fall back into bad habits if we don't check ourselves. If I made a plan to go to the gym 5 times a week, over time I could get lazy and fall out of routine. However if I sat down to reflect on my progress every week I'm much more likely to hold myself accountable if things go wrong."
        },
        {
            element: "h2",
            className: "blog-subtitle",
            content: "Be smart with your goals"
        },{
            element: "img",
            url: "goal-idea.jpg",
            alt: "goals"
        },
        {
            element: "p",
            content: "Growing up I would give myself massive goals with no context as to how they would get done. For example in 2016 I decided to learn the piano, I would watch these 'progression' videos on youtube where people would go from beginner to pro in the space of a year and I wanted to do the same. The first month was great - I was super motivated and spent hours each day picking up the basic techniques. However that motivation eventually tapered off and after learning a few  songs I spent less and less time researching and practising the steps I needed to take in order to get better."
        },
        {
            element: "p",
            content: "This was because I only had one big goal and no plan to carry it out. All I thought about was being good at piano and I didn't care about the smaller less significant achievements like learning to play scales, memorising notes and all the other techniques that have to be learned in order to become a good pianist."
        },
        {
            element: "p",
            content: "So a year had passed and my progress was nowhere near where I had planned, this could have been avoided if I was smart with my goals. I should have regularly gone over my progress and figured out what I've improved, what needs to be improved and how I can do that over the next week or two. I didn't fully understand the power that comes with creating smaller more easily achievable short term goals. My piano journey is something that takes years but learning a new practise exercise is something that can be done in hours. It's far easier to measure progress and remain motivated when you take note of small improvements. "
        },
        {
            element: "h2",
            className: "blog-subtitle",
            content: "How I set goals for myself now"
        },
        {
            element: "p",
            content: "So we just entered 2021 and I recently decided to reflect on the entirety of 2020, I managed to write a lengthy list of achievements and it made me proud. I haven't yet explained why we should reflect on our wins and it's quite simple, life isn't all about work, sometimes it's nice to sit back and appreciate the effort you've put in to that point. I'm often amazed when I look back and remember how much knowledge I lacked at a certain point in time, it does good to remember these things so you can appreciate the worth gained from your efforts."
        },
        {
            element: "p",
            content: "Looking at my shortcomings in 2020 gave me a good idea of where my energy should be redirected this year and what habits I need to avoid. It would have been easy to blame most of it on Covid but as I mentioned before, you'll only get progress by looking inwards."
        },
        {
            element: "p",
            content: "So how do I set my short term goals? typically I will write A list of tasks every month that vary in difficulty, some may take a couple hour and some may take a couple of days, realistically they can all be done if I prioritise correctly and be smart with my time."
        },
        {
            element: "p",
            content: "When I begin a task that will need to be carried out over multiple days, I create another list of tasks specifically for that task to help streamline my progression so I don't get confused and waste time figuring out where I'm at and what to do next."
        },
        {
            element: "p",
            content: "For example this month I decided to learn a programming framework called Apollo, I wrote the steps needed to learn it - regularly updating them to reflect the point I was at and keep me on track. If you are working on more than one long term project you can easily juggle multiple tasks with this method."
        },
        ,{
            element: "img",
            url: "goals-list.jpg",
            alt: "goals"
        },
        {
            element: "h2",
            className: "blog-subtitle",
            content: "Try it out"
        },
        {
            element: "p",
            content: "Goal setting is great lol. Not only have I become more productive but I'm more content with myself and who I am as a person."
        },
        {
            element: "p",
            content: "If you ever feel frustrated that you aren't where you want to be, or perhaps your work life balance is becoming too overwhelming then maybe this is the thing you're missing. "
        },
        {
            element: "p",
            content: "Even if you have no issues and love your life, adopting this technique could create exciting new opportunities for your future."
        },
        {
            element: "p",
            content: "I may revisit this at the end of the year and post an update on my routine, until then I hope you are enjoying life and staying safe through these crazy times.  "
        }
    ]
}]