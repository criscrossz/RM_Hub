<template>
    <div class='pb-12'>
        <div class='relative'>
            <img class="w-full brightness-50 h-full lg:h-80 object-cover" :src="Heropic" alt="RMO Hub Logo">
            <div class='absolute grid lg:grid-cols-2 top-1/3 lg:left-32 left-16'>
                <div class='cols-span-1'>
                    <h1 class='text-4xl font-bold text-white pb-4'>Meet the Risk Management Guardians</h1>
                </div>
            </div>
        </div>
    </div>



    <div class='px-8'>
        <div class="text-center">
            <div class="font-semibold text-3xl">
                <h2>Who we are</h2>
            </div>
            <hr class="w-32 h-1 my-4 mx-auto bg-gray-100 border-0 md:my-4 dark:bg-oranges" />
        </div>
        <div class="sm:px-60 pb-16">
            <div class="flex justify-center">
                <div class="text-base text-center">Welcome to Globe Telecom's Risk Management Hub! Here, we take the
                    protection of our network to superhero levels with our Integrated Management System. <br />Imagine a
                    team of super-powered programs, each with unique abilities, working together to ensure Globe remains the
                    network of choice of Filipinos. Meet our incredible champions: Business Continuity Management,
                    Environmental Management, Occupational Health and Safety, and Energy Management.</div>
            </div>
        </div>
    </div>
    
    <div class='px-4 lg:px-16 grid grid-cols-1 pb-12 lg:grid-cols-3'>
        <div class='px-4 pb-12 lg:pb-0'>
            <div
                class="max-w-sm bg-white border border-white rounded-lg h-full hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300">
                <a href="#">
                    <img class="rounded-t-2xl w-full" :src="ERM" alt="Whowearepic" />
                </a>
                <div class="p-3 shadow-lg rounded-b-3xl">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Enterprise Risk
                            Management</h5>
                    </a>
                    <p class="pb-10 font-normal text-black dark:text-black">By integrating risk into our decision-making
                        processes, you can confidently navigate the complexities of the business landscape while maximizing
                        value creation. From financial risks to market shifts, ERM—with their strategic approach—help us
                        leap forward and conquer any risk.</p>
                </div>
            </div>
        </div>
        <div class='px-4 pb-12 lg:pb-0'>
            <div
                class="max-w-sm bg-white border border-white rounded-lg h-full hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300">
                <a href="#">
                    <img class="rounded-t-2xl w-full" :src="ORB" alt="Whowearepic" />
                </a>
                <div class="p-2 shadow-lg rounded-b-3xl">
                    <a href="#">
                        <h5 class="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Operational Risk
                            and Business Continuity</h5>
                    </a>
                    <p class="mb-3 text-black dark:text-black">We conduct comprehensive risk assessments to identify
                        vulnerabilities in your operations and develop customized strategies for risk mitigation.
                        Our team ensures that you are well-prepared to handle unforeseen incidents, allowing you to maintain
                        business continuity even during challenging times</p>
                </div>
            </div>
        </div>
        <div class='px-4'>
            <div
                class="max-w-sm bg-white border border-white rounded-xl h-full hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300">
                <a href="#">
                    <img class=" w-full rounded-t-2xl" :src="RAS" alt="Whowearepic" />
                </a>
                <div class="p-3 shadow-lg rounded-b-3xl">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Risk Automation
                            Services</h5>
                    </a>
                    <p class="pb-10 font-normal text-black dark:text-black">We streamline and optimize your risk management
                        processes, ensuring seamless integration with your existing systems. By leveraging advanced
                        technology and data analytics, we enable you to proactively identify, assess, and mitigate risks in
                        real-time.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="text-center">
        <div class="font-semibold text-3xl">
            <h2 class="text-black">RM PCDA Framework</h2>
        </div>
        <hr class="w-32 h-1 my-4 mx-auto bg-gray-100 border-0 md:my-4 dark:bg-oranges" />
    </div>
    <div class='px-8'>
        <div class='pb-8'>
            <Widebox>
                <div class='grid grid-cols-1 lg:grid-cols-2 shadow-lg'>
                    <a href="#">
                        <img class="rounded-sm w-full h-40 lg:h-80" src="src/assets/images/planners.png" alt="" />
                    </a>
                    <div class='flex items-center'>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">PLAN
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-black dark:text-black">We proactively identify potential hazards
                                during the planning stage and create solutions to reduce them. Together with stakeholders
                                from many departments, our devoted team analyzes potential hazards, assesses their potential
                                effects, and develops effective risk mitigation strategies. We establish a strong basis for
                                successfully managing risks and guaranteeing company continuity through thorough planning.
                            </p>
                        </div>
                    </div>
                </div>
            </Widebox>
        </div>
        <div class='pb-8'>
            <Widebox>
                <div class='grid grid-cols-1 lg:grid-cols-2 shadow-lg'>
                    <div class='flex items-center'>
                        <div class="p-4">
                            <a href="#" class="h-12">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">DO
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-black dark:text-black">The risk mitigation strategies created
                                during the planning stage are put into practice during the execution phase of our risk
                                management system. We incorporate risk management procedures into daily operations to make
                                sure that risk controls and mitigating actions are successfully implemented throughout the
                                company. We develop a culture of risk awareness and accountability by integrating risk
                                management into our business operations, thereby empowering all of our workers in a safe and
                                secure environment.</p>
                        </div>
                    </div>
                    <a href="#">
                        <img class="rounded-sm w-full h-40 lg:h-80" src="src/assets/images/doers.png" alt="" />
                    </a>
                </div>
            </Widebox>
        </div>
        <div class='pb-8'>
            <Widebox>
                <div class='grid grid-cols-1 lg:grid-cols-2 shadow-lg'>
                    <a href="#">
                        <img class="rounded-sm w-full h-40 lg:h-80" src="src/assets/images/checks.png" alt="" />
                    </a>
                    <div class='flex items-center'>
                        <div class="p-4">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">CHECK
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-black dark:text-black">The checking step is essential for
                                assessing how well our risk management measures are working. 
                                We evaluate the effectiveness of the imposed controls and mitigation measures on a regular
                                basis. To find any gaps or potential areas for improvement, our team conducts audits,
                                inspections, and reviews. We make sure that our risk management procedures continue to
                                comply with industry standards and legal requirements through thorough checks.</p>
                        </div>
                    </div>
                </div>
            </Widebox>
        </div>
        <div class='pb-24'>
            <Widebox>
                <div class='grid grid-cols-1 lg:grid-cols-2 shadow-lg'>
                    <div class='flex items-center'>
                        <div class="p-4">
                            <a href="#" class="h-12">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">ACT
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-black dark:text-black">Taking action based on the knowledge
                                gained during the checking phase is the main goal of our framework cycle's final phase. We
                                update our procedures, strengthen our risk mitigation efforts, and improve our risk
                                management techniques using input and findings. </p>
                        </div>
                    </div>
                    <a href="#">
                        <img class="rounded-sm w-full h-40 lg:h-80" src="src/assets/images/acts.png" alt="" />
                    </a>
                </div>
            </Widebox>
        </div>
    </div>

    <!--MEET OUR TEAM-->

    <div class="text-center pb-8">
        <div class="font-semibold text-3xl">
            <h2>Meet Our Team</h2>
        </div>
        <hr class="w-32 h-1 my-4 mx-auto bg-gray-100 border-0 md:my-4 dark:bg-oranges" />
    </div>
    <div class='grid grid-cols-3'>
        <div class='col-start-2  items-center flex flex-col pb-12'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>Alberto “Jojo” Arago <br /> <span class='font-bold'>Risk Management Office Head</span>
            </p>
        </div>
        <div class='col-start-1 items-center flex flex-col'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>Roy Allan Patiu<br /> <span class='font-bold'>Operational Risk and Business Continuity
                    Head</span></p>
        </div>
        <div class='col-start-2 items-center flex flex-col'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>John Christian Gregorio<br /> <span class='font-bold'>Enterprise Risk Management
                    Head</span></p>
        </div>
        <div class='col-start-3 items-center flex flex-col pb-24'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>Oliver Ramos<br /> <span class='font-bold'>Risk Automation Services Head</span></p>
        </div>
    </div>
    <div class="text-center pb-8">
        <div class="font-semibold text-3xl">
            <h2>Operational Risk & Business Continuity Management</h2>
        </div>
        <hr class="w-32 h-1 my-4 mx-auto bg-gray-100 border-0 md:my-4 dark:bg-oranges" />
    </div>
    <div class='grid grid-cols-3'>
        <div class='col-start-2  items-center flex flex-col pb-12'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>Roy Allan Patiu <br /> <span class='font-bold'>Operational Risk and Business Continuity
                    Head</span></p>
        </div>
        <div class='col-start-1 items-center flex flex-col'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>Jayme Maniti<br /> <span class='font-bold'>Business Continuity</span></p>
        </div>
        <div class='col-start-2 items-center flex flex-col'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>Melanie Dela Cruz<br /> <span class='font-bold'>Environment Management</span></p>
        </div>
        <div class='col-start-3 items-center flex flex-col pb-24'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>Edgardo Berba<br /> <span class='font-bold'>Operational Safety and Health</span></p>
        </div>
    </div>

    <!--ENTERPRISE RISK TEAM-->

    <div class="text-center pb-8">
        <div class="font-semibold text-3xl">
            <h2>Enterprise Risk Management</h2>
        </div>
        <hr class="w-32 h-1 my-4 mx-auto bg-gray-100 border-0 md:my-4 dark:bg-oranges" />
    </div>
    <div class='grid grid-cols-3'>
        <div class='col-start-2  items-center flex flex-col pb-12'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>John Christian Gregorio<br /> <span class='font-bold'>Enterprise Risk Management
                    Head</span>
            </p>
        </div>
        <div class='col-start-1 items-center flex flex-col'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>Ralph Añes<br /> <span class='font-bold'>Enterprise Risk Management
                </span></p>
        </div>
        <div class='col-start-2 items-center flex flex-col'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>Michelle Alejandre<br /> <span class='font-bold'>Enterprise Risk Management
                </span></p>
        </div>
        <div class='col-start-3 items-center flex flex-col pb-12'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>Mariel Capistrano<br /> <span class='font-bold'>Stakeholder Communication &
                    Advocacy</span></p>
        </div>
        <div class='col-start-1 items-center flex flex-col'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>Amabelle Eugenio<br /> <span class='font-bold'>Stakeholder Communication & Advocacy
                </span></p>
        </div>
        <div class='col-start-2 items-center flex flex-col'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>Bernadette Jimenez<br /> <span class='font-bold'>Risk Governance Compliance
                </span></p>
        </div>
        <div class='col-start-3 items-center flex flex-col pb-24'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>Maricar Paragas<br /> <span class='font-bold'>Risk Governance Compliance</span></p>
        </div>
    </div>

    <!--Risk Automation-->

    <div class="text-center pb-8">
        <div class="font-semibold text-3xl">
            <h2>Risk Automation Services</h2>
        </div>
        <hr class="w-32 h-1 my-4 mx-auto bg-gray-100 border-0 md:my-4 dark:bg-oranges" />
    </div>
    <div class='grid grid-cols-4'>
        <div class='col-start-2 col-span-2  items-center flex flex-col pb-12'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>Oliver Ramos<br /> <span class='font-bold'>Risk Automation Services Head
                    </span>
            </p>
        </div>
        <div class='col-start-1 items-center flex flex-col'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>Napoleon Helbes<br /> <span class='font-bold'>Project Management
                </span></p>
        </div>
        <div class='col-start-2 items-center flex flex-col'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>John Paul Catapang<br /> <span class='font-bold'>System Development
                </span></p>
        </div>
        <div class='col-start-3 items-center flex flex-col pb-12'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>Crizan Amor<br /> <span class='font-bold'>System Operations</span></p>
        </div>
        <div class='col-start-4 items-center flex flex-col'>
            <img src="src/assets/images/rectangle.png" class='pb-8 w-64 h-90' />
            <p class='text-center'>Jaimie Agustin<br /> <span class='font-bold'>System Operations
                </span></p>
        </div>
</div></template>

<script>
export default {
    data() {
        return {
            Heropic: 'src/assets/images/Abouthero.png',
            WhoWeAre: 'src/assets/images/whoweare.png',
            ERM: 'src/assets/images/erms.png',
            ORB: 'src/assets/images/orbs.png',
            RAS: 'src/assets/images/rass.png',

        }
    },
}



</script>

