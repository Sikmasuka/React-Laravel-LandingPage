export default function AboutSection() {
    return (
        <section
            id="about-us"
            className="relative w-full overflow-hidden bg-slate-950 py-24 text-white"
        >
            {/* Background Tech Mesh */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950"></div>
            </div>

            {/* Decorative Glows (Updated to Cyan/Purple) */}
            <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]"></div>
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[100px]"></div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* --- Section Header - Our Vision --- */}
                <div className="mb-24 text-center">
                    <div className="mb-4 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-bold tracking-widest text-cyan-400 uppercase backdrop-blur-md">
                        <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400"></span>
                        Mission Directive
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                        Our{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                            Vision
                        </span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
                        We envision a world where seamless digital experiences
                        are not a luxury, but a standard. Our goal is to build{' '}
                        <span className="text-white">intuitive</span>,{' '}
                        <span className="text-white">powerful</span>, and{' '}
                        <span className="text-white">elegant</span> solutions
                        that empower users and drive innovation forward.
                    </p>
                </div>

                {/* --- Section Header - Team --- */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                        Meet the{' '}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Architects
                        </span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-slate-400">
                        The minds behind the code. We combine creativity and
                        logic to build the extraordinary.
                    </p>
                </div>

                {/* --- Team Grid --- */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                    {/* --- TEAM MEMBER 1 --- */}
                    <TeamCard
                        image="/images/jm.jpg"
                        name="John Michael Acut"
                        role="System Analyst"
                        desc="Specializes in analyzing project needs and designing system workflows, ensuring the solution meets requirements."
                    />

                    {/* --- TEAM MEMBER 2 --- */}
                    <TeamCard
                        image="/images/danreb.jpg"
                        name="Danreb B. Salvacion"
                        role="Project Manager"
                        desc="Plans, coordinates, and monitors the project, managing timelines, resources, and team communication."
                    />

                    {/* --- TEAM MEMBER 3 --- */}
                    <TeamCard
                        image="/images/jm.jpg" // Note: You had JM's image here in your code, kept it as provided
                        name="Mechaela Abecia"
                        role="PM Assistant"
                        desc="Supports project planning and coordination, helping to track milestones and ensure team workflows run smoothly."
                    />

                    {/* --- TEAM MEMBER 4 --- */}
                    <TeamCard
                        image="/images/janpaul.jpg"
                        name="Jan Paul Michael M. Dela Cera"
                        role="Project Developer"
                        desc="Develops server-side logic and databases, ensuring data integrity, security, and performance."
                    />

                    {/* --- TEAM MEMBER 5 --- */}
                    <TeamCard
                        image="/images/emerson.jpg"
                        name="Emerson Ace Cagalawan"
                        role="Frontend / UI/UX"
                        desc="Designs and implements user interfaces, creating visually appealing, responsive, and interactive experiences."
                    />
                </div>
            </div>
        </section>
    );
}

// Helper Component for Team Card to keep code clean
function TeamCard({
    image,
    name,
    role,
    desc,
}: {
    image: string;
    name: string;
    role: string;
    desc: string;
}) {
    return (
        <div className="group relative flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-slate-900/80 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            {/* Image Container with Cyber Ring */}
            <div className="relative mb-6 h-32 w-32">
                <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 transition-all duration-700 group-hover:rotate-180"></div>
                <div className="h-full w-full rounded-full border-2 border-white/10 p-1 transition-all group-hover:border-cyan-400">
                    <img
                        src={image}
                        alt={name}
                        className="h-full w-full rounded-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                </div>
            </div>

            {/* Name & Role */}
            <h3 className="text-md font-bold text-white group-hover:text-cyan-100">
                {name}
            </h3>
            <p className="mt-1 mb-4 font-mono text-[10px] font-bold tracking-widest text-cyan-500 uppercase">
                {role}
            </p>

            {/* Short Bio */}
            <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300">
                {desc}
            </p>
        </div>
    );
}
